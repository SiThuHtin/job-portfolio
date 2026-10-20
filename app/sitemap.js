import { getPostsWithFallback } from "@/lib/content";

const SITE_URL = "https://www.sithuhtin.com";

export const revalidate = 3600;

export default async function sitemap() {
    const staticRoutes = ["", "/about-me", "/blog", "/pricing", "/contact-me"].map((path) => ({
        url: `${SITE_URL}${path}`,
        changeFrequency: path === "/blog" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
    }));

    const posts = await getPostsWithFallback();
    const postRoutes = posts.map((post) => ({
        url: `${SITE_URL}${post.slug}`,
        lastModified: post.createdAt,
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...postRoutes];
}
