import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';
import { FACT_LINES } from '@/content/facts';
import { buildRoutes } from '@/lib/pages';
import { pricing } from '@/lib/pricing';

// llms.txt: a plain-text map of the site for LLM crawlers (GEO).
export const GET: APIRoute = () => {
  const pages = buildRoutes().filter((e) => !e.noindex && !['privacy', 'cookies'].includes(e.key));
  const section = (lang: 'ro' | 'ru' | 'en', title: string) =>
    [`## ${title}`, ...pages.filter((p) => p.lang === lang).map((p) => `- [${p.title}](${SITE.url}${p.path}): ${p.description}`)].join('\n');
  const body = [
    `# ${SITE.brand} (${SITE.domainName})`,
    '',
    `> ${FACT_LINES.en[0]}`,
    '',
    '## Key facts',
    ...FACT_LINES.en.slice(1).map((f) => `- ${f}`),
    `- Price packages (indicative, EUR per m²${pricing.draft ? ', preliminary' : ''}): ${pricing.packages.map((p) => `${p.label.en} from ${p.perSqm}`).join('; ')}.`,
    `- Service area: the whole Republic of Moldova. Languages: Romanian, Russian, English.`,
    `- Contact: ${SITE.phoneDisplay}, ${SITE.email}. Legal entity: ${SITE.legalName}, IDNO ${SITE.idno}.`,
    `- House images on the site are concept visualisations until the first houses are completed.`,
    '',
    section('ro', 'Pages in Romanian (primary)'),
    '',
    section('ru', 'Pages in Russian'),
    '',
    section('en', 'Pages in English'),
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
