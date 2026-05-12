import PricingPageContent from './PricingPageContent';
import { getProjectsWithFallback } from '@/lib/content';

export const metadata = {
  title: 'Web Development Pricing',
  description:
    'Transparent pricing for web development services — from simple WordPress sites to full-stack Next.js applications. Get a custom quote today.',
};

export default async function PricingPage() {
  const projects = await getProjectsWithFallback();
  return (
    <main className="flex flex-col bg-black min-h-screen pt-16 w-full overflow-x-hidden">
      <PricingPageContent projects={projects} />
    </main>
  );
}
