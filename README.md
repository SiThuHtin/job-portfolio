[![CI](https://github.com/SiThuHtin/job-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/SiThuHtin/job-portfolio/actions/workflows/ci.yml)

# sithuhtin.com

The website of **Sithu Htin**, IT Systems Administrator & Web Developer based in Thailand. It presents my web and IT services for NGOs and small businesses (websites, managed hosting, email security, wedding invitation websites), selected work, a blog, and my CV.

Live site: [www.sithuhtin.com](https://www.sithuhtin.com)

## Pages

| Page | What it shows |
| --- | --- |
| `/` | Services, selected work, why work with me, latest articles |
| `/pricing` | Web packages, IT services, managed hosting and wedding website packages, with prices and FAQ |
| `/about-me` | Bio, CV download, experience, certifications, skills, all projects |
| `/blog` | Articles on Linux, hosting, email security and IT for NGOs |
| `/contact-me` | Contact form plus email, Viber, WhatsApp, LINE and social links |
| `/admin` | Password-protected editor for blog posts |

## Technology

- **[Next.js 16](https://nextjs.org/)** (App Router) and **React 19**, in JavaScript
- **Tailwind CSS 3** and **Framer Motion**; Plus Jakarta Sans via `next/font`
- **MongoDB** with **Mongoose** for blog posts and comments
- **EmailJS** (server-side) for the contact form, with rate limiting and a honeypot field
- **React Markdown** and **React Syntax Highlighter** for blog posts
- Admin login with an httpOnly JWT cookie and CSRF protection
- SEO: per-page canonical and Open Graph tags, `sitemap.xml`, `robots.txt`, and schema.org structured data
- Hosted on **Vercel**, with Vercel Analytics and Speed Insights

## Where content lives

Most content is plain data, separate from layout:

| File | Content |
| --- | --- |
| `data/site.js` | Name, title, description, contact and social links |
| `data/services.js` | Services, prices, packages, hosting tiers, FAQ |
| `data/projects.js` | Projects and case studies |
| `data/contact.js` | Contact form options |
| `data/testimonials.js` | Client testimonials |

Blog posts are written in Markdown in `/admin` and stored in MongoDB.

## Project structure

- `app/`: pages, layout, global styles and API routes (`app/api`)
- `app/components/`: page sections and shared UI (Navbar, Footer, MarkdownRenderer, CaseStudyCard and others)
- `data/`: site content (see above)
- `lib/`: database connection, Mongoose models, auth helpers, validation, metadata and structured data
- `public/`: images, project screenshots and `cv.pdf`

## Run locally

Requires Node.js 20.9 or newer.

1. Clone and install:
   ```bash
   git clone https://github.com/SiThuHtin/job-portfolio.git
   cd job-portfolio
   npm install
   ```

2. Create `.env.local` (see `.env.example`):
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ADMIN_PASSWORD=your_admin_password
   JWT_SECRET=your_long_random_jwt_secret
   EMAILJS_SERVICE_ID=your_service_id
   EMAILJS_TEMPLATE_ID=your_template_id
   EMAILJS_PUBLIC_KEY=your_public_key
   EMAILJS_PRIVATE_KEY=your_private_key
   CONTACT_TO_EMAIL=your_inbox@example.com
   ```

3. Start the development server and open [http://localhost:3000](http://localhost:3000):
   ```bash
   npm run dev
   ```

Other commands: `npm run build` (production build), `npm run start` (serve the build), `npm run lint` (ESLint).

## Contact

- **Email**: sithuhtin2022@gmail.com
- **LinkedIn**: [See Min Thu](https://www.linkedin.com/in/see-min-thu)
- **GitHub**: [@SiThuHtin](https://github.com/SiThuHtin)
