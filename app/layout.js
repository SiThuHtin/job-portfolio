import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: {
    default: "Sithu Htin",
    template: "%s | Sithu Htin",
  },
  description:
    "Sithu Htin - IT & Linux Systems Administrator with 4+ years supporting 300+ users. Official portfolio website.",
  metadataBase: new URL("https://www.sithuhtin.com"),
  openGraph: {
    title: "Sithu Htin",
    description:
      "IT & Linux Systems Administrator with 4+ years supporting 300+ users.",
    url: "https://www.sithuhtin.com",
    siteName: "Sithu Htin",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sithu Htin",
              alternateName: "See Min Thu",
              url: "https://www.sithuhtin.com",
              jobTitle: "IT & Linux Systems Administrator",
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
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
