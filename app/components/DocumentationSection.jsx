import Link from 'next/link';

export default function DocumentationSection() {
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Documentation</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="py-12 px-4 md:px-16 bg-black/50 backdrop-blur-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">Documentation & Guides</h2>
        <div className="max-w-2xl mx-auto">
          <Link
            href="https://sithu-htin-docs.gitbook.io/sithu-things"
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer bg-black/60 backdrop-blur-lg border-2 border-white/20 rounded-xl p-8 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Sithu Things</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive documentation covering my tech stack, system administration guides, web development best practices, and detailed project documentation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Tech Guides</span>
                  <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Tutorials</span>
                  <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Documentation</span>
                </div>
                <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors">
                  Read Documentation →
                </button>
              </div>
              <div className="hidden md:block ml-6 text-5xl" aria-hidden="true">📚</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
