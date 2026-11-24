// Site-wide progressive enhancement. Everything works without JS:
// links, forms (POST to /api/lead with a 303 redirect) and content.

type Win = Window & { dataLayer: unknown[]; gtag: (...a: unknown[]) => void; __loadGTM?: () => void; turnstile?: { reset: (el?: Element) => void } };
const w = window as unknown as Win;
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

function track(event: string, params: Record<string, unknown> = {}) {
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, page_language: document.documentElement.lang, page_path: location.pathname, ...params });
}

/* ---------- Mobile menu ---------- */
const burger = $<HTMLButtonElement>('[data-burger]');
const nav = $('#site-nav');
if (burger && nav) {
  const set = (open: boolean) => {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', (open ? burger.dataset.close : burger.dataset.open) || '');
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => set(burger.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
  nav.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) set(false); });
}

/* ---------- Language hint (never auto-redirects, keeps indexing clean) ---------- */
(() => {
  const box = $('[data-lang-hint]');
  const raw = $('[data-lang-map]')?.textContent;
  if (!box || !raw) return;
  const { alternates, hints } = JSON.parse(raw) as { alternates: Record<string, string>; hints: Record<string, string> };
  const cur = document.documentElement.lang;
  const pref = (navigator.languages || [navigator.language]).map((l) => l.slice(0, 2).toLowerCase()).find((l) => l in alternates);
  let dismissed = false;
  try { dismissed = localStorage.getItem('langHint') === '1'; } catch { /* storage blocked */ }
  if (!pref || pref === cur || dismissed) return;
  const text = $('[data-lang-hint-text]', box)!;
  const a = document.createElement('a');
  a.href = alternates[pref]; a.hreflang = pref; a.lang = pref; a.textContent = hints[pref];
  text.append(a);
  box.hidden = false;
  $('[data-lang-hint-close]', box)?.addEventListener('click', () => {
    box.hidden = true;
    try { localStorage.setItem('langHint', '1'); } catch { /* ignore */ }
  });
})();

/* ---------- Reveal on scroll ---------- */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach((el) => io.observe(el));
} else { $$('.reveal').forEach((el) => el.classList.add('is-in')); }

/* ---------- Click tracking (phone, messengers, vCard, PDF) ---------- */
document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (!el) return;
  track(el.dataset.track!, { channel: el.dataset.channel, link_url: (el as HTMLAnchorElement).href });
});

/* ---------- Cookie consent (Consent Mode v2) ---------- */
(() => {
  const box = $('[data-cookie]');
  if (!box) return;
  let saved: { analytics: boolean; marketing: boolean } | null = null;
  try { saved = JSON.parse(localStorage.getItem('consent') || 'null'); } catch { /* ignore */ }
  if (!saved) box.hidden = false;
  const apply = (all: boolean) => {
    const c = { analytics: all, marketing: all, ts: Date.now() };
    try { localStorage.setItem('consent', JSON.stringify(c)); } catch { /* ignore */ }
    w.gtag('consent', 'update', {
      analytics_storage: all ? 'granted' : 'denied',
      ad_storage: all ? 'granted' : 'denied',
      ad_user_data: all ? 'granted' : 'denied',
      ad_personalization: all ? 'granted' : 'denied',
    });
    if (all) w.__loadGTM?.();
    box.hidden = true;
  };
  $$('[data-cookie-choice]', box).forEach((b) => b.addEventListener('click', () => apply(b.dataset.cookieChoice === 'all')));
  $$('[data-cookie-open]').forEach((b) => b.addEventListener('click', () => { box.hidden = false; }));
})();

/* ---------- UTM capture (first touch, session) ---------- */
const utm = (() => {
  const p = new URLSearchParams(location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  const found = Object.fromEntries(keys.filter((k) => p.get(k)).map((k) => [k, p.get(k)]));
  try {
    if (Object.keys(found).length) sessionStorage.setItem('utm', JSON.stringify(found));
    return sessionStorage.getItem('utm') || JSON.stringify({ referrer: document.referrer || '' });
  } catch { return JSON.stringify(found); }
})();

/* ---------- Turnstile: load only when a form is touched ---------- */
let tsLoading = false;
function loadTurnstile() {
  if (tsLoading || !$('.cf-turnstile')) return;
  tsLoading = true;
  const s = document.createElement('script');
  s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
  s.async = true; s.defer = true;
  document.head.append(s);
}

/* ---------- Lead forms ---------- */
$$<HTMLFormElement>('[data-lead-form]').forEach((form) => {
  const status = $('.lf__status', form)!;
  const submit = $<HTMLButtonElement>('.lf__submit', form)!;
  const label = submit.textContent;
  form.addEventListener('focusin', loadTurnstile, { once: true });
  $$<HTMLInputElement>('[data-min-tomorrow]', form).forEach((d) => {
    const t = new Date(Date.now() + 864e5); d.min = t.toISOString().slice(0, 10);
  });
  const phone = $<HTMLInputElement>('[data-phone]', form);
  phone?.addEventListener('input', () => { phone.value = phone.value.replace(/[^\d+ ()-]/g, ''); });

  const fieldError = (input: HTMLInputElement | null, bad: boolean) => {
    if (!input) return;
    const err = document.getElementById(input.getAttribute('aria-describedby') || '');
    input.setAttribute('aria-invalid', String(bad));
    if (err) err.textContent = bad ? err.dataset.msg || '' : '';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = $<HTMLInputElement>('[name=name]', form)!;
    const consent = $<HTMLInputElement>('[name=consent]', form)!;
    const digits = (phone?.value || '').replace(/\D/g, '');
    const badName = name.value.trim().length < 2;
    const badPhone = digits.length < 8 || digits === '373';
    fieldError(name, badName); fieldError(phone, badPhone); fieldError(consent, !consent.checked);
    if (badName || badPhone || !consent.checked) { form.querySelector<HTMLElement>('[aria-invalid=true]')?.focus(); return; }

    ($('[data-fill=page]', form) as HTMLInputElement).value = location.pathname;
    ($('[data-fill=utm]', form) as HTMLInputElement).value = utm;
    const calcState = (window as unknown as { __calcState?: unknown }).__calcState;
    if (calcState) ($('[data-fill=calc]', form) as HTMLInputElement).value = JSON.stringify(calcState);

    submit.disabled = true; submit.textContent = submit.dataset.sending || '...';
    status.textContent = ''; status.classList.remove('is-error');
    const fd = new FormData(form);
    try {
      const res = await fetch(form.action, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || String(res.status));
      const src = form.dataset.source;
      track(src === 'calculator' ? 'calculator_lead' : src === 'visit' ? 'visit_booked' : 'lead_form_submit', { form_source: src });
      try { sessionStorage.setItem('leadSent', '1'); } catch { /* ignore */ }
      location.href = form.dataset.thanks!;
    } catch {
      const text = [...fd.entries()]
        .filter(([k, v]) => ['name', 'phone', 'district', 'area', 'comment', 'visit_date', 'visit_time', 'project'].includes(k) && v)
        .map(([k, v]) => `${k}: ${v}`).join('\n');
      status.innerHTML = '';
      status.classList.add('is-error');
      const a = document.createElement('a');
      a.href = `${form.dataset.wa}?text=${encodeURIComponent(text)}`;
      a.textContent = 'WhatsApp'; a.rel = 'noopener'; a.className = 'btn';
      status.append(document.createTextNode(status.dataset.error + ' '), a);
      submit.disabled = false; submit.textContent = label;
      w.turnstile?.reset();
    }
  });
});

/* ---------- Calculator ---------- */
(() => {
  const root = $('[data-calc]');
  if (!root) return;
  const D = JSON.parse($('[data-calc-data]', root)!.textContent!);
  const form = $<HTMLFormElement>('[data-calc-form]', root)!;
  const area = $<HTMLInputElement>('[name=area]', form)!;
  const project = $<HTMLSelectElement>('[name=project]', form)!;
  const fmt = new Intl.NumberFormat(D.lang === 'ru' ? 'ru-RU' : D.lang === 'en' ? 'en-GB' : 'ro-RO', { style: 'currency', currency: 'EUR', currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 });
  const r100 = (n: number) => Math.round(n / 100) * 100;
  let used = false;

  const calc = () => {
    const f = new FormData(form);
    const a = Number(area.value);
    const pkg = D.packages.find((p: { id: string }) => p.id === f.get('package')) ?? D.packages[0];
    const fl = D.floors.find((x: { id: string }) => x.id === f.get('floors')) ?? D.floors[0];
    const fo = D.foundations.find((x: { id: string }) => x.id === f.get('foundation')) ?? D.foundations[0];
    const rg = D.regions.find((x: { id: string }) => x.id === f.get('region')) ?? D.regions[0];
    const opts = f.getAll('opt') as string[];
    const optSum = D.options.filter((o: { id: string }) => opts.includes(o.id)).reduce((s: number, o: { price: number }) => s + o.price, 0);
    const base = (a * pkg.perSqm * fl.factor + a * fo.perSqm) * rg.factor + optSum;
    const lo = r100(base * (1 - D.spread / 2)), hi = r100(base * (1 + D.spread / 2));
    const weeks = Math.round(pkg.weeks * Math.max(0.8, Math.min(1.5, a / 80)));
    $('[data-area-out]', root)!.textContent = String(a);
    $('[data-res-range]', root)!.textContent = `${fmt.format(lo)} - ${fmt.format(hi)}`;
    $('[data-res-weeks]', root)!.textContent = `${weeks} ${D.strings.weeks}`;
    $('[data-res-sqm]', root)!.textContent = fmt.format(Math.round(base / a));
    (window as unknown as { __calcState: unknown }).__calcState = {
      project: f.get('project'), area: a, package: pkg.id, floors: fl.id, foundation: fo.id, region: rg.id, options: opts, low: lo, high: hi, weeks,
    };
  };
  project.addEventListener('change', () => {
    const o = project.selectedOptions[0];
    if (o?.dataset.area) area.value = o.dataset.area;
    calc();
  });
  area.addEventListener('input', () => { if (project.value) { const o = project.selectedOptions[0]; if (o && Number(o.dataset.area) !== Number(area.value)) project.value = ''; } });
  form.addEventListener('input', () => {
    calc();
    if (!used) { used = true; track('calculator_used'); }
  });
  calc();
})();
