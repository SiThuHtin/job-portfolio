import React from "react";

export default function About() {
  return (
    <main className="flex flex-col bg-black min-h-screen pt-16 w-full overflow-x-hidden">
      {/* <div className="flex items-center justify-center py-8 px-4">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">About Me</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div> */}

      <div className="py-12 px-4 md:px-16 bg-black">
        <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur-lg border-2 border-white/10 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Photo & highlights */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center text-3xl font-bold text-white">SH</div>
            <div className="mt-4 space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">4+ Years in IT</div>
              <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1 rounded-full">Supports 300+ users</div>
              <div className="inline-flex items-center gap-2 bg-white/5 text-gray-200 px-3 py-1 rounded-full">Healthcare IT Specialist</div>
            </div>

            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">LinkedIn</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">GitHub</a>
              <a href="https://sithu-htin-docs.gitbook.io/sithu-things" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white underline">Docs</a>
            </div>
          </div>

          {/* Story and details */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">From Medicine to Systems — a practical transition</h2>

            <p className="text-gray-300 mb-4">I started as a final-year medical student at the University of Medicine 2, Yangon (2013–2020). In 2022 I made a bold transition into IT — a decision driven by curiosity about systems and a desire to scale my impact beyond the bedside. My clinical background gives me a practical, user-centered perspective when designing and maintaining healthcare IT systems.</p>

            <p className="text-gray-300 mb-4">Over the last 4+ years (2022–2026) I’ve supported 300+ users, currently at the Shoklo Malaria Research Unit, and have worked across two major healthcare organizations. I specialize in building reliable, secure IT infrastructure for clinical teams — ensuring systems are available, compliant, and simple to use for non-technical staff.</p>

            <p className="text-gray-300 mb-4">My technical work spans Windows and Linux system administration, network infrastructure and security, web development (React, Next.js, Node.js, Python), database management (MySQL, PostgreSQL), and cloud platforms such as Microsoft 365 and Google Workspace. I enjoy solving problems where clinical workflows and technology intersect.</p>

            <p className="text-gray-300">I’m multilingual (Burmese and English, with basic Thai), a methodical problem-solver who blends clinical reasoning with systems thinking, and deeply passionate about documentation and knowledge sharing. I aim to bridge healthcare and technology to deliver dependable solutions that clinicians can trust.</p>

            <div className="mt-6">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
