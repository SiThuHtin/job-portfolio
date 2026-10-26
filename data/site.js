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
        "Sithu Htin — IT Systems Administrator & Web Developer in Thailand. Websites, secure email and reliable servers for NGOs and small businesses.",
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

/**
 * Messaging apps shown on the contact page. Only entries with an href are rendered.
 * TODO(Sithu): fill in the links, e.g. https://m.me/<username>, viber://chat?number=%2B66..., https://line.me/ti/p/~<id>, https://wa.me/66...
 * @type {SiteLink[]}
 */
export const MESSAGING = [
    { label: "Facebook Messenger", href: "", display: "" },
    { label: "Viber", href: "viber://chat?number=%2B66837710800", display: "Chat on Viber" },
    { label: "LINE", href: "", display: "" },
    { label: "WhatsApp", href: "https://wa.me/sithuhtin97", display: "@sithuhtin97" },
];

/** TODO(Sithu): Tech Tuesday page URL. The link is hidden while empty. */
export const TECH_TUESDAY_URL = "";

export const RESPONSE_TIME = "I usually reply within 24 hours.";
