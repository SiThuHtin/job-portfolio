/**
 * Services and prices. Edit here; the homepage and services page (/pricing) read from this file.
 * Web packages are in USD; IT services and hosting are in THB.
 *
 * @typedef {Object} ServiceSummary
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} priceFrom   Display price, e.g. "From ฿1,200 / month". Use "TODO(Sithu): …" if unknown.
 * @property {string} icon        lucide-react icon name used by the homepage cards
 * @property {string} href
 * @property {boolean} [hidden] Not shown on the homepage
 */

/** Homepage service cards (4–6). @type {ServiceSummary[]} */
export const HOME_SERVICES = [
    {
        id: "websites",
        name: "Websites & web apps",
        description: "Fast, mobile-friendly websites and web applications built with Next.js or WordPress, which you fully own.",
        priceFrom: "From $300",
        icon: "Globe",
        href: "/pricing#pricing-cards",
    },
    {
        id: "hosting",
        name: "Managed hosting & maintenance",
        description: "Secure hosting with SSL, daily backups, uptime monitoring and regular updates, so your site stays online.",
        priceFrom: "From ฿1,200 / month",
        icon: "Server",
        href: "/pricing#hosting",
    },
    {
        id: "email-security",
        name: "Email security setup",
        description: "SPF, DKIM and DMARC configured and monitored so your emails reach inboxes and can't be spoofed.",
        priceFrom: "฿6,000 per domain",
        icon: "MailCheck",
        href: "/pricing#it-services",
    },
    {
        id: "it-for-organizations",
        name: "IT for your organization",
        description: "Server and website monitoring, staff security awareness workshops and a customized IT policy pack.",
        priceFrom: "From ฿5,000",
        icon: "Building2",
        href: "/pricing#it-services",
    },
    {
        id: "cleanup",
        name: "Hacked website cleanup",
        description: "Malware removal and recovery for a compromised website, then hardening to keep it from happening again.",
        priceFrom: "฿4,000 per site",
        icon: "ShieldAlert",
        href: "/pricing#it-services",
    },
    {
        id: "wedding",
        name: "Wedding invitation & RSVP websites",
        description: "A personal invitation website for your wedding with RSVP, schedule, photo gallery and guest messages.",
        priceFrom: "From ฿4,000",
        icon: "Heart",
        href: "/pricing#wedding",
    },
];

/** Reasons shown in "Why work with me". */
export const WHY_WORK_WITH_ME = [
    { title: "Fixed prices", description: "You know the cost before we start. No hourly surprises." },
    { title: "NGO experience", description: "Years of IT for health organizations: I understand donor budgets and data protection." },
    { title: "You own everything", description: "Your site, your data and your domain stay in your name." },
    { title: "Local or remote", description: "Based in Mae Sot, Thailand, and working with clients anywhere." },
    { title: "Burmese, English & Thai", description: "Talk to me in the language you're most comfortable with." },
];

/** Shown near prices on the services page. */
export const CURRENCY_NOTE = "Web packages in USD; IT services in THB. Ask for a quote in your currency.";

/**
 * @typedef {Object} WebPlan
 * @property {string} id          Also the ?plan= slug used by the contact form
 * @property {string} name
 * @property {string} tagline
 * @property {string} price
 * @property {string} duration    "one-time" or "quote"
 * @property {boolean} highlight
 * @property {string|null} badge
 * @property {string} description
 * @property {{ label: string, note: string|null }[]} features
 * @property {string[]} notIncluded
 * @property {string} cta
 * @property {string} ctaHref
 */

/** Web development packages (USD). @type {WebPlan[]} */
export const WEB_PLANS = [
    {
        id: 'starter',
        name: 'Starter',
        tagline: 'Perfect for small businesses & individuals',
        price: '$300',
        duration: 'one-time',
        highlight: false,
        badge: null,
        description:
            'Get a clean, fast, and professional web presence without breaking the bank. Best for portfolios, NGOs, personal brands, and small local businesses.',
        features: [
            { label: '5-page responsive website', note: null },
            { label: 'Next.js / React build', note: null },
            { label: 'Mobile-friendly design', note: null },
            { label: 'Basic on-page SEO setup', note: null },
            { label: 'Contact form integration', note: null },
            { label: 'Google Analytics setup', note: null },
            { label: '1 round of revisions', note: null },
            { label: '2 weeks delivery', note: null },
            { label: '50% Discount on 1 addon', note: null },
        ],
        notIncluded: ['Custom backend / database', 'Admin dashboard', 'E-commerce features'],
        cta: 'Get Started',
        ctaHref: '/contact-me?plan=starter',
    },
    {
        id: 'professional',
        name: 'Professional',
        tagline: 'Best for growing teams & startups',
        price: '$800',
        duration: 'one-time',
        highlight: true,
        badge: 'Most Popular',
        description:
            'A fully custom website built with modern frameworks. Includes a CMS or database so you can manage your content without touching code. Ideal for startups, booking systems, dashboards, directories, and CMS-driven websites.',
        features: [
            { label: 'Up to 15-page custom website', note: null },
            { label: 'Next.js / React build', note: null },
            { label: 'Custom UI & design system', note: null },
            { label: 'Database & CMS integration', note: null },
            { label: 'Advanced SEO & performance audit', note: null },
            { label: 'Admin dashboard (CRUD)', note: null },
            { label: 'Role-based auth (optional)', note: null },
            { label: '3 rounds of revisions', note: null },
            { label: '4 weeks delivery', note: null },
        ],
        notIncluded: ['Ongoing maintenance', 'Third-party API integrations (add-on)'],
        cta: 'Start Project',
        ctaHref: '/contact-me?plan=professional',
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        tagline: 'For complex, large-scale solutions',
        price: 'Custom',
        duration: 'quote',
        highlight: false,
        badge: null,
        description:
            'Need something bigger? I scope and price enterprise projects individually to match your exact requirements and timeline.',
        features: [
            { label: 'Unlimited pages & features', note: null },
            { label: 'Full-stack custom solution', note: null },
            { label: 'API & third-party integrations', note: null },
            { label: 'Role-based authentication', note: null },
            { label: 'Analytics & monitoring setup', note: null },
            { label: 'Dedicated support & SLA', note: null },
            { label: 'Ongoing maintenance options', note: null },
            { label: 'Revisions as agreed', note: null },
            { label: 'Timeline as agreed', note: null },
        ],
        notIncluded: [],
        cta: 'Request a Quote',
        ctaHref: '/contact-me?plan=enterprise',
    },
];

/** Optional add-ons for web packages. `icon` is a lucide-react icon name; an `href` makes the card a link. */
export const WEB_ADDONS = [
    { icon: 'ShieldCheck', label: 'Domain & SSL Certificate Setup', price: '+$50' },
    { icon: 'Link2', label: 'Third-party API Integration', price: '+$120/each' },
    { icon: 'Mail', label: 'Email Integration (Nodemailer / SendGrid)', price: '+$60' },
    { icon: 'ShoppingCart', label: 'E-commerce (WooCommerce / Stripe)', price: '+$180' },
    { icon: 'RefreshCw', label: 'Monthly maintenance & hosting', price: 'See hosting plans', href: '#hosting' },
    { icon: 'Languages', label: 'Multi-language Support (i18n)', price: '+$100' },
    { icon: 'BarChart3', label: 'Custom Analytics Dashboard', price: '+$150' },
    { icon: 'LayoutDashboard', label: 'Admin Dashboard', price: '+$80' },
];

/**
 * @typedef {Object} ITService
 * @property {string} id          Also the ?plan= slug used by the contact form
 * @property {string} name
 * @property {string} description
 * @property {string} price       Display price, or "TODO(Sithu): …"
 * @property {"THB"|"USD"} currency
 * @property {string} unit        e.g. "one-time per domain", "/ month"
 * @property {string[]} inclusions
 * @property {boolean} [hidden]   Not shown until it has a price
 */

/** IT services (THB). @type {ITService[]} */
export const IT_SERVICES = [
    {
        id: "email-security",
        name: "Email Security Setup",
        description: "Stop spoofing and get your emails delivered, with a safe step-by-step rollout.",
        price: "฿6,000",
        currency: "THB",
        unit: "one-time per domain",
        inclusions: ["SPF, DKIM and DMARC setup", "4–6 weeks of monitoring", "Step-up to quarantine/reject policy"],
    },
    {
        id: "dmarc-monitoring",
        name: "DMARC Monitoring",
        description: "Ongoing monitoring of who is sending email as your domain.",
        price: "฿500",
        currency: "THB",
        unit: "/ month",
        inclusions: ["DMARC report monitoring", "Monthly report"],
    },
    {
        id: "website-cleanup",
        name: "Hacked Website Cleanup & Recovery",
        description: "Malware removal and recovery for a compromised website.",
        price: "฿4,000",
        currency: "THB",
        unit: "per site",
        inclusions: ["Malware cleanup", "Website recovery"],
    },
    {
        id: "monitoring-setup",
        name: "Server & Website Monitoring Setup",
        description: "Know when your server or website goes down before your users do.",
        price: "฿5,000",
        currency: "THB",
        unit: "one-time",
        inclusions: ["Server monitoring setup", "Website monitoring setup"],
    },
    {
        id: "security-workshop",
        name: "Staff Security Awareness Workshop",
        description: "A practical session on safe habits for your team.",
        price: "฿5,000",
        currency: "THB",
        unit: "half day, up to 15 people",
        inclusions: ["Half-day workshop", "Up to 15 participants"],
    },
    {
        id: "it-policy",
        name: "IT Policy Pack",
        description: "IT policies customized to your organization.",
        price: "฿7,000",
        currency: "THB",
        unit: "one-time",
        inclusions: ["Customized IT policy pack"],
    },
    {
        id: "extra-support",
        name: "Extra Support",
        description: "Help with anything not covered by a plan.",
        price: "฿700",
        currency: "THB",
        unit: "/ hour (about $20)",
        inclusions: ["Billed per hour"],
    },
];

/**
 * @typedef {Object} WeddingPackage
 * @property {string} id          Also the ?plan= slug used by the contact form
 * @property {string} name
 * @property {string} price
 * @property {string} tagline
 * @property {string|null} includesFrom
 * @property {string[]} inclusions
 */

/** Wedding invitation & RSVP websites (THB). Prices confirmed by Sithu. @type {WeddingPackage[]} */
export const WEDDING_PACKAGES = [
    {
        id: "wedding-classic",
        name: "Classic",
        price: "฿4,000",
        tagline: "A beautiful invitation, ready fast",
        includesFrom: null,
        inclusions: [
            "Template design with your photos and colours",
            "Names, date, venue, map and schedule",
            "Photo gallery (up to 15 photos)",
            "RSVP form",
            "1 language",
            "Online for 3 months",
            "1 round of revisions",
            "Delivered in 5 days",
        ],
    },
    {
        id: "wedding-premium",
        name: "Premium",
        price: "฿8,000",
        tagline: "Fully custom, in up to 3 languages",
        includesFrom: "Classic",
        inclusions: [
            "Custom design with envelope opening animation",
            "Love story section and larger gallery",
            "Guest messages and an exportable guest list",
            "Up to 3 languages (e.g. English, Burmese, Japanese)",
            "Online for 6 months",
            "3 rounds of revisions",
            "Delivered in 10 days",
        ],
    },
];

export const WEDDING_ADDONS = [
    { label: "Your own domain name (e.g. yournames.com)", price: "about ฿800 / year" },
    { label: "Extra language", price: "฿1,000" },
    { label: "Rush delivery (48 hours)", price: "+50%" },
];

/**
 * @typedef {Object} HostingTier
 * @property {string} id          Also the ?plan= slug used by the contact form
 * @property {string} name
 * @property {string} price       Per month
 * @property {string|null} includesFrom  Tier this one builds on (tiers are cumulative; better items replace weaker ones)
 * @property {string[]} inclusions
 */

export const HOSTING_SETUP_FEE = "฿7,000";

/** Managed hosting tiers (THB per month). @type {HostingTier[]} */
export const HOSTING_TIERS = [
    {
        id: "hosting-basic",
        name: "Basic",
        price: "฿1,200",
        includesFrom: null,
        inclusions: [
            "Shared managed server",
            "SSL certificate",
            "Daily backups, kept 7 days",
            "Uptime monitoring",
            "Monthly updates",
            "2-working-day response",
        ],
    },
    {
        id: "hosting-standard",
        name: "Standard",
        price: "฿2,000",
        includesFrom: "Basic",
        inclusions: [
            "Backups kept 30 days",
            "Weekly updates",
            "Monthly malware scan",
            "1 hour of changes / month",
            "1-working-day response",
        ],
    },
    {
        id: "hosting-plus",
        name: "Plus",
        price: "฿3,500",
        includesFrom: "Standard",
        inclusions: [
            "Your own VPS instead of a shared server (billed at cost)",
            "Off-site backup copy",
            "Weekly malware scan",
            "3 hours of changes / month",
            "Same-day response",
        ],
    },
];

export const HOSTING_NOTES = [
    "Pay yearly and get 2 months free.",
    "Bundle: Email Security Setup at half price with 12 months of Standard or Plus.",
];

/** Services page FAQ. */
export const FAQS = [
    {
        q: 'How do I get started?',
        a: "Click the CTA button on the plan that fits your needs and fill out the contact form. I'll reply within 24 hours with a project intake questionnaire to clarify scope and timeline.",
    },
    {
        q: 'Do you require a deposit?',
        a: 'Yes. I typically ask for a 50% deposit upfront to secure your project slot, with the remaining 50% due upon delivery and approval.',
    },
    {
        q: 'What if I need more pages than the plan includes?',
        a: 'No problem. Additional pages can be added at $30–$60 per page depending on complexity. We can discuss this during the scoping call.',
    },
    {
        q: 'Do you offer revisions after final delivery?',
        a: 'Each plan includes a set number of revision rounds. After that, additional revisions are billed at my hourly rate of ฿700 (about $20).',
    },
    {
        q: 'Will I own the source code?',
        a: 'Absolutely. Upon final payment, you receive full ownership of the source code and all project assets.',
    },
    {
        q: 'Can you host the website for me?',
        a: 'Yes. My managed hosting plans (Basic, Standard and Plus, from ฿1,200/month) include SSL, backups, uptime monitoring and updates. See Managed Hosting above. If you prefer to manage hosting yourself, I can set up Vercel or shared hosting in your name.',
    },
];
