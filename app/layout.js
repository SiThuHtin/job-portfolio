import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components2/Navbar";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

/* =========================
   SEO Metadata (Google)
========================= */
export const metadata = {
  title: {
    default: "Sithu Htin",
    template: "%s | Sithu Htin",
  },
  description:
    "Sithu Htin – IT System Engineer & Developer. Official portfolio website.",
  metadataBase: new URL("https://www.sithuhtin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sithu Htin",
    description:
      "IT System Engineer & Developer. Official portfolio website.",
    url: "https://www.sithuhtin.com",
    siteName: "Sithu Htin",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        {/* ===== Schema.org Person (Google SEO) ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sithu Htin",
              url: "https://www.sithuhtin.com",
              jobTitle: "IT System Engineer & Developer",
              sameAs: [
                "https://github.com/SiThuHtin",
                "https://www.linkedin.com/in/see-min-thu",
              ],
            }),
          }}
        />
        <Analytics />
        <SpeedInsights />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
