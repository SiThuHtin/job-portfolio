import { pageMetadata } from "@/lib/metadata";

// The contact page is a client component, so its metadata lives here
export const metadata = pageMetadata({
    title: "Contact",
    description: "Contact Sithu Htin about a website, hosting, email security or IT support for your organization.",
    path: "/contact-me",
});

export default function ContactLayout({ children }) {
    return children;
}
