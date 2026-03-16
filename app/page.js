import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import LatestPosts from './components/LatestPosts';
import DocumentationSection from './components/DocumentationSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="flex flex-col bg-black min-h-screen pt-16 w-full overflow-x-hidden">
      <HeroSection />
      <FeaturedProjects />
      
      <div className="flex items-center justify-center py-6 px-4">
        <div className="flex-grow border-t border-yellow-400/20"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Experience</span>
        <div className="flex-grow border-t border-yellow-400/20"></div>
      </div>
      <Experience />

      <div className="flex items-center justify-center py-6 px-4">
        <div className="flex-grow border-t border-yellow-400/20"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Certifications</span>
        <div className="flex-grow border-t border-yellow-400/20"></div>
      </div>
      <Certifications />

      <Skills />
      
      <LatestPosts />
      <DocumentationSection />
      <ContactSection />
    </main>
  );
}