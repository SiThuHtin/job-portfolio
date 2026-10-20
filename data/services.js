/**
 * Services and prices. Edit here; the homepage and services page read from this file.
 * Web packages are in USD (see app/pricing/PricingPageContent.jsx until Phase 3 moves them here);
 * IT services are in THB.
 *
 * @typedef {Object} ServiceSummary
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} priceFrom   Display price, e.g. "From ฿1,200 / month". Use "TODO(Sithu): …" if unknown.
 * @property {string} icon        lucide-react icon name used by the homepage cards
 * @property {string} href
 */

/** Homepage service cards (4–6). @type {ServiceSummary[]} */
export const HOME_SERVICES = [
    {
        id: "websites",
        name: "Websites & web apps",
        description: "Fast, mobile-friendly websites and web applications built with Next.js or WordPress, which you fully own.",
        priceFrom: "From $300",
        icon: "Globe",
        href: "/pricing",
    },
    {
        id: "hosting",
        name: "Managed hosting & maintenance",
        description: "Secure hosting with SSL, daily backups, uptime monitoring and regular updates, so your site stays online.",
        priceFrom: "From ฿1,200 / month",
        icon: "Server",
        href: "/pricing",
    },
    {
        id: "email-security",
        name: "Email security setup",
        description: "SPF, DKIM and DMARC configured and monitored so your emails reach inboxes and can't be spoofed.",
        priceFrom: "฿6,000 per domain",
        icon: "MailCheck",
        href: "/pricing",
    },
    {
        id: "it-for-organizations",
        name: "IT for your organization",
        description: "Server and website monitoring, staff security awareness workshops and a customized IT policy pack.",
        priceFrom: "From ฿5,000",
        icon: "Building2",
        href: "/pricing",
    },
    {
        id: "cleanup",
        name: "Hacked website cleanup",
        description: "Malware removal and recovery for a compromised website, then hardening to keep it from happening again.",
        priceFrom: "฿4,000 per site",
        icon: "ShieldAlert",
        href: "/pricing",
    },
    {
        id: "wedding",
        name: "Wedding invitation & RSVP websites",
        description: "A personal invitation website for your wedding with RSVP, schedule, photo gallery and guest messages.",
        priceFrom: "TODO(Sithu): price",
        icon: "Heart",
        href: "/pricing",
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
