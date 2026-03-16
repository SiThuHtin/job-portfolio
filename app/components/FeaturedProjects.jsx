'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function FeaturedProjects() {
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

  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.projects) {
          setProjects(data.projects);
        }
      })
      .catch(err => console.error("Failed to fetch projects:", err));
  }, []);

  return (
    <>
      <div id="projects" className="flex items-center justify-center py-8 px-4 scroll-mt-20">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Featured Work</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="py-12 px-4 md:px-16 bg-black">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.slice(0, 3).map((project) => (
            <Link
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={project._id}
              className="group cursor-pointer block"
            >
              <div className="bg-black/60 backdrop-blur-lg border-2 border-white/20 rounded-xl overflow-hidden hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden bg-white/5">
                  <Image
                    src={getOptimizedImageUrl(project.imageUrl)}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="group-hover:scale-110 transition-transform duration-300 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => router.push('/about-me#projects')}
            className="py-3 px-8 rounded-lg bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-600 transition-colors"
          >
            View All Projects →
          </button>
        </div>
      </div>
    </>
  )
}
