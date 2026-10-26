"use client";
import { useEffect, useState } from "react";
import { LINKS, MESSAGING, RESPONSE_TIME, TECH_TUESDAY_URL } from "@/data/site";
import { BUDGET_OPTIONS, NEED_OPTIONS, PLAN_TO_NEED } from "@/data/contact";
import { FaFacebookF, FaFacebookMessenger, FaGithub, FaLine, FaLinkedinIn, FaViber, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMessageCircle } from "react-icons/fi";

const CONTACT_ICONS = {
  Email: FiMail,
  Viber: FaViber,
  LINE: FaLine,
  WhatsApp: FaWhatsapp,
  "Facebook Messenger": FaFacebookMessenger,
  Facebook: FaFacebookF,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
};
import { ArrowRight } from "lucide-react";

const inputClass =
  "w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400";

const iconClass =
  "w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300 mr-4 shadow-[0_0_15px_rgba(250,204,21,0.2)]";

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

  // Email first, then messaging apps (only those filled in), then social profiles
  const contactRows = [LINKS.email, ...MESSAGING.filter((link) => link.href), LINKS.facebook, LINKS.linkedin, LINKS.github];

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto px-4 py-12">
        {/* Contact info side */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="type-page-title text-white mb-6">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">together.</span>
          </h1>
          <p className="text-gray-300 mb-4 max-w-md text-lg">
            Tell me about your website, hosting, email or IT needs. The first 15-minute check is free.
          </p>
          <p className="text-yellow-400 font-semibold mb-8">{RESPONSE_TIME}</p>

          <ul className="space-y-6">
            {contactRows.map((link) => {
              const Icon = CONTACT_ICONS[link.label] || FiMessageCircle;
              return (
                <li key={link.label}>
                  {/* The whole row is the link. App links (viber://) open the app; web links open a new tab */}
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center group w-fit max-w-full"
                  >
                    <span className={iconClass}>
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-gray-300">{link.label}</span>
                      <span className="block text-white group-hover:text-yellow-400 text-lg font-medium transition-colors break-all">
                        {link.display || "Message me"}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

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
            <h2 className="type-card-title text-center mb-6 text-white">Contact Me</h2>
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
                    Budget <span className="text-gray-300 text-sm">(optional)</span>
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
