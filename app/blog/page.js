import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, TerminalSquare } from "lucide-react";

import connectToDatabase from "@/lib/mongodb";
import Post from "@/lib/models/Post";

export const metadata = {
    title: "Blog",
    description: "Writing about tech, system building, and my journey.",
};

export default async function Blog() {
    let posts = [];

    try {
        await connectToDatabase();
        const rawPosts = await Post.find().sort({ createdAt: -1 });
        const dbPosts = JSON.parse(JSON.stringify(rawPosts));

        if (dbPosts.length > 0) {
            posts = dbPosts.map(post => ({
                id: post._id,
                title: post.title,
                summary: post.summary,
                date: new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                readTime: post.readTime || "5 min read",
                category: post.category || "General",
                slug: `/blog/${post._id}`,
            }));
        }
    } catch (error) {
        console.error("Failed to fetch posts from MongoDB:", error);
    }

    // Fallback sample posts if database is empty or connection fails
    if (posts.length === 0) {
        posts = [
            {
                id: 1,
                title: "Building Resilient IT Infrastructure for Clinics",
                summary:
                    "Learn how I combine my healthcare background with system engineering principles to design bullet-proof workflows for medical environments.",
                date: "Feb 15, 2026",
                readTime: "5 min read",
                category: "Infrastructure",
                slug: "#",
            },
            {
                id: 2,
                title: "From Stethoscope to Server Rack: My Career Transition",
                summary:
                    "A personal look into why I shifted from a final-year medical student to becoming an IT systems builder. The lessons, challenges, and parallel diagnostic skills.",
                date: "Jan 28, 2026",
                readTime: "8 min read",
                category: "Career",
                slug: "#",
            },
            {
                id: 3,
                title: "Automating Daily Operations with Bash and Python",
                summary:
                    "Step-by-step guide to some of the scripts I run daily to manage 300+ users securely and efficiently across multiple devices.",
                date: "Dec 10, 2025",
                readTime: "6 min read",
                category: "Automation",
                slug: "#",
            },
        ];
    }

    return (
        <main className="flex flex-col bg-black min-h-screen pt-20 w-full overflow-x-hidden">
            {/* Header Section */}
            <div className="py-16 px-4 md:px-16 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">Notes</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Thoughts, tutorials, and insights regarding System Administration, Full-Stack Development, and bridging the gap between healthcare workflows and IT.
                </p>
            </div>

            <div className="flex items-center justify-center mb-12 px-4">
                <div className="flex-grow border-t border-yellow-400/20"></div>
                <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Latest Posts</span>
                <div className="flex-grow border-t border-yellow-400/20"></div>
            </div>

            {/* Blog Grid */}
            <div className="px-4 md:px-16 pb-20 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            href={post.slug}
                            key={post.id}
                            className="group flex flex-col bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)] hover:-translate-y-1"
                        >
                            {/* Category & Icon */}
                            <div className="flex justify-between items-center mb-4">
                                <span className="px-3 py-1 bg-yellow-400/10 text-yellow-500 text-xs font-semibold rounded-full uppercase tracking-wider">
                                    {post.category}
                                </span>
                                <TerminalSquare className="text-white/20 group-hover:text-yellow-400/50 w-6 h-6 transition-colors duration-300" />
                            </div>

                            {/* Title */}
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                                {post.title}
                            </h2>

                            {/* Summary */}
                            <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
                                {post.summary}
                            </p>

                            {/* Meta & Link */}
                            <div className="mt-auto">
                                <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                    <span className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                                        Read Article
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
