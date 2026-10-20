/**
 * Case studies. Only verified facts; anything unknown is a visible TODO(Sithu).
 * Client work without confirmed permission is shown anonymously (no name, link or screenshot).
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title       Shown publicly (anonymous label if no permission)
 * @property {string} client      Client name, or "anonymous"
 * @property {string} category
 * @property {string} problem
 * @property {string} built       What was built
 * @property {string[]} stack
 * @property {string} result
 * @property {string|null} image
 * @property {string|null} link
 * @property {boolean} featured   Shown in "Selected work" on the homepage
 * @property {boolean} clientWork False for employer or personal projects
 */

/** @type {Project[]} */
export const PROJECTS = [
    {
        id: "hiswg",
        title: "Health Information System Working Group",
        client: "HISWG (employer)",
        category: "NGO website & servers",
        problem: "TODO(Sithu): why the website was migrated",
        built: "Migrated the website from WordPress to Next.js on Oracle Cloud. I develop and maintain 5 websites and web applications for HISWG and manage its Linux servers.",
        stack: ["Next.js", "Oracle Cloud", "Linux"],
        result: "TODO(Sithu): result",
        image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/hiswg_fu9cc8.png",
        link: "https://www.hiswg.org/",
        featured: true,
        clientWork: false,
    },
    {
        id: "ngo-website-thailand",
        title: "NGO website, Thailand",
        client: "anonymous",
        category: "NGO website & hosting",
        problem: "TODO(Sithu): problem",
        built: "Built a Next.js website with Payload CMS on a VPS I set up, and advised the directors on hosting and email options.",
        stack: ["Next.js", "Payload CMS", "VPS"],
        result: "TODO(Sithu): result",
        image: null,
        link: null,
        featured: true,
        clientWork: true,
    },
    {
        id: "bma",
        title: "Burma Medical Association",
        client: "BMA (employer)",
        category: "NGO website",
        problem: "TODO(Sithu): what problem the BMA website solved",
        built: "Developed the BMA website while working in IT support there.",
        stack: ["WordPress"],
        result: "TODO(Sithu): result",
        image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/bma_dvypky.png",
        link: "https://www.bmahq.org/",
        featured: true,
        clientWork: false,
    },
    {
        id: "e-learning",
        title: "E-learning platform",
        client: "anonymous",
        category: "Web application",
        problem: "TODO(Sithu): problem",
        built: "Built an e-learning platform for a customer.",
        stack: ["Next.js", "Cloudflare", "PostgreSQL"],
        result: "TODO(Sithu): result",
        image: null,
        link: null,
        featured: false,
        clientWork: true,
    },
    {
        id: "wedding-rsvp",
        title: "Wedding invitation & RSVP websites",
        client: "anonymous",
        category: "Wedding website",
        problem: "TODO(Sithu): problem",
        built: "Delivered 2–3 wedding invitation and RSVP websites for Burmese couples.",
        stack: ["Next.js", "Vercel"],
        result: "TODO(Sithu): result",
        image: null,
        link: null,
        featured: false,
        clientWork: true,
    },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
