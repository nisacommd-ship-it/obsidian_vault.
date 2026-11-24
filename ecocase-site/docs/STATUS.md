# Status (24.11.2026)

## Done
- 35 static pages: Home, Turnkey, Projects, Bordeiaș-80, Price + calculator, Technology, About, Contact, Privacy, Cookies, Thank you (RO/RU/EN) + 404 + root redirect.
- Design by the Bordeiaș brandbook: palette, Jost (self-hosted, latin/latin-ext/cyrillic), buttons, hero, patterns, partner co-branding band, "vizualizare" label on every render.
- SEO: unique titles/descriptions, one H1, canonical, hreflang ro-MD/ru-MD/en/x-default, sitemap with alternates, robots, OG/Twitter images per language, breadcrumbs, JSON-LD.
- GEO: `llms.txt`, AI crawlers explicitly allowed, "Bordeiaș in brief" fact blocks with verified numbers, direct-answer FAQ.
- Lead pipeline: D1 journal first, then email + Google Sheet + Telegram, honeypot, Turnstile, rate limit, no-JS fallback (303 redirect), WhatsApp fallback when the server is down, hidden lang/page/UTM/source/calculator data.
- Calculator with rates from `pricing.json`, cookie banner with Consent Mode v2, GA4 events, vCard `/sergiu.vcf`.
- Lighthouse mobile (local, no CDN): Performance 97, Accessibility 97 → contrast fixed after the run, Best Practices 100, SEO 100.

## Needed from the owner
- Title/H1 from `ecocase_semantika.xlsx` (sheet "Structura și meta"): current ones are written from the market report clusters.
- Real calculator rates and project prices (current values are marked preliminary).
- More projects (bedrooms, bathrooms, floor plans).
- Pilot house address and visit hours (enables map, PostalAddress, Google Business Profile).
- Social network URLs, team photos, video, INSM certification status.
- Lawyer review of privacy and cookie texts.
- Cloudflare keys listed in SETUP.md.

## Next (queue 2)
- CMS (Sveltia/Decap on the same JSON/TS content), blog with 8 articles, solution pages (eco, passive/nZEB, modular, timber frame, financing), PDF estimate.
