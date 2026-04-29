'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { TerminalSquare, Calendar, Clock, ArrowRight } from 'lucide-react'

export default function LatestPosts({ posts = [] }) {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Latest Posts</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="py-12 px-4 md:px-16 bg-black">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="group cursor-pointer flex flex-col bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)] hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 bg-yellow-400/10 text-yellow-500 text-xs font-semibold rounded-full uppercase tracking-wider">
                  {post.category || "General"}
                </span>
                <TerminalSquare className="text-white/20 group-hover:text-yellow-400/50 w-6 h-6 transition-colors duration-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed line-clamp-3">
                {post.summary}
              </p>
              <div className="mt-auto">
                <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime || "5 min read"}
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
        <div className="text-center mt-12">
          <button
            onClick={() => router.push('/blog')}
            className="py-3 px-8 rounded-lg bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-lg hover:bg-yellow-400/10 transition-colors"
          >
            Read All Articles -&gt;
          </button>
        </div>
      </div>
    </>
  )
}
