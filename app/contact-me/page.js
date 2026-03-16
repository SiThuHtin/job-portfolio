"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        'service_37ugmkr', // Replace with your EmailJS service ID
        'template_ylumre8', // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'sithuhtin2022@gmail.com', // Your personal email
        },
        'F3RuUwL4wRRGypadF' // Replace with your EmailJS public key
      );
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto px-4 py-12">
        {/* Contact info side */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">together.</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-md text-lg">
            Feel free to reach out to me for any questions or opportunities! I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="space-y-6">
            {/* <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300 mr-4 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <a href="tel:+66640869218" className="text-white hover:text-yellow-400 text-lg font-medium transition-colors">+66 640 869 218</a>
              </div>
            </div> */}

            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300 mr-4 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <a href="mailto:sithuhtin2022@gmail.com" className="text-white hover:text-yellow-400 text-lg font-medium transition-colors">sithuhtin2022@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300 mr-4 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">LinkedIn</div>
                <a href="https://www.linkedin.com/in/see-min-thu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-lg font-medium transition-colors">See Min Thu</a>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300 mr-4 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.86 0-1.5-.5-2.7-1.3-3.7.1-.3.6-1.7-.1-3.6 0 0-1-.3-3.3 1.2a11.3 11.3 0 0 0-6 0c-2.3-1.5-3.3-1.2-3.3-1.2-.7 1.9-.2 3.3-.1 3.6-.8 1-1.3 2.2-1.3 3.7 0 5.3 3 6.5 6 6.8-.4.4-.7 1.1-.8 2.2V22"></path></svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">GitHub</div>
                <a href="https://github.com/SiThuHtin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-lg font-medium transition-colors">SiThuHtin</a>
              </div>
            </div>

            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300 mr-4 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Facebook</div>
                <a href="https://www.facebook.com/sithu.htin/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-lg font-medium transition-colors">Sithu Htin</a>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md bg-black/60 backdrop-blur-lg border-4 border-white/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-center mb-6 text-white text-2xl font-semibold">Contact Me</h2>
            {submitted ? (
              <div className="text-center text-green-500 font-medium">
                Thank you for reaching out!
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="mb-4">
                  <label className="block mb-1 text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-white">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-yellow-500 text-black font-bold text-lg shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;