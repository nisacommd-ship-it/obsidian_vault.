/// <reference types="@cloudflare/workers-types" />
// POST /api/retry with header "Authorization: Bearer <RETRY_TOKEN>":
// re-sends leads whose delivery failed in at least one channel (max 5 tries).
// Call it from a Cloudflare Cron Worker or manually.
import { deliver } from './lead';

interface Env { DB: D1Database; RETRY_TOKEN?: string; [k: string]: unknown }

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.RETRY_TOKEN || request.headers.get('Authorization') !== `Bearer ${env.RETRY_TOKEN}`) return new Response('Forbidden', { status: 403 });
  const { results } = await env.DB.prepare(
    "SELECT id, created_at, payload FROM leads WHERE attempts < 5 AND (delivery IS NULL OR delivery != '{\"email\":\"ok\",\"sheet\":\"ok\",\"telegram\":\"ok\"}') ORDER BY id LIMIT 20",
  ).all<{ id: number; created_at: string; payload: string }>();
  const out = [];
  for (const r of results) out.push({ id: r.id, status: await deliver(env as never, JSON.parse(r.payload), r.id, r.created_at) });
  return Response.json({ retried: out.length, out });
};
