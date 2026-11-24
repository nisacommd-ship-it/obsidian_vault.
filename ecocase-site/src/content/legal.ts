// DRAFT legal texts. Must be reviewed by the owner's lawyer against the
// current personal data protection law of the Republic of Moldova before launch.
import type { Locale } from '@/i18n/routes';
import { SITE } from '@/config/site';

type Doc = { title: string; description: string; h1: string; crumb: string; updated: string; sections: { h: string; p: string[] }[] };

const C = `${SITE.legalName}, IDNO ${SITE.idno}`;

export const PRIVACY: Record<Locale, Doc> = {
  ro: {
    title: 'Politica de confidențialitate a site-ului | Bordeiaș', description: 'Cum prelucrează Bordeiaș datele personale trimise prin formularele site-ului ecocase.md: ce colectăm, de ce, cât păstrăm și drepturile tale.', h1: 'Politica de confidențialitate', crumb: 'Confidențialitate', updated: '2026-11-24',
    sections: [
      { h: 'Operatorul de date', p: [`Operatorul datelor este ${C}, care dezvoltă marca Bordeiaș. Contact: ${SITE.email}, ${SITE.phoneDisplay}.`] },
      { h: 'Ce date colectăm', p: ['Prin formulare: nume, telefon, e-mail (opțional), raionul terenului, suprafața dorită, existența terenului, comentariul, metoda de contact preferată, data vizitei și parametrii calculatorului.', 'Automat: limba și pagina de pe care a fost trimisă cererea, sursa vizitei (etichete UTM), data și ora, adresa IP în formă criptată pentru protecția împotriva spamului.'] },
      { h: 'Scopul prelucrării', p: ['Răspunsul la cerere, pregătirea ofertei, programarea vizitei la casa-pilot și încheierea contractului. Temeiul este consimțământul tău și demersurile precontractuale la cererea ta.'] },
      { h: 'Unde ajung datele', p: ['Cererea se păstrează în baza de date a site-ului (Cloudflare, contul companiei) și se transmite simultan către: e-mailul companiei, tabelul intern de cereri (Google) și botul intern Telegram al companiei. Nu vindem și nu transmitem datele altor terți.'] },
      { h: 'Cât timp păstrăm datele', p: ['Cererile se păstrează 12 luni de la ultima comunicare, iar datele clienților cu contract, pe durata prevăzută de lege pentru documentele contractuale.'] },
      { h: 'Drepturile tale', p: [`Poți cere acces, rectificare, ștergere sau restricționarea prelucrării și îți poți retrage consimțământul oricând, scriind la ${SITE.email}. Ai dreptul să depui o plângere la Centrul Național pentru Protecția Datelor cu Caracter Personal.`] },
      { h: 'Cookie-uri', p: ['Detaliile despre cookie-uri sunt în Politica cookie.'] },
    ],
  },
  ru: {
    title: 'Политика конфиденциальности сайта | Bordeiaș', description: 'Как Bordeiaș обрабатывает персональные данные из форм сайта ecocase.md: что собираем, зачем, сколько храним и какие у вас права.', h1: 'Политика конфиденциальности', crumb: 'Конфиденциальность', updated: '2026-11-24',
    sections: [
      { h: 'Оператор данных', p: [`Оператор данных: ${C}, развивающая бренд Bordeiaș. Контакты: ${SITE.email}, ${SITE.phoneDisplay}.`] },
      { h: 'Какие данные мы собираем', p: ['Через формы: имя, телефон, e-mail (по желанию), район участка, желаемая площадь, наличие участка, комментарий, удобный способ связи, дата визита и параметры калькулятора.', 'Автоматически: язык и страница, с которой отправлена заявка, источник визита (UTM-метки), дата и время, IP-адрес в зашифрованном виде для защиты от спама.'] },
      { h: 'Цель обработки', p: ['Ответ на заявку, подготовка предложения, запись на визит в пилотный дом и заключение договора. Основание: ваше согласие и преддоговорные действия по вашему запросу.'] },
      { h: 'Куда передаются данные', p: ['Заявка сохраняется в базе данных сайта (Cloudflare, аккаунт компании) и одновременно передаётся на почту компании, во внутреннюю таблицу заявок (Google) и во внутренний Telegram-бот компании. Мы не продаём и не передаём данные другим третьим лицам.'] },
      { h: 'Срок хранения', p: ['Заявки хранятся 12 месяцев с последнего контакта, данные клиентов с договором хранятся в течение срока, установленного законом для договорных документов.'] },
      { h: 'Ваши права', p: [`Вы можете запросить доступ, исправление, удаление или ограничение обработки и в любой момент отозвать согласие, написав на ${SITE.email}. Вы вправе подать жалобу в Национальный центр по защите персональных данных.`] },
      { h: 'Cookie', p: ['Подробности о cookie в Политике cookie.'] },
    ],
  },
  en: {
    title: 'Website privacy policy | Bordeiaș straw houses', description: 'How Bordeiaș processes personal data sent through the ecocase.md forms: what we collect, why, how long we keep it and your rights.', h1: 'Privacy policy', crumb: 'Privacy', updated: '2026-11-24',
    sections: [
      { h: 'Data controller', p: [`The data controller is ${C}, which develops the Bordeiaș brand. Contact: ${SITE.email}, ${SITE.phoneDisplay}.`] },
      { h: 'What we collect', p: ['Through forms: name, phone, email (optional), plot district, desired floor area, whether you have a plot, comment, preferred contact method, visit date and estimator settings.', 'Automatically: the language and page the request came from, visit source (UTM tags), date and time, and a hashed IP address for spam protection.'] },
      { h: 'Purpose', p: ['Answering your request, preparing a quote, booking a pilot house visit and concluding a contract. The legal basis is your consent and pre-contractual steps at your request.'] },
      { h: 'Where the data goes', p: ['The request is stored in the website database (Cloudflare, company account) and sent at the same time to the company email, the internal leads spreadsheet (Google) and the company’s internal Telegram bot. We do not sell or share data with other third parties.'] },
      { h: 'Retention', p: ['Requests are kept for 12 months after the last contact; customer data under contract is kept for the period required by law for contract documents.'] },
      { h: 'Your rights', p: [`You can request access, correction, deletion or restriction of processing and withdraw consent at any time by writing to ${SITE.email}. You may lodge a complaint with the National Center for Personal Data Protection.`] },
      { h: 'Cookies', p: ['Cookie details are in the Cookie policy.'] },
    ],
  },
};

export const COOKIES: Record<Locale, Doc> = {
  ro: {
    title: 'Politica cookie a site-ului ecocase.md | Bordeiaș', description: 'Ce cookie-uri folosește site-ul Bordeiaș: necesare, de analiză și de marketing, și cum îți schimbi oricând alegerea.', h1: 'Politica cookie', crumb: 'Cookie', updated: '2026-11-24',
    sections: [
      { h: 'Cookie-uri necesare', p: ['Păstrează alegerea ta privind cookie-urile și protecția formularelor împotriva spamului (Cloudflare Turnstile). Nu pot fi dezactivate.'] },
      { h: 'Cookie-uri de analiză', p: ['Google Analytics 4 prin Google Tag Manager, doar cu acordul tău. Ne arată ce pagini sunt utile și de unde vin cererile.'] },
      { h: 'Cookie-uri de marketing', p: ['Meta Pixel (Facebook, Instagram), doar cu acordul tău, pentru măsurarea reclamelor.'] },
      { h: 'Cum îți schimbi alegerea', p: ['Apasă „Setări cookie” în subsolul site-ului sau șterge cookie-urile din browser.'] },
    ],
  },
  ru: {
    title: 'Политика cookie сайта ecocase.md | Bordeiaș', description: 'Какие cookie использует сайт Bordeiaș: необходимые, аналитические и маркетинговые, и как в любой момент изменить выбор.', h1: 'Политика cookie', crumb: 'Cookie', updated: '2026-11-24',
    sections: [
      { h: 'Необходимые cookie', p: ['Хранят ваш выбор по cookie и защиту форм от спама (Cloudflare Turnstile). Отключить нельзя.'] },
      { h: 'Аналитические cookie', p: ['Google Analytics 4 через Google Tag Manager, только с вашего согласия. Показывают, какие страницы полезны и откуда приходят заявки.'] },
      { h: 'Маркетинговые cookie', p: ['Meta Pixel (Facebook, Instagram), только с вашего согласия, для оценки рекламы.'] },
      { h: 'Как изменить выбор', p: ['Нажмите «Настройки cookie» в подвале сайта или очистите cookie в браузере.'] },
    ],
  },
  en: {
    title: 'Cookie policy of ecocase.md | Bordeiaș straw houses', description: 'Which cookies the Bordeiaș website uses: necessary, analytics and marketing, and how to change your choice at any time.', h1: 'Cookie policy', crumb: 'Cookies', updated: '2026-11-24',
    sections: [
      { h: 'Necessary cookies', p: ['Store your cookie choice and protect forms from spam (Cloudflare Turnstile). They cannot be switched off.'] },
      { h: 'Analytics cookies', p: ['Google Analytics 4 via Google Tag Manager, only with your consent. They show which pages help and where requests come from.'] },
      { h: 'Marketing cookies', p: ['Meta Pixel (Facebook, Instagram), only with your consent, to measure advertising.'] },
      { h: 'Changing your choice', p: ['Click “Cookie settings” in the site footer or clear cookies in your browser.'] },
    ],
  },
};
