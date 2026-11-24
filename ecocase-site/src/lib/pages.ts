// Central registry of every public page: path, alternates (hreflang),
// meta and breadcrumbs. Used by the router, sitemap.xml and llms.txt.
import { LOCALES, ROUTES, pathFor, NOINDEX, type Locale, type RouteKey } from '@/i18n/routes';
import { HOME } from '@/content/home';
import { TURNKEY, PROJECTS, PRICE, TECH, ABOUT, CONTACT, THANKS } from '@/content/pages';
import { PRIVACY, COOKIES } from '@/content/legal';
import projects from '@/data/projects.json';
import { getPosts, postAlternates, postPath, type Post } from '@/lib/blog';

type Project = (typeof projects)[number];
export type PageEntry = {
  key: RouteKey; lang: Locale; path: string; alternates: Record<Locale, string>;
  title: string; description: string; crumbs: { name: string; path: string }[];
  faq?: { q: string; a: string }[]; noindex?: boolean; pageType?: string;
  hreflang?: Partial<Record<Locale, string>>; post?: Post;
  project?: Project; legal?: { h1: string; updated: string; sections: { h: string; p: string[] }[] };
};

export const BLOG_META: Record<Locale, { title: string; description: string; crumb: string; h1: string; lead: string }> = {
  ro: { title: 'Blog despre case din paie, case pasive și granturi | Bordeiaș', description: 'Articole despre case din paie și lut, costul unei case la cheie în Moldova, casele pasive, nZEB și granturile pentru locuințe eficiente.', crumb: 'Blog', h1: 'Blog: case din paie, eficiență și finanțare', lead: 'Răspunsuri clare la întrebările pe care ni le pun familiile: preț, siguranță, autorizații, granturi și tehnologie.' },
  ru: { title: 'Блог о домах из соломы, пассивных домах и грантах | Bordeiaș', description: 'Статьи о домах из соломы и глины, стоимости дома под ключ в Молдове, пассивных домах, nZEB и грантах на энергоэффективное жильё.', crumb: 'Блог', h1: 'Блог: дома из соломы, энергоэффективность и финансирование', lead: 'Понятные ответы на вопросы, которые нам задают семьи: цена, безопасность, разрешения, гранты и технология.' },
  en: { title: 'Blog on straw houses, passive homes and grants | Bordeiaș', description: 'Articles on straw and clay houses, turnkey house costs in Moldova, passive houses, nZEB and grants for energy-efficient homes in Moldova.', crumb: 'Blog', h1: 'Blog: straw houses, efficiency and financing', lead: 'Clear answers to the questions families ask us: price, safety, permits, grants and technology.' },
};

const META: Partial<Record<RouteKey, Record<Locale, { title: string; description: string; crumb?: string; faq?: { q: string; a: string }[] }>>> = {
  home: HOME, turnkey: TURNKEY, projects: PROJECTS, price: PRICE, technology: TECH, about: ABOUT,
  contact: CONTACT, thanks: THANKS, privacy: PRIVACY, cookies: COOKIES, blog: BLOG_META,
};
const PAGE_TYPE: Partial<Record<RouteKey, string>> = { about: 'AboutPage', contact: 'ContactPage', projects: 'CollectionPage', blog: 'CollectionPage' };



function alternatesFor(key: RouteKey, sub?: string) {
  return Object.fromEntries(LOCALES.map((l) => [l, pathFor(key, l, sub)])) as Record<Locale, string>;
}

export async function buildRoutes(): Promise<PageEntry[]> {
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
  for (const post of await getPosts()) {
    const lang = post.data.lang;
    const hreflang = await postAlternates(post);
    const alternates = Object.fromEntries(LOCALES.map((l) => [l, hreflang[l] ?? pathFor('blog', l)])) as Record<Locale, string>;
    out.push({
      key: 'blog', lang, post, path: postPath(post), alternates, hreflang,
      title: post.data.title, description: post.data.description, faq: post.data.faq,
      crumbs: [{ name: BLOG_META[lang].crumb, path: pathFor('blog', lang) }, { name: post.data.title.replace(/\s*\(.*\)$/, '').split(':')[0], path: postPath(post) }],
    });
  }
  return out;
}
