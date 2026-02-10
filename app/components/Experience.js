"use client"
import React, { useEffect, useRef, useState } from "react"
import Image from 'next/image'

const positions = [
  {
    id: 1,
    title: "IT System Administrator",
    company: "Shoklo Malaria Research Unit (Borderland Health Foundation)",
    duration: "2024 - 2026",
    location: "Mae Sot, Thailand",
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
    id: 2,
    title: "IT Support",
    company: "Burma Medical Association",
    duration: "2022 - 2024",
    location: "Myanmar",
    logo: "BMA",
    description:
      "Provided technical support and system maintenance for healthcare organization",
    responsibilities: [],
  },
]

export default function Experience() {
  const [open, setOpen] = useState({})
  const containerRef = useRef(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll("[data-animate]") || []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view")
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggle = (id) => setOpen((s) => ({ ...s, [id]: !s[id] }))

  return (
    <section
      ref={containerRef}
      className="py-8 md:py-12 lg:py-16 px-4 md:px-8 max-w-6xl mx-auto"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100 text-center">
        Professional Experience
      </h2>

      <div className="relative">
        {/* center timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />

        <ul className="space-y-10 md:space-y-16">
          {positions.map((pos, idx) => {
            const side = idx % 2 === 0 ? 'left' : 'right'
            return (
              <li key={pos.id} className="md:grid md:grid-cols-2 md:items-start" data-animate>
                {/* Left column (card or spacer depending on side) */}
                <div className={`md:pr-8 ${side === 'right' ? 'md:order-1' : 'md:order-0'}`}>
                  <div
                    className={`group relative bg-black/60 dark:bg-gray-900 border border-transparent hover:border-indigo-600 dark:hover:border-indigo-500 rounded-2xl p-5 md:p-6 shadow-md hover:shadow-2xl transition transform ${side === 'right' ? 'md:ml-auto' : ''}`}
                    onClick={() => toggle(pos.id)}
                  >
                    <div className="absolute -left-6 top-5 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 text-white shadow">
                      <span className="font-semibold text-sm">{pos.logo}</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="md:flex-1">
                        <h3 className="text-lg font-semibold text-white dark:text-white">{pos.title}</h3>
                        <p className="text-sm text-gray-300 mt-1">
                          <span className="font-medium text-gray-100">{pos.company}</span>
                          <span className="mx-2">•</span>
                          <span className="text-gray-300">{pos.location}</span>
                        </p>
                      </div>

                      <div className="flex-shrink-0 text-right">
                        <p className="text-sm font-semibold text-indigo-400">{pos.duration}</p>
                        <button aria-expanded={!!open[pos.id]} className="mt-2 inline-flex items-center justify-center p-2 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition">
                          <svg className={`w-4 h-4 transform transition-transform ${open[pos.id] ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className={`mt-4 transition-all duration-300 overflow-hidden ${open[pos.id] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      {pos.description && <p className="text-sm text-gray-200 mb-3">{pos.description}</p>}

                      {pos.responsibilities?.map((cat, i) => (
                        <div key={i} className="mb-3">
                          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mr-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-200">{cat.category}</span>
                          <ul className="mt-2 list-disc list-inside text-sm text-gray-300 space-y-1">
                            {cat.items.map((it, ii) => (
                              <li key={ii} className="hover:text-indigo-300 transition-colors">{it}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline connector and dot (center) */}
                <div className="md:flex md:items-start md:justify-center md:col-span-2">
                  <div className="md:hidden h-6" />
                  <div className="hidden md:flex items-center justify-center relative w-full pointer-events-none">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border border-indigo-400 dark:border-indigo-500 shadow-md flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <style jsx>{`
        [data-animate] { opacity: 0; transform: translateY(12px); transition: opacity 480ms ease, transform 480ms ease; }
        [data-animate].in-view { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  )
}
