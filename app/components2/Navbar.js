"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-neutral-900/95 border-b border-neutral-800 shadow-lg flex items-center transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="text-xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Sithu Htin
        </div>
        <div className="hidden md:flex space-x-10">
          <Link href="/" className="text-md text-white font-semibold hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/my-projects" className="text-md text-white font-semibold hover:text-yellow-400 transition">
            My Projects
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
              className="w-8 h-8"
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
        <div className="absolute top-20 left-0 w-full bg-gradient-to-r from-yellow-900 via-black to-yellow-900 border-b-4 border-yellow-600 flex flex-col items-center py-4 md:hidden z-40 shadow-xl">
          <Link
            href="/"
            className="block text-lg text-white font-semibold hover:text-yellow-400 px-4 py-2 w-full text-center"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            href="/my-projects"
            className="block text-lg text-white font-semibold hover:text-yellow-400 px-4 py-2 w-full text-center"
            onClick={() => setShowMenu(false)}
          >
            My Projects
          </Link>
          <Link
            href="/contact-me"
            className="block text-lg text-white font-semibold hover:text-yellow-400 px-4 py-2 w-full text-center"
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