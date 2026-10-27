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
        image: "/projects/hiswg.webp",
        link: "https://www.hiswg.org/",
        featured: true,
        clientWork: false,
        personal: false,
        clientPermission: null,
    },
    {
        id: "4rivers-acts",
        title: "4 Rivers-ACTS Foundation",
        client: "4 Rivers-ACTS",
        category: "NGO website & hosting",
        problem: "TODO(Sithu): problem",
        built: "Built the foundation's WordPress website and advised the directors on hosting and email options.",
        stack: ["WordPress"],
        result: "TODO(Sithu): result",
        image: "/projects/4rivers-acts.png",
        link: "https://www.4rivers-acts.org/",
        featured: true,
        clientWork: true,
        personal: false,
        clientPermission: true,
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
        id: "event-registration",
        title: "Event registration web app",
        client: "anonymous",
        category: "Web application",
        problem: "TODO(Sithu): problem",
        built: "Built an event registration web application.",
        stack: ["Next.js", "MySQL / PostgreSQL", "Docker"],
        result: "TODO(Sithu): result",
        image: null,
        link: null,
        featured: false,
        clientWork: true,
        personal: false,
        clientPermission: null, // TODO(Sithu): may the client be named?
    },
    {
        id: "phyo-mon-wedding",
        title: "Phyo & Mon wedding invitation",
        client: "Phyo & Mon",
        category: "Wedding website",
        problem: "",
        built: "A wedding invitation website with a countdown, love story, photo gallery, event schedule, map with directions, an RSVP form with a message to the couple, and English, Burmese and Japanese language options.",
        stack: ["Next.js", "Vercel"],
        result: "",
        image: "/projects/phyo-mon-wedding-hero.png",
        link: "https://phyo-and-mon-wedding-invitation.vercel.app/",
        featured: true,
        clientWork: true,
        personal: false,
        clientPermission: true,
    },
    {
        id: "shun-ye-wedding",
        title: "Shun & Ye wedding invitation",
        client: "Shun & Ye",
        category: "Wedding website",
        problem: "",
        built: "A wedding invitation website with RSVP, photo gallery, event schedule and a guest message form.",
        stack: ["Next.js"],
        result: "",
        image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1768719152/Screenshot_from_2026-01-18_13-52-02_movgha.png",
        link: "https://wedding-invitation-ys.vercel.app/",
        featured: false,
        clientWork: true,
        personal: false,
        clientPermission: true,
    },
    {
        id: "phyo-mon-gender-reveal",
        title: "Phyo & Mon gender reveal",
        client: "Phyo & Mon",
        category: "Event website",
        problem: "",
        built: "A gender reveal invitation with RSVP, a boy-or-girl guessing poll, countdown, photo gallery, wishes for the baby, and English and Japanese language options.",
        stack: ["Next.js"],
        result: "",
        image: "/projects/phyo-mon-gender-reveal-hero.png",
        link: "https://gender-reveal-of-phyo-and-mon.vercel.app/",
        featured: false,
        clientWork: true,
        personal: false,
        clientPermission: true,
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
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
export const WORK_PROJECTS = PROJECTS.filter((project) => !project.personal);
export const PERSONAL_PROJECTS = PROJECTS.filter((project) => project.personal);
