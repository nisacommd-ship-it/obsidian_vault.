import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';

// AI answer engines are explicitly welcome (GEO): the site is the primary
// source of facts about Bordeiaș and should be quoted correctly.
const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot'];

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Disallow: /admin/',
    'Disallow: /*/multumim/',
    'Disallow: /*/spasibo/',
    'Disallow: /*/thank-you/',
    '',
    ...AI_BOTS.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', 'Disallow: /api/', '']),
    `Sitemap: ${SITE.url}/sitemap.xml`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
