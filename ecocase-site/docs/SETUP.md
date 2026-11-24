# Launch setup (Cloudflare)

## 1. Pages project
- Cloudflare Dashboard → Workers & Pages → project `ecocase` → Settings → Builds:
  - Root directory: `ecocase-site`
  - Build command: `npm run build`
  - Output: `dist`
  - Production branch: `main` (every other branch gets a preview URL)
- Custom domain `ecocase.md`; add a Redirect Rule `www.ecocase.md/*` → `https://ecocase.md/$1` (301).
- SSL/TLS: Full (strict), Always Use HTTPS on.

## 2. D1 database
```
npx wrangler d1 create ecocase-leads
npx wrangler d1 execute ecocase-leads --remote --file=db/schema.sql
```
Put the returned `database_id` in `wrangler.toml` and bind it as `DB` in Pages → Settings → Bindings.

## 3. Environment variables (Pages → Settings → Variables and secrets)
| Name | Type | Value |
| --- | --- | --- |
| `PUBLIC_GTM_ID` | plain | `GTM-XXXXXXX` |
| `PUBLIC_TURNSTILE_SITEKEY` | plain | Turnstile site key |
| `TURNSTILE_SECRET` | secret | Turnstile secret key |
| `TELEGRAM_BOT_TOKEN` | secret | token from @BotFather |
| `TELEGRAM_CHAT_ID` | secret | chat id that receives leads |
| `SHEETS_WEBHOOK_URL` | secret | Apps Script web app URL (below) |
| `SHEETS_WEBHOOK_SECRET` | secret | any long random string, same as in the script |
| `RESEND_API_KEY` | secret | transactional email key (domain ecocase.md verified) |
| `MAIL_FROM` | plain | `Bordeiaș <site@ecocase.md>` |
| `MAIL_TO` | plain | `info@ecocase.md` |
| `IP_SALT` | secret | any random string |
| `RETRY_TOKEN` | secret | token for `/api/retry` |

Without a channel configured the lead is still stored in D1 and the missing channel is recorded in `delivery`.

## 4. Google Sheet (Apps Script)
Sheet → Extensions → Apps Script, paste, Deploy → Web app (execute as me, anyone):
```js
const SECRET = 'same-as-SHEETS_WEBHOOK_SECRET';
function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  if (d.secret !== SECRET) return ContentService.createTextOutput('forbidden');
  const sh = SpreadsheetApp.getActive().getSheetByName('Leads') || SpreadsheetApp.getActive().insertSheet('Leads');
  const cols = ['id','created','source','lang','name','phone','email','district','area','plot','contact_method','visit_date','visit_time','project','calc','comment','page','utm'];
  if (sh.getLastRow() === 0) sh.appendRow(cols);
  sh.appendRow(cols.map((c) => d[c] || ''));
  return ContentService.createTextOutput('ok');
}
```

## 5. Analytics
GTM container: GA4 config tag (Consent Mode v2 is already sent by the site), Meta Pixel tag with "ad_storage" consent required.
Custom events pushed to `dataLayer`: `lead_form_submit`, `calculator_used`, `calculator_lead`, `phone_click`, `messenger_click`, `email_click`, `vcard_download`, `visit_booked`, `pdf_download`.
Mark `lead_form_submit`, `calculator_lead`, `visit_booked` as GA4 key events.

## 6. Search engines
Google Search Console + Bing Webmaster: verify by DNS, submit `https://ecocase.md/sitemap.xml`.
Check JSON-LD with Rich Results Test on `/ro/`, `/ro/proiecte/bordeias-80/`, `/ro/pret-casa-la-cheie/`.
