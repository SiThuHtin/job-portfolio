import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, FolderKanban } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { FEATURED_PROJECTS } from '@/data/projects';

function CaseStudyCard({ project }) {
  return (
    <article className="flex flex-col bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition-colors duration-300">
      <div className="relative h-44 bg-white/5 flex items-center justify-center">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        ) : (
          // Anonymous client work has no screenshot
          <FolderKanban className="w-12 h-12 text-yellow-400/40" aria-hidden="true" />
        )}
      </div>
      <div className="flex flex-col flex-grow p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-yellow-500 mb-2">{project.category}</span>
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{project.built}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1">{tech}</span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 w-fit"
          >
            Visit site <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function SelectedWork() {
  return (
    <section>
      <SectionLabel id="projects">Selected Work</SectionLabel>
      <div className="py-12 px-4 md:px-16 bg-black">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">Recent projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {FEATURED_PROJECTS.map((project) => (
            <CaseStudyCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/about-me#projects"
            className="inline-block py-3 px-8 rounded-lg border-2 border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400/10 transition-colors"
          >
            See all projects -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
