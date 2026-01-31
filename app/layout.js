import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components2/Navbar";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: {
    default: "Sithu Htin",
    template: "%s – Sithu Htin",
  },
  description:
    "Sithu Htin – IT System Engineer & Developer. Official portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
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
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
