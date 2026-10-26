"use client";
import { useEffect, useState } from "react";
import { LINKS, MESSAGING, RESPONSE_TIME, TECH_TUESDAY_URL } from "@/data/site";
import { BUDGET_OPTIONS, NEED_OPTIONS, PLAN_TO_NEED } from "@/data/contact";
import { ArrowRight } from "lucide-react";

const inputClass =
  "w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400";

const iconClass =
  "w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300 mr-4 shadow-[0_0_15px_rgba(250,204,21,0.2)]";

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);

const ContactMe = () => {
  // `website` is a honeypot: hidden from people, filled in by spam bots
  const [form, setForm] = useState({ name: "", email: "", need: "", budget: "", message: "", website: "" });
  const [plan, setPlan] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Pre-select the service when arriving from a services-page button (?plan=...)
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("plan") || "";
    if (Object.hasOwn(PLAN_TO_NEED, slug)) {
      setPlan(slug);
      setForm((current) => ({ ...current, need: PLAN_TO_NEED[slug] }));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const errData = await res.json();
        setError(errData.message || "Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const messagingLinks = MESSAGING.filter((link) => link.href);

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto px-4 py-12">
        {/* Contact info side */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">together.</span>
          </h2>
          <p className="text-gray-300 mb-4 max-w-md text-lg">
            Tell me about your website, hosting, email or IT needs. The first 15-minute check is free.
          </p>
          <p className="text-yellow-400 font-semibold mb-8">{RESPONSE_TIME}</p>

          <div className="space-y-6">
            <div className="flex items-center group">
              <div className={iconClass}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div className="min-w-0">
                <div className="text-sm text-gray-400">Email</div>
                <a href={LINKS.email.href} className="text-white hover:text-yellow-400 text-lg font-medium transition-colors break-all">{LINKS.email.display}</a>
              </div>
            </div>

            {messagingLinks.map((link) => (
              <div key={link.label} className="flex items-center group">
                <div className={iconClass}>
                  <ChatIcon />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{link.label}</div>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-lg font-medium transition-colors">{link.display || "Message me"}</a>
                </div>
              </div>
            ))}

            <div className="flex items-center group">
              <div className={iconClass}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Facebook</div>
                <a href={LINKS.facebook.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-lg font-medium transition-colors">{LINKS.facebook.display}</a>
              </div>
            </div>

            <div className="flex items-center group">
              <div className={iconClass}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">LinkedIn</div>
                <a href={LINKS.linkedin.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-lg font-medium transition-colors">{LINKS.linkedin.display}</a>
              </div>
            </div>

            <div className="flex items-center group">
              <div className={iconClass}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.86 0-1.5-.5-2.7-1.3-3.7.1-.3.6-1.7-.1-3.6 0 0-1-.3-3.3 1.2a11.3 11.3 0 0 0-6 0c-2.3-1.5-3.3-1.2-3.3-1.2-.7 1.9-.2 3.3-.1 3.6-.8 1-1.3 2.2-1.3 3.7 0 5.3 3 6.5 6 6.8-.4.4-.7 1.1-.8 2.2V22"></path></svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">GitHub</div>
                <a href={LINKS.github.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 text-lg font-medium transition-colors">{LINKS.github.display}</a>
              </div>
            </div>
          </div>

          {TECH_TUESDAY_URL && (
            <a
              href={TECH_TUESDAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 w-fit text-yellow-400 font-semibold underline underline-offset-4 hover:text-yellow-300"
            >
              Join Tech Tuesday
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md bg-black/60 backdrop-blur-lg border-4 border-white/20 rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-center mb-6 text-white text-2xl font-semibold">Contact Me</h2>
            {submitted ? (
              <div className="text-center text-green-500 font-medium">
                Thank you for reaching out! {RESPONSE_TIME}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="mb-4">
                  <label htmlFor="contact-name" className="block mb-1 text-white">Name</label>
                  <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} required className={inputClass} />
                </div>
                <div className="mb-4">
                  <label htmlFor="contact-email" className="block mb-1 text-white">Email</label>
                  <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} />
                </div>
                <div className="mb-4">
                  <label htmlFor="contact-need" className="block mb-1 text-white">What do you need?</label>
                  <select id="contact-need" name="need" value={form.need} onChange={handleChange} required className={inputClass}>
                    <option value="" disabled>Choose one</option>
                    {NEED_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="contact-budget" className="block mb-1 text-white">
                    Budget <span className="text-gray-400 text-sm">(optional)</span>
                  </label>
                  <select id="contact-budget" name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                    <option value="">Prefer not to say</option>
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="contact-message" className="block mb-1 text-white">Message</label>
                  <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required rows={4} className={inputClass} />
                </div>
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
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
