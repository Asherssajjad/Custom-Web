import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/20 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <CaseStudies isPreview={true} />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
