import { SITE } from "@/data/site";

/**
 * Builds page metadata with its own canonical and Open Graph URL.
 * Next.js replaces (not merges) `openGraph` per page, so every field is set here.
 *
 * @param {{ title?: string, description?: string, path: string, type?: string, publishedTime?: string }} options
 */
export function pageMetadata({ title, description = SITE.description, path, type = "website", publishedTime }) {
    return {
        ...(title ? { title } : {}),
        description,
        alternates: { canonical: path },
        openGraph: {
            title: title ? `${title} | ${SITE.name}` : SITE.name,
            description,
            url: path,
            siteName: SITE.name,
            type,
            ...(publishedTime ? { publishedTime } : {}),
        },
    };
}
