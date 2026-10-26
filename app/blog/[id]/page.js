import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import CommentSection from "@/app/components/CommentSection";
import { getPostByIdWithFallback } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
    const { id } = await params;

    try {
        const post = await getPostByIdWithFallback(id);
        if (!post) {
            return { title: "Post Not Found" };
        }
        return pageMetadata({
            title: post.title,
            description: post.summary,
            path: `/blog/${id}`,
            type: "article",
            publishedTime: post.createdAt,
        });
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
        <div className="flex flex-col bg-black min-h-screen pt-24 w-full overflow-x-hidden">
            <div className="max-w-4xl mx-auto w-full px-4 md:px-8 pb-20">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors mb-8"
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

                    <h1 className="type-page-title text-white mb-6">
                        {post.title}
                    </h1>

                    <p className="text-xl text-yellow-400/80 mb-8 leading-relaxed font-medium">
                        {post.summary}
                    </p>

                    <div className="flex items-center gap-6 text-gray-400 text-sm">
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
        </div>
    );
}
