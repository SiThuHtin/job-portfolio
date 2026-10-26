'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SITE } from '@/data/site';
import { ArrowRight } from 'lucide-react';

const STATS = [
  { value: '4+', label: 'Years in IT' },
  { value: '10+', label: 'Websites Delivered' },
  { value: '3', label: 'Organizations Consulted' },
  { value: '300+', label: 'Users Supported' },
]

export default function HeroSection() {
  return (
    <div className="relative py-20 px-2 md:px-4 bg-gradient-to-b from-black via-black to-black/50 overflow-hidden w-full">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-6 w-48 h-48 md:w-96 md:h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-4 right-6 w-48 h-48 md:w-96 md:h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center z-10 w-full px-4"
      >
        <div className="glass-effect bg-black/40 backdrop-blur-xl border-2 border-yellow-400/30 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-3xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-6"
          >
            <span className="inline-block text-yellow-400 text-sm font-bold px-4 py-2 bg-yellow-400/10 rounded-full">
              {SITE.name} · {SITE.title}
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="type-hero-title py-2 sm:py-4 text-center text-white"
          >
            Websites, secure email and reliable servers for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">NGOs and small businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="type-lead mt-4 mb-8 text-center max-w-2xl mx-auto"
          >
            4+ years running IT for health organizations on the Thailand–Myanmar border. 10+ websites delivered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact-me"
              className="whitespace-nowrap py-3 px-6 sm:py-4 sm:px-8 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-base sm:text-lg shadow-lg transition-all duration-300 flex items-center justify-center hover:shadow-2xl hover:scale-105 hover:from-yellow-600 hover:to-yellow-700"
            >
              Get a free 15-minute check
            </Link>
            <Link
              href="/pricing"
              className="group whitespace-nowrap py-3 px-6 sm:py-4 sm:px-8 rounded-xl bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-base sm:text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-yellow-400/10 hover:scale-105"
            >
              See services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-yellow-400">{stat.value}</p>
                <p className="text-sm text-gray-300 md:whitespace-nowrap">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
