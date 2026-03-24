"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, User, Send, Clock } from "lucide-react";

export default function CommentSection({ postId }) {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchComments();
    }, [postId]);

    const fetchComments = async () => {
        try {
            setLoading(true);
            // Ignore fetch if it is a fallback post ID
            if (postId === "1" || postId === "2" || postId === "3") {
                setComments([]);
                setLoading(false);
                return;
            }
            const res = await fetch(`/api/comments?postId=${postId}`);
            const data = await res.json();
            if (data.comments) {
                setComments(data.comments);
            }
        } catch (err) {
            console.error("Failed to fetch comments", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!author.trim() || !content.trim()) return;

        setSubmitting(true);
        setError(null);

        if (postId === "1" || postId === "2" || postId === "3") {
            setError("Cannot post comments on sample demo posts.");
            setSubmitting(false);
            return;
        }

        try {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ postId, author, content }),
            });

            if (res.ok) {
                const data = await res.json();
                setComments([data.comment, ...comments]);
                setAuthor("");
                setContent("");
            } else {
                const errorData = await res.json();
                setError(errorData.message || "Failed to post comment.");
            }
        } catch (err) {
            setError("Network error. Try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="mt-16 border-t border-white/10 pt-10">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-yellow-500" />
                Comments ({comments.length})
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mb-12 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-white mb-4">Leave a Reply</h4>
                {error && <div className="text-red-400 text-sm mb-4 bg-red-400/10 p-3 rounded-lg border border-red-400/20">{error}</div>}

                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-semibold mb-2">Name</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                            placeholder="John Doe"
                            className="w-full bg-black/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-gray-600"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-semibold mb-2">Comment</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows={4}
                        placeholder="What are your thoughts?"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-gray-600 custom-scrollbar resize-y"
                    />
                </div>

                <button
                    type="submit"
                    disabled={submitting || !author.trim() || !content.trim()}
                    className="flex items-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-sm shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
                >
                    {submitting ? "Posting..." : "Post Comment"}
                    {!submitting && <Send className="w-4 h-4" />}
                </button>
            </form>

            {/* Comment List */}
            {loading ? (
                <div className="text-yellow-400 animate-pulse text-center py-6">Loading comments...</div>
            ) : comments.length === 0 ? (
                <div className="text-gray-500 text-center py-10 bg-white/5 rounded-2xl border border-white/10 italic">
                    No comments yet. Be the first to share your thoughts!
                </div>
            ) : (
                <div className="space-y-6">
                    {comments.map((comment) => (
                        <div key={comment._id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-yellow-400/30 transition-colors">
                            <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-3">
                                <span className="font-bold text-yellow-400 flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-yellow-400/20 text-yellow-500 flex items-center justify-center font-bold text-sm">
                                        {comment.author.charAt(0).toUpperCase()}
                                    </div>
                                    {comment.author}
                                </span>
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {new Date(comment.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                            </div>
                            <p className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">{comment.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
