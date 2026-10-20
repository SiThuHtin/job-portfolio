import { Quote } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { TESTIMONIALS } from '@/data/testimonials';

// Hidden until data/testimonials.js has real quotes
export default function Testimonials() {
  if (TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section>
      <SectionLabel>What Clients Say</SectionLabel>
      <div className="py-12 px-4 md:px-16 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Quote className="w-6 h-6 text-yellow-400/60 mb-3" aria-hidden="true" />
              <blockquote className="text-gray-300 leading-relaxed mb-4">{testimonial.quote}</blockquote>
              <figcaption className="text-sm">
                <span className="text-white font-semibold">{testimonial.name}</span>
                <span className="text-gray-500"> · {testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
