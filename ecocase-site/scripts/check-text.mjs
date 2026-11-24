// Fails the build if site texts contain anything the brief forbids:
// long dashes (— –), double spaces inside text, placeholders, and Romanian
// cedilla letters (ş ţ instead of ș ț).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = ['src', 'public'];
const EXT = /\.(astro|ts|json|md|mdx|txt|vcf|webmanifest)$/;
const RULES = [
  [/[—–]/, 'long dash (— or –)'],
  [/[^\s\n] {2,}[^\s\n/*]/, 'double space'],
  [/lorem ipsum|\[text\]|\[текст\]|TODO:/i, 'placeholder'],
  [/[ŞşŢţ]/, 'cedilla ş/ţ (use ș/ț)'],
];
let errors = 0;
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) return walk(p);
  if (!EXT.test(p)) return;
  readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
    const code = line.trimStart();
    for (const [re, name] of RULES) {
      if (name === 'double space' && (/^\s*(\/\/|\*|<!--)/.test(line) || /\.(astro|ts)$/.test(p) && !/['"`>]/.test(code))) continue;
      if (re.test(code)) { errors++; console.error(`${p}:${i + 1}: ${name}: ${code.slice(0, 120)}`); }
    }
  });
});
ROOTS.forEach(walk);
if (errors) { console.error(`\n${errors} text issue(s). Fix them before publishing.`); process.exit(1); }
console.log('Text check passed.');
