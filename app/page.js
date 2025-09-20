'use client'
import { useRouter } from 'next/navigation'
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/my-projects')
  }
  const handleDownload = () => {
    // Replace with your actual CV file path or URL
    window.open('/cv.pdf', '_blank');
  }
  return (
    <main className="flex items-center justify-center min-h-screen bg-black pt-16">
      {/* Card Section */}
      <div className="glass-effect bg-black/60 backdrop-blur-lg border-4 border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h1 className="text-4xl py-5 text-center text-white">
          I am <span className="text-blue-700 font-bold">Sithu Htin</span>
        </h1>
        <ul className="mb-6 text-center">
          <li className="text-xl text-gray-200">IT System Admin</li>
          <li className="text-xl text-gray-200">Website Developer</li>
          <li className="text-xl text-gray-200">Database Developer</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={handleDownload}
            className="w-full md:w-auto py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center hover:from-purple-600 hover:to-blue-600 hover:scale-105 hover:shadow-2xl"
          >
            Download CV
            <IoMdDownload className="inline ml-2 text-xl" />
          </button>
          <button
            onClick={handleClick}
            className="w-full md:w-auto py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:scale-105 hover:shadow-2xl"
          >
            My Projects
          </button>
        </div>
      </div>
    </main>
  );
}