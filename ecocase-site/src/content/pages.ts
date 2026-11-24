import type { Locale } from '@/i18n/routes';

type Meta = { title: string; description: string; h1: string; crumb: string };
type QA = { q: string; a: string };

/* ------------------------------------------------------------------ */
export const TURNKEY: Record<Locale, Meta & {
  lead: string; includesH: string; compareH: string; compareLead: string;
  compareCols: string[]; compareRows: string[][]; faq: QA[];
}> = {
  ro: {
    title: 'Case la cheie din paie și lut, preț fix | Bordeiaș',
    description: 'Construcție case la cheie în Moldova din panouri de paie și lut: trei complectări, preț fix în contract, montaj în câteva zile, clasa energetică A+.',
    h1: 'Case la cheie din paie și lut',
    crumb: 'Case la cheie',
    lead: 'Construim casa de la fundație până la cheie, cu preț fix în contract. Pereții vin din fabrică gata calibrați, așa că șantierul durează puțin și nu are surprize.',
    includesH: 'Ce include fiecare complectare',
    compareH: 'Paie și lut, BCA sau cadru cu vată',
    compareLead: 'Comparație calitativă între tehnologiile pe care le aleg cel mai des familiile din Moldova.',
    compareCols: ['', 'Bordeiaș: paie și lut', 'BCA (gazobeton)', 'Cadru cu vată minerală'],
    compareRows: [
      ['Materiale', 'paie, lut, lemn, 100% naturale', 'beton celular, mortar, polistiren pentru izolare', 'lemn, vată minerală, folii, plăci OSB'],
      ['Durata șantierului', 'montaj în câteva zile, la alb în circa 4 luni', 'zidărie și uscare, adesea peste un an', 'rapid, câteva luni'],
      ['Microclimat', 'lutul reglează umiditatea', 'depinde de izolația și ventilația adăugate', 'depinde de folii și ventilație'],
      ['Amprenta de carbon', 'negativă: circa 31 t CO₂ stocate', 'ridicată (ciment, var)', 'medie'],
      ['Fundație', 'ușoară, potrivită și în pantă', 'grea, mai scumpă', 'ușoară'],
    ],
    faq: [
      { q: 'Ce înseamnă casa la cheie la Bordeiaș?', a: 'Casa este gata de locuit: fundație, pereți din panouri de paie și lut, acoperiș, ferestre, rețele, finisaje, baie, bucătărie de bază și încălzire. Lista exactă este anexată la contract.' },
      { q: 'Prețul se poate schimba pe parcurs?', a: 'Nu. Prețul este fix în contract pentru complectarea aleasă. Se schimbă doar dacă tu adaugi lucrări sau opțiuni.' },
      { q: 'Construiți în toată Moldova?', a: 'Da, construim în toate raioanele. Pentru terenurile departe de Chișinău se adaugă transportul panourilor, calculat în ofertă.' },
      { q: 'Ce documente sunt necesare pentru autorizație?', a: 'Ai nevoie de actul de proprietate pe teren și de certificatul de urbanism. Proiectul casei îl pregătim noi și te ajutăm cu dosarul pentru autorizația de construire.' },
    ],
  },
  ru: {
    title: 'Дома под ключ из соломы и глины, фиксированная цена | Bordeiaș',
    description: 'Строительство домов под ключ в Молдове из панелей солома и глина: три комплектации, фиксированная цена в договоре, монтаж за несколько дней, класс A+.',
    h1: 'Дома под ключ из соломы и глины',
    crumb: 'Дома под ключ',
    lead: 'Строим дом от фундамента до ключей по фиксированной цене в договоре. Стены приезжают с завода уже готовыми, поэтому стройка идёт быстро и без сюрпризов.',
    includesH: 'Что входит в каждую комплектацию',
    compareH: 'Солома и глина, газоблок или каркас с минватой',
    compareLead: 'Качественное сравнение технологий, которые чаще всего выбирают семьи в Молдове.',
    compareCols: ['', 'Bordeiaș: солома и глина', 'Газоблок', 'Каркас с минватой'],
    compareRows: [
      ['Материалы', 'солома, глина, дерево, 100% натурально', 'ячеистый бетон, раствор, пенопласт для утепления', 'дерево, минвата, плёнки, OSB'],
      ['Срок стройки', 'монтаж за несколько дней, белый вариант около 4 месяцев', 'кладка и сушка, часто больше года', 'быстро, несколько месяцев'],
      ['Микроклимат', 'глина регулирует влажность', 'зависит от утепления и вентиляции', 'зависит от плёнок и вентиляции'],
      ['Углеродный след', 'отрицательный: около 31 т CO₂ в стенах', 'высокий (цемент, известь)', 'средний'],
      ['Фундамент', 'лёгкий, подходит для склонов', 'тяжёлый, дороже', 'лёгкий'],
    ],
    faq: [
      { q: 'Что значит дом под ключ в Bordeiaș?', a: 'Дом готов к жизни: фундамент, стены из панелей солома и глина, кровля, окна, сети, отделка, санузел, базовая кухня и отопление. Точный перечень прилагается к договору.' },
      { q: 'Может ли цена измениться в процессе?', a: 'Нет. Цена фиксируется в договоре для выбранной комплектации и меняется, только если вы добавляете работы или опции.' },
      { q: 'Вы строите по всей Молдове?', a: 'Да, во всех районах. Для участков далеко от Кишинёва добавляется доставка панелей, она указана в предложении.' },
      { q: 'Какие документы нужны для разрешения?', a: 'Нужны документ о собственности на участок и градостроительный сертификат. Проект дома готовим мы и помогаем собрать пакет на разрешение на строительство.' },
    ],
  },
  en: {
    title: 'Turnkey Straw and Clay Houses, Fixed Price | Bordeiaș',
    description: 'Turnkey house construction in Moldova from straw and clay panels: three packages, a fixed price in the contract, assembly in days, energy class A+.',
    h1: 'Turnkey straw and clay houses',
    crumb: 'Turnkey houses',
    lead: 'We build your house from foundation to keys at a fixed contract price. Walls arrive from the factory ready-made, so the site phase is short and free of surprises.',
    includesH: 'What each package includes',
    compareH: 'Straw and clay vs aerated concrete vs timber frame',
    compareLead: 'A qualitative comparison of the building methods Moldovan families choose most often.',
    compareCols: ['', 'Bordeiaș: straw and clay', 'Aerated concrete', 'Timber frame with mineral wool'],
    compareRows: [
      ['Materials', 'straw, clay, timber, 100% natural', 'aerated concrete, mortar, polystyrene insulation', 'timber, mineral wool, membranes, OSB'],
      ['Site time', 'assembly in days, ready for finishing in about 4 months', 'masonry and drying, often over a year', 'fast, a few months'],
      ['Indoor climate', 'clay regulates humidity', 'depends on added insulation and ventilation', 'depends on membranes and ventilation'],
      ['Carbon footprint', 'negative: about 31 t CO₂ stored', 'high (cement, lime)', 'medium'],
      ['Foundation', 'light, suits sloped plots', 'heavy, more expensive', 'light'],
    ],
    faq: [
      { q: 'What does turnkey mean at Bordeiaș?', a: 'The house is ready to live in: foundation, straw and clay panel walls, roof, windows, utilities, finishes, bathroom, basic kitchen and heating. The exact list is attached to the contract.' },
      { q: 'Can the price change during construction?', a: 'No. The price is fixed in the contract for the chosen package and changes only if you add works or options.' },
      { q: 'Do you build everywhere in Moldova?', a: 'Yes, in every district. For plots far from Chișinău, panel transport is added and shown in the quote.' },
      { q: 'What documents do I need for a permit?', a: 'You need proof of land ownership and an urban planning certificate. We prepare the house design and help you put together the building permit file.' },
    ],
  },
};

/* ------------------------------------------------------------------ */
export const PROJECTS: Record<Locale, Meta & { lead: string; filterArea: string; sort: string; sortAsc: string; sortDesc: string; all: string; empty: string; card: { area: string; floors: string; energy: string; term: string; packages: string; cta: string; similar: string; gallery: string; specs: string; plan: string; planNote: string } }> = {
  ro: {
    title: 'Proiecte de case din paie și lut cu prețuri | Bordeiaș',
    description: 'Catalog de proiecte de case modulare din paie și lut: suprafață, clasa energetică și preț în trei complectări pentru fiecare proiect.',
    h1: 'Proiecte de case cu prețuri',
    crumb: 'Proiecte',
    lead: 'Fiecare proiect are prețul afișat în trei complectări. Linia se extinde: dacă ai nevoie de altă suprafață, proiectăm casa pe aceleași panouri.',
    filterArea: 'Suprafața', sort: 'Sortare', sortAsc: 'Preț crescător', sortDesc: 'Preț descrescător', all: 'Toate', empty: 'Niciun proiect pentru filtrul ales.',
    card: { area: 'Suprafața', floors: 'Nivele', energy: 'Clasa energetică', term: 'Termen la alb', packages: 'Prețuri pe complectări', cta: 'Primește devizul', similar: 'Alte proiecte', gallery: 'Galerie', specs: 'Caracteristici', plan: 'Planul casei', planNote: 'Planul detaliat îl trimitem la cerere, împreună cu devizul.' },
  },
  ru: {
    title: 'Проекты домов из соломы и глины с ценами | Bordeiaș',
    description: 'Каталог проектов модульных домов из соломы и глины: площадь, класс энергоэффективности и цена в трёх комплектациях для каждого проекта.',
    h1: 'Проекты домов с ценами',
    crumb: 'Проекты',
    lead: 'У каждого проекта указана цена в трёх комплектациях. Линейка расширяется: если нужна другая площадь, спроектируем дом на тех же панелях.',
    filterArea: 'Площадь', sort: 'Сортировка', sortAsc: 'Сначала дешевле', sortDesc: 'Сначала дороже', all: 'Все', empty: 'Нет проектов для выбранного фильтра.',
    card: { area: 'Площадь', floors: 'Этажей', energy: 'Класс энергоэффективности', term: 'Срок до белого варианта', packages: 'Цены по комплектациям', cta: 'Получить смету', similar: 'Другие проекты', gallery: 'Галерея', specs: 'Характеристики', plan: 'Планировка', planNote: 'Подробную планировку пришлём по запросу вместе со сметой.' },
  },
  en: {
    title: 'Straw and Clay House Plans with Prices | Bordeiaș',
    description: 'Catalogue of modular straw and clay house designs: floor area, energy class and price in three packages for every project.',
    h1: 'House projects with prices',
    crumb: 'Projects',
    lead: 'Every project shows its price in three packages. The line is growing: if you need another size, we design the house on the same panels.',
    filterArea: 'Floor area', sort: 'Sort', sortAsc: 'Price: low to high', sortDesc: 'Price: high to low', all: 'All', empty: 'No projects match this filter.',
    card: { area: 'Floor area', floors: 'Storeys', energy: 'Energy class', term: 'Ready for finishing in', packages: 'Prices by package', cta: 'Get an estimate', similar: 'Other projects', gallery: 'Gallery', specs: 'Specifications', plan: 'Floor plan', planNote: 'We send the detailed floor plan on request, together with the estimate.' },
  },
};

/* ------------------------------------------------------------------ */
export const PRICE: Record<Locale, Meta & { lead: string; factorsH: string; factors: { t: string; d: string }[]; flatH: string; flatText: string; financeH: string; financeText: string; faq: QA[] }> = {
  ro: {
    title: 'Cât costă o casă la cheie în Moldova: calculator | Bordeiaș',
    description: 'Calculează prețul unei case din paie și lut la cheie: proiect, suprafață, complectare, fundație și opțiuni. Preț orientativ în câteva secunde.',
    h1: 'Prețul casei la cheie: calculator',
    crumb: 'Preț și calculator',
    lead: 'Alege proiectul sau suprafața, complectarea și opțiunile. Calculatorul arată intervalul de preț și termenul de construcție.',
    factorsH: 'De ce depinde prețul',
    factors: [
      { t: 'Suprafața și forma casei', d: 'Cu cât casa e mai compactă, cu atât costă mai puțin metrul pătrat.' },
      { t: 'Complectarea', d: 'Contur cald, la alb sau la cheie: diferența este în finisaje și instalații.' },
      { t: 'Fundația', d: 'Piloții înșurubați sunt cei mai economici; placa sau fundația continuă depind de teren.' },
      { t: 'Opțiunile', d: 'Terasă, pompă de căldură, panouri solare, ferestre panoramice din lemn.' },
      { t: 'Locația', d: 'Transportul panourilor și accesul macaralei la teren.' },
    ],
    flatH: 'Casă sau apartament în Chișinău',
    flatText: 'Un apartament nou în Chișinău costă în 2026 circa 900 până la 1 400 € pe m², fără teren. O casă Bordeiaș îți dă curte, aer curat și facturi la încălzire mai mici cu circa 75%, conform calculelor companiei.',
    financeH: 'Finanțare',
    financeText: 'Din 1 decembrie 2026 sunt anunțate granturi de până la 60 000 € pentru case noi după standardul Casa Pasivă. Te ajutăm să verifici dacă proiectul tău se potrivește și să pregătești documentele.',
    faq: [
      { q: 'Prețul din calculator este final?', a: 'Nu, este orientativ. Prețul fix îl stabilim în contract după vizita pe teren și alegerea proiectului.' },
      { q: 'Ce include prețul pe metru pătrat?', a: 'Depinde de complectare. Contur cald include fundația pe piloți, pereții, acoperișul, ferestrele și ușile exterioare; la alb adaugă rețele și tencuială; la cheie adaugă finisaje, baie, bucătărie de bază și încălzire.' },
      { q: 'Pot plăti în etape?', a: 'Da. Plata se face în etape legate de lucrări: avans, producția panourilor, montaj și predare.' },
    ],
  },
  ru: {
    title: 'Сколько стоит дом под ключ в Молдове: калькулятор | Bordeiaș',
    description: 'Рассчитайте цену дома из соломы и глины под ключ: проект, площадь, комплектация, фундамент и опции. Ориентировочная цена за несколько секунд.',
    h1: 'Цена дома под ключ: калькулятор',
    crumb: 'Цена и калькулятор',
    lead: 'Выберите проект или площадь, комплектацию и опции. Калькулятор покажет диапазон цены и срок строительства.',
    factorsH: 'От чего зависит цена',
    factors: [
      { t: 'Площадь и форма дома', d: 'Чем компактнее дом, тем дешевле квадратный метр.' },
      { t: 'Комплектация', d: 'Тёплый контур, белый вариант или под ключ: разница в отделке и инженерии.' },
      { t: 'Фундамент', d: 'Винтовые сваи самые экономичные; плита или лента зависят от грунта.' },
      { t: 'Опции', d: 'Терраса, тепловой насос, солнечные панели, панорамные деревянные окна.' },
      { t: 'Местоположение', d: 'Доставка панелей и подъезд крана к участку.' },
    ],
    flatH: 'Дом или квартира в Кишинёве',
    flatText: 'Новая квартира в Кишинёве в 2026 году стоит примерно 900 до 1 400 € за м² без земли. Дом Bordeiaș даёт двор, чистый воздух и счета за отопление примерно на 75% ниже, по расчётам компании.',
    financeH: 'Финансирование',
    financeText: 'С 1 декабря 2026 года объявлены гранты до 60 000 € на новые дома по стандарту пассивного дома. Поможем проверить, подходит ли ваш проект, и подготовить документы.',
    faq: [
      { q: 'Цена в калькуляторе окончательная?', a: 'Нет, она ориентировочная. Фиксированную цену определяем в договоре после выезда на участок и выбора проекта.' },
      { q: 'Что входит в цену за квадратный метр?', a: 'Зависит от комплектации. Тёплый контур включает фундамент на сваях, стены, кровлю, окна и входные двери; белый вариант добавляет сети и штукатурку; под ключ добавляет отделку, санузел, базовую кухню и отопление.' },
      { q: 'Можно ли платить поэтапно?', a: 'Да. Оплата поэтапная и привязана к работам: аванс, производство панелей, монтаж и сдача.' },
    ],
  },
  en: {
    title: 'Turnkey House Price in Moldova: Estimator | Bordeiaș',
    description: 'Estimate the price of a turnkey straw and clay house: project, floor area, package, foundation and options. An indicative price in seconds.',
    h1: 'Turnkey house price estimator',
    crumb: 'Price and estimator',
    lead: 'Choose a project or floor area, a package and options. The estimator shows the price range and build time.',
    factorsH: 'What drives the price',
    factors: [
      { t: 'Floor area and shape', d: 'The more compact the house, the lower the price per square metre.' },
      { t: 'Package', d: 'Weathertight shell, ready for finishing or turnkey: the difference is in finishes and services.' },
      { t: 'Foundation', d: 'Screw piles are the most economical; slab or strip foundations depend on the soil.' },
      { t: 'Options', d: 'Terrace, heat pump, solar panels, panoramic timber windows.' },
      { t: 'Location', d: 'Panel transport and crane access to the plot.' },
    ],
    flatH: 'House or flat in Chișinău',
    flatText: 'A new flat in Chișinău costs roughly 900 to 1,400 € per m² in 2026, with no land. A Bordeiaș house gives you a garden, clean air and heating bills about 75% lower, according to company calculations.',
    financeH: 'Financing',
    financeText: 'Grants of up to 60,000 € for new houses built to the Passive House standard have been announced from 1 December 2026. We help you check whether your project qualifies and prepare the documents.',
    faq: [
      { q: 'Is the estimator price final?', a: 'No, it is indicative. The fixed price is set in the contract after a site visit and project choice.' },
      { q: 'What does the price per square metre include?', a: 'It depends on the package. The shell includes pile foundation, walls, roof, windows and exterior doors; ready for finishing adds utilities and plaster; turnkey adds finishes, bathroom, basic kitchen and heating.' },
      { q: 'Can I pay in stages?', a: 'Yes. Payments are staged by works: deposit, panel production, assembly and handover.' },
    ],
  },
};

/* ------------------------------------------------------------------ */
export const TECH: Record<Locale, Meta & { lead: string; specsH: string; specs: [string, string][]; specsNote: string; prodH: string; prodText: string; mountH: string; mountText: string; certH: string; certText: string; faq: QA[] }> = {
  ro: {
    title: 'Panouri din paie presate și lut: tehnologia | Bordeiaș',
    description: 'Cum se produc panourile Bordeiaș: paie presate hidraulic la circa 100 kg/m³, cadru din lemn și lut. Rezistență la foc F120, clasa A+, 100% natural.',
    h1: 'Tehnologia panourilor din paie și lut',
    crumb: 'Tehnologie',
    lead: 'Am adus construcția din paie în fabrică. Paiele se presează, se calibrează și se închid în panouri cu proprietăți măsurabile, la fel de previzibile ca orice material industrial.',
    specsH: 'Caracteristici',
    specs: [
      ['Material', 'paie presate, lut, lemn'],
      ['Densitatea paielor', 'circa 100 kg/m³'],
      ['Rezistența la foc', 'echivalentă clasei F120 (circa 2 ore), potrivit specialiștilor companiei'],
      ['Clasa energetică a casei Bordeiaș-80', 'A+'],
      ['CO₂ stocat într-o casă Bordeiaș-80', 'circa 31 t'],
      ['Aditivi sintetice', 'nu: fără polistiren și adezivi'],
    ],
    specsNote: 'Valorile tehnice detaliate se publică după finalizarea testelor de certificare.',
    prodH: 'Producția în fabrică',
    prodText: 'Paiele rămase pe câmp după recoltare sunt presate hidraulic la densitate mare și fixate într-un cadru de lemn. Lutul se aplică după o rețetă proprie, adaptată materiei prime din Moldova. Know-how-ul a fost construit prin transfer tehnologic de la parteneri europeni cu experiență în construcțiile din paie.',
    mountH: 'Montajul pe teren',
    mountText: 'Panourile ajung pe teren gata calibrate și se montează cu macaraua pe fundație în câteva zile. Pentru că sunt ușoare, sunt potrivite și pentru terenuri în pantă.',
    certH: 'Certificare',
    certText: 'Panoul trece testele de certificare. Publicăm rezultatele pe această pagină imediat ce sunt disponibile.',
    faq: [
      { q: 'De ce paie presate și nu baloți obișnuiți?', a: 'Presarea hidraulică la circa 100 kg/m³ face panoul rigid și uniform, astfel încât proprietățile lui se pot măsura și repeta, spre deosebire de construcția manuală din baloți.' },
      { q: 'Ce rol are lutul?', a: 'Lutul protejează paiele de foc și umiditate, absoarbe și cedează vaporii de apă și menține un microclimat sănătos în casă.' },
      { q: 'Cât durează o casă din paie?', a: 'Casele din paie bine protejate de umiditate durează zeci de ani; în Europa există case din paie locuite de peste o sută de ani.' },
    ],
  },
  ru: {
    title: 'Панели из прессованной соломы и глины: технология | Bordeiaș',
    description: 'Как производятся панели Bordeiaș: солома, спрессованная примерно до 100 кг/м³, деревянная рама и глина. Огнестойкость F120, класс A+, 100% натурально.',
    h1: 'Технология панелей из соломы и глины',
    crumb: 'Технология',
    lead: 'Мы перенесли строительство из соломы на завод. Солому прессуют, калибруют и закрывают в панели с измеримыми свойствами, такими же предсказуемыми, как любой промышленный материал.',
    specsH: 'Характеристики',
    specs: [
      ['Материал', 'прессованная солома, глина, дерево'],
      ['Плотность соломы', 'около 100 кг/м³'],
      ['Огнестойкость', 'соответствует классу F120 (около 2 часов), по данным специалистов компании'],
      ['Класс энергоэффективности Bordeiaș-80', 'A+'],
      ['CO₂ в стенах дома Bordeiaș-80', 'около 31 т'],
      ['Синтетические добавки', 'нет: без пенопласта и клея'],
    ],
    specsNote: 'Подробные технические показатели публикуем после завершения сертификационных испытаний.',
    prodH: 'Производство на заводе',
    prodText: 'Солому, оставшуюся на поле после уборки, гидравлически прессуют до высокой плотности и закрепляют в деревянной раме. Глину наносят по собственному рецепту, адаптированному к молдавскому сырью. Ноу-хау получено через трансфер технологий от европейских партнёров с опытом строительства из соломы.',
    mountH: 'Монтаж на участке',
    mountText: 'Панели приезжают на участок готовыми и монтируются краном на фундамент за несколько дней. Они лёгкие, поэтому подходят и для участков на склоне.',
    certH: 'Сертификация',
    certText: 'Панель проходит сертификационные испытания. Результаты опубликуем на этой странице, как только они будут готовы.',
    faq: [
      { q: 'Почему прессованная солома, а не обычные тюки?', a: 'Гидравлическое прессование примерно до 100 кг/м³ делает панель жёсткой и однородной, поэтому её свойства можно измерить и повторить, в отличие от ручной кладки из тюков.' },
      { q: 'Зачем нужна глина?', a: 'Глина защищает солому от огня и влаги, поглощает и отдаёт водяной пар и поддерживает здоровый микроклимат в доме.' },
      { q: 'Сколько служит дом из соломы?', a: 'Дома из соломы, хорошо защищённые от влаги, служат десятилетиями; в Европе есть жилые соломенные дома старше ста лет.' },
    ],
  },
  en: {
    title: 'Pressed Straw and Clay Panels: Technology | Bordeiaș',
    description: 'How Bordeiaș panels are made: straw pressed to about 100 kg/m³, a timber frame and clay. F120 fire resistance, energy class A+, 100% natural.',
    h1: 'Straw and clay panel technology',
    crumb: 'Technology',
    lead: 'We moved straw construction into the factory. Straw is pressed, calibrated and enclosed in panels with measurable properties, as predictable as any industrial material.',
    specsH: 'Specifications',
    specs: [
      ['Material', 'pressed straw, clay, timber'],
      ['Straw density', 'about 100 kg/m³'],
      ['Fire resistance', 'equivalent to class F120 (about 2 hours), according to the company'],
      ['Energy class of Bordeiaș-80', 'A+'],
      ['CO₂ stored in one Bordeiaș-80', 'about 31 t'],
      ['Synthetic additives', 'none: no polystyrene, no adhesives'],
    ],
    specsNote: 'Detailed technical values will be published once certification tests are completed.',
    prodH: 'Factory production',
    prodText: 'Straw left in the field after harvest is hydraulically pressed to high density and fixed in a timber frame. Clay is applied to our own recipe, adapted to Moldovan raw materials. The know-how was built through technology transfer from European partners experienced in straw construction.',
    mountH: 'On-site assembly',
    mountText: 'Panels arrive ready-made and are lifted onto the foundation by crane in a few days. Because they are light, they also suit sloped plots.',
    certH: 'Certification',
    certText: 'The panel is undergoing certification testing. We will publish the results on this page as soon as they are available.',
    faq: [
      { q: 'Why pressed straw instead of ordinary bales?', a: 'Hydraulic pressing to about 100 kg/m³ makes the panel rigid and uniform, so its properties can be measured and repeated, unlike hand-built bale walls.' },
      { q: 'What does the clay do?', a: 'Clay protects the straw from fire and moisture, absorbs and releases water vapour and keeps the indoor climate healthy.' },
      { q: 'How long does a straw house last?', a: 'Straw houses well protected from moisture last for decades; in Europe there are straw houses that have been lived in for over a hundred years.' },
    ],
  },
};

/* ------------------------------------------------------------------ */
export const ABOUT: Record<Locale, Meta & { lead: string; storyH: string; story: string[]; quote: string; quoteBy: string; grantH: string; grantText: string; numbersH: string }> = {
  ro: {
    title: 'Despre Bordeiaș: case din paie făcute în Moldova',
    description: 'Bordeiaș transformă paiele, un deșeu agricol, în panouri de perete pentru case eficiente energetic. Câștigător GCIP Moldova 2025.',
    h1: 'Despre Bordeiaș',
    crumb: 'Despre noi',
    lead: 'Numele vine de la bordei, casa tradițională a Moldovei, ridicată din pământ, paie și lemn. Păstrăm înțelepciunea ei și o construim cu tehnologia de azi.',
    storyH: 'Povestea noastră',
    story: [
      'Paiele rămase pe câmp după recoltare sunt, de obicei, un deșeu. Noi le transformăm în panouri de perete presate la densitate mare și finisate cu lut, din care se asamblează case cu un consum de energie foarte redus.',
      'Înainte de a porni producția, am făcut peste 50 de interviuri cu familii din Chișinău, iar peste 50 de familii au vizitat casa-pilot ca să simtă microclimatul unei case din paie și lut.',
      'Bordeiaș este marca proiectului; compania care semnează contractele este T-Shirt Online S.R.L.',
    ],
    quote: 'Paiele sunt unul dintre cei mai buni izolatori naturali. Problema nu a fost materialul, ci felul în care se construia cu el. Noi am adus paiele în fabrică, ca să oferim o casă naturală la un preț fix și într-un termen garantat.',
    quoteBy: 'Serghei Scutelniciuc, fondator și director',
    grantH: 'Programul GCIP Moldova',
    grantText: 'Global Cleantech Innovation Programme in Moldova (GCIP Moldova) este un program UNIDO, finanțat de Facilitatea Globală de Mediu (GEF) și implementat în Republica Moldova de IP Centrul Național pentru Energie Durabilă (CNED). În 2025 Bordeiaș s-a numărat printre câștigătorii acceleratorului, cu un grant de 10 000 USD.',
    numbersH: 'Bordeiaș pe scurt',
  },
  ru: {
    title: 'О Bordeiaș: дома из соломы, сделанные в Молдове',
    description: 'Bordeiaș превращает солому, сельскохозяйственный отход, в стеновые панели для энергоэффективных домов. Победитель GCIP Moldova 2025.',
    h1: 'О компании Bordeiaș',
    crumb: 'О нас',
    lead: 'Название происходит от слова bordei: так называли традиционный молдавский дом из земли, соломы и дерева. Мы сохраняем его мудрость и строим по современным технологиям.',
    storyH: 'Наша история',
    story: [
      'Солома, которая остаётся на поле после уборки урожая, обычно считается отходом. Мы превращаем её в плотно спрессованные стеновые панели с глиняной отделкой, из которых собирают дома с очень низким энергопотреблением.',
      'Перед запуском производства мы провели более 50 интервью с семьями из Кишинёва, а более 50 семей побывали в пилотном доме, чтобы почувствовать микроклимат дома из соломы и глины.',
      'Bordeiaș это бренд проекта; договоры заключает компания T-Shirt Online S.R.L.',
    ],
    quote: 'Солома один из лучших натуральных утеплителей. Проблема была не в материале, а в том, как из него строили. Мы перенесли солому на завод, чтобы предложить натуральный дом по фиксированной цене и в гарантированный срок.',
    quoteBy: 'Сергей Скутельничук, основатель и директор',
    grantH: 'Программа GCIP Moldova',
    grantText: 'Global Cleantech Innovation Programme in Moldova (GCIP Moldova) это программа UNIDO, которую финансирует Глобальный экологический фонд (GEF) и реализует в Молдове Национальный центр устойчивой энергетики (CNED). В 2025 году Bordeiaș вошёл в число победителей акселератора и получил грант 10 000 USD.',
    numbersH: 'Bordeiaș в цифрах',
  },
  en: {
    title: 'About Bordeiaș: straw houses made in Moldova',
    description: 'Bordeiaș turns straw, a farm by-product, into wall panels for energy-efficient homes. GCIP Moldova 2025 accelerator winner.',
    h1: 'About Bordeiaș',
    crumb: 'About',
    lead: 'The name comes from bordei, the traditional Moldovan house built of earth, straw and timber. We keep its wisdom and build it with today’s technology.',
    storyH: 'Our story',
    story: [
      'Straw left in the field after harvest is usually treated as waste. We turn it into high-density wall panels finished with clay, used to assemble houses with very low energy use.',
      'Before starting production we interviewed more than 50 families from Chișinău, and more than 50 families visited the pilot house to feel the indoor climate of a straw and clay home.',
      'Bordeiaș is the project brand; contracts are signed by T-Shirt Online S.R.L.',
    ],
    quote: 'Straw is one of the best natural insulators. The problem was never the material but the way people built with it. We brought straw into the factory so we can offer a natural house at a fixed price and on a guaranteed schedule.',
    quoteBy: 'Serghei Scutelniciuc, founder and CEO',
    grantH: 'The GCIP Moldova programme',
    grantText: 'The Global Cleantech Innovation Programme in Moldova (GCIP Moldova) is a UNIDO programme funded by the Global Environment Facility (GEF) and implemented in Moldova by the National Center for Sustainable Energy (CNED). In 2025 Bordeiaș was among the accelerator winners and received a USD 10,000 grant.',
    numbersH: 'Bordeiaș at a glance',
  },
};

/* ------------------------------------------------------------------ */
export const CONTACT: Record<Locale, Meta & { lead: string; hoursLabel: string; hours: string; addressPending: string; vcard: string; legal: string }> = {
  ro: {
    title: 'Contacte și vizită la casa-pilot | Bordeiaș',
    description: 'Sună la +373 79 447 732, scrie pe WhatsApp, Viber sau Telegram ori programează o vizită la casa-pilot Bordeiaș din paie și lut.',
    h1: 'Contacte și vizită la casa-pilot',
    crumb: 'Contacte',
    lead: 'Cel mai bun mod de a înțelege o casă din paie este să intri în ea. Programează o vizită sau scrie-ne în messengerul preferat.',
    hoursLabel: 'Vizite la casa-pilot', hours: 'sâmbătă, 10:00 până la 16:00, cu programare',
    addressPending: 'Adresa exactă a casei-pilot o trimitem după confirmarea vizitei.',
    vcard: 'Salvează contactul în telefon',
    legal: 'Date juridice',
  },
  ru: {
    title: 'Контакты и визит в пилотный дом | Bordeiaș',
    description: 'Звоните +373 79 447 732, пишите в WhatsApp, Viber или Telegram, или запишитесь на визит в пилотный дом Bordeiaș из соломы и глины.',
    h1: 'Контакты и визит в пилотный дом',
    crumb: 'Контакты',
    lead: 'Лучший способ понять дом из соломы это зайти в него. Запишитесь на визит или напишите нам в удобный мессенджер.',
    hoursLabel: 'Визиты в пилотный дом', hours: 'суббота, с 10:00 до 16:00, по записи',
    addressPending: 'Точный адрес пилотного дома пришлём после подтверждения визита.',
    vcard: 'Сохранить контакт в телефон',
    legal: 'Реквизиты',
  },
  en: {
    title: 'Contact and pilot house visits | Bordeiaș',
    description: 'Call +373 79 447 732, message us on WhatsApp, Viber or Telegram, or book a visit to the Bordeiaș straw and clay pilot house.',
    h1: 'Contact and pilot house visits',
    crumb: 'Contact',
    lead: 'The best way to understand a straw house is to step inside one. Book a visit or message us on your favourite app.',
    hoursLabel: 'Pilot house visits', hours: 'Saturday, 10:00 to 16:00, by appointment',
    addressPending: 'We send the exact pilot house address once your visit is confirmed.',
    vcard: 'Save contact to your phone',
    legal: 'Company details',
  },
};

/* ------------------------------------------------------------------ */
export const THANKS: Record<Locale, Meta & { text: string; next: string; back: string }> = {
  ro: { title: 'Mulțumim, am primit cererea | Bordeiaș', description: 'Cererea a fost trimisă.', h1: 'Mulțumim, am primit cererea', crumb: 'Mulțumim', text: 'Te sunăm în aceeași zi lucrătoare. Dacă e urgent, scrie-ne pe WhatsApp sau sună la +373 79 447 732.', next: 'Între timp, citește cum funcționează panoul', back: 'Înapoi la pagina principală' },
  ru: { title: 'Спасибо, заявка получена | Bordeiaș', description: 'Заявка отправлена.', h1: 'Спасибо, заявка получена', crumb: 'Спасибо', text: 'Мы перезвоним в тот же рабочий день. Если срочно, напишите в WhatsApp или позвоните +373 79 447 732.', next: 'А пока узнайте, как устроена панель', back: 'На главную' },
  en: { title: 'Thank you, request received | Bordeiaș', description: 'Your request has been sent.', h1: 'Thank you, we got your request', crumb: 'Thank you', text: 'We will call you back the same working day. If it is urgent, message us on WhatsApp or call +373 79 447 732.', next: 'Meanwhile, see how the panel works', back: 'Back to home' },
};

export const NOT_FOUND: Record<Locale, { title: string; h1: string; text: string; home: string }> = {
  ro: { title: 'Pagina nu există | Bordeiaș', h1: 'Pagina nu a fost găsită', text: 'Poate a fost mutată. Încearcă pagina principală sau proiectele.', home: 'Pagina principală' },
  ru: { title: 'Страница не найдена | Bordeiaș', h1: 'Страница не найдена', text: 'Возможно, она была перемещена. Перейдите на главную или в проекты.', home: 'На главную' },
  en: { title: 'Page not found | Bordeiaș', h1: 'Page not found', text: 'It may have moved. Try the home page or our projects.', home: 'Home page' },
};
