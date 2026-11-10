<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# sithuhtin.com

Personal website of **Sithu Htin** (full name See Min Thu), IT Systems Administrator & Web Developer. Live at https://www.sithuhtin.com; pushing `main` deploys to Vercel.

Two audiences, in this order:

1. **Clients (primary):** NGOs, community organizations and small businesses in the Thailand–Myanmar border region, Burmese couples wanting wedding invitation websites, and remote clients. The homepage and `/pricing` are for them.
2. **Employers (secondary):** INGO/UN and remote tech recruiters. CV, experience, certifications and skills live on `/about-me`.

## How the site works

Next.js 16 (App Router, **JavaScript, no TypeScript**), React 19, Tailwind 3, framer-motion. Font: Plus Jakarta Sans via `next/font` in `app/layout.js`.

| What | Where |
| --- | --- |
| Name, title, description, links, messaging apps, response time | `data/site.js` |
| Services, prices, web plans, add-ons, IT services, hosting tiers, wedding packages, FAQ | `data/services.js` |
| Projects / case studies (`featured`, `personal`, `hidden` flags) | `data/projects.js` |
| Contact form options and `?plan=` → "What do you need?" mapping | `data/contact.js` |
| Testimonials (section hidden while empty) | `data/testimonials.js` |
| Per-page title / canonical / Open Graph | `pageMetadata()` in `lib/metadata.js` |
| ProfessionalService structured data (built from `data/services.js`) | `lib/structuredData.js` |
| Project screenshots | `public/projects/` (rename a file when replacing it, so cached images aren't served) |

- **Edit content in `data/*.js`, not in components.** Every page reads from those files.
- **Blog posts are in MongoDB.** Sithu writes them in `/admin`; posts are Markdown rendered by `app/components/MarkdownRenderer.js`. That renderer has no table support (no `remark-gfm`). Links to this site stay in the same tab; other websites open in a new tab.
- **Projects come from `data/projects.js`.** The `/admin` Projects tab was removed (its API routes and database records remain, unused).
- **Contact form:** `app/api/contact/route.js` sends through EmailJS. It is rate-limited and has a honeypot field.
- **Type scale:** use the classes in `app/globals.css` (`type-hero-title`, `type-page-title`, `type-section-title`, `type-card-title`, `type-lead`). Don't write ad-hoc heading sizes.
- **Accent colour is yellow only.** Body text is `text-gray-300`, never fainter than `text-gray-400`.

## Rules

- **Never invent facts.** No made-up clients, projects, testimonials, numbers, prices, dates, certificates or contact handles. Use the facts below. For anything else, ask Sithu or add a visible `TODO(Sithu): …`.
- **Location:** on the public site say only **"Thailand"**. Never Mae Sot, Mae Ramat or another town.
- **Languages:** list Burmese and English only (not Thai).
- **Never mention a security incident or compromise** on the public site.
- **Don't modify, delete or migrate** blog posts or other database content. Don't touch `.env*` files or commit secrets.
- Keep existing Burmese text exactly as written.
- **Everything must work at 375px** with no horizontal scroll. Check phone and desktop widths after visual changes.
- **Before committing,** `npm run build` and `npx eslint .` must pass.
- **Small, focused commits** with clear messages. Never force-push or rewrite history. Sithu approves changes before they go live; push only when he says so.
- **If this file conflicts with the code,** stop and ask rather than guessing.

## Verified facts

**Current role:** IT Officer, Health Information System Working Group (HISWG), May 2026 to present.
- Develops and maintains 5 websites and web applications for HISWG.
- Manages and monitors 5 Linux servers (Oracle Cloud and VPS).
- Rolled out SPF/DKIM/DMARC email security.
- Migrated the website from WordPress to Next.js on Oracle Cloud.
- Writes IT policy and runs staff security training.

**Previous roles:**
- IT System Administrator, Shoklo Malaria Research Unit (Borderland Health Foundation), 2024–2026. Supported 300+ users.
- IT Support, Burma Medical Association (BMA), 2022–2024. Supported 50+ users; developed the BMA website.
- Freelance web developer and IT consultant, 2023 to present. 10+ websites delivered; consulted 3 organizations on hosting, email and IT infrastructure.

**Client and personal work** (all may be named, with these limits):
- **4 Rivers-ACTS:** built their website. The live site is **WordPress**. Advised the directors on hosting and email.
- **Wedding and event sites** for Burmese couples (Next.js). Sithu approved showing these links:
  - Phyo & Mon wedding (featured on the homepage)
  - Shun & Ye wedding
  - Phyo & Mon gender reveal
- **Event registration web app** (Next.js, MySQL/PostgreSQL, Docker). Shown anonymously.
- **E-learning platform:** not started yet. Keep it `hidden: true` until Sithu says it has begun.
- **QR Code Generator:** a personal project. The calendar app was removed at Sithu's request.

**Education:** Medical studies (MBBS programme, to final year), University of Medicine 2, Yangon, 2013–2020.

**Certifications:** PSEA, issued by UNICEF in 2025, plus the list in `app/components/Certifications.js`.

**Contact:**
- Email sithuhtin2022@gmail.com
- LinkedIn https://www.linkedin.com/in/see-min-thu
- GitHub https://github.com/SiThuHtin
- Facebook https://www.facebook.com/sithu.htin/
- Docs https://sithu-htin-docs.gitbook.io/sithu-things/
- Viber, WhatsApp (@sithuhtin97) and LINE, all in `data/site.js`

## Confirmed decisions

- **One title everywhere:** "IT Systems Administrator & Web Developer".
- **Homepage order:** hero → services → selected work (4 featured cards) → why work with me → testimonials (hidden) → articles → docs → contact CTA.
- **Web packages:** priced in USD ($300 / $800 / custom).
- **IT services and hosting:** priced in THB.
- **Hosting tiers:** Basic ฿1,200, Standard ฿2,000 and Plus ฿3,500 per month, plus ฿7,000 setup. Each tier builds on the one below; Plus's own VPS replaces the shared server.
- **One hourly rate** for all extra work: ฿700/hour (about $20).
- **Wedding websites:** Classic ฿4,000 and Premium ฿8,000. Add-ons: own domain ~฿800/year, extra language ฿1,000, rush delivery +50%.
- **Project cards** show no "Vercel" tag.

## Open items for Sithu

- Facebook Messenger link and the Tech Tuesday URL. Both are hidden in `data/site.js` until filled in.
- The issuer of the "Information Security and Data Protection Awareness Course" (2025). Sithu doesn't remember it yet, so the card shows only the year.
- The problem and result for each project; testimonials with permission.
- Update `public/cv.pdf`: remove the phone number and town, and add the HISWG role.
- Send one real test message through the contact form.
- Confirm the contact form's budget ranges (`data/contact.js`).
- Optional: a Burmese version of the homepage and services page, built as hidden drafts for Sithu to review first.
- Technical: Tailwind 4 would clear the remaining dev-only `npm audit` warnings.

## Related project

**The Moment**, Sithu's digital invitation business, is a separate site in `../the-moment`, with its own `AGENTS.md`. Once it has a public URL, link to it from the wedding section here (`data/services.js` and `/pricing#wedding`).
