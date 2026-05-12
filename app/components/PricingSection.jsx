'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheck, FiZap } from 'react-icons/fi';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for small businesses',
    price: '$300',
    originalPrice: '$350',
    duration: 'one-time',
    highlight: false,
    features: [
      '5-page responsive website',
      'Next.js / React build',
      'Mobile-friendly design',
      'Basic SEO setup',
      'Contact form integration',
      '1 round of revisions',
      '2 weeks delivery',
    ],
    cta: 'Get Started',
    ctaHref: '/contact-me?plan=starter',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Best for growing teams',
    price: '$800',
    originalPrice: '$900',
    duration: 'one-time',
    highlight: true,
    features: [
      'Up to 15-page custom website',
      'Next.js / React build',
      'Custom UI design system',
      'Database & CMS integration',
      'Advanced SEO & performance',
      'Admin dashboard',
      '3 rounds of revisions',
      '4 weeks delivery',
    ],
    cta: 'Start Project',
    ctaHref: '/contact-me?plan=professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For complex, large-scale needs',
    price: 'Custom',
    duration: 'quote',
    highlight: false,
    features: [
      'Unlimited pages & features',
      'Full-stack custom solution',
      'API & third-party integrations',
      'Role-based authentication',
      'Analytics & monitoring setup',
      'Dedicated support & SLA',
      'Unlimited revisions',
      'Timeline as agreed',
    ],
    cta: 'Request a Quote',
    ctaHref: '/contact-me?plan=enterprise',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function PricingSection() {
  return (
    <>
      {/* Divider */}
      <div className="flex items-center justify-center py-8 px-4">
        <div className="flex-grow border-t border-yellow-400/20" />
        <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">
          Web Dev Services
        </span>
        <div className="flex-grow border-t border-yellow-400/20" />
      </div>

      <section
        id="pricing"
        className="relative py-16 px-4 sm:px-8 md:px-16 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-400/5 rounded-full filter blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Website{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Pricing
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
              Transparent, fixed-price packages for every stage of your digital
              journey — no hidden fees.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 group
                  ${plan.highlight
                    ? 'border-yellow-400/60 bg-gradient-to-b from-yellow-400/10 to-black/80 shadow-2xl shadow-yellow-400/10 lg:scale-[1.03]'
                    : 'border-white/10 bg-black/60 backdrop-blur-sm hover:border-yellow-400/30'
                  }
                `}
              >
                {/* Popular badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      <FiZap className="text-sm" /> Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name & tag */}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-yellow-400' : 'text-white'
                      }`}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-500 text-lg line-through">
                        {plan.originalPrice}
                      </span>
                      <span className="text-xs font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full">
                        Limited offer
                      </span>
                    </div>
                  )}
                  <span className="text-4xl md:text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  {plan.duration !== 'quote' && (
                    <span className="ml-2 text-gray-500 text-sm">
                      / {plan.duration}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm">
                      <FiCheck
                        className={`mt-0.5 shrink-0 ${plan.highlight
                            ? 'text-yellow-400'
                            : 'text-yellow-500/70'
                          }`}
                      />
                      <span className="text-gray-300">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={plan.ctaHref}
                  className={`w-full text-center py-3 px-6 rounded-xl font-bold text-base transition-all duration-300
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

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-600 text-sm mt-10"
          >
            All prices are starting estimates. Final quote depends on scope and
            complexity. &mdash;{' '}
            <Link
              href="/contact-me"
              className="text-yellow-400/70 hover:text-yellow-400 underline underline-offset-2"
            >
              Let&apos;s discuss your project
            </Link>
          </motion.p>

          {/* Link to full pricing page */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65 }}
            className="flex justify-center mt-6"
          >
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-xl border border-yellow-400/30 text-yellow-400 font-semibold text-sm hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300"
            >
              View Full Pricing Details &amp; FAQ →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
