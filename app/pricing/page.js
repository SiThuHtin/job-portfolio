import PricingPageContent from './PricingPageContent';
import { pageMetadata } from '@/lib/metadata';
import { professionalServiceJsonLd } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Services & Pricing',
  description:
    'Transparent pricing for web development and IT services: websites, hosting, email security and support for NGOs and small businesses.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <div className="flex flex-col bg-black min-h-screen pt-16 w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd()) }}
      />
      <PricingPageContent />
    </div>
  );
}
