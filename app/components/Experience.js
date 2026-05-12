"use client"
import { useState } from "react"
import { motion } from "framer-motion"

const positions = [
  {
    id: 1,
    title: "IT System Administrator",
    company: "Shoklo Malaria Research Unit (Borderland Health Foundation)",
    duration: "2024 - 2026",
    location: "Mae Ramat, Thailand",
    logo: "SMRU",
    responsibilities: [
      {
        category: "User & System Support",
        items: [
          "Provided IT support and system administration for 300+ users",
          "Monitored and maintained computers and laptops to ensure reliability",
          "Coordinated support tickets and communicated with external vendors (Microsoft, CrowdStrike, Mimecast, Sophos)",
        ],
      },
      {
        category: "Network & Infrastructure",
        items: [
          "Maintained network availability and ensured systems remained operational",
          "Configured firewall rules and network switches",
          "Deployed and maintained Windows and Linux servers and core IT infrastructure",
        ],
      },
      {
        category: "Security & Maintenance",
        items: [
          "Implemented system security using antivirus and firewall policies",
          "Managed Windows updates, software approvals, and security patches",
          "Performed regular data backups and system monitoring",
        ],
      },
      {
        category: "Operations & Coordination",
        items: [
          "Procured IT devices including end-user equipment and servers",
          "Collaborated with internal teams and external support engineers",
          "Escalated complex technical issues and reported to IT management",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2023 - Present",
    location: "Remote",
    logo: "FL",
    responsibilities: [
      {
        category: "Web Development",
        items: [
          "Designed and built responsive websites for NGOs, small businesses, and individuals",
          "Developed full-stack web applications using Next.js, React, and Node.js",
          "Built WordPress sites with custom themes and Elementor page builder",
        ],
      },
      {
        category: "Database & Backend",
        items: [
          "Integrated databases including PostgreSQL, MySQL, and MongoDB Atlas",
          "Implemented RESTful APIs and server-side logic with Node.js",
          "Set up authentication systems and admin dashboards for clients",
        ],
      },
      {
        category: "Deployment & DevOps",
        items: [
          "Deployed projects to Vercel and managed domain & DNS configuration",
          "Configured Cloudflare CDN for performance and security",
          "Managed web hosting environments and SSL certificate setup",
        ],
      },
      {
        category: "Client Collaboration",
        items: [
          "Gathered requirements and delivered projects within agreed timelines",
          "Provided post-launch maintenance, updates, and content revisions",
          "Delivered 10+ website projects across various industries",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "IT Support",
    company: "Burma Medical Association",
    duration: "2022 - 2024",
    location: "Mae Sot, Thailand",
    logo: "BMA",
    description:
      "Provided technical support and system maintenance for healthcare organization",
    responsibilities: [],
  },
]

const CardBody = ({ pos, open }) => (
  <div className="flex flex-col h-full">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="md:flex-1">
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
          {pos.title}
        </h3>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="text-sm font-medium text-gray-300">{pos.company}</span>
          <span className="text-gray-600 hidden md:inline">•</span>
          <span className="text-sm text-gray-400">{pos.location}</span>
        </div>
      </div>

      <div className="flex flex-col items-start md:items-end gap-2">
        <span className="text-sm font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
          {pos.duration}
        </span>
        <div className="mt-1 hidden md:block">
          <div className={`p-1.5 rounded-full bg-gray-800/50 text-gray-400 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300 ${open[pos.id] ? 'rotate-180' : ''}`}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open[pos.id] ? 'max-h-[1200px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
      {pos.description && <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">{pos.description}</p>}

      <div className="space-y-6">
        {pos.responsibilities?.map((cat, i) => (
          <div key={i} className="relative pl-4 border-l border-yellow-500/30">
            <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></span>
              {cat.category}
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {cat.items.map((it, ii) => (
                <li key={ii} className="text-sm text-gray-400 flex items-start gap-2 group/item">
                  <span className="text-yellow-500 mt-1.5 opacity-50 group-hover/item:opacity-100 transition-opacity">•</span>
                  <span className="group-hover/item:text-gray-200 transition-colors">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function Experience() {
  const [open, setOpen] = useState({})

  const toggle = (id) => setOpen((s) => ({ ...s, [id]: !s[id] }))

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-20">
        {/* <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs"
        >
          My Journey
        </motion.span> */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-black mt-4 text-white"
        >
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 text-glow">Experience</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/40 to-transparent" />

        <div className="space-y-12 md:space-y-24">
          {positions.map((pos, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div key={pos.id} className="relative">
                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-20">
                  {/* Left Side */}
                  <div className={isLeft ? "block" : "invisible pointer-events-none"}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="group relative bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/5 hover:border-indigo-500/50 rounded-3xl p-8 shadow-2xl transition-all duration-500 cursor-pointer"
                      onClick={() => toggle(pos.id)}
                    >
                      <div className="absolute -right-[76px] top-1/2 -translate-y-1/2 z-20">
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow-500 text-black font-black text-xs shadow-[0_0_20px_rgba(250,204,21,0.4)] border-4 border-[#080808] group-hover:scale-110 transition-transform duration-300">
                          {pos.logo}
                        </div>
                      </div>
                      <CardBody pos={pos} open={open} />
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-black border-2 border-yellow-500 shadow-[0_0_15px_rgba(250,204,21,0.5)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className={!isLeft ? "block" : "invisible pointer-events-none"}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="group relative bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/5 hover:border-indigo-500/50 rounded-3xl p-8 shadow-2xl transition-all duration-500 cursor-pointer"
                      onClick={() => toggle(pos.id)}
                    >
                      <div className="absolute -left-[76px] top-1/2 -translate-y-1/2 z-20">
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-yellow-500 text-black font-black text-xs shadow-[0_0_20px_rgba(250,204,21,0.4)] border-4 border-[#080808] group-hover:scale-110 transition-transform duration-300">
                          {pos.logo}
                        </div>
                      </div>
                      <CardBody pos={pos} open={open} />
                    </motion.div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 shadow-xl"
                    onClick={() => toggle(pos.id)}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center text-black font-bold text-[10px]">
                        {pos.logo}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-yellow-400 mb-1 uppercase tracking-wider">{pos.duration}</div>
                        <div className="text-white font-black text-lg">{pos.title}</div>
                      </div>
                    </div>
                    <CardBody pos={pos} open={open} />
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 30px rgba(250, 204, 21, 0.3);
        }
      `}</style>
    </section>
  )
}
