/**
 * Site-wide identity and links. Edit here instead of in components.
 *
 * @typedef {Object} SiteLink
 * @property {string} label
 * @property {string} href
 * @property {string} [display] Text shown when the link is listed (e.g. on the contact page)
 */

export const SITE_URL = "https://www.sithuhtin.com";

export const SITE = {
    name: "Sithu Htin",
    alternateName: "See Min Thu",
    title: "IT Systems Administrator & Web Developer",
    description:
        "Sithu Htin — IT Systems Administrator & Web Developer in Mae Sot, Thailand. Websites, secure email and reliable servers for NGOs and small businesses.",
    email: "sithuhtin2022@gmail.com",
};

/** @type {Record<string, SiteLink>} */
export const LINKS = {
    linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/see-min-thu", display: "Sithu Htin (See Min Thu)" },
    github: { label: "GitHub", href: "https://github.com/SiThuHtin", display: "SiThuHtin" },
    facebook: { label: "Facebook", href: "https://www.facebook.com/sithu.htin/", display: "Sithu Htin" },
    docs: { label: "My Documentation", href: "https://sithu-htin-docs.gitbook.io/sithu-things/", display: "Docs" },
    email: { label: "Email", href: `mailto:${SITE.email}`, display: SITE.email },
};
