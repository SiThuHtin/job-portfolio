'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CaseStudyCard from '@/app/components/CaseStudyCard';
import { FEATURED_PROJECTS } from '@/data/projects';
import { useState } from 'react';
import { FiCheck, FiZap, FiChevronDown, FiMail, FiMessageSquare } from 'react-icons/fi';
import {
  WEB_PLANS as plans,
  WEB_ADDONS as addons,
  FAQS as faqs,
  IT_SERVICES,
  HOSTING_TIERS,
  HOSTING_SETUP_FEE,
  HOSTING_NOTES,
  CURRENCY_NOTE,
  WEDDING_PACKAGES,
  WEDDING_ADDONS,
} from '@/data/services';

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-semibold hover:bg-white/5 transition-colors"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{faq.q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <FiChevronDown className="text-yellow-400 text-lg shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function PricingPageContent() {
  return (
    <div className="relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-yellow-400/5 rounded-full filter blur-3xl" />
      </div>

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative z-10 py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-block text-yellow-400 text-sm font-bold mb-4 px-4 py-2 bg-yellow-400/10 rounded-full">
            Web &amp; IT Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">
            Simple,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
              Transparent
            </span>{' '}
            Pricing
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            No hidden fees. No surprises. Websites, hosting, email security and IT support for NGOs and small businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-me"
              className="inline-flex items-center gap-2 py-3 px-7 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-base hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg shadow-yellow-400/20 hover:scale-105"
            >
              <FiMail /> Contact Me
            </Link>
            <a
              href="#pricing-cards"
              className="inline-flex items-center gap-2 py-3 px-7 rounded-xl border border-yellow-400/40 text-yellow-400 font-bold text-base hover:bg-yellow-400/10 transition-all duration-300"
            >
              View Plans ↓
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Pricing Cards ───────────────────────────────── */}
      <section id="pricing-cards" className="relative z-10 py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300
                ${plan.highlight
                  ? 'border-yellow-400/60 bg-gradient-to-b from-yellow-400/10 to-black/80 shadow-2xl shadow-yellow-400/10 lg:scale-[1.03]'
                  : 'border-white/10 bg-black/60 backdrop-blur-sm hover:border-yellow-400/30'
                }
              `}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <FiZap /> {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h2 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-yellow-400' : 'text-white'}`}>
                  {plan.name}
                </h2>
                <p className="text-gray-500 text-sm">{plan.tagline}</p>
              </div>

              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-extrabold text-white">{plan.price}</span>
                {plan.duration !== 'quote' && (
                  <span className="ml-2 text-gray-500 text-sm">/ {plan.duration}</span>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed border-b border-white/10 pb-6">
                {plan.description}
              </p>

              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                What&apos;s included
              </p>
              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat.label} className="flex items-start gap-3 text-sm">
                    <FiCheck
                      className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-yellow-400' : 'text-yellow-500/70'}`}
                    />
                    <span className="text-gray-300">{feat.label}</span>
                  </li>
                ))}
              </ul>

              {plan.notIncluded.length > 0 && (
                <>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">
                    Not included
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {plan.notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 shrink-0 text-gray-700">✕</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <Link
                href={plan.ctaHref}
                className={`w-full text-center py-3 px-6 rounded-xl font-bold text-base transition-all duration-300 mt-auto
                  ${plan.highlight
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 shadow-lg shadow-yellow-400/20 hover:scale-105'
                    : 'border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400'
                  }
                `}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 text-sm mt-10"
        >
          All prices are starting estimates. Final quote depends on scope &amp; complexity. &mdash;{' '}
          <Link href="/contact-me" className="text-yellow-400/70 hover:text-yellow-400 underline underline-offset-2">
            Let&apos;s discuss your project
          </Link>
          <span className="block mt-2">{CURRENCY_NOTE}</span>
        </motion.p>
      </section>

      {/* ── Add-ons ─────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Optional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Add-ons
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Enhance any plan with these optional services. Prices are fixed — no surprises.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((addon, i) => {
              const content = (
                <>
                  <span className="text-2xl">{addon.icon}</span>
                  <p className="text-white text-sm font-semibold leading-snug">{addon.label}</p>
                  <p className="text-yellow-400 font-bold text-sm mt-auto">{addon.price}{addon.href && ' ↓'}</p>
                </>
              );
              return (
                <motion.div
                  key={addon.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex"
                >
                  {addon.href ? (
                    <a href={addon.href} className="flex flex-col gap-2 p-5 w-full rounded-xl border border-white/10 bg-black/50 hover:border-yellow-400/30 transition-colors duration-300">
                      {content}
                    </a>
                  ) : (
                    <div className="flex flex-col gap-2 p-5 w-full rounded-xl border border-white/10 bg-black/50 hover:border-yellow-400/30 transition-colors duration-300">
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── IT Services ─────────────────────────────────── */}
      <section id="it-services" className="relative z-10 py-16 px-4 sm:px-8 md:px-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              IT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Services
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Email security, monitoring, training and support for your organization. Fixed prices in Thai baht.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IT_SERVICES.filter((service) => !service.hidden).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="flex flex-col rounded-2xl border border-white/10 bg-black/60 p-6 hover:border-yellow-400/30 transition-colors duration-300"
              >
                <h3 className="text-white font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-white">{service.price}</span>
                  <span className="ml-2 text-gray-500 text-sm">{service.unit}</span>
                </div>
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {service.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <FiCheck className="mt-0.5 shrink-0 text-yellow-500/70" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact-me?plan=${service.id}`}
                  className="w-full text-center py-2.5 px-6 rounded-xl font-bold text-sm border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
                >
                  Ask about this
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Managed Hosting ─────────────────────────────── */}
      <section id="hosting" className="relative z-10 py-16 px-4 sm:px-8 md:px-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Managed{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Hosting
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Hosting, backups, updates and monitoring handled for you. One-time setup {HOSTING_SETUP_FEE}.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {HOSTING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col rounded-2xl border border-white/10 bg-black/60 p-7 hover:border-yellow-400/30 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{tier.name}</h3>
                <div className="mb-5">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="ml-2 text-gray-500 text-sm">/ month</span>
                </div>
                {tier.includesFrom && (
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                    Everything in {tier.includesFrom}, plus
                  </p>
                )}
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {tier.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <FiCheck className="mt-0.5 shrink-0 text-yellow-500/70" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact-me?plan=${tier.id}`}
                  className="w-full text-center py-3 px-6 rounded-xl font-bold text-base border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
                >
                  Choose {tier.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <ul className="mt-8 flex flex-col items-center gap-2 text-sm text-gray-400">
            {HOSTING_NOTES.map((note) => (
              <li key={note} className="flex items-start gap-2">
                <FiZap className="mt-0.5 shrink-0 text-yellow-400" />
                {note}
              </li>
            ))}
            <li className="text-gray-600">{CURRENCY_NOTE}</li>
          </ul>
        </div>
      </section>

      {/* ── Wedding Websites ────────────────────────────── */}
      <section id="wedding" className="relative z-10 py-16 px-4 sm:px-8 md:px-16 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Wedding{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Websites
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Invitation websites with RSVP that guests open on their phones.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {WEDDING_PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col rounded-2xl border border-white/10 bg-black/60 p-7 hover:border-yellow-400/30 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{pkg.tagline}</p>
                <div className="mb-5">
                  <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                  <span className="ml-2 text-gray-500 text-sm">one-time</span>
                </div>
                {pkg.includesFrom && (
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                    Everything in {pkg.includesFrom}, plus
                  </p>
                )}
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <FiCheck className="mt-0.5 shrink-0 text-yellow-500/70" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact-me?plan=${pkg.id}`}
                  className="w-full text-center py-3 px-6 rounded-xl font-bold text-base border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
                >
                  Choose {pkg.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <ul className="mt-8 flex flex-col items-center gap-2 text-sm text-gray-400">
            {WEDDING_ADDONS.map((addon) => (
              <li key={addon.label} className="flex items-start gap-2">
                <FiZap className="mt-0.5 shrink-0 text-yellow-400" />
                <span>
                  {addon.label}: <span className="text-yellow-400 font-semibold">{addon.price}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Technologies Used ───────────────────────────── */}
      <section className="relative z-10 py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Technologies{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                I Use
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Every project is built with modern, production-grade tools — chosen for performance, scalability, and developer experience.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Next.js', icon: '▲', color: 'from-white/10 to-white/5', border: 'border-white/20', text: 'text-white' },
              { name: 'React', icon: '⚛', color: 'from-cyan-500/10 to-cyan-500/5', border: 'border-cyan-500/30', text: 'text-cyan-400' },
              { name: 'Tailwind CSS', icon: '🎨', color: 'from-sky-500/10 to-sky-500/5', border: 'border-sky-500/30', text: 'text-sky-400' },
              { name: 'Node.js', icon: '🟢', color: 'from-green-500/10 to-green-500/5', border: 'border-green-500/30', text: 'text-green-400' },
              { name: 'PostgreSQL / MySQL', icon: '🐘', color: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-500/30', text: 'text-blue-400' },
              { name: 'Vercel', icon: '🚀', color: 'from-white/10 to-white/5', border: 'border-white/20', text: 'text-white' },
              { name: 'Cloudflare CDN', icon: '🌐', color: 'from-orange-500/10 to-orange-500/5', border: 'border-orange-500/30', text: 'text-orange-400' },
              { name: 'MongoDB Atlas', icon: '🍃', color: 'from-green-600/10 to-green-600/5', border: 'border-green-600/30', text: 'text-green-500' },
              { name: 'Supabase', icon: '⚡', color: 'from-emerald-500/10 to-emerald-500/5', border: 'border-emerald-500/30', text: 'text-emerald-400' },
              { name: 'Neon', icon: '💡', color: 'from-violet-500/10 to-violet-500/5', border: 'border-violet-500/30', text: 'text-violet-400' },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-br ${tech.color} border ${tech.border} hover:scale-105 transition-transform duration-300 cursor-default`}
              >
                <span className="text-xl leading-none">{tech.icon}</span>
                <span className={`font-semibold text-sm ${tech.text}`}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ────────────────────────────── */}
      <section className="relative z-10 py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Selected{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Work
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Websites and systems I&apos;ve built for organizations I&apos;ve worked for and for clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link
              href="/about-me#projects"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-xl border border-yellow-400/30 text-yellow-400 font-semibold text-sm hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
            >
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}

      <section className="relative z-10 py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Questions
              </span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <FAQItem faq={faq} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────── */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="rounded-2xl border border-yellow-400/20 bg-gradient-to-b from-yellow-400/5 to-black p-10">
            <FiMessageSquare className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Not sure which plan fits?
            </h2>
            <p className="text-gray-400 text-base mb-8 max-w-lg mx-auto">
              Tell me about your project and I&apos;ll help you figure out the best approach and give
              you an accurate quote — no commitment required.
            </p>
            <Link
              href="/contact-me"
              className="inline-flex items-center gap-2 py-4 px-10 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg shadow-yellow-400/20 hover:scale-105"
            >
              <FiMail /> Let&apos;s Talk
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
