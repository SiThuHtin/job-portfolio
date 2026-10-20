/**
 * Contact form options. The ?plan= slugs come from buttons on the services page (data/services.js).
 */

export const NEED_OPTIONS = [
    "Website",
    "Hosting & maintenance",
    "Email security",
    "Wedding RSVP website",
    "IT for my organization",
    "Other",
];

/** TODO(Sithu): adjust the budget ranges if you prefer different ones. */
export const BUDGET_OPTIONS = [
    "Not sure yet",
    "Under ฿10,000",
    "฿10,000 – ฿30,000",
    "฿30,000 – ฿60,000",
    "Over ฿60,000",
];

/** Maps a ?plan= slug to the "What do you need?" option it pre-selects. */
export const PLAN_TO_NEED = {
    starter: "Website",
    professional: "Website",
    enterprise: "Website",
    "hosting-basic": "Hosting & maintenance",
    "hosting-standard": "Hosting & maintenance",
    "hosting-plus": "Hosting & maintenance",
    "email-security": "Email security",
    "dmarc-monitoring": "Email security",
    wedding: "Wedding RSVP website",
    "website-cleanup": "IT for my organization",
    "monitoring-setup": "IT for my organization",
    "security-workshop": "IT for my organization",
    "it-policy": "IT for my organization",
    "extra-support": "IT for my organization",
};
