'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FiCheck, FiZap, FiChevronDown, FiMail, FiMessageSquare } from 'react-icons/fi';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for small businesses & individuals',
    price: '$300',
    duration: 'one-time',
    highlight: false,
    badge: null,
    description:
      'Get a clean, fast, and professional web presence without breaking the bank. Ideal for portfolios, landing pages, and small business sites.',
    features: [
      { label: '5-page responsive website', note: null },
      { label: 'Next.js / React build', note: null },
      { label: 'Mobile-friendly design', note: null },
      { label: 'Basic on-page SEO setup', note: null },
      { label: 'Contact form integration', note: null },
      { label: 'Google Analytics setup', note: null },
      { label: '1 round of revisions', note: null },
      { label: '2 weeks delivery', note: null },
    ],
    notIncluded: ['Custom backend / database', 'Admin dashboard', 'E-commerce features'],
    cta: 'Get Started',
    ctaHref: '/contact-me?plan=starter',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Best for growing teams & startups',
    price: '$800',
    duration: 'one-time',
    highlight: true,
    badge: 'Most Popular',
    description:
      'A fully custom website built with modern frameworks. Includes a CMS or database so you can manage your content without touching code.',
    features: [
      { label: 'Up to 15-page custom website', note: null },
      { label: 'Next.js / React build', note: null },
      { label: 'Custom UI & design system', note: null },
      { label: 'Database & CMS integration', note: null },
      { label: 'Advanced SEO & performance audit', note: null },
      { label: 'Admin dashboard (CRUD)', note: null },
      { label: 'Role-based auth (optional)', note: null },
      { label: '3 rounds of revisions', note: null },
      { label: '4 weeks delivery', note: null },
    ],
    notIncluded: ['Ongoing maintenance', 'Third-party API integrations (add-on)'],
    cta: 'Start Project',
    ctaHref: '/contact-me?plan=professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For complex, large-scale solutions',
    price: 'Custom',
    duration: 'quote',
    highlight: false,
    badge: null,
    description:
      'Need something bigger? I scope and price enterprise projects individually to match your exact requirements and timeline.',
    features: [
      { label: 'Unlimited pages & features', note: null },
      { label: 'Full-stack custom solution', note: null },
      { label: 'API & third-party integrations', note: null },
      { label: 'Role-based authentication', note: null },
      { label: 'Analytics & monitoring setup', note: null },
      { label: 'Dedicated support & SLA', note: null },
      { label: 'Ongoing maintenance options', note: null },
      { label: 'Unlimited revisions', note: null },
      { label: 'Timeline as agreed', note: null },
    ],
    notIncluded: [],
    cta: 'Request a Quote',
    ctaHref: '/contact-me?plan=enterprise',
  },
];

const addons = [
  { icon: '🌐+🔒', label: 'Domain & SSL Certificate Setup', price: '+$50' },
  { icon: '🔗', label: 'Third-party API Integration', price: '+$150/each' },
  { icon: '📧', label: 'Email Integration (Nodemailer / SendGrid)', price: '+$80' },
  { icon: '🛒', label: 'E-commerce (WooCommerce / Stripe)', price: '+$200' },
  { icon: '🔄', label: 'Monthly Maintenance Retainer', price: 'From $80/mo' },
  { icon: '🌍', label: 'Multi-language Support (i18n)', price: '+$120' },
  { icon: '📊', label: 'Custom Analytics Dashboard', price: '+$180' },
];

const faqs = [
  {
    q: 'How do I get started?',
    a: "Click the CTA button on the plan that fits your needs and fill out the contact form. I'll reply within 24 hours with a project intake questionnaire to clarify scope and timeline.",
  },
  {
    q: 'Do you require a deposit?',
    a: 'Yes. I typically ask for a 50% deposit upfront to secure your project slot, with the remaining 50% due upon delivery and approval.',
  },
  {
    q: 'What if I need more pages than the plan includes?',
    a: 'No problem. Additional pages can be added at $30–$60 per page depending on complexity. We can discuss this during the scoping call.',
  },
  {
    q: 'Do you offer revisions after final delivery?',
    a: 'Each plan includes a set number of revision rounds. After that, additional revisions are billed at my hourly rate of $40/hr.',
  },
  {
    q: 'Will I own the source code?',
    a: 'Absolutely. Upon final payment, you receive full ownership of the source code and all project assets.',
  },
  {
    q: 'Can you host the website for me?',
    a: 'I recommend Vercel (Next.js) or shared hosting (WordPress). I can set everything up for you as an add-on service.',
  },
];

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
            Web Development Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">
            Simple,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
              Transparent
            </span>{' '}
            Pricing
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            No hidden fees. No surprises. Pick the plan that fits your project, or reach out for a
            custom quote tailored exactly to your needs.
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
      <section id="pricing-cards" className="relative z-10 py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
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
                  ? 'border-yellow-400/60 bg-gradient-to-b from-yellow-400/10 to-black/80 shadow-2xl shadow-yellow-400/10 scale-[1.03]'
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
        </motion.p>
      </section>

      {/* ── Add-ons ─────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4 md:px-16">
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
            {addons.map((addon, i) => (
              <motion.div
                key={addon.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex flex-col gap-2 p-5 rounded-xl border border-white/10 bg-black/50 hover:border-yellow-400/30 transition-colors duration-300"
              >
                <span className="text-2xl">{addon.icon}</span>
                <p className="text-white text-sm font-semibold leading-snug">{addon.label}</p>
                <p className="text-yellow-400 font-bold text-sm mt-auto">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4 md:px-16">
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
