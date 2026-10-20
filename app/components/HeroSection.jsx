'use client'
import { useRouter } from 'next/navigation'
import { IoMdDownload } from "react-icons/io";
import { motion } from 'framer-motion';

export default function HeroSection() {
  const router = useRouter();

  const handleClick = () => {
    const el = document.getElementById('experience')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      router.push('/#experience')
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Sithu_Htin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
            className="text-center mb-8"
          >
            <span className="inline-block text-yellow-400 text-sm font-bold mb-4 px-4 py-2 bg-yellow-400/10 rounded-full">Open to IT / Sysadmin roles</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 sm:py-6 text-center text-white font-bold"
          >
            I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">Sithu Htin</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8 text-center"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 font-semibold tracking-wide">
              IT &amp; Linux Systems Administrator
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              4+ years keeping Windows &amp; Linux infrastructure secure and running for 300+ users in healthcare and research organisations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          >
            <button
              onClick={handleDownload}
              className="group py-3 px-6 sm:py-4 sm:px-8 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold whitespace-nowrap text-base sm:text-lg shadow-lg transition-all duration-300 flex items-center justify-center hover:shadow-2xl hover:scale-105 hover:from-yellow-600 hover:to-yellow-700"
            >
              <IoMdDownload className="mr-2 text-xl group-hover:animate-bounce" />
              Download CV
            </button>
            <button
              onClick={handleClick}
              className="py-3 px-6 sm:py-4 sm:px-8 rounded-xl bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold whitespace-nowrap text-base sm:text-lg transition-all duration-300 hover:bg-yellow-400/10 hover:scale-105"
            >
              View Experience -&gt;
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">4+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">300+</p>
              <p className="text-sm text-gray-400">Users Supported</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">15+</p>
              <p className="text-sm text-gray-400">Certifications</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-yellow-400">10+</p>
              <p className="text-sm text-gray-400">IT Labs</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
