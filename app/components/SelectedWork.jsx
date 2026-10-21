import Link from 'next/link';
import CaseStudyCard from './CaseStudyCard';
import SectionLabel from './SectionLabel';
import { FEATURED_PROJECTS } from '@/data/projects';

export default function SelectedWork() {
  return (
    <section>
      <SectionLabel id="projects">Selected Work</SectionLabel>
      <div className="py-12 px-4 md:px-16 bg-black">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">Recent projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
