"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-blue-700 text-2xl font-bold">Sithu Htin</div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-300 hover:text-blue-500">
            Home
          </Link>
          <Link href="/about-me" className="text-gray-300 hover:text-blue-500">
            About Me
          </Link>
          <Link href="/my-projects" className="text-gray-300 hover:text-blue-500">
            My Projects
          </Link>
          <Link href="/contact-me" className="text-gray-300 hover:text-blue-500">
            Contact Me
          </Link>
        </div>
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-gray-300 focus:outline-none"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {showMenu && (
        <div id="mobile-menu">
          <Link
            href="/"
            className="block text-gray-300 hover:text-blue-500 px-2 py-1"
          >
            Home
          </Link>
          <Link
            href="/about-me"
            className="block text-gray-300 hover:text-blue-500 px-2 py-1"
          >
            About
          </Link>
          <Link
            href="/my-projects"
            className="block text-gray-300 hover:text-blue-500 px-2 py-1"
          >
            My Projects
          </Link>
          <Link
            href="/contact-me"
            className="block text-gray-300 hover:text-blue-500 px-2 py-1"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
