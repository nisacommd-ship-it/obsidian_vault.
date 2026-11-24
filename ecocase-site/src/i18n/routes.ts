export const LOCALES = ['ro', 'ru', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ro';

export const HREFLANG: Record<Locale, string> = { ro: 'ro-MD', ru: 'ru-MD', en: 'en' };
export const OG_LOCALE: Record<Locale, string> = { ro: 'ro_MD', ru: 'ru_MD', en: 'en_US' };
export const LANG_LABEL: Record<Locale, string> = { ro: 'Română', ru: 'Русский', en: 'English' };

// Page keys and their localized slugs (from the URL table of the brief).
// '' is the language home page. Nested keys use '/'.
export const ROUTES = {
  home: { ro: '', ru: '', en: '' },
  turnkey: { ro: 'case-la-cheie', ru: 'doma-pod-klyuch', en: 'turnkey-houses' },
  projects: { ro: 'proiecte', ru: 'proekty', en: 'projects' },
  price: { ro: 'pret-casa-la-cheie', ru: 'cena-doma-pod-klyuch', en: 'house-price' },
  technology: { ro: 'tehnologie', ru: 'tehnologiya', en: 'technology' },
  about: { ro: 'despre-noi', ru: 'o-nas', en: 'about' },
  contact: { ro: 'contact', ru: 'kontakty', en: 'contact' },
  privacy: { ro: 'politica-de-confidentialitate', ru: 'politika-konfidencialnosti', en: 'privacy-policy' },
  cookies: { ro: 'politica-cookie', ru: 'politika-cookie', en: 'cookie-policy' },
  thanks: { ro: 'multumim', ru: 'spasibo', en: 'thank-you' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

/** Absolute path with trailing slash, e.g. /ro/case-la-cheie/ */
export function pathFor(key: RouteKey, lang: Locale, sub?: string): string {
  const slug = ROUTES[key][lang];
  const parts = [lang, slug, sub].filter(Boolean);
  return `/${parts.join('/')}/`;
}

/** Pages that must not be indexed. */
export const NOINDEX: RouteKey[] = ['thanks'];
