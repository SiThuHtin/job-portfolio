import Link from 'next/link';

export default function ContactSection() {
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="flex-grow border-t border-yellow-400/30"></div>
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">Get In Touch</span>
        <div className="flex-grow border-t border-yellow-400/30"></div>
      </div>
      <div className="py-16 px-4 md:px-16 bg-gradient-to-t from-yellow-900/20 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact-me"
              className="w-full sm:w-auto py-4 px-8 rounded-xl bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-600 transition-colors shadow-lg shadow-yellow-500/20"
            >
              Say Hello
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
