import Image from "next/image";
import { Download } from "lucide-react";
import Experience from "@/app/components/Experience";
import Certifications from "@/app/components/Certifications";
import Skills from "@/app/components/Skills";
import SectionLabel from "@/app/components/SectionLabel";
import CaseStudyCard from "@/app/components/CaseStudyCard";
import { WORK_PROJECTS, PERSONAL_PROJECTS } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";
import { LINKS } from "@/data/site";

export const metadata = pageMetadata({
  title: "About Me",
  description: "About Sithu Htin: IT systems administrator and web developer in Mae Sot, Thailand. Experience, certifications, skills and projects.",
  path: "/about-me",
});

export default function About() {

  return (
    <div className="flex flex-col bg-black min-h-screen pt-16 w-full overflow-x-hidden">
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
                priority
              />
            </div>
            <div className="mt-4 space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">Open to IT / Sysadmin roles</div>
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">4+ Years in IT</div>
              <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1 rounded-full">Supports 300+ users</div>
            </div>

            <div className="mt-4 flex gap-3">
              <a href={LINKS.linkedin.href} target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">LinkedIn</a>
              <a href={LINKS.github.href} target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">GitHub</a>
              <a href={LINKS.docs.href} target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">Docs</a>
            </div>

            <a
              href="/cv.pdf"
              download="Sithu_Htin_CV.pdf"
              className="mt-6 inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold hover:from-yellow-600 hover:to-yellow-700 transition-colors"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Hi, I&apos;m Sithu Htin</h2>
            <p className="text-sm text-gray-500 mb-4">Also known as See Min Thu (LinkedIn).</p>

            <p className="text-gray-300 mb-4">I&apos;m an IT Systems Administrator &amp; Web Developer who keeps infrastructure secure, stable and running, and builds the websites and tools organizations need.</p>

            <p className="text-gray-300 mb-4">My professional journey started in a very different field - I was originally a final-year medical student. However, my curiosity for technology and problem-solving led me to transition into the IT industry. Over the past four years, I have built hands-on experience in system administration, Linux environments, database development, and modern web technologies.</p>

            <p className="text-gray-300 mb-4">I specialize in managing and maintaining Linux-based systems, troubleshooting infrastructure issues, and ensuring stable and secure environments. My experience includes server management, networking, system automation, and technical support.</p>

            <p className="text-gray-300 mb-4">Alongside system administration, I also work with databases and development. I have experience with Oracle, MySQL, PostgreSQL, Microsoft SQL Server, and MongoDB, focusing on database design, query optimization, and backend data management.</p>

            <p className="text-gray-300 mb-4">On the development side, I build web applications using React.js, Next.js, and Node.js, and I also work with WordPress, PHP, web hosting, CDN configuration, and domain management.</p>

            <p className="text-gray-300">I enjoy solving complex technical problems, optimizing systems, and continuously learning new technologies to build reliable and scalable solutions.</p>

            <dl className="mt-6 pt-6 border-t border-white/10 grid gap-3 text-sm">
              <div>
                <dt className="text-yellow-400 font-semibold">Education</dt>
                <dd className="text-gray-300">Medical studies (MBBS programme, to final year), University of Medicine 2, Yangon, 2013–2020</dd>
              </div>
              <div>
                <dt className="text-yellow-400 font-semibold">Languages</dt>
                <dd className="text-gray-300">Burmese (native), English (professional), Thai (basic)</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <SectionLabel id="experience">Experience</SectionLabel>
      <Experience />

      <SectionLabel id="certifications">Certifications</SectionLabel>
      <Certifications />

      <Skills />

      <SectionLabel id="projects">Projects</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 max-w-7xl mx-auto w-full pb-8">
        {WORK_PROJECTS.map((project) => (
          <CaseStudyCard key={project.id} project={project} />
        ))}
      </div>

      <SectionLabel id="personal-projects">Personal Projects</SectionLabel>
      <p className="text-gray-400 text-center px-4 mb-8">Side projects I built to learn and experiment. Not client work.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 max-w-7xl mx-auto w-full pb-16">
        {PERSONAL_PROJECTS.map((project) => (
          <CaseStudyCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
