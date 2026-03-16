"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 border-t border-neutral-800 text-neutral-400 py-12 transition-all duration-300 mt-auto">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Brand & About */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-extrabold text-white tracking-wide drop-shadow-lg">
                            Sithu Htin
                        </h3>
                        <p className="max-w-xs text-sm leading-relaxed">
                            IT System Engineer & Developer. Building secure, scalable, and responsive applications with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-semibold text-lg">Quick Links</h4>
                        <div className="flex flex-col space-y-2 text-sm">
                            <Link href="/" className="hover:text-yellow-400 transition-colors w-fit">Home</Link>
                            <Link href="/about-me#projects" className="hover:text-yellow-400 transition-colors w-fit">Projects</Link>
                            <Link href="/about-me" className="hover:text-yellow-400 transition-colors w-fit">About Me</Link>
                            <Link href="/blog" className="hover:text-yellow-400 transition-colors w-fit">Blog</Link>
                            <Link href="/contact-me" className="hover:text-yellow-400 transition-colors w-fit">Contact Me</Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="text-white font-semibold text-lg">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/SiThuHtin"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full bg-neutral-800 text-white hover:bg-yellow-400 hover:text-neutral-900 transition-all duration-300 shadow-md"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/see-min-thu"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full bg-neutral-800 text-white hover:bg-yellow-400 hover:text-neutral-900 transition-all duration-300 shadow-md"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <Link
                                href="/contact-me"
                                className="p-2 rounded-full bg-neutral-800 text-white hover:bg-yellow-400 hover:text-neutral-900 transition-all duration-300 shadow-md"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Divider & Copyright */}
                <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
                    <p>© {currentYear} Sithu Htin. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="https://sithu-htin-docs.gitbook.io/sithu-things/" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">
                            Documentation
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
