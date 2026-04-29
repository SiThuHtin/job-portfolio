"use client"
import { useState, useRef } from 'react'
import { Award, Database, Code, Book, ShieldCheck, Cpu, Zap, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const CERTS = [
  { id: 1, name: 'Google IT Support', org: 'Google', category: 'Technical', icon: Award, year: 2023 },
  { id: 2, name: 'Simbolo Oracle Database Class', org: 'Oracle', category: 'Technical', icon: Database, year: 2022 },
  { id: 3, name: 'Creathit Front End Development Bootcamp', org: 'Creathit', category: 'Technical', icon: Code, year: 2023 },
  { id: 4, name: 'Data Analysis with SQL', org: 'Datacamp', category: 'Technical', icon: Book, year: 2022 },
  { id: 5, name: 'Introduction to Linux', org: 'IBM', category: 'Technical', icon: Cpu, year: 2021 },
  { id: 6, name: 'Python Developer', org: 'SoloLearn', category: 'Technical', icon: Zap, year: 2024 },
  { id: 7, name: 'Various IT Certificates', org: 'SoloLearn', category: 'Technical', icon: FileText },
  { id: 8, name: 'PSEA', org: '[Organization]', category: 'Other', icon: ShieldCheck },
  { id: 9, name: 'Information Security and Data Protection Awareness Course', org: '[Organization]', category: 'Other', icon: Award },
]

export default function Certifications() {
  const [filter, setFilter] = useState('All')
  const lastClickRef = useRef(0)

  const categories = ['All', 'Technical', 'Other']

  const visible = CERTS.filter((c) => filter === 'All' || c.category === filter)

  const setFilterSafe = (cat) => {
    const now = Date.now()
    if (now - lastClickRef.current < 160) return
    lastClickRef.current = now
    setFilter(cat)
  }

  return (
    <section className="py-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-white"
        >
          Certifications
        </motion.h2>
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterSafe(cat)}
              className={`text-sm px-3 py-1 rounded-full transition ${filter === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filter === 'All' ? (
        <p className="text-sm text-gray-400 mb-6 max-w-2xl">A curated list of professional certifications grouped by category. Click a card for more details.</p>
      ) : (
        <p className="text-sm text-gray-400 mb-6">Showing {visible.length} result{visible.length !== 1 ? 's' : ''} for <span className="font-medium">{filter}</span></p>
      )}

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {visible.map((c, index) => {
            const Icon = c.icon || Award
            return (
              <motion.article
                key={c.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-gray-900/60 border border-gray-800 rounded-2xl p-4 shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all cursor-pointer hover:border-gray-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 text-white flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white">{c.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{c.org} {c.year ? ` | ${c.year}` : ''}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-900/20 text-indigo-200">{c.category}</span>
                      <span className="text-xs text-gray-500">|</span>
                      <span className="text-xs text-gray-500">Verified</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <div className="mt-6 text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">No certifications found for <span className="font-medium">{filter}</span>.</p>
          <p className="text-xs mt-2">Try switching to <button onClick={() => setFilter('All')} className="underline">All</button>.</p>
        </div>
      )}
    </section>
  )
}
