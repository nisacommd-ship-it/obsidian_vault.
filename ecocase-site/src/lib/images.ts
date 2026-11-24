import type { ImageMetadata } from 'astro';
import casaExterior from '@/assets/img/casa-exterior.jpg';
import interiorLut from '@/assets/img/interior-lut.jpg';
import montajPanouri from '@/assets/img/montaj-panouri.jpg';
import panouPaieLut from '@/assets/img/panou-paie-lut.jpg';
import casaSeara from '@/assets/img/casa-seara.jpg';
import productie from '@/assets/img/productie.jpg';
import familie from '@/assets/img/familie.jpg';
import type { Locale } from '@/i18n/routes';

export const IMAGES: Record<string, ImageMetadata> = {
  'casa-exterior': casaExterior,
  'interior-lut': interiorLut,
  'montaj-panouri': montajPanouri,
  'panou-paie-lut': panouPaieLut,
  'casa-seara': casaSeara,
  productie,
  familie,
};

// Alt texts are descriptive and keyword-natural (no stuffing).
export const ALT: Record<string, Record<Locale, string>> = {
  'casa-exterior': {
    ro: 'Casă din paie și lut Bordeiaș la apus, cu fațadă din lemn și ferestre mari, în peisaj moldovenesc',
    ru: 'Дом из соломы и глины Bordeiaș на закате, деревянный фасад и большие окна, молдавский пейзаж',
    en: 'Bordeiaș straw and clay house at sunset with timber facade and large windows in the Moldovan countryside',
  },
  'interior-lut': {
    ro: 'Living luminos cu tencuială de lut, grinzi de lemn și ferestre panoramice',
    ru: 'Светлая гостиная с глиняной штукатуркой, деревянными балками и панорамными окнами',
    en: 'Bright living room with clay plaster, timber beams and panoramic windows',
  },
  'montaj-panouri': {
    ro: 'Montajul panourilor prefabricate din paie pe fundație, cu macaraua, în câteva zile',
    ru: 'Монтаж готовых соломенных панелей на фундамент краном',
    en: 'Prefabricated straw panels being lifted onto the foundation by crane',
  },
  'panou-paie-lut': {
    ro: 'Secțiune prin panou: paie presate într-un cadru de lemn, acoperite cu lut',
    ru: 'Срез панели: прессованная солома в деревянной раме, покрытая глиной',
    en: 'Panel cross-section: pressed straw in a timber frame finished with clay',
  },
  'casa-seara': {
    ro: 'Casa Bordeiaș seara, cu lumină caldă în ferestre și terasă',
    ru: 'Дом Bordeiaș вечером, тёплый свет в окнах и терраса',
    en: 'Bordeiaș house in the evening with warm light in the windows and a terrace',
  },
  productie: {
    ro: 'Hala de producție a panourilor din paie presate și lemn',
    ru: 'Цех производства панелей из прессованной соломы и дерева',
    en: 'Production hall for pressed straw and timber wall panels',
  },
  familie: {
    ro: 'Familie care se plimbă spre casa lor din paie și lut, printre lavandă',
    ru: 'Семья идёт к своему дому из соломы и глины среди лаванды',
    en: 'Family walking towards their straw and clay house through lavender',
  },
};

/** Which images are AI/3D concept visualisations (must carry the label). */
export const IS_VISUALISATION = new Set(Object.keys(IMAGES));
