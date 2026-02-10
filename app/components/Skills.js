"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Server, ShieldCheck, Wifi, Cloud, Code, Database, Zap, GitBranch, Terminal } from 'lucide-react'

const CATEGORIES = [
  {
    id: 'os',
    title: 'Operating Systems',
    icon: Server,
    color: 'from-green-400 to-green-500',
    skills: [
      { name: 'Windows Server', level: 88 },
      { name: 'Windows 10/11', level: 92 },
      { name: 'Linux (Debian, Ubuntu)', level: 85 },
      { name: 'Linux Servers', level: 82 },
    ],
  },
  {
    id: 'iam',
    title: 'Identity & Access',
    icon: ShieldCheck,
    color: 'from-indigo-500 to-indigo-600',
    skills: [
      { name: 'Active Directory (Users, Groups, GPO)', level: 88 },
      { name: 'User & Access Management', level: 86 },
    ],
  },
  {
    id: 'network',
    title: 'Networking',
    icon: Wifi,
    color: 'from-yellow-400 to-yellow-500',
    skills: [
      { name: 'TCP/IP', level: 90 },
      { name: 'DNS', level: 88 },
      { name: 'DHCP', level: 82 },
      { name: 'Firewall Rules', level: 80 },
      { name: 'Network Switch Configuration', level: 78 },
    ],
  },
  {
    id: 'cloud',
    title: 'Virtualization & Cloud',
    icon: Cloud,
    color: 'from-cyan-400 to-cyan-500',
    skills: [
      { name: 'VirtualBox', level: 75 },
      { name: 'KVM', level: 72 },
      { name: 'VMware', level: 70 },
      { name: 'Microsoft 365', level: 84 },
      { name: 'Google Workspace', level: 80 },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    icon: ShieldCheck,
    color: 'from-rose-400 to-rose-500',
    skills: [
      { name: 'Endpoint Security (Antivirus, Firewalls)', level: 86 },
      { name: 'Patch Management', level: 84 },
      { name: 'System Updates', level: 88 },
      { name: 'Backup & Recovery', level: 82 },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: Code,
    color: 'from-sky-400 to-sky-500',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 86 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 78 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript/TypeScript', level: 92 },
    ],
  },
  {
    id: 'db',
    title: 'Server & Database',
    icon: Database,
    color: 'from-emerald-400 to-emerald-500',
    skills: [
      { name: 'Apache', level: 76 },
      { name: 'Nginx', level: 78 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 74 },
      { name: 'WordPress', level: 88 },
      { name: 'Elementor', level: 72 },
    ],
  },
  {
    id: 'tools',
    title: 'Automation & Tools',
    icon: Terminal,
    color: 'from-violet-400 to-violet-500',
    skills: [
      { name: 'Python Scripts', level: 82 },
      { name: 'Bash Scripts', level: 80 },
      { name: 'Git', level: 88 },
      { name: 'Ticketing Systems', level: 84 },
      { name: 'IT Documentation', level: 90 },
      { name: 'Network Printers Management', level: 70 },
    ],
  },
]

export default function Skills() {
  const [open, setOpen] = useState(() => {
    const initial = {}
    CATEGORIES.forEach((c, i) => (initial[c.id] = i < 3)) // open first 3 by default
    return initial
  })
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('[data-animate]') || []
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view'))
    }, { threshold: 0.12 })
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const toggle = (id) => setOpen((s) => ({ ...s, [id]: !s[id] }))

  return (
    <section ref={ref} className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Skills & Expertise</h2>
        <p className="text-sm text-gray-300 hidden sm:block">Organized categories with visual indicators.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon
          return (
            <article key={cat.id} data-animate className="bg-black/50 dark:bg-gray-900 rounded-2xl p-4 shadow-sm hover:shadow-lg transition">
              <header className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${cat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                    <p className="text-xs text-gray-400">{cat.skills.length} skills</p>
                  </div>
                </div>
                <div>
                  <button onClick={() => toggle(cat.id)} aria-expanded={!!open[cat.id]} className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-200 hover:bg-gray-700 transition">{open[cat.id] ? 'Collapse' : 'Expand'}</button>
                </div>
              </header>

              <div className={`mt-4 transition-all duration-300 overflow-hidden ${open[cat.id] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 dark:bg-white/5 rounded-lg px-3 py-2">
                      <div className="min-w-[120px]">
                        <div className="text-sm font-medium text-gray-100">{s.name}</div>
                        <div className="mt-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-2 bg-indigo-500 transition-all" style={{ width: `${s.level}%` }} />
                        </div>
                      </div>
                      <div className="ml-auto hidden md:flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, dot) => (
                          <span key={dot} className={`w-2 h-2 rounded-full ${s.level >= (dot + 1) * 20 ? 'bg-indigo-400' : 'bg-gray-600'}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <style jsx>{`
        [data-animate] { opacity: 0; transform: translateY(10px); transition: opacity 420ms ease, transform 420ms ease; }
        [data-animate].in-view { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  )
}
