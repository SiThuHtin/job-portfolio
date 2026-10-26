import { BadgeDollarSign, Landmark, KeyRound, MapPin, Languages } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { WHY_WORK_WITH_ME } from '@/data/services';

// Icons follow the order of WHY_WORK_WITH_ME
const ICONS = [BadgeDollarSign, Landmark, KeyRound, MapPin, Languages];

export default function WhyWorkWithMe() {
  return (
    <section>
      <SectionLabel>Why Work With Me</SectionLabel>
      <div className="py-12 px-4 md:px-16 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {WHY_WORK_WITH_ME.map((reason, index) => {
            const Icon = ICONS[index] || BadgeDollarSign;
            return (
              <div key={reason.title} className="text-center sm:text-left lg:text-center bg-white/5 border border-white/10 rounded-2xl p-6">
                <Icon className="w-7 h-7 text-yellow-400 mb-3 mx-auto sm:mx-0 lg:mx-auto" aria-hidden="true" />
                <h3 className="type-card-title text-white mb-2">{reason.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
