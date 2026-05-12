"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about-me" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "My Documentation", href: "https://sithu-htin-docs.gitbook.io/sithu-things/", external: true },
  { label: "Contact Me", href: "/contact-me" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  // A link is "active" when the pathname matches the href.
  // For Home ("/") we do an exact match; for others we check startsWith so
  // nested routes (e.g. /blog/123) are also highlighted.
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Desktop link classes
  const desktopLink = (href) =>
    isActive(href)
      ? "relative text-md text-yellow-400 font-semibold transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-yellow-400 after:rounded-full"
      : "relative text-md text-white font-semibold hover:text-yellow-400 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:rounded-full hover:after:w-full after:transition-all after:duration-300";

  // Mobile link classes
  const mobileLink = (href) =>
    isActive(href)
      ? "block w-full text-left text-lg text-yellow-400 font-semibold px-4 py-3 rounded-md bg-yellow-400/10 border-l-2 border-yellow-400 transition-colors"
      : "block w-full text-left text-lg text-white font-semibold hover:text-yellow-300 px-4 py-3 rounded-md transition-colors";

  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-20 z-50 bg-neutral-900/95 border-b border-neutral-800 shadow-lg flex items-center transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Brand */}
        <div className="text-lg md:text-xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Sithu Htin
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map(({ label, href, external }) =>
            external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-md text-white font-semibold hover:text-yellow-400 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-400 after:rounded-full hover:after:w-full after:transition-all after:duration-300"
              >
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className={desktopLink(href)}>
                {label}
              </Link>
            )
          )}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-white focus:outline-none"
            onClick={() => setShowMenu((s) => !s)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="absolute top-16 left-0 w-full bg-neutral-900/95 border-b border-neutral-800 flex flex-col items-start px-4 py-3 md:hidden z-40 shadow-md">
          {navLinks.map(({ label, href, external }, i) => (
            <div key={href} className="w-full">
              {i > 0 && <div className="w-full h-px bg-neutral-800 my-1" />}
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-lg text-white font-semibold hover:text-yellow-300 px-4 py-3 rounded-md transition-colors"
                  onClick={() => setShowMenu(false)}
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className={mobileLink(href)}
                  onClick={() => setShowMenu(false)}
                >
                  {label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
