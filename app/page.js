'use client'
import { useRouter } from 'next/navigation'
import { IoMdDownload } from "react-icons/io";
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/my-projects')
  }
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Sithu_Htin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
              onClick={project.func}
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

      {/* Skills/Expertise Section */}
      <div className="flex items-center justify-center py-8 px-4">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Skills & Expertise</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="py-12 px-4 md:px-16 bg-black/50 backdrop-blur-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">My Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-black/60 backdrop-blur-lg border-2 border-white/20 rounded-xl p-6 hover:border-yellow-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-200 flex items-center">
                    <span className="text-yellow-400 mr-2">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="flex items-center justify-center py-8 px-4">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">About Me</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="py-12 px-4 md:px-16 bg-black">
        <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-lg border-2 border-white/20 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am an IT System Admin and Website Developer with over 3 years of experience in managing and maintaining IT infrastructure, ensuring seamless operations and optimal performance. I have a strong background in web development, specializing in creating responsive and user-friendly websites using modern technologies.
          </p>
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
              <div className="hidden md:block ml-6 text-5xl">📚</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}