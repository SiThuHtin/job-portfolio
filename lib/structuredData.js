import { SITE, SITE_URL } from "@/data/site";
import { HOSTING_TIERS, IT_SERVICES, WEB_PLANS } from "@/data/services";

// "฿6,000" -> { price: "6000", priceCurrency: "THB" }; returns null for "Custom" or TODO prices
function parsePrice(display) {
    const match = /^([฿$])([\d,]+)$/.exec(display.trim());
    if (!match) {
        return null;
    }
    return { price: match[2].replace(/,/g, ""), priceCurrency: match[1] === "฿" ? "THB" : "USD" };
}

function offer(name, display, description) {
    const price = parsePrice(display);
    if (!price) {
        return null;
    }
    return {
        "@type": "Offer",
        ...price,
        itemOffered: { "@type": "Service", name, ...(description ? { description } : {}) },
    };
}

/** schema.org ProfessionalService for the services page, generated from data/services.js. */
export function professionalServiceJsonLd() {
    const offers = [
        ...WEB_PLANS.map((plan) => offer(`${plan.name} website`, plan.price, plan.tagline)),
        ...IT_SERVICES.filter((service) => !service.hidden).map((service) =>
            offer(service.name, service.price, service.description)
        ),
        ...HOSTING_TIERS.map((tier) => offer(`Managed hosting — ${tier.name} (per month)`, tier.price)),
    ].filter(Boolean);

    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: `${SITE.name} — Web & IT Services`,
        url: `${SITE_URL}/pricing`,
        email: SITE.email,
        description: SITE.description,
        address: { "@type": "PostalAddress", addressLocality: "Mae Sot", addressCountry: "TH" },
        founder: { "@type": "Person", name: SITE.name, url: SITE_URL },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Web & IT Services",
            itemListElement: offers,
        },
    };
}
