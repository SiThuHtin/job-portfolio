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
 * @property {boolean} featured   Shown in "Selected work" on the homepage and services page
 * @property {boolean} clientWork False for employer or personal projects
 * @property {boolean} personal   Side projects, listed separately and never described as client work
 * @property {boolean|null} clientPermission  May the client be named? null = not asked yet (TODO(Sithu))
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
        personal: false,
        clientPermission: null,
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
        personal: false,
        clientPermission: null, // TODO(Sithu): may the client be named?
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
        personal: false,
        clientPermission: null,
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
        personal: false,
        clientPermission: null, // TODO(Sithu): may the client be named?
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
        personal: false,
        clientPermission: null, // TODO(Sithu): may the client be named?
    },
    {
        id: "qr-code-generator",
        title: "QR Code Generator",
        client: "personal",
        category: "Personal project",
        problem: "",
        built: "A web app that generates QR codes from links or files.",
        stack: ["TypeScript"],
        result: "",
        image: "https://drive.google.com/uc?id=1YAhVtlOQDT-29dhsGfFOAqGmzywZtQZ9",
        link: "https://silly-qr-code-generator.vercel.app/",
        featured: false,
        clientWork: false,
        personal: true,
        clientPermission: null,
    },
    {
        id: "calendar-app",
        title: "My Calendar App",
        client: "personal",
        category: "Personal project",
        problem: "",
        built: "A calendar app for creating daily, monthly and yearly tasks.",
        stack: [], // TODO(Sithu): stack
        result: "",
        image: "https://drive.google.com/uc?id=1C7GRUYOI0WNSqWmJMpxn2owBZrB3D0vL",
        link: "https://my-calendar-one-omega.vercel.app/",
        featured: false,
        clientWork: false,
        personal: true,
        clientPermission: null,
    },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
export const WORK_PROJECTS = PROJECTS.filter((project) => !project.personal);
export const PERSONAL_PROJECTS = PROJECTS.filter((project) => project.personal);
