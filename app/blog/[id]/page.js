import connectToDatabase from "@/lib/mongodb";
import Post from "@/lib/models/Post";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/app/components2/MarkdownRenderer";
import CommentSection from "@/app/components2/CommentSection";

export async function generateMetadata({ params }) {
    try {
        const adminWait = await connectToDatabase();
        // Await params if it's considered a promise in Next 15+ 
        const { id } = await params;
        const post = await Post.findById(id);
        if (!post) {
            return { title: 'Post Not Found' };
        }
        return {
            title: post.title,
            description: post.summary,
        };
    } catch (err) {
        return { title: 'Blog Post' }
    }
}

export default async function BlogPostPage({ params }) {
    let post = null;

    try {
        await connectToDatabase();
        // Next.js 15+ sometimes requires params to be awaited
        const { id } = await params;
        const rawPost = await Post.findById(id);
        if (rawPost) {
            post = JSON.parse(JSON.stringify(rawPost));
        }
    } catch (error) {
        console.error("Failed to fetch post:", error);
    }

    // Await params again for the fallback check
    const { id } = await params;

    if (!post) {
        if (id === "1" || id === "2" || id === "3") {
            post = {
                title: "Sample Blog Post",
                summary: "This is a sample summary for the blog post.",
                content: "This is the full content of the sample blog post. If you are seeing this, the post was not found in the database but matched a demo ID.\n\nYou can format your code blocks like this using markdown:\n\n```python\n# Sample python script\ndef hello_world():\n    print(\"Hello world!\")\n```\n\n```bash\n# Sample bash command\nnpm install react-markdown\n```\n\nAnd it will be beautifully formatted with syntax highlighting and a copy button!",
                createdAt: new Date().toISOString(),
                category: "General",
                readTime: "5 min read",
            };
        } else {
            notFound();
        }
    }

    const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

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
                            {formattedDate}
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
