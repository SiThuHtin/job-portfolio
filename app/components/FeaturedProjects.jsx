'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FeaturedProjects({ projects = [] }) {
  const router = useRouter();

  const getOptimizedImageUrl = (url) => {
    if (!url) return '';
    const driveRegex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(driveRegex);
    if (match && match[1]) {
      return `https://drive.google.com/uc?id=${match[1]}`;
    }
    return url;
  };

  return (
    <>
      <div id="projects" className="flex items-center justify-center py-8 px-4 scroll-mt-20">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Featured Work</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="py-12 px-4 md:px-16 bg-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.length === 0 ? (
            [...Array(3)].map((_, index) => (
              <div key={`skeleton-${index}`} className="group bg-black/60 backdrop-blur-lg border-2 border-white/20 rounded-xl overflow-hidden animate-pulse h-[400px]">
                <div className="h-48 bg-white/10 w-full mb-4"></div>
                <div className="p-6 flex flex-col items-start w-full">
                  <div className="h-6 bg-white/20 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6 mb-8"></div>
                  <div className="h-10 bg-white/20 rounded w-full mt-auto"></div>
                </div>
              </div>
            ))
          ) : (
            projects.map((project, index) => (
              <Link
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-black/60 backdrop-blur-lg border-2 border-white/20 rounded-xl overflow-hidden hover:border-yellow-400 transition-colors duration-300 transform"
                >
                  <div className="relative h-48 overflow-hidden bg-white/5">
                    <Image
                      src={getOptimizedImageUrl(project.imageUrl)}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="group-hover:scale-110 transition-transform duration-500 object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors w-full mt-auto">
                      View Project
                    </button>
                  </div>
                </motion.div>
              </Link>
            ))
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => router.push('/about-me#projects')}
            className="py-3 px-8 rounded-lg bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-600 transition-colors"
          >
            View All Projects -&gt;
          </button>
        </motion.div>
      </div>
    </>
  )
}
