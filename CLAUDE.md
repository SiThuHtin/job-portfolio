# CLAUDE.md — sithuhtin.com

Instructions for Claude Code working on this repository. Read this whole file before making changes.

## What this site is

Personal website of **Sithu Htin** (full name See Min Thu), an IT & Linux systems administrator and web developer based in Mae Sot, Thailand. Live at https://www.sithuhtin.com. Built with Next.js 16 (App Router, JavaScript — no TypeScript) and React 19; blog posts and projects are stored in MongoDB via Mongoose (`lib/models`), with admin CRUD at `/admin`.

The site has **two audiences**, in this priority order:

1. **Clients (primary).** NGOs, community organizations and small businesses (Thailand–Myanmar border region), Burmese couples in Myanmar and the diaspora wanting wedding RSVP websites, and remote clients. They want to know: what can you do for me, what does it cost, can I trust you, how do I contact you.
2. **Employers (secondary).** INGO/UN and remote tech recruiters. They want the CV, experience, skills and certifications. This content belongs on the About page, not the homepage.

## How to work

- **Start by exploring.** Read the project structure, routing (app/ or pages/), where content/data lives (hard-coded JSX, JSON, CMS, database), how metadata is set, and the package scripts. Then report back a short summary and a plan per phase below **before editing anything**.
- Work **one phase at a time**. After each phase: run the build, summarise what changed, and wait for approval before the next phase.
- Make small, focused commits with clear messages (one task or group of related fixes per commit). Never force-push or rewrite history.
- **Never invent facts.** No made-up clients, projects, testimonials, numbers, prices, dates, certificates or contact handles. Use the verified facts below; anything else gets a visible `TODO(Sithu): …` placeholder and goes into the final TODO list.
- Do not modify, delete or migrate blog posts or other database content. Do not touch `.env*` files or commit secrets.
- Keep existing Burmese text exactly as written.
- Prefer moving content into data files with JSDoc types (e.g. `data/services.js`, `data/projects.js`; the project is JavaScript) over hard-coding it in components, so Sithu can edit content without touching layout.
- Keep the existing visual style unless a task says otherwise. Everything must work at phone width (375px) with no horizontal scroll.
- If something in this file conflicts with what you find in the code, stop and ask rather than guessing.

## Verified facts you may use in copy

**Current role**
- IT Officer, Health Information System Working Group (HISWG), Mae Sot — May 2026 to present.
- Developed and maintains 5 websites and web applications for HISWG.
- Manages and monitors 5 Linux servers (Oracle Cloud and VPS); rolled out SPF/DKIM/DMARC email security; migrated the organization's website from WordPress to Next.js on Oracle Cloud; writes IT policy and runs staff security training.
- Do **not** mention any security incident or compromise on the public site.

**Previous roles**
- IT System Administrator, Shoklo Malaria Research Unit (Borderland Health Foundation), Mae Ramat — 2024 to 2026. Supported 300+ users.
- IT Support, Burma Medical Association (BMA), Mae Sot — 2022 to 2024. Supported 50+ users; developed the BMA website.
- Freelance web developer and IT consultant — 2023 to present. 10+ websites delivered; consulted 3 organizations on hosting, email and IT infrastructure.

**Client work (ask before naming clients publicly — see TODO list)**
- 4 Rivers-ACTS: developed their website (Next.js + Payload CMS) on a VPS he set up; advised directors on hosting and email options.
- Wedding invitation / RSVP websites: 2–3 delivered for Burmese couples.
- E-learning platform for a customer (Next.js, Cloudflare, Postgres).
- Event registration web application (Next.js, MySQL/Postgres, Docker).

**Skills to add or fix:** AWS (EC2, S3), Google Cloud (GCP), Oracle Cloud (spell it correctly — currently "Orcale"), MongoDB / MongoDB Atlas, Payload CMS, Docker, Nginx, SPF/DKIM/DMARC.

**Education:** Medical studies (MBBS programme, to final year), University of Medicine 2, Yangon, 2013–2020.

**Languages:** Burmese (native), English (professional), Thai (basic).

**Contact:** sithuhtin2022@gmail.com · LinkedIn https://www.linkedin.com/in/see-min-thu · GitHub https://github.com/SiThuHtin · Facebook https://www.facebook.com/sithu.htin/ · Docs https://sithu-htin-docs.gitbook.io/sithu-things/

## Phase 1 — Quick fixes

1. **Per-page canonical and Open Graph URLs.** Every page currently declares `canonical` and `og:url` as `https://www.sithuhtin.com`, so Google may treat /pricing, /about-me and blog posts as duplicates of the homepage. Give each page its own canonical, og:url, title and description (use `metadataBase` + `alternates.canonical` if on the App Router). Blog posts should get their own title/description from post data.
2. **Broken social links on About.** The LinkedIn and GitHub icons link to linkedin.com and github.com — point them to the real profiles above. Reuse one shared links config across header, footer, About and Contact.
3. **Typos and consistency.**
   - "Orcale" → "Oracle"; "Wordpress" → "WordPress"; "Negotiatable" → remove the word (the "Not sure which plan fits?" section already covers it).
   - Nav label: the About page says "Pricing", other pages say "Services" — use "Services" everywhere.
   - Use one title everywhere (hero, footer, meta descriptions): **"IT Systems Administrator & Web Developer"** unless Sithu says otherwise.
4. **Certifications.** The two cards showing "[Organization]" → `TODO(Sithu)` issuer and year. The "15+ Certifications" stat doesn't match the ~9 shown — change it to the real count, or replace the stat (see Phase 2).
5. **Duplicated experience markup.** Each experience entry appears three times in the HTML (probably separate mobile/desktop/timeline versions). Render each entry once and handle layout with CSS, so search engines and screen readers see it once.
6. **Pricing trust fixes.** Remove the permanent "Limited offer" crossed-out prices (show the real price only). Change Enterprise "Unlimited revisions" to "Revisions as agreed". Pricing-page Featured Projects heading claims they were built for clients — fix this as part of Phase 4.

## Phase 2 — Client-first homepage

Restructure the homepage in this order:

1. **Hero:** headline about the client result, e.g. "Websites, secure email and reliable servers for NGOs and small businesses". Sub-line: 4+ years running IT for health organizations on the Thailand–Myanmar border; 10+ websites delivered. Primary button "Get a free 15-minute check" → /contact-me; secondary "See services" → /pricing.
2. **Services:** 4–6 cards from `data/services.js` (see Phase 3), each linking to the services page.
3. **Selected work:** 3 case-study cards from `data/projects.ts` (see Phase 4).
4. **Why work with me:** fixed prices; NGO experience (donor budgets, data protection); you own your site, data and domain; local in Mae Sot or remote; Burmese/English/Thai.
5. **Testimonials:** component ready, but hidden until real quotes exist (`TODO(Sithu)`).
6. **Recent articles** (existing) and the existing documentation link.
7. **Final call to action** → contact.

Stats row: replace employer-oriented stats with client-oriented ones: "4+ years in IT", "10+ websites delivered", "3 organizations consulted", "300+ users supported".

**Move to the About page** (decided: About, not a separate /cv page): "Open to IT / Sysadmin roles" badge, Download CV, the full experience timeline (add HISWG as current role from the facts above), certifications and the skills grid. Remove the "Open to roles" badge from the homepage.

## Phase 3 — Services page (/pricing)

Create `data/services.js` with a JSDoc-typed structure (name, short description, price, currency, unit, inclusions, CTA plan slug). Keep existing web development packages, prices and add-ons as they are (USD). Add these IT services (prices in Thai baht):

| Service | Price |
| --- | --- |
| Email Security Setup (SPF, DKIM, DMARC, 4–6 weeks monitoring, step-up to quarantine/reject) | ฿6,000 one-time per domain |
| DMARC monitoring with monthly report | ฿500 / month |
| Managed hosting — Basic / Standard / Plus | ฿1,200 / ฿2,000 / ฿3,500 per month, ฿7,000 setup |
| Hacked website cleanup and recovery | ฿4,000 per site |
| Server and website monitoring setup | ฿5,000 one-time |
| Staff security awareness workshop (half day, up to 15 people) | ฿5,000 |
| IT policy pack, customized | ฿7,000 |
| Extra support | ฿700 / hour |
| Wedding invitation & RSVP website | `TODO(Sithu)` price and inclusions |

Hosting tier details: Basic — shared managed server, SSL, daily backups kept 7 days, uptime monitoring, monthly updates, 2-working-day response. Standard — 30 days of backups, weekly updates, monthly malware scan, 1 hour of changes/month, 1-working-day response. Plus — own VPS (billed at cost), off-site backup copy, weekly malware scan, 3 hours of changes/month, same-day response. Yearly payment: 2 months free. Bundle: Email Security at half price with 12 months of Standard or Plus.

Reconcile the existing "Monthly Maintenance Retainer from $60/mo" add-on with the hosting tiers (link it to them rather than listing two different maintenance offers). Add a short note near prices: "Web packages in USD; IT services in THB. Ask for a quote in your currency." Make sure the FAQ answer to "Can you host the website for me?" points to the hosting tiers. Update the page title and meta description to cover IT services as well as web development.

## Phase 4 — Projects and case studies

Create `data/projects.js` with: title, client (or "anonymous"), category, problem, what was built, stack, result, image, link (optional), `featured` flag, `clientWork` flag.

- Add case-study entries for: 4 Rivers-ACTS website, BMA website, a HISWG website/app, the e-learning platform, a wedding RSVP website. Fill only from verified facts; leave screenshot, link, result and client-permission fields as `TODO(Sithu)`. Entries without permission confirmed display as anonymous (e.g. "NGO website, Thailand").
- Relabel the QR code generator and calendar app as **Personal projects**, shown in a separate section. Do not describe them as client work.
- Fix the pricing-page heading that says all featured projects were built for clients.
- For any client site link (especially wedding sites), check with Sithu before publishing a URL that shows guests' or couples' personal details.

## Phase 5 — Contact page

- Add fields: "What do you need?" (Website, Hosting & maintenance, Email security, Wedding RSVP website, IT for my organization, Other) and an optional budget range. Pre-select the service/plan from the `?plan=` query parameter used by pricing buttons.
- Add messaging options used by Burmese and Thai clients: Facebook Messenger, Viber, LINE, WhatsApp — all `TODO(Sithu)` handles/links; render only the ones filled in.
- Add a "Tech Tuesday" page link (`TODO(Sithu)` URL) and a response-time promise ("I usually reply within 24 hours").
- Check how the form is submitted (API route, email service) and confirm it works and has basic spam protection (honeypot field or rate limit). Report what it uses; don't change providers without asking.

## Phase 6 — Optional (ask first)

- Burmese version of the homepage and services page (i18n). Draft translations must be clearly marked for Sithu to review before going live.
- Testimonials section once real quotes exist.
- Structured data (JSON-LD `Person` and `ProfessionalService`) and a sitemap if missing.

## Definition of done (every phase)

- `npm run build` passes with no new errors or warnings; lint passes if configured.
- Check affected pages at 375px and desktop widths.
- For Phase 1, view the rendered HTML of /, /pricing, /about-me and one blog post and confirm each has its own canonical and og:url.
- End each phase with: a short summary of changes, files touched, and an updated list of every `TODO(Sithu)` that needs his input.
