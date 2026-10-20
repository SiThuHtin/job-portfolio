import PricingPageContent from './PricingPageContent';
import { getProjectsWithFallback } from '@/lib/content';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Services & Pricing',
  description:
    'Transparent pricing for web development and IT services: websites, hosting, email security and support for NGOs and small businesses.',
  path: '/pricing',
});

export default async function PricingPage() {
  const projects = await getProjectsWithFallback();
  return (
    <div className="flex flex-col bg-black min-h-screen pt-16 w-full overflow-x-hidden">
      <PricingPageContent projects={projects} />
    </div>
  );
}
