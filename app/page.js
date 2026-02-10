'use client'
import { useRouter } from 'next/navigation'
import { IoMdDownload } from "react-icons/io";
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { Linkedin, Github, BookOpen } from 'lucide-react'
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';

export default function Home() {
  const router = useRouter();
  
  const handleClick = () => {
    // smooth scroll to Featured Projects section if present
    const el = document.getElementById('projects')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      router.push('/my-projects')
    }
  }
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Sithu_Htin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // rotating specializations
  const specs = ['IT System Admin', 'Full-Stack Developer', 'Network Engineer', 'Healthcare IT Specialist']
  const [specIndex, setSpecIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setSpecIndex((i) => (i + 1) % specs.length), 2200)
    return () => clearInterval(t)
  }, [])

  const featuredProjects = [
    {
      title: "Burma Medical Association",
      desc: "WordPress with custom CSS",
      image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/bma_dvypky.png",
      func: () => window.open("https://www.bmahq.org/", "_blank"),
    },
    {
      title: "Fours Rivers ACTS Foundation",
      desc: "WordPress with custom CSS",
      image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/4rivers_eb2cxh.png",
      func: () => window.open("https://www.4rivers-acts.org/", "_blank"),
    },
    {
      title: "Shun & Ye Wedding",
      desc: "Built with Next.js",
      image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1768719152/Screenshot_from_2026-01-18_13-52-02_movgha.png",
      func: () => window.open("https://wedding-invitation-ys.vercel.app/", "_blank"),
    },
  ];

  const skills = [
    { category: "Backend", items: ["Next.js", "Node.js", "Database Management"] },
    { category: "Frontend", items: ["React", "Tailwind CSS", "JavaScript"] },
    { category: "Tools", items: ["WordPress", "Linux", "Git"] },
  ];

  const handleDocsClick = () => {
    window.open('https://sithu-htin-docs.gitbook.io/sithu-things', '_blank');
  };
  return (
    <main className="flex flex-col bg-black min-h-screen pt-16 w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative py-20 px-2 md:px-4 bg-gradient-to-b from-black via-black to-black/50 overflow-hidden w-full">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-6 w-48 h-48 md:w-96 md:h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-4 right-6 w-48 h-48 md:w-96 md:h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative flex flex-col items-center justify-center z-10 w-full px-4">
          <div className="glass-effect bg-black/40 backdrop-blur-xl border-2 border-yellow-400/30 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-3xl w-full mx-auto">
            {/* Animated Greeting */}
            <div className="text-center mb-8">
              <span className="inline-block text-yellow-400 text-sm font-bold mb-4 px-4 py-2 bg-yellow-400/10 rounded-full">Welcome to My Portfolio</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 sm:py-6 text-center text-white font-bold">
              I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">Sithu Htin</span>
            </h1>

            {/* Subtitle with better styling */}
            <div className="mb-8 text-center">
              <div className="flex flex-wrap gap-2 justify-center items-center">
                <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base">
                  <span className="text-yellow-400">◆</span>
                  <span className="text-gray-200">IT System Admin</span>
                </div>
                <div className="hidden md:block text-gray-600">•</div>
                <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base">
                  <span className="text-yellow-400">◆</span>
                  <span className="text-gray-200">Website Dev</span>
                </div>
                <div className="hidden md:block text-gray-600">•</div>
                <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 rounded-full bg-white/5 border border-white/10 text-sm md:text-base">
                  <span className="text-yellow-400">◆</span>
                  <span className="text-gray-200">DB Dev</span>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <button
                onClick={handleDownload}
                className="group py-3 px-6 sm:py-4 sm:px-8 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-base sm:text-lg shadow-lg transition-all duration-300 flex items-center justify-center hover:shadow-2xl hover:scale-105 hover:from-yellow-600 hover:to-yellow-700"
              >
                <IoMdDownload className="mr-2 text-xl group-hover:animate-bounce" />
                Download CV
              </button>
              <button
                onClick={handleClick}
                className="py-3 px-6 sm:py-4 sm:px-8 rounded-xl bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-base sm:text-lg transition-all duration-300 hover:bg-yellow-400/10 hover:scale-105"
              >
                View My Work →
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-yellow-400">3+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-yellow-400">10+</p>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-yellow-400">100%</p>
                <p className="text-sm text-gray-400">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="flex items-center justify-center py-8 px-4">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Featured Work</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="py-12 px-4 md:px-16 bg-black">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer"
            >
              <div className="bg-black/60 backdrop-blur-lg border-2 border-white/20 rounded-xl overflow-hidden hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="group-hover:scale-110 transition-transform duration-300 object-cover"
                    />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                  <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={handleClick}
            className="py-3 px-8 rounded-lg bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-600 transition-colors"
          >
            View All Projects →
          </button>
        </div>
      </div>

      {/* Experience & Certifications */}
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

      {/* Skills/Expertise Section */}
      <Skills />

      {/* (Experience already shown above) */}

      {/* About Section */}
      <div className="flex items-center justify-center py-8 px-4">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">About Me</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>

      <div className="py-12 px-4 md:px-16 bg-black">
        <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur-lg border-2 border-white/10 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Photo & highlights */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center text-3xl font-bold text-white">SH</div>
            <div className="mt-4 space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">4+ Years in IT</div>
              <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1 rounded-full">Supports 300+ users</div>
              <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1 rounded-full">Healthcare IT Specialist</div>
            </div>

            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">LinkedIn</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">GitHub</a>
              <a href="https://sithu-htin-docs.gitbook.io/sithu-things" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">Docs</a>
            </div>
          </div>

          {/* Story and details */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">From Medicine to Systems — a practical transition</h2>

            <p className="text-gray-300 mb-4">I started as a final-year medical student at the University of Medicine 2, Yangon (2013–2020). In 2022 I made a bold transition into IT — a decision driven by curiosity about systems and a desire to scale my impact beyond the bedside. My clinical background gives me a practical, user-centered perspective when designing and maintaining healthcare IT systems.</p>

            <p className="text-gray-300 mb-4">Over the last 4+ years (2022–2026) I’ve supported 300+ users, currently at the Shoklo Malaria Research Unit, and have worked across two major healthcare organizations. I specialize in building reliable, secure IT infrastructure for clinical teams — ensuring systems are available, compliant, and simple to use for non-technical staff.</p>

            <p className="text-gray-300 mb-4">My technical work spans Windows and Linux system administration, network infrastructure and security, web development (React, Next.js, Node.js, Python), database management (MySQL, PostgreSQL), and cloud platforms such as Microsoft 365 and Google Workspace. I enjoy solving problems where clinical workflows and technology intersect.</p>

            <p className="text-gray-300">I’m multilingual (Burmese and English, with basic Thai), a methodical problem-solver who blends clinical reasoning with systems thinking, and deeply passionate about documentation and knowledge sharing. I aim to bridge healthcare and technology to deliver dependable solutions that clinicians can trust.</p>

            <div className="mt-6">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="font-medium text-gray-100">Career timeline:</div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-800 rounded-full">Med Student • 2013–2020</span>
                  <span className="text-gray-500">→</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full">Career Change • 2022</span>
                  <span className="text-gray-500">→</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full">IT Roles • 2022–2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Section */}
      <div className="flex items-center justify-center py-8 px-4">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Documentation</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="py-12 px-4 md:px-16 bg-black/50 backdrop-blur-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">Documentation & Guides</h2>
        <div className="max-w-2xl mx-auto">
          <div
            onClick={handleDocsClick}
            className="group cursor-pointer bg-black/60 backdrop-blur-lg border-2 border-white/20 rounded-xl p-8 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
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
          </div>
        </div>
      </div>
    </main>
  );
}