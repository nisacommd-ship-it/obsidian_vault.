import type { APIRoute } from 'astro';
import { buildRoutes } from '@/lib/pages';
import { HREFLANG, DEFAULT_LOCALE } from '@/i18n/routes';
import { SITE } from '@/config/site';

const LASTMOD = '2026-11-24';

export const GET: APIRoute = async () => {
  const abs = (p: string) => new URL(p, SITE.url).href;
  const urls = (await buildRoutes()).filter((e) => !e.noindex).map((e) => {
    const hl = e.hreflang ?? e.alternates;
    const alts = Object.entries(hl)
      .map(([l, p]) => `<xhtml:link rel="alternate" hreflang="${HREFLANG[l as keyof typeof HREFLANG]}" href="${abs(p)}"/>`)
      .join('');
    const xdp = hl[DEFAULT_LOCALE] ?? hl[e.lang];
    const xd = xdp ? `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(xdp)}"/>` : '';
    return `<url><loc>${abs(e.path)}</loc><lastmod>${e.post ? (e.post.data.updated ?? e.post.data.date) : LASTMOD}</lastmod>${alts}${xd}</url>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
