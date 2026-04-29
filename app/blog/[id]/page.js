import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/app/components2/MarkdownRenderer";
import CommentSection from "@/app/components2/CommentSection";
import { getPostByIdWithFallback } from "@/lib/content";

export async function generateMetadata({ params }) {
    const { id } = await params;

    try {
        const post = await getPostByIdWithFallback(id);
        if (!post) {
            return { title: "Post Not Found" };
        }
        return {
            title: post.title,
            description: post.summary,
        };
    } catch {
        return { title: "Blog Post" };
    }
}

export default async function BlogPostPage({ params }) {
    const { id } = await params;
    const post = await getPostByIdWithFallback(id);

    if (!post) {
        notFound();
    }

    return (
        <main className="flex flex-col bg-black min-h-screen pt-24 w-full overflow-x-hidden">
            <div className="max-w-4xl mx-auto w-full px-4 md:px-8 pb-20">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to all posts
                </Link>

                {/* Article Header */}
                <header className="mb-12 border-b border-white/10 pb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-yellow-400/10 text-yellow-500 text-xs font-semibold rounded-full uppercase tracking-wider">
                            {post.category || "General"}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-yellow-400/80 mb-8 leading-relaxed font-medium">
                        {post.summary}
                    </p>

                    <div className="flex items-center gap-6 text-gray-500 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.fullDate}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime || "5 min read"}
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <article className="max-w-none">
                    <MarkdownRenderer content={post.content} />
                </article>

                {/* Comment Section */}
                <CommentSection postId={id} />
            </div>
        </main>
    );
}
