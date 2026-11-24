import type { APIRoute } from 'astro';
import { buildRoutes } from '@/lib/pages';
import { HREFLANG, DEFAULT_LOCALE } from '@/i18n/routes';
import { SITE } from '@/config/site';

const LASTMOD = '2026-11-24';

export const GET: APIRoute = () => {
  const abs = (p: string) => new URL(p, SITE.url).href;
  const urls = buildRoutes().filter((e) => !e.noindex).map((e) => {
    const alts = Object.entries(e.alternates)
      .map(([l, p]) => `<xhtml:link rel="alternate" hreflang="${HREFLANG[l as keyof typeof HREFLANG]}" href="${abs(p)}"/>`)
      .join('');
    const xd = `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(e.alternates[DEFAULT_LOCALE])}"/>`;
    return `<url><loc>${abs(e.path)}</loc><lastmod>${LASTMOD}</lastmod>${alts}${xd}</url>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
