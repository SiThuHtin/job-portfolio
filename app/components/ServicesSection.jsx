import Link from 'next/link';
import { Globe, Server, MailCheck, Building2, ShieldAlert, Heart, ArrowRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { HOME_SERVICES } from '@/data/services';

const ICONS = { Globe, Server, MailCheck, Building2, ShieldAlert, Heart };

export default function ServicesSection() {
  return (
    <section>
      <SectionLabel id="services">Services</SectionLabel>
      <div className="py-12 px-4 md:px-16 bg-black">
        <h2 className="type-section-title text-center text-white mb-4">What I can do for you</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8 md:mb-12">
          Clear, fixed prices for the IT and web work small organizations need most.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {HOME_SERVICES.filter((service) => !service.hidden).map((service) => {
            const Icon = ICONS[service.icon] || Globe;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group flex flex-col bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)] hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="type-card-title text-white mb-2 group-hover:text-yellow-300 transition-colors">{service.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-5">{service.description}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm font-semibold text-yellow-400">{service.priceFrom}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
