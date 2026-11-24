/// <reference types="@cloudflare/workers-types" />
// POST /api/lead : the single endpoint for every form (lead, calculator,
// project, visit). Order of operations guarantees no lead is lost:
//   1. validate + anti-spam (honeypot, Turnstile, rate limit)
//   2. write to D1 (the journal) BEFORE answering the user
//   3. fan out to email, Google Sheet and Telegram in parallel; each
//      channel's result is stored back in D1, so failed deliveries are
//      visible and can be retried (see /api/retry, cron).
// Secrets live only in Cloudflare Pages environment variables.

interface Env {
  DB: D1Database;
  TURNSTILE_SECRET?: string;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  SHEETS_WEBHOOK_URL?: string;   // Google Apps Script web app (see docs/SETUP.md)
  SHEETS_WEBHOOK_SECRET?: string;
  RESEND_API_KEY?: string;       // transactional email provider
  MAIL_FROM?: string;            // e.g. "Bordeiaș <site@ecocase.md>"
  MAIL_TO?: string;              // default info@ecocase.md
  IP_SALT?: string;
}

type Lead = Record<string, string>;
const FIELDS = ['name', 'phone', 'email', 'district', 'area', 'plot', 'comment', 'contact_method', 'visit_date', 'visit_time', 'project', 'calc', 'lang', 'source', 'page', 'utm'];
const MAX: Record<string, number> = { name: 80, phone: 20, email: 120, comment: 1500, calc: 2000, utm: 1000, page: 300 };

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });

async function sha256(s: string) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function verifyTurnstile(env: Env, token: string, ip: string) {
  if (!env.TURNSTILE_SECRET) return true; // not configured yet: rely on honeypot + rate limit
  if (!token) return false;
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST', body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token, remoteip: ip }),
  });
  const j = await r.json<{ success: boolean }>();
  return j.success;
}

function summary(l: Lead) {
  const rows = [
    ['Sursa', l.source], ['Limba', l.lang], ['Nume', l.name], ['Telefon', l.phone], ['E-mail', l.email],
    ['Raion', l.district], ['Suprafața', l.area], ['Teren', l.plot], ['Contact', l.contact_method],
    ['Vizită', [l.visit_date, l.visit_time].filter(Boolean).join(' ')], ['Proiect', l.project],
    ['Calculator', l.calc], ['Comentariu', l.comment], ['Pagina', l.page], ['UTM', l.utm],
  ];
  return rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
}

async function toTelegram(env: Env, l: Lead, id: number) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) throw new Error('telegram not configured');
  const r = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text: `🏡 Cerere nouă #${id}\n\n${summary(l)}`, disable_web_page_preview: true }),
  });
  if (!r.ok) throw new Error(`telegram ${r.status}`);
}

async function toSheet(env: Env, l: Lead, id: number, created: string) {
  if (!env.SHEETS_WEBHOOK_URL) throw new Error('sheets not configured');
  const r = await fetch(env.SHEETS_WEBHOOK_URL, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: env.SHEETS_WEBHOOK_SECRET ?? '', id, created, ...l }),
    redirect: 'follow',
  });
  if (!r.ok) throw new Error(`sheets ${r.status}`);
}

async function sendMail(env: Env, to: string, subject: string, text: string, replyTo?: string) {
  if (!env.RESEND_API_KEY || !env.MAIL_FROM) throw new Error('email not configured');
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.MAIL_FROM, to: [to], subject, text, ...(replyTo && { reply_to: replyTo }) }),
  });
  if (!r.ok) throw new Error(`email ${r.status}`);
}

const CONFIRM: Record<string, [string, string]> = {
  ro: ['Am primit cererea ta | Bordeiaș', 'Mulțumim! Am primit cererea și te sunăm în aceeași zi lucrătoare.\n\nBordeiaș, case din paie și lut\n+373 79 447 732 · https://ecocase.md/ro/'],
  ru: ['Ваша заявка получена | Bordeiaș', 'Спасибо! Мы получили заявку и перезвоним в тот же рабочий день.\n\nBordeiaș, дома из соломы и глины\n+373 79 447 732 · https://ecocase.md/ru/'],
  en: ['We received your request | Bordeiaș', 'Thank you! We received your request and will call you back the same working day.\n\nBordeiaș, straw and clay houses\n+373 79 447 732 · https://ecocase.md/en/'],
};

export async function deliver(env: Env, l: Lead, id: number, created: string) {
  const to = env.MAIL_TO || 'info@ecocase.md';
  const jobs = {
    email: () => sendMail(env, to, `Cerere nouă #${id}: ${l.name}, ${l.phone} (${l.source})`, summary(l), l.email || undefined),
    sheet: () => toSheet(env, l, id, created),
    telegram: () => toTelegram(env, l, id),
  };
  const names = Object.keys(jobs) as (keyof typeof jobs)[];
  const res = await Promise.allSettled(names.map((n) => jobs[n]()));
  const status = Object.fromEntries(names.map((n, i) => [n, res[i].status === 'fulfilled' ? 'ok' : String((res[i] as PromiseRejectedResult).reason?.message ?? 'error')]));
  await env.DB.prepare('UPDATE leads SET delivery = ?, attempts = attempts + 1 WHERE id = ?').bind(JSON.stringify(status), id).run();
  if (l.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(l.email)) {
    const [subj, body] = CONFIRM[l.lang] ?? CONFIRM.ro;
    await sendMail(env, l.email, subj, body).catch(() => {});
  }
  return status;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env, waitUntil }) => {
  const wantsJson = (request.headers.get('Accept') || '').includes('application/json');
  const fail = (error: string, status = 400) => wantsJson ? json({ ok: false, error }, status) : new Response(error, { status });

  let form: FormData;
  try { form = await request.formData(); } catch { return fail('bad_request'); }

  // Honeypot: bots fill hidden fields. Pretend success, store nothing.
  if (String(form.get('company') || '').trim()) return wantsJson ? json({ ok: true }) : Response.redirect(new URL('/ro/multumim/', request.url).href, 303);

  const lead: Lead = {};
  for (const f of FIELDS) lead[f] = String(form.get(f) ?? '').trim().slice(0, MAX[f] ?? 200);
  if (!['ro', 'ru', 'en'].includes(lead.lang)) lead.lang = 'ro';
  if (!['form', 'calculator', 'project', 'visit'].includes(lead.source)) lead.source = 'form';
  const digits = lead.phone.replace(/\D/g, '');
  if (lead.name.length < 2 || digits.length < 8 || form.get('consent') !== 'yes') return fail('validation', 422);

  const ip = request.headers.get('CF-Connecting-IP') || '0.0.0.0';
  if (!(await verifyTurnstile(env, String(form.get('cf-turnstile-response') || ''), ip))) return fail('captcha', 403);

  const ipHash = (await sha256(ip + (env.IP_SALT || 'bordeias'))).slice(0, 32);
  const recent = await env.DB.prepare("SELECT COUNT(*) AS n FROM leads WHERE ip_hash = ? AND created_at > datetime('now', '-10 minutes')").bind(ipHash).first<{ n: number }>();
  if ((recent?.n ?? 0) >= 5) return fail('rate_limited', 429);

  const created = new Date().toISOString();
  const row = await env.DB.prepare(
    'INSERT INTO leads (created_at, source, lang, name, phone, email, payload, ip_hash, user_agent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id',
  ).bind(created.replace('T', ' ').slice(0, 19), lead.source, lead.lang, lead.name, lead.phone, lead.email, JSON.stringify(lead), ipHash, (request.headers.get('User-Agent') || '').slice(0, 200)).first<{ id: number }>();
  const id = row!.id;

  // Deliver in the background; the lead is already safe in D1.
  waitUntil(deliver(env, lead, id, created).catch(() => {}));

  const thanks = String(form.get('redirect') || `/${lead.lang}/`);
  const safe = thanks.startsWith('/') && !thanks.startsWith('//') ? thanks : `/${lead.lang}/`;
  return wantsJson ? json({ ok: true, id }) : Response.redirect(new URL(safe, request.url).href, 303);
};

export const onRequest: PagesFunction<Env> = async () => new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
