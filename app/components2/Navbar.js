"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-20 z-50 bg-neutral-900/95 border-b border-neutral-800 shadow-lg flex items-center transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="text-lg md:text-xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Sithu Htin
        </div>
        <div className="hidden md:flex space-x-10">
          <Link href="/" className="text-md text-white font-semibold hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/my-projects" className="text-md text-white font-semibold hover:text-yellow-400 transition">
            My Projects
          </Link>
          <Link href="/about-me" className="text-md text-white font-semibold hover:text-yellow-400 transition">
            About Me
          </Link>
          <Link href="https://sithu-htin-docs.gitbook.io/sithu-things/" className="text-md text-white font-semibold hover:text-yellow-400 transition">
            My Documentation
          </Link>
          <Link href="/contact-me" className="text-md text-white font-semibold hover:text-yellow-400 transition">
            Contact Me
          </Link>
        </div>
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-white focus:outline-none"
            onClick={handleClick}
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
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-16 left-0 w-full bg-neutral-900/95 border-b border-neutral-800 flex flex-col items-start px-4 py-3 md:hidden z-40 shadow-md">
          <Link
            href="/"
            className="block w-full text-left text-lg text-white font-semibold hover:text-yellow-300 px-4 py-3 rounded-md transition-colors"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <div className="w-full h-px bg-neutral-800 my-1"></div>
          <Link
            href="/my-projects"
            className="block w-full text-left text-lg text-white font-semibold hover:text-yellow-300 px-4 py-3 rounded-md transition-colors"
            onClick={() => setShowMenu(false)}
          >
            My Projects
          </Link>
          <div className="w-full h-px bg-neutral-800 my-1"></div>
          <Link
            href="/about-me"
            className="block w-full text-left text-lg text-white font-semibold hover:text-yellow-300 px-4 py-3 rounded-md transition-colors"
            onClick={() => setShowMenu(false)}
          >
            About Me
          </Link>
          <div className="w-full h-px bg-neutral-800 my-1"></div>
          <Link
            href="/contact-me"
            className="block w-full text-left text-lg text-white font-semibold hover:text-yellow-300 px-4 py-3 rounded-md transition-colors"
            onClick={() => setShowMenu(false)}
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;