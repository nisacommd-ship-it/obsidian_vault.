// Generates committed static assets: OG images (1200x630, per language),
// favicon PNG/ICO, apple-touch-icon, PWA icons, PNG logo for JSON-LD.
// Run: node scripts/generate-assets.mjs  (needs Playwright + Chromium)
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require(process.env.PLAYWRIGHT_PATH || '/opt/node22/lib/node_modules/playwright')); }
import sharp from 'sharp';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';

const root = new URL('..', import.meta.url).pathname;
const b64 = (p) => readFileSync(root + p).toString('base64');
const font = (s) => `url(data:font/woff2;base64,${b64(`public/fonts/jost-${s}-wght-normal.woff2`)}) format('woff2')`;
const photo = `data:image/jpeg;base64,${b64('src/assets/img/casa-exterior.jpg')}`;
const logo = `data:image/svg+xml;base64,${b64('src/assets/brand/logo-h-green.svg')}`;

const T = {
  ro: ['Case din paie și lut', 'la cheie, în Moldova', 'Clasa A+ · la alb în circa 4 luni · preț fix'],
  ru: ['Дома из соломы и глины', 'под ключ в Молдове', 'Класс A+ · белый вариант около 4 месяцев · фиксированная цена'],
  en: ['Straw and clay houses', 'turnkey in Moldova', 'Class A+ · ready for finishing in ~4 months · fixed price'],
};

const css = `
@font-face{font-family:J;src:${font('latin')};unicode-range:U+0000-00FF,U+2000-206F,U+20AC;font-weight:300 600}
@font-face{font-family:J;src:${font('latin-ext')};unicode-range:U+0100-02BA;font-weight:300 600}
@font-face{font-family:J;src:${font('cyrillic')};unicode-range:U+0400-045F;font-weight:300 600}
*{margin:0;box-sizing:border-box}body{width:1200px;height:630px;font-family:J;display:flex;background:#E4D5BC}
.l{width:560px;padding:56px;display:flex;flex-direction:column;justify-content:space-between}
.l img{width:230px}h1{font-size:54px;font-weight:500;color:#22382B;line-height:1.08}
h1 span{font-weight:300;color:#2F3235;display:block}p{font-size:22px;color:#2F3235}
.r{flex:1;background:url(${photo}) center/cover;position:relative}
.r b{position:absolute;left:16px;bottom:16px;background:rgba(34,56,43,.85);color:#fff;font:400 16px J;padding:6px 10px}
.u{font-size:20px;color:#22382B;font-weight:500;letter-spacing:.04em}`;

const viz = { ro: 'vizualizare', ru: 'визуализация', en: 'visualisation' };
mkdirSync(root + 'public/og', { recursive: true });
mkdirSync(root + 'public/brand', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const [lang, [a, b, c]] of Object.entries(T)) {
  await page.setContent(`<html><style>${css}</style><body><div class="l"><img src="${logo}"><div><h1>${a}<span>${b}</span></h1><p style="margin-top:20px">${c}</p></div><div class="u">ecocase.md</div></div><div class="r"><b>${viz[lang]}</b></div></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ type: 'png' });
  await sharp(png).jpeg({ quality: 84, mozjpeg: true }).toFile(root + `public/og/og-${lang}.jpg`);
}
await browser.close();

const fav = readFileSync(root + 'public/favicon.svg');
for (const [n, s] of [['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512], ['favicon-32.png', 32]]) {
  await sharp(fav, { density: 600 }).resize(s, s).png().toFile(root + 'public/' + n);
}
// Minimal ICO wrapping the 32px PNG
const p32 = readFileSync(root + 'public/favicon-32.png');
const h = Buffer.alloc(22);
h.writeUInt16LE(0, 0); h.writeUInt16LE(1, 2); h.writeUInt16LE(1, 4);
h.writeUInt8(32, 6); h.writeUInt8(32, 7); h.writeUInt16LE(1, 10); h.writeUInt16LE(32, 12);
h.writeUInt32LE(p32.length, 14); h.writeUInt32LE(22, 18);
writeFileSync(root + 'public/favicon.ico', Buffer.concat([h, p32]));
await sharp(readFileSync(root + 'src/assets/brand/logo-h-green.svg'), { density: 200 }).resize(985).png().toFile(root + 'public/brand/logo-h-green.png');
console.log('assets generated');
