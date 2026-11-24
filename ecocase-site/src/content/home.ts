import type { Locale } from '@/i18n/routes';

export const HOME: Record<Locale, {
  title: string; description: string;
  eyebrow: string; h1: string; h1Light: string; sub: string; priceNote: string;
  stats: { n: string; l: string }[];
  projectsH: string; projectsLead: string;
  panelH: string; panelLead: string; layers: { t: string; d: string }[];
  stepsH: string; steps: { t: string; d: string }[];
  trustH: string; trustLead: string;
  whyH: string; why: { t: string; d: string }[];
  faq: { q: string; a: string }[];
}> = {
  ro: {
    title: 'Case din paie și lut la cheie în Moldova | Bordeiaș',
    description: 'Case modulare din panouri de paie presate și lut, clasa A+, predate la alb în circa 4 luni. Prețuri pe proiecte, calculator și vizită la casa-pilot.',
    eyebrow: 'Case modulare ecologice',
    h1: 'Case din paie și lut,',
    h1Light: 'la cheie, în Moldova',
    sub: 'Panouri prefabricate din paie presate și lut, produse în fabrică și montate pe teren în câteva zile. Casă caldă iarna, răcoroasă vara, cu facturi mici la încălzire.',
    priceNote: 'pentru Bordeiaș-80, contur cald',
    stats: [
      { n: 'A+', l: 'clasa energetică a casei Bordeiaș-80' },
      { n: '~4 luni', l: 'până la predarea casei la alb' },
      { n: '−75%', l: 'la facturile de încălzire față de un apartament*' },
      { n: '31 t', l: 'de CO₂ stocate în pereții unei case' },
    ],
    projectsH: 'Proiecte și prețuri',
    projectsLead: 'Prețul este afișat la fiecare proiect, în trei complectări. Alegi proiectul, iar calculatorul arată suma pentru terenul tău.',
    panelH: 'Cum este construit panoul',
    panelLead: 'Un perete Bordeiaș are trei straturi naturale. Fără polistiren, fără adezivi, fără vată minerală.',
    layers: [
      { t: 'Cadru din lemn', d: 'Structura portantă a panoului, calibrată în fabrică la dimensiuni exacte.' },
      { t: 'Paie presate', d: 'Presate hidraulic până la aproximativ 100 kg/m³: izolație termică și fonică dintr-un deșeu agricol local.' },
      { t: 'Lut', d: 'Tencuială după rețetă proprie. Reglează umiditatea, protejează paiele și creează un microclimat sănătos.' },
    ],
    stepsH: 'De la cerere la casă',
    steps: [
      { t: 'Cerere și vizită', d: 'Discutăm terenul, bugetul și te invităm la casa-pilot să simți microclimatul.' },
      { t: 'Proiect și preț fix', d: 'Alegem proiectul, complectarea și fundația. Primești devizul și contractul cu preț fix.' },
      { t: 'Producția panourilor', d: 'Panourile se produc în hală, la dimensiuni exacte, în timp ce pe teren se face fundația.' },
      { t: 'Montaj în câteva zile', d: 'Panourile se montează cu macaraua. Casa este închisă rapid și protejată de vreme.' },
      { t: 'Predare', d: 'Casa la alb în circa 4 luni de la start sau la cheie, gata de locuit.' },
    ],
    trustH: 'Susținut de GCIP Moldova',
    trustLead: 'În 2025 Bordeiaș a câștigat acceleratorul GCIP Moldova, program UNIDO finanțat de GEF și implementat de CNED, cu un grant de 10 000 USD pentru industrializarea construcției din paie.',
    whyH: 'De ce paie și lut',
    why: [
      { t: 'Natural', d: 'Paie, lut și lemn din Moldova. Pereții respiră și nu emană substanțe chimice.' },
      { t: 'Previzibil', d: 'Panouri din fabrică, cu proprietăți măsurabile, preț fix și termen garantat.' },
      { t: 'Economic', d: 'Izolație groasă și naturală: facturi la încălzire mult mai mici decât în apartament.' },
      { t: 'Pentru orice teren', d: 'Panouri ușoare, potrivite și pentru terenuri în pantă, unde fundațiile grele costă mult.' },
    ],
    faq: [
      { q: 'Cât costă o casă din paie și lut la cheie?', a: 'Prețul depinde de suprafață, complectare și fundație. Calculatorul de pe site arată un preț orientativ pentru proiectul ales, iar prețul fix îl primești în contract, după vizita pe teren.' },
      { q: 'Arde o casă din paie?', a: 'Paiele presate dens și acoperite cu lut ard greu, pentru că nu au aer în interior. Potrivit specialiștilor companiei, panoul Bordeiaș are rezistență la foc echivalentă clasei F120, adică circa două ore.' },
      { q: 'Nu putrezesc paiele și nu apar rozătoare?', a: 'Lutul reglează umiditatea și protejează paiele. Paiele presate la circa 100 kg/m³ nu lasă spații pentru rozătoare, iar panourile sunt ridicate deasupra solului pe fundație.' },
      { q: 'În cât timp se construiește casa?', a: 'Panourile se fac în fabrică în paralel cu fundația, iar montajul durează câteva zile. O casă poate fi predată la alb în aproximativ patru luni.' },
      { q: 'Cât de mici sunt facturile la încălzire?', a: 'Conform calculelor companiei, cu circa 75% mai mici decât într-un apartament obișnuit din oraș. Casa Bordeiaș-80 are clasa energetică A+.' },
      { q: 'Pot vedea o casă din paie înainte să comand?', a: 'Da. Peste 50 de familii au vizitat deja casa-pilot. Programează o vizită pe pagina Contacte, iar managerul confirmă ziua și ora.' },
    ],
  },
  ru: {
    title: 'Дома из соломы и глины под ключ в Молдове | Bordeiaș',
    description: 'Модульные дома из панелей прессованной соломы и глины, класс A+, белый вариант примерно за 4 месяца. Цены на проекты, калькулятор, визит в пилотный дом.',
    eyebrow: 'Экологичные модульные дома',
    h1: 'Дома из соломы и глины',
    h1Light: 'под ключ в Молдове',
    sub: 'Готовые панели из прессованной соломы и глины делаем на заводе и монтируем на участке за несколько дней. Тепло зимой, прохладно летом, маленькие счета за отопление.',
    priceNote: 'за Bordeiaș-80, тёплый контур',
    stats: [
      { n: 'A+', l: 'класс энергоэффективности дома Bordeiaș-80' },
      { n: '~4 мес.', l: 'до сдачи дома в белом варианте' },
      { n: '−75%', l: 'к счетам за отопление по сравнению с квартирой*' },
      { n: '31 т', l: 'CO₂ хранится в стенах одного дома' },
    ],
    projectsH: 'Проекты и цены',
    projectsLead: 'Цена указана у каждого проекта в трёх комплектациях. Выберите проект, и калькулятор покажет сумму для вашего участка.',
    panelH: 'Как устроена панель',
    panelLead: 'Стена Bordeiaș состоит из трёх натуральных слоёв. Без пенопласта, клея и минваты.',
    layers: [
      { t: 'Деревянная рама', d: 'Несущая основа панели, откалиброванная на заводе по точным размерам.' },
      { t: 'Прессованная солома', d: 'Гидравлическое прессование примерно до 100 кг/м³: тепло и звукоизоляция из местного сельхозсырья.' },
      { t: 'Глина', d: 'Штукатурка по собственному рецепту. Регулирует влажность, защищает солому и создаёт здоровый микроклимат.' },
    ],
    stepsH: 'От заявки до дома',
    steps: [
      { t: 'Заявка и визит', d: 'Обсуждаем участок и бюджет, приглашаем в пилотный дом почувствовать микроклимат.' },
      { t: 'Проект и фиксированная цена', d: 'Выбираем проект, комплектацию и фундамент. Вы получаете смету и договор с фиксированной ценой.' },
      { t: 'Производство панелей', d: 'Панели делают в цеху по точным размерам, пока на участке готовят фундамент.' },
      { t: 'Монтаж за несколько дней', d: 'Панели ставят краном. Дом быстро закрыт и защищён от погоды.' },
      { t: 'Сдача', d: 'Белый вариант примерно через 4 месяца от старта или под ключ, готовый к жизни.' },
    ],
    trustH: 'При поддержке GCIP Moldova',
    trustLead: 'В 2025 году Bordeiaș стал победителем акселератора GCIP Moldova, программы UNIDO, финансируемой GEF и реализуемой CNED, и получил грант 10 000 USD на индустриализацию строительства из соломы.',
    whyH: 'Почему солома и глина',
    why: [
      { t: 'Натурально', d: 'Солома, глина и дерево из Молдовы. Стены дышат и не выделяют химии.' },
      { t: 'Предсказуемо', d: 'Заводские панели с измеримыми свойствами, фиксированная цена и срок.' },
      { t: 'Экономно', d: 'Толстая натуральная изоляция: счета за отопление намного ниже, чем в квартире.' },
      { t: 'Для любого участка', d: 'Лёгкие панели подходят и для склонов, где тяжёлый фундамент стоит дорого.' },
    ],
    faq: [
      { q: 'Сколько стоит дом из соломы и глины под ключ?', a: 'Цена зависит от площади, комплектации и фундамента. Калькулятор на сайте показывает ориентировочную цену для выбранного проекта, а фиксированную цену вы получаете в договоре после выезда на участок.' },
      { q: 'Горит ли дом из соломы?', a: 'Плотно прессованная солома под слоем глины горит плохо, потому что внутри почти нет воздуха. По данным специалистов компании, огнестойкость панели Bordeiaș соответствует классу F120, то есть около двух часов.' },
      { q: 'Не сгниёт ли солома и не заведутся ли мыши?', a: 'Глина регулирует влажность и защищает солому. В соломе, спрессованной примерно до 100 кг/м³, нет пустот для грызунов, а панели подняты над землёй на фундаменте.' },
      { q: 'За какой срок строится дом?', a: 'Панели делают на заводе параллельно с фундаментом, монтаж занимает несколько дней. Дом можно сдать в белом варианте примерно за четыре месяца.' },
      { q: 'Насколько ниже счета за отопление?', a: 'По расчётам компании, примерно на 75% ниже, чем в обычной городской квартире. Дом Bordeiaș-80 имеет класс энергоэффективности A+.' },
      { q: 'Можно ли посмотреть дом из соломы до заказа?', a: 'Да. Пилотный дом уже посетили более 50 семей. Запишитесь на визит на странице Контакты, менеджер подтвердит день и время.' },
    ],
  },
  en: {
    title: 'Straw and Clay Turnkey Houses in Moldova | Bordeiaș',
    description: 'Modular houses from prefabricated pressed straw and clay panels, energy class A+, ready for finishing in about 4 months. Prices, estimator, pilot house visits.',
    eyebrow: 'Ecological modular houses',
    h1: 'Straw and clay houses,',
    h1Light: 'turnkey in Moldova',
    sub: 'Prefabricated pressed straw and clay panels, made in our factory and assembled on site in a few days. Warm in winter, cool in summer, with low heating bills.',
    priceNote: 'for Bordeiaș-80, weathertight shell',
    stats: [
      { n: 'A+', l: 'energy class of the Bordeiaș-80 house' },
      { n: '~4 months', l: 'to hand over, ready for finishing' },
      { n: '−75%', l: 'on heating bills compared to a city flat*' },
      { n: '31 t', l: 'of CO₂ stored in the walls of one house' },
    ],
    projectsH: 'Projects and prices',
    projectsLead: 'Every project shows its price in three packages. Choose a project and the estimator calculates the amount for your plot.',
    panelH: 'Inside the panel',
    panelLead: 'A Bordeiaș wall has three natural layers. No polystyrene, no adhesives, no mineral wool.',
    layers: [
      { t: 'Timber frame', d: 'The load-bearing structure of the panel, cut to exact size in the factory.' },
      { t: 'Pressed straw', d: 'Hydraulically pressed to about 100 kg/m³: thermal and acoustic insulation from a local farm by-product.' },
      { t: 'Clay', d: 'Plaster made to our own recipe. It regulates humidity, protects the straw and keeps the indoor climate healthy.' },
    ],
    stepsH: 'From request to house',
    steps: [
      { t: 'Request and visit', d: 'We discuss your plot and budget and invite you to the pilot house to feel the indoor climate.' },
      { t: 'Project and fixed price', d: 'We choose the project, package and foundation. You receive an estimate and a fixed-price contract.' },
      { t: 'Panel production', d: 'Panels are made indoors to exact size while the foundation is prepared on site.' },
      { t: 'Assembly in days', d: 'Panels are lifted into place by crane. The house is closed and weather-protected quickly.' },
      { t: 'Handover', d: 'Ready for finishing in about 4 months from start, or turnkey and ready to move in.' },
    ],
    trustH: 'Supported by GCIP Moldova',
    trustLead: 'In 2025 Bordeiaș won the GCIP Moldova accelerator, a UNIDO programme funded by GEF and implemented by CNED, with a USD 10,000 grant to industrialise straw construction.',
    whyH: 'Why straw and clay',
    why: [
      { t: 'Natural', d: 'Straw, clay and timber from Moldova. Breathable walls with no chemical emissions.' },
      { t: 'Predictable', d: 'Factory-made panels with measurable properties, a fixed price and a guaranteed timeline.' },
      { t: 'Economical', d: 'Thick natural insulation: heating bills far lower than in a flat.' },
      { t: 'For any plot', d: 'Light panels suit sloped plots too, where heavy foundations are expensive.' },
    ],
    faq: [
      { q: 'How much does a turnkey straw and clay house cost?', a: 'The price depends on floor area, package and foundation. The estimator on this site gives an indicative price for the chosen project; the fixed price is set in the contract after a site visit.' },
      { q: 'Does a straw house burn?', a: 'Densely pressed straw covered with clay burns poorly because there is almost no air inside. According to the company, the Bordeiaș panel has fire resistance equivalent to class F120, about two hours.' },
      { q: 'Will the straw rot or attract mice?', a: 'Clay regulates humidity and protects the straw. Straw pressed to about 100 kg/m³ leaves no voids for rodents, and the panels sit above ground on the foundation.' },
      { q: 'How long does it take to build?', a: 'Panels are made in the factory while the foundation is built, and assembly takes a few days. A house can be ready for finishing in about four months.' },
      { q: 'How much lower are heating bills?', a: 'About 75% lower than in a typical city flat, according to company calculations. The Bordeiaș-80 house has energy class A+.' },
      { q: 'Can I see a straw house before ordering?', a: 'Yes. More than 50 families have already visited the pilot house. Book a visit on the Contact page and our manager will confirm the day and time.' },
    ],
  },
};
