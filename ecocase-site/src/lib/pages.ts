// Central registry of every public page: path, alternates (hreflang),
// meta and breadcrumbs. Used by the router, sitemap.xml and llms.txt.
import { LOCALES, ROUTES, pathFor, NOINDEX, type Locale, type RouteKey } from '@/i18n/routes';
import { HOME } from '@/content/home';
import { TURNKEY, PROJECTS, PRICE, TECH, ABOUT, CONTACT, THANKS } from '@/content/pages';
import { PRIVACY, COOKIES } from '@/content/legal';
import projects from '@/data/projects.json';

type Project = (typeof projects)[number];
export type PageEntry = {
  key: RouteKey; lang: Locale; path: string; alternates: Record<Locale, string>;
  title: string; description: string; crumbs: { name: string; path: string }[];
  faq?: { q: string; a: string }[]; noindex?: boolean; pageType?: string;
  project?: Project; legal?: { h1: string; updated: string; sections: { h: string; p: string[] }[] };
};

const META: Partial<Record<RouteKey, Record<Locale, { title: string; description: string; crumb?: string; faq?: { q: string; a: string }[] }>>> = {
  home: HOME, turnkey: TURNKEY, projects: PROJECTS, price: PRICE, technology: TECH, about: ABOUT,
  contact: CONTACT, thanks: THANKS, privacy: PRIVACY, cookies: COOKIES,
};
const PAGE_TYPE: Partial<Record<RouteKey, string>> = { about: 'AboutPage', contact: 'ContactPage', projects: 'CollectionPage' };

function alternatesFor(key: RouteKey, sub?: string) {
  return Object.fromEntries(LOCALES.map((l) => [l, pathFor(key, l, sub)])) as Record<Locale, string>;
}

export function buildRoutes(): PageEntry[] {
  const out: PageEntry[] = [];
  for (const lang of LOCALES) {
    for (const key of Object.keys(ROUTES) as RouteKey[]) {
      const m = META[key]![lang];
      out.push({
        key, lang, path: pathFor(key, lang), alternates: alternatesFor(key),
        title: m.title, description: m.description,
        crumbs: key === 'home' ? [] : [{ name: m.crumb ?? m.title, path: pathFor(key, lang) }],
        faq: m.faq, noindex: NOINDEX.includes(key), pageType: PAGE_TYPE[key],
        legal: key === 'privacy' ? PRIVACY[lang] : key === 'cookies' ? COOKIES[lang] : undefined,
      });
    }
    for (const p of projects) {
      const L = { ro: `Casa ${p.name}: ${p.area} m², clasa ${p.energyClass}, preț`, ru: `Дом ${p.name}: ${p.area} м², класс ${p.energyClass}, цена`, en: `${p.name} house: ${p.area} m², class ${p.energyClass}, price` };
      out.push({
        key: 'projects', lang, project: p, path: pathFor('projects', lang, p.slug), alternates: alternatesFor('projects', p.slug),
        title: `${L[lang]} | Bordeiaș`, description: p.summary[lang], pageType: 'ItemPage',
        crumbs: [{ name: PROJECTS[lang].crumb, path: pathFor('projects', lang) }, { name: p.name, path: pathFor('projects', lang, p.slug) }],
      });
    }
  }
  return out;
}
