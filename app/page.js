import { Suspense } from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import LatestPosts from './components/LatestPosts';
import DocumentationSection from './components/DocumentationSection';
import ContactSection from './components/ContactSection';
import { getPostsWithFallback, getProjectsWithFallback } from '@/lib/content';

async function HomeFeaturedProjects() {
  const projects = await getProjectsWithFallback({ limit: 3 });
  return <FeaturedProjects projects={projects} />;
}

async function HomeLatestPosts() {
  const posts = await getPostsWithFallback({ limit: 3 });
  return <LatestPosts posts={posts} />;
}

function FeaturedProjectsFallback() {
  return <FeaturedProjects projects={[]} />;
}

function LatestPostsFallback() {
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
          {[...Array(3)].map((_, index) => (
            <div
              key={`post-skeleton-${index}`}
              className="bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 animate-pulse"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="h-6 w-24 rounded-full bg-white/10"></div>
                <div className="h-6 w-6 rounded bg-white/10"></div>
              </div>
              <div className="h-8 w-5/6 rounded bg-white/10 mb-3"></div>
              <div className="h-4 w-full rounded bg-white/10 mb-2"></div>
              <div className="h-4 w-4/5 rounded bg-white/10 mb-6"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-3 w-24 rounded bg-white/10"></div>
                <div className="h-3 w-20 rounded bg-white/10"></div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="h-4 w-28 rounded bg-white/10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col bg-black min-h-screen pt-16 w-full overflow-x-hidden">
      <HeroSection />
      <Suspense fallback={<FeaturedProjectsFallback />}>
        <HomeFeaturedProjects />
      </Suspense>
      
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
      
      <Suspense fallback={<LatestPostsFallback />}>
        <HomeLatestPosts />
      </Suspense>
      <DocumentationSection />
      <ContactSection />
    </main>
  );
}
