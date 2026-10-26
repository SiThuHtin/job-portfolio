import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SITE, SITE_URL, LINKS } from "@/data/site";

// Pages set their own canonical and og:url via pageMetadata() in lib/metadata.js
// Self-hosted by Next.js at build time, so every device gets the same font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${SITE.name} | ${SITE.title}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: SITE.name,
              alternateName: SITE.alternateName,
              url: SITE_URL,
              jobTitle: SITE.title,
              sameAs: [LINKS.github.href, LINKS.linkedin.href, LINKS.facebook.href],
            }),
          }}
        />
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
