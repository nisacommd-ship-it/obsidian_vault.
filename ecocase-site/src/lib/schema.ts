import { SITE, socialLinks } from '@/config/site';
import { HREFLANG, type Locale } from '@/i18n/routes';

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

const DESCRIPTION: Record<Locale, string> = {
  ro: 'Bordeiaș produce case modulare la cheie din panouri prefabricate de paie presate și lut, în Republica Moldova.',
  ru: 'Bordeiaș производит модульные дома под ключ из готовых панелей прессованной соломы и глины в Молдове.',
  en: 'Bordeiaș builds turnkey modular houses from prefabricated pressed straw and clay panels in the Republic of Moldova.',
};

export function organization(lang: Locale) {
  const a = SITE.pilotAddress;
  return {
    '@type': ['HomeAndConstructionBusiness', 'Organization'],
    '@id': ORG_ID,
    name: SITE.brand,
    alternateName: ['Bordeias', 'ecocase.md'],
    legalName: SITE.legalName,
    url: SITE.url,
    logo: { '@type': 'ImageObject', url: `${SITE.url}/brand/logo-h-green.png`, width: 985, height: 293 },
    image: `${SITE.url}/og/og-${lang}.jpg`,
    description: DESCRIPTION[lang],
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: String(SITE.foundingYear),
    founder: { '@type': 'Person', name: SITE.founder.name, jobTitle: SITE.founder.role[lang] },
    identifier: { '@type': 'PropertyValue', propertyID: 'IDNO', value: SITE.idno },
    areaServed: { '@type': 'Country', name: 'Moldova', identifier: 'MD' },
    knowsLanguage: ['ro', 'ru', 'en'],
    priceRange: '€€',
    award: 'GCIP Moldova 2025 accelerator winner',
    knowsAbout: ['straw bale construction', 'clay plaster', 'prefabricated wall panels', 'nZEB houses', 'energy efficient homes', 'modular houses'],
    ...(a && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: a.street,
        addressLocality: a.locality,
        addressRegion: a.region,
        postalCode: a.postalCode,
        addressCountry: 'MD',
      },
      geo: { '@type': 'GeoCoordinates', latitude: a.lat, longitude: a.lng },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: SITE.visitHours.days.map((d) => `https://schema.org/${d === 'Sa' ? 'Saturday' : d}`),
        opens: SITE.visitHours.opens,
        closes: SITE.visitHours.closes,
      },
    }),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      email: SITE.email,
      contactType: 'sales',
      areaServed: 'MD',
      availableLanguage: ['Romanian', 'Russian', 'English'],
    },
    ...(socialLinks.length && { sameAs: socialLinks.map((s) => s.url) }),
  };
}

export function website(lang: Locale) {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE.url,
    name: `${SITE.brand} · ecocase.md`,
    inLanguage: HREFLANG[lang],
    publisher: { '@id': ORG_ID },
  };
}

export function webPage(opts: { url: string; title: string; description: string; lang: Locale; type?: string; dateModified: string; image?: string }) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    inLanguage: HREFLANG[opts.lang],
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    dateModified: opts.dateModified,
    ...(opts.image && { primaryImageOfPage: opts.image }),
  };
}

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

export function faqPage(faq: { q: string; a: string }[], url: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function product(opts: {
  url: string; name: string; description: string; image: string; lowPrice: number; highPrice: number;
  area: number; energyClass: string; lang: Locale;
}) {
  return {
    '@type': 'Product',
    '@id': `${opts.url}#product`,
    name: opts.name,
    description: opts.description,
    image: opts.image,
    brand: { '@type': 'Brand', name: SITE.brand },
    manufacturer: { '@id': ORG_ID },
    category: 'Prefabricated straw and clay house',
    material: ['pressed straw', 'clay', 'timber'],
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'floorSize', value: opts.area, unitCode: 'MTK' },
      { '@type': 'PropertyValue', name: 'energyClass', value: opts.energyClass },
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: opts.lowPrice,
      highPrice: opts.highPrice,
      offerCount: 3,
      availability: 'https://schema.org/PreOrder',
      seller: { '@id': ORG_ID },
      areaServed: 'MD',
    },
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
