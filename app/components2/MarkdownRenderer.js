"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Check, Copy } from "lucide-react";

export default function MarkdownRenderer({ content }) {
    return (
        <ReactMarkdown
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    const [copied, setCopied] = useState(false);

                    const handleCopy = () => {
                        navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                    };

                    return !inline && match ? (
                        <div className="relative my-8 rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 group shadow-lg">
                            <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-black/50 to-white/5 border-b border-white/10">
                                <span className="text-xs text-yellow-400 font-mono tracking-wider uppercase">{match[1]}</span>
                                <button
                                    onClick={handleCopy}
                                    className="p-1.5 rounded bg-white/5 hover:bg-white/20 text-gray-300 hover:text-white transition-all flex items-center justify-center border border-white/10"
                                    title="Copy code"
                                >
                                    {copied ? (
                                        <span className="flex items-center gap-1 text-xs text-green-400 font-medium">
                                            <Check className="w-3.5 h-3.5" /> Copied!
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 text-xs font-medium">
                                            <Copy className="w-3.5 h-3.5" /> Copy
                                        </span>
                                    )}
                                </button>
                            </div>
                            <div className="px-2 py-4 overflow-x-auto text-sm sm:text-base custom-scrollbar">
                                <SyntaxHighlighter
                                    style={vscDarkPlus}
                                    language={match[1]}
                                    PreTag="div"
                                    customStyle={{ margin: 0, padding: 0, background: 'transparent' }}
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    ) : (
                        <code className="bg-white/10 text-yellow-300 px-1.5 py-0.5 rounded-md text-[0.9em] font-mono border border-white/5" {...props}>
                            {children}
                        </code>
                    );
                },
                p({ children }) {
                    return <p className="mb-6 leading-relaxed text-gray-300 tracking-wide text-lg">{children}</p>;
                },
                h1({ children }) {
                    return <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-12">{children}</h1>;
                },
                h2({ children }) {
                    return <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 mt-10 border-b border-white/10 pb-3">{children}</h2>;
                },
                h3({ children }) {
                    return <h3 className="text-xl md:text-2xl font-bold text-white mb-4 mt-8">{children}</h3>;
                },
                ul({ children }) {
                    return <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2 marker:text-yellow-500 text-lg leading-relaxed">{children}</ul>;
                },
                ol({ children }) {
                    return <ol className="list-decimal pl-6 mb-6 text-gray-300 space-y-2 marker:text-yellow-500 text-lg leading-relaxed">{children}</ol>;
                },
                a({ href, children }) {
                    return <a href={href} className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 decoration-yellow-400/50 hover:decoration-yellow-300 transition-all font-medium" target="_blank" rel="noopener noreferrer">{children}</a>;
                },
                blockquote({ children }) {
                    return <blockquote className="border-l-4 border-yellow-500 bg-white/5 p-6 rounded-r-xl italic text-gray-400 mb-8 shadow-inner">{children}</blockquote>;
                }
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
