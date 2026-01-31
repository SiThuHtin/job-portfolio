import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components2/Navbar";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Sithu Htin - Portfolio",
  description: "IT systems engineer portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
           <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sithu Htin",
              url: "https://www.sithuhtin.com",
              jobTitle: "IT System Engineer, Full-Stack Developer, Technical Writer",
              sameAs: [
                "https://www.linkedin.com/in/see-min-thu",
                "https://github.com/SiThuHtin",
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
