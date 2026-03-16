import React from "react";
import Image from "next/image";
import ThreeDCardDemo from "@/app/components2/projectCard";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/lib/models/Project";

export const metadata = {
  title: "About Me",
  description: "About Sithu Htin and his projects",
};

export default async function About() {
  let projects = [];

  try {
    await connectToDatabase();
    const rawProjects = await Project.find().sort({ order: 1, createdAt: -1 });
    const dbProjects = JSON.parse(JSON.stringify(rawProjects));

    if (dbProjects.length > 0) {
      projects = dbProjects.map(proj => ({
        id: proj._id,
        title: proj.title,
        desc: proj.description,
        image: proj.imageUrl,
        projectUrl: proj.projectUrl,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch projects from MongoDB:", error);
  }

  if (projects.length === 0) {
    projects = [
      {
        id: 1,
        title: "Burma Medical Association",
        desc: "I made this with Wordpress and custom css",
        image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/bma_dvypky.png",
        projectUrl: "https://www.bmahq.org/",
      },
      {
        id: 2,
        title: "Fours Rivers ACTS Foundation",
        desc: "I made this with Wordpress and custom css",
        image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/4rivers_eb2cxh.png",
        projectUrl: "https://www.4rivers-acts.org/",
      },
      {
        id: 3,
        title: "Health Information System Working Group",
        desc: "I made this with Wordpress and custom css",
        image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/hiswg_fu9cc8.png",
        projectUrl: "https://www.hiswg.org/",
      },
      {
        id: 4,
        title: "Shun & Ye Wedding",
        desc: "I made this with Next.js",
        image: "https://res.cloudinary.com/dznkec5x0/image/upload/v1768719152/Screenshot_from_2026-01-18_13-52-02_movgha.png",
        projectUrl: "https://wedding-invitation-ys.vercel.app/",
      }
    ];
  }

  return (
    <main className="flex flex-col bg-black min-h-screen pt-16 w-full overflow-x-hidden">
      <div className="py-12 px-4 md:px-16 bg-black">
        <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur-lg border-2 border-white/10 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Photo & highlights */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-white/10">
              <Image
                src="/My Photo.jpeg"
                alt="Sithu Htin"
                fill
                sizes="(max-width: 768px) 160px, 160px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-4 space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">4+ Years in IT</div>
              <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1 rounded-full">Supports 300+ users</div>
              {/* <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1 rounded-full">Healthcare IT Specialist</div> */}
            </div>

            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">LinkedIn</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">GitHub</a>
              <a href="https://sithu-htin-docs.gitbook.io/sithu-things" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">Docs</a>
            </div>
          </div>

          {/* Story and details */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Hi, I'm Sithu Htin 👋</h2>

            <p className="text-gray-300 mb-4">I’m an IT System Administrator, Linux System Administrator, and Developer with a strong focus on building reliable systems and efficient data infrastructure.</p>

            <p className="text-gray-300 mb-4">My professional journey started in a very different field — I was originally a final-year medical student. However, my curiosity for technology and problem-solving led me to transition into the IT industry. Over the past four years, I have built hands-on experience in system administration, Linux environments, database development, and modern web technologies.</p>

            <p className="text-gray-300 mb-4">I specialize in managing and maintaining Linux-based systems, troubleshooting infrastructure issues, and ensuring stable and secure environments. My experience includes server management, networking, system automation, and technical support.</p>

            <p className="text-gray-300 mb-4">Alongside system administration, I also work with databases and development. I have experience with Oracle, MySQL, PostgreSQL, Microsoft SQL Server, and MongoDB, focusing on database design, query optimization, and backend data management.</p>

            <p className="text-gray-300 mb-4">On the development side, I build web applications using React.js, Next.js, and Node.js, and I also work with WordPress, PHP, web hosting, CDN configuration, and domain management.</p>

            <p className="text-gray-300">I enjoy solving complex technical problems, optimizing systems, and continuously learning new technologies to build reliable and scalable solutions.</p>

            {/* <div className="mt-6">
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
            </div> */}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="flex items-center my-12 pt-8">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-6 text-yellow-400 uppercase tracking-widest text-lg font-semibold select-none">
          My Projects
        </span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 max-w-7xl mx-auto">
          {projects.map((data) => (
            <a href={data.projectUrl} target="_blank" rel="noopener noreferrer" key={data.id} className="block hover:scale-105 transition-transform duration-300">
              <ThreeDCardDemo
                title={data.title}
                desc={data.desc}
                image={data.image}
              />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
