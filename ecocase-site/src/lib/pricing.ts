import pricing from '@/data/pricing.json';

export type Pricing = typeof pricing;
export { pricing };

export function packageById(id: string) {
  return pricing.packages.find((p) => p.id === id) ?? pricing.packages[0];
}

/** Lowest "from" price for an area: cheapest package, base foundation, centre. */
export function priceFrom(area: number, packageId = pricing.packages[0].id): number {
  return roundTo(area * packageById(packageId).perSqm, 100);
}

export function roundTo(n: number, step: number) {
  return Math.round(n / step) * step;
}

export function formatEUR(n: number, lang: string) {
  const locale = lang === 'ru' ? 'ru-RU' : lang === 'en' ? 'en-GB' : 'ro-RO';
  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 }).format(n);
}
