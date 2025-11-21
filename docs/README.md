# OCO Project Handbook

Single source of truth for how the OCO Accounting & Advisory site is built, deployed, and maintained. Refer to the main `README.md` for a marketing-friendly overview; this guide focuses on day-to-day operations.

---

## Document Map

- **1. Project Snapshot** – Stack, layout, day-to-day development.
- **2. Deployment & Domains** – Vercel, DNS, verification, and QA.
- **3. Contact Form & Email Delivery** – Formspree defaults plus Resend path.
- **4. SEO & Indexing** – What’s in place, how to monitor, and next steps.
- **5. Analytics & Monitoring** – GA4, Vercel Analytics, uptime tooling.
- **6. Launch & Operations Checklist** – Tasks to run through before/after going live.
- **7. Feedback & Context** – Summary of the latest stakeholder review.
- **8. Useful Links** – Direct links to dashboards and validators.

---

## 1. Project Snapshot

| Item | Details |
| --- | --- |
| Framework | Next.js 14 (App Router), React 18, Tailwind CSS |
| Hosting | Vercel (auto-deploys from `main`) |
| Codebase | Root holds the app (`app/`, `components/`, etc.); there is no nested `WebApp/` directory despite older docs referencing one |
| Design System | Branded oranges (`#FF5007`, `#ff6a2e`), black/white contrast, bold typography |
| Default pages | `/`, `/services`, `/about`, `/contact`, `/holding`, `/privacy`, `/cookies`, `/resources` (hidden from indexing) |

### Local development

```bash
npm install
npm run dev
# visit http://localhost:3000
```

- Use Node 18+. No required env vars for local preview while using Formspree defaults.
- Lint/build scripts: `npm run lint`, `npm run build`, `npm run start`.

### Holding page & preview mode

- `app/page.js` currently redirects to `/holding` to keep the marketing site offline.
- Use `?preview=true` to bypass the redirect without editing code, e.g. `https://www.ocoiom.com/?preview=true`.
- The original hero/home content lives in `app/page.backup.js`. To go fully live, move that file back into `app/page.js` and remove the redirect/preview logic.

---

## 2. Deployment & Domains

### Deploying on Vercel

| Method | Steps |
| --- | --- |
| Git push (preferred) | Push to `main` → Vercel auto-builds via project link |
| CLI | `npm i -g vercel`, `vercel`, then `vercel --prod` from repo root |

- Build command `npm run build`, output `.next/` (handled via `vercel.json`).
- If a critical fix is stuck, trigger a redeploy from Vercel Dashboard → Deployments → “Redeploy”.

### Environment variables

| Variable | When Needed | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Required when switching away from the baked-in fallback endpoint | Set for Development + Preview + Production in Vercel; keep it private if using client-side env support |
| `RESEND_API_KEY` | Only if you reactivate the Next.js API route | Store in Vercel & `.env.local`; requires domain verification |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` or HTML file | When verifying Search Console via meta tag | Add to `.env.local` and Vercel, then reference in `app/layout.js` |

### Domain management (`www.ocoiom.com`)

1. **Add domain to Vercel** – Project → Settings → Domains → add both `www.ocoiom.com` and root `ocoiom.com`.
2. **Configure DNS at the registrar** – point `www` to Vercel CNAME target; root either to Vercel A record or a redirect.
3. **Wait for propagation** – typically <1 hr; confirm via `https://www.whatsmydns.net/#A/ocoiom.com`.
4. **Verify HTTPS** – hitting `https://www.ocoiom.com` should show the live site with a valid TLS cert.
5. **Redirect checks** – `http://ocoiom.com` and `http://www.ocoiom.com` should both resolve to the HTTPS www host.

### Domain & launch verification checklist

- `dig www.ocoiom.com` → returns Vercel IP/CNAME.
- Browser shows padlock (SSL) and no warnings.
- `https://www.ocoiom.com/robots.txt` references the correct sitemap.
- `https://www.ocoiom.com/sitemap.xml` lists only production URLs; `/resources` is intentionally omitted.
- Smoke-test `/`, `/services`, `/about`, `/contact`, `/privacy`, `/cookies`, `/holding` on desktop + mobile.
- Contact form submission works end-to-end (see Section 3).
- Optional: run SSL Labs (`https://www.ssllabs.com/ssltest/analyze.html?d=www.ocoiom.com`) and PageSpeed Insights.

---

## 3. Contact Form & Email Delivery

### Current production path – Formspree

The React form posts directly to Formspree. Default endpoint: `https://formspree.io/f/mvglzwzd`, configurable via `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.

**Setup checklist**

1. Create a Formspree account → New Form → send to `enquiries@ocoiom.com`.
2. Copy the endpoint (e.g. `https://formspree.io/f/xxxxxxx`).
3. Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Vercel (Dev/Preview/Prod) and `.env.local`.
4. Redeploy and submit a test entry (confirm email + dashboard logging).

**Notes**

- Free tier covers 50 submissions/month; upgrade as needed.
- Formspree handles validation, spam filtering, and reply-to headers automatically.
- `app/api/contact/route.js` intentionally returns `410 Gone` to make it clear the API route is disabled.

### Optional path – Resend API route

Use this if you prefer server-side email handling:

1. Install `resend` and resurrect `app/api/contact/route.js` to call it.
2. Configure `RESEND_API_KEY` locally and in Vercel.
3. **Verify `ocoiom.com` inside Resend** so you can send to `enquiries@ocoiom.com`:
   - Add the TXT + DKIM + MX records that Resend provides.
   - Wait for verification, then update the `from` domain (e.g. `noreply@ocoiom.com`) and `to` address (`enquiries@ocoiom.com`).
4. Retest the form and watch deliverability (SPF/DKIM/DMARC are handled via verification).

Until verification, Resend only delivers to the email used to create the account, so sticking with Formspree avoids that limitation.

---

## 4. SEO & Indexing

### What’s already implemented

- **Brand-forward metadata** – Every primary page title/description now includes “OCO Limited” and service keywords.
- **Structured data** – Organization schema (AccountingService + ProfessionalService + LocalBusiness), WebSite schema with site search, LocalBusiness schema with Isle of Man coordinates, Breadcrumb schema, FAQ schema (6 questions), and enhanced founder credentials.
- **Resources page hidden** – `/resources` has `noindex, nofollow`, is omitted from the sitemap, removed from breadcrumbs, and blocked in `robots.txt`.
- **Internal links** – Navigation/footer/service cards/CTAs connect every key conversion path.
- **Open Graph/Twitter tags** – Completed for social previews.

### Google Search Console setup

1. Visit [Google Search Console](https://search.google.com/search-console) and add `https://www.ocoiom.com`. Domain properties give the most coverage if you can add DNS TXT records.
2. Verify via HTML meta tag (`NEXT_PUBLIC_GOOGLE_VERIFICATION`), HTML file in `public/`, or DNS TXT.
3. Submit the sitemap: `https://www.ocoiom.com/sitemap.xml`.
4. Use the URL Inspection tool to request indexing for the homepage, `/about`, and `/contact` if they show as “Discovered – not indexed”.
5. Use the Removals tool to ensure `/resources` is suppressed if it ever reappears.

### Indexing issues playbook

- **Not indexed yet?** Request indexing via URL Inspection → “Test Live URL” → “Request Indexing”.
- **Legacy pages showing (e.g., `/resources`)?** File a temporary removal request so Google reprocesses the `noindex`.
- **Coverage report** – Monitor for “Excluded” or “Error” statuses; fix and revalidate as needed.

### Next SEO actions

| Priority | Action |
| --- | --- |
| 🔴 | Launch Google Business Profile for “OCO Limited”; keep NAP info consistent. |
| 🔴 | Submit to Google Search Console & Bing Webmaster Tools, then test rich results (`https://search.google.com/test/rich-results`). |
| 🟡 | Publish fresh content (blog posts, case studies, testimonials) to drive crawl frequency. |
| 🟡 | List the business in Isle of Man directories, ACCA directories, LinkedIn Company page, and other citation sources. |
| 🟢 | Monitor Search Console weekly for clicks/impressions, top queries, and coverage changes. |

**Target keywords to track**: “OCO Limited”, “OCO accounting”, “OCO Isle of Man”, “accounting services Isle of Man”, “business valuation Isle of Man”, “fractional CFO Isle of Man”, “Gary O’Connor ACCA”.

---

## 5. Analytics & Monitoring

- **Google Analytics 4**: create a GA4 property → grab Measurement ID → add the gtag snippet in `app/layout.js` using `next/script`. Verify with Tag Assistant and GA real-time reports.
- **Vercel Analytics**: enable in Project → Settings → Analytics and add `<Analytics />` from `@vercel/analytics/react` to the root layout.
- **Uptime**: optional free monitors via [Uptime Robot](https://uptimerobot.com) or similar (check every 5 minutes, alert Slack/email).
- **Performance**: run [PageSpeed Insights](https://pagespeed.web.dev/) and Core Web Vitals after major updates—target 90+ on both Mobile and Desktop.

---

## 6. Launch & Operations Checklist

### Before taking the holding page down

- ✅ Deploy latest `main` build and confirm `app/page.backup.js` is ready.
- ✅ Verify DNS/SSL/redirect checklist (Section 2).
- ✅ Run smoke tests on modern browsers + mobile (navigation, forms, cookie banner).
- ✅ Confirm privacy & cookie pages reflect latest legal text.
- ✅ Ensure `enquiries@ocoiom.com` appears everywhere (footer, contact page, structured data).

### Post-launch (first week)

1. Submit the sitemap in Google Search Console and request indexing for all primary URLs.
2. Configure Bing Webmaster Tools, `https://business.google.com`, and any other search engines you care about.
3. Enable GA4 + Vercel Analytics; confirm data is flowing.
4. Share the live URL on LinkedIn/other networks to create initial backlinks.
5. Set up uptime alerts and calendar reminders to review analytics/SEO weekly.

### Ongoing monthly tasks

- Review Search Console performance & coverage.
- Check GA4 conversions (contact form submissions) and bounce/engagement metrics.
- Add at least one new piece of content (blog/case study/FAQ) to keep the site fresh.
- Re-run structured data and OG validators after major edits.

---

## 7. Feedback & QA Context

All items from the latest stakeholder feedback round have been implemented:

- Service cards and stats spacing fixes.
- Footer badges updated (ACCA + Certified Business Valuer), privacy/cookie links added, navigation cleaned up.
- Gary’s photo now grayscale; contact and holding pages use `enquiries@ocoiom.com` exclusively.
- Privacy & Cookie pages rebuilt, plus a GDPR-compliant cookie banner.
- Domain references standardized on `https://www.ocoiom.com`.
- Holding page redirect with preview parameter is active (see Section 1).

Use this as the baseline when triaging any future feedback.

---

## 8. Useful Links

- **Vercel Dashboard** – `https://vercel.com/dashboard`
- **Formspree Dashboard** – `https://formspree.io`
- **Resend Domains & API** – `https://resend.com/domains`, `https://resend.com/api-keys`
- **Google Search Console** – `https://search.google.com/search-console`
- **Google Business Profile** – `https://business.google.com`
- **Rich Results Test** – `https://search.google.com/test/rich-results`
- **Open Graph Debugger** – `https://www.opengraph.xyz/`
- **SSL Labs** – `https://www.ssllabs.com/ssltest/`

Keep this file updated as processes evolve.
