// Single source of truth for business facts. Everything public about the
// company is read from here (pages, JSON-LD, llms.txt, vCard), so a change
// here propagates everywhere and the data stays consistent for Google
// Business Profile and AI answer engines.

export const SITE = {
  url: 'https://ecocase.md',
  brand: 'Bordeiaș',
  domainName: 'ecocase.md',
  legalName: 'T-Shirt Online S.R.L.',
  idno: '1016600016610',
  founder: { name: 'Serghei Scutelniciuc', role: { ro: 'fondator și director', ru: 'основатель и директор', en: 'founder and CEO' } },
  phone: '+37379447732',
  phoneDisplay: '+373 79 447 732',
  email: 'info@ecocase.md',
  whatsapp: 'https://wa.me/37379447732',
  viber: 'viber://chat?number=%2B37379447732',
  telegram: 'https://t.me/+37379447732',
  // Fill in when the pilot house address is confirmed. While null, the map,
  // the PostalAddress in JSON-LD and the address line are not rendered.
  pilotAddress: null as null | {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    lat: number;
    lng: number;
  },
  visitHours: { days: ['Sa'] as const, opens: '10:00', closes: '16:00' },
  // Add only accounts that exist. Empty strings are skipped.
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    tiktok: '',
    youtube: '',
    x: '',
  },
  areaServed: 'MD',
  foundingYear: 2025,
} as const;

// Public analytics / anti-spam keys are injected at build time from
// Cloudflare Pages environment variables. They are not secrets.
export const PUBLIC_ENV = {
  gtmId: import.meta.env.PUBLIC_GTM_ID ?? '',
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITEKEY ?? '',
};

export const socialLinks = Object.entries(SITE.social)
  .filter(([, url]) => Boolean(url))
  .map(([name, url]) => ({ name, url }));
