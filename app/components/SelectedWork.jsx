import Link from 'next/link';
import CaseStudyCard from './CaseStudyCard';
import SectionLabel from './SectionLabel';
import { FEATURED_PROJECTS } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

export default function SelectedWork() {
  return (
    <section>
      <SectionLabel id="projects">Selected Work</SectionLabel>
      <div className="py-12 px-4 md:px-16 bg-black">
        <h2 className="type-section-title text-center text-white mb-8 md:mb-12">Recent projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {FEATURED_PROJECTS.map((project) => (
            <CaseStudyCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/about-me#projects"
            className="group inline-flex items-center gap-2 py-3 px-8 rounded-lg border-2 border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400/10 transition-colors"
          >
            See all projects
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
