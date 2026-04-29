import Image from "next/image";
import { Suspense } from "react";
import { getProjectsWithFallback } from "@/lib/content";

export const metadata = {
  title: "About Me",
  description: "About Sithu Htin and his projects",
};

async function AboutProjects() {
  const projects = await getProjectsWithFallback();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 max-w-7xl mx-auto">
      {projects.map((data) => (
        <a
          href={data.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          key={data.id}
          className="group block rounded-2xl border border-white/10 bg-black/50 overflow-hidden hover:border-yellow-400/40 transition-colors duration-300"
        >
          <div className="relative h-48 md:h-56 bg-white/5 overflow-hidden">
            <Image
              src={data.imageUrl}
              alt={data.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <div className="p-5 md:p-6">
            <h3 className="text-xl font-bold text-white">{data.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{data.description}</p>
            <span className="mt-5 inline-flex items-center rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-black">
              View Project
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

function AboutProjectsFallback() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 max-w-7xl mx-auto">
      {[...Array(3)].map((_, index) => (
        <div
          key={`about-project-skeleton-${index}`}
          className="rounded-xl border border-white/10 bg-black/40 p-6 animate-pulse"
        >
          <div className="h-8 w-2/3 rounded bg-white/10 mb-4"></div>
          <div className="h-4 w-full rounded bg-white/10 mb-2"></div>
          <div className="h-4 w-5/6 rounded bg-white/10 mb-6"></div>
          <div className="h-48 rounded-xl bg-white/10"></div>
        </div>
      ))}
    </div>
  );
}

export default function About() {

  return (
    <main className="flex flex-col bg-black min-h-screen pt-16 w-full overflow-x-hidden">
      <div className="py-12 px-4 md:px-16 bg-black">
        <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur-lg border-2 border-white/10 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-white/10">
              <Image
                src="/My Photo.jpeg"
                alt="Sithu Htin"
                fill
                sizes="(max-width: 768px) 160px, 160px"
                className="object-cover"
              />
            </div>
            <div className="mt-4 space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">4+ Years in IT</div>
              <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1 rounded-full">Supports 300+ users</div>
            </div>

            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">LinkedIn</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">GitHub</a>
              <a href="https://sithu-htin-docs.gitbook.io/sithu-things" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">Docs</a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Hi, I&apos;m Sithu Htin</h2>

            <p className="text-gray-300 mb-4">I&apos;m an IT System Administrator, Linux System Administrator, and Developer with a strong focus on building reliable systems and efficient data infrastructure.</p>

            <p className="text-gray-300 mb-4">My professional journey started in a very different field - I was originally a final-year medical student. However, my curiosity for technology and problem-solving led me to transition into the IT industry. Over the past four years, I have built hands-on experience in system administration, Linux environments, database development, and modern web technologies.</p>

            <p className="text-gray-300 mb-4">I specialize in managing and maintaining Linux-based systems, troubleshooting infrastructure issues, and ensuring stable and secure environments. My experience includes server management, networking, system automation, and technical support.</p>

            <p className="text-gray-300 mb-4">Alongside system administration, I also work with databases and development. I have experience with Oracle, MySQL, PostgreSQL, Microsoft SQL Server, and MongoDB, focusing on database design, query optimization, and backend data management.</p>

            <p className="text-gray-300 mb-4">On the development side, I build web applications using React.js, Next.js, and Node.js, and I also work with WordPress, PHP, web hosting, CDN configuration, and domain management.</p>

            <p className="text-gray-300">I enjoy solving complex technical problems, optimizing systems, and continuously learning new technologies to build reliable and scalable solutions.</p>
          </div>
        </div>
      </div>

      <div id="projects" className="flex items-center my-12 pt-8">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-6 text-yellow-400 uppercase tracking-widest text-lg font-semibold select-none">
          My Projects
        </span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="pb-16">
        <Suspense fallback={<AboutProjectsFallback />}>
          <AboutProjects />
        </Suspense>
      </div>
    </main>
  );
}
