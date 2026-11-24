# ecocase.md · Bordeiaș

Three-language (RO / RU / EN) static website for Bordeiaș turnkey straw and clay houses.
Astro 5 + TypeScript, hosted on Cloudflare Pages, leads handled by a Pages Function with a D1 journal.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | install dependencies |
| `npm run dev` | local dev server at http://localhost:4321/ro/ |
| `npm run build` | text check (no long dashes, double spaces, placeholders, ş/ţ) + static build to `dist/` |
| `npx wrangler pages dev dist` | run the built site together with `/api/lead` and a local D1 |
| `node scripts/generate-assets.mjs` | regenerate OG images, favicons and PNG logo (needs Playwright) |

## Where things live

| Path | Content |
| --- | --- |
| `src/config/site.ts` | phone, email, legal data, pilot address, social links: single source for pages, JSON-LD, llms.txt |
| `src/i18n/routes.ts` | localized URLs of every page (from the brief) |
| `src/i18n/ui.ts` | interface strings, list of districts |
| `src/content/*.ts` | page texts in three languages, FAQ, verified facts (`facts.ts`), legal drafts |
| `src/data/pricing.json` | calculator rates (`draft: true` shows "preliminary rates") |
| `src/data/projects.json` | house projects catalogue |
| `src/lib/schema.ts` | JSON-LD: Organization/HomeAndConstructionBusiness, WebSite, WebPage, BreadcrumbList, FAQPage, Product |
| `src/pages/[...path].astro` | one router for all localized pages |
| `src/pages/sitemap.xml.ts`, `robots.txt.ts`, `llms.txt.ts` | SEO and GEO endpoints |
| `functions/api/lead.ts` | form endpoint: validation, Turnstile, rate limit, D1, email + Google Sheet + Telegram |
| `functions/api/retry.ts` | re-sends leads whose delivery failed |
| `db/schema.sql` | D1 table |
| `public/_headers`, `public/_redirects` | security headers (HSTS, CSP...), 301 redirects |

See `docs/SETUP.md` for the launch checklist and `docs/STATUS.md` for what is done and what is still needed from the owner.
