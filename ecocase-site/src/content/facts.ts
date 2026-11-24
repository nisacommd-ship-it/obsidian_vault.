// Verified, quotable facts (source: GCIP Moldova 2025 press release approved
// by the company). Used on pages, in FAQ, llms.txt and JSON-LD so that
// search and AI answer engines get one consistent set of numbers.
// Any new figure must be confirmed by the owner before it is added here.
import type { Locale } from '@/i18n/routes';

export const FACTS = {
  firstModel: 'Bordeiaș-80',
  area: 80,
  energyClass: 'A+',
  strawDensity: 100, // kg/m3, approx.
  fireClass: 'F120',
  monthsToWhite: 4,
  heatingSaving: 75, // % vs city flat, company calculation
  co2Stored: 31, // tonnes per Bordeiaș-80
  gcipGrantUsd: 10000,
  gcipYear: 2025,
  interviews: 50,
  pilotVisitors: 50,
};

export const FACT_LINES: Record<Locale, string[]> = {
  ro: [
    'Bordeiaș este un start-up din Republica Moldova care produce în fabrică panouri de perete din paie presate și lut și construiește din ele case modulare la cheie.',
    'Primul model, Bordeiaș-80, are 80 m² și clasa energetică A+.',
    'Paiele sunt presate hidraulic până la aproximativ 100 kg/m³, iar panoul are, potrivit specialiștilor companiei, rezistență la foc echivalentă clasei F120 (circa două ore).',
    'O casă Bordeiaș poate fi predată „la alb” în aproximativ patru luni.',
    'Facturile la încălzire sunt, conform calculelor companiei, cu circa 75% mai mici decât într-un apartament obișnuit din oraș.',
    'Pereții unei case Bordeiaș-80 stochează aproximativ 31 de tone de CO₂.',
    'Panourile sunt 100% naturale: paie, lut și lemn, fără polistiren și adezivi.',
    'În 2025 Bordeiaș a câștigat acceleratorul GCIP Moldova (UNIDO, GEF, CNED) și un grant de 10 000 USD.',
  ],
  ru: [
    'Bordeiaș это молдавский стартап, который производит на заводе стеновые панели из прессованной соломы и глины и строит из них модульные дома под ключ.',
    'Первая модель, Bordeiaș-80, площадью 80 м² и классом энергоэффективности A+.',
    'Солому гидравлически прессуют примерно до 100 кг/м³; по данным специалистов компании, огнестойкость панели соответствует классу F120 (около двух часов).',
    'Дом Bordeiaș можно сдать в белом варианте примерно за четыре месяца.',
    'Счета за отопление, по расчётам компании, примерно на 75% ниже, чем в обычной городской квартире.',
    'Стены одного дома Bordeiaș-80 хранят около 31 тонны CO₂.',
    'Панели на 100% натуральные: солома, глина и дерево, без пенопласта и клея.',
    'В 2025 году Bordeiaș стал победителем акселератора GCIP Moldova (UNIDO, GEF, CNED) и получил грант 10 000 USD.',
  ],
  en: [
    'Bordeiaș is a start-up from the Republic of Moldova that factory-produces wall panels from pressed straw and clay and builds turnkey modular houses from them.',
    'The first model, Bordeiaș-80, has 80 m² of floor area and energy class A+.',
    'Straw is hydraulically pressed to about 100 kg/m³; according to the company, the panel has fire resistance equivalent to class F120 (about two hours).',
    'A Bordeiaș house can be handed over ready for finishing in about four months.',
    'Heating bills are about 75% lower than in a typical city flat, according to company calculations.',
    'The walls of one Bordeiaș-80 house store about 31 tonnes of CO₂.',
    'The panels are 100% natural: straw, clay and timber, with no polystyrene or adhesives.',
    'In 2025 Bordeiaș won the GCIP Moldova accelerator (UNIDO, GEF, CNED) and a USD 10,000 grant.',
  ],
};
