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
    <main className="flex flex-col bg-black min-h-screen pt-16">
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="glass-effect bg-black/60 backdrop-blur-lg border-4 border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-2xl mx-4">
          <h1 className="text-4xl py-5 text-center text-white">
            I am <span className="text-yellow-400 font-bold">Sithu Htin</span>
          </h1>
          <ul className="mb-6 text-center">
            <li className="text-xl text-gray-200">IT System Admin</li>
            <li className="text-xl text-gray-200">Website Developer</li>
            <li className="text-xl text-gray-200">Database Developer</li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={handleDownload}
              className="w-full md:w-auto py-3 px-6 rounded-lg bg-yellow-500 text-black font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center hover:bg-yellow-600 hover:scale-105 hover:shadow-2xl"
            >
              Download CV
              <IoMdDownload className="inline ml-2 text-xl" />
            </button>
            <button
              onClick={handleClick}
              className="w-full md:w-auto py-3 px-6 rounded-lg bg-yellow-500 text-black font-bold text-lg shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105 hover:shadow-2xl"
            >
              My Projects
            </button>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="py-20 px-4 md:px-16 bg-black">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>
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
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-300"
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
      <div className="py-20 px-4 md:px-16 bg-black/50 backdrop-blur-lg">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Skills & Expertise</h2>
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
      <div className="py-20 px-4 md:px-16 bg-black">
        <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-lg border-2 border-white/20 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am an IT System Admin and Website Developer with over 3 years of experience in managing and maintaining IT infrastructure, ensuring seamless operations and optimal performance. I have a strong background in web development, specializing in creating responsive and user-friendly websites using modern technologies.
          </p>
        </div>
      </div>

      {/* Documentation Section */}
      <div className="py-20 px-4 md:px-16 bg-black/50 backdrop-blur-lg">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Documentation & Guides</h2>
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