'use client';

import Navbar from '@/components/sections/Navbar';
import CaseStudies from '@/components/sections/CaseStudies';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import { Target } from 'lucide-react';

export default function CaseStudiesListing() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/20">
            <Navbar />

            <div className="pt-48 relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -z-10" />
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-deep/10 blur-[120px] -z-10" />

                <div className="container mx-auto px-6 mb-24 space-y-10 text-center">
                    <div className="section-label mx-auto">
                        <span className="dot" />
                        <Target className="w-4 h-4" />
                        <span>Insights & Impact</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] font-display">
                        Global <br /><span className="gradient-text italic opacity-60">Results</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/45 max-w-2xl mx-auto font-medium font-body leading-relaxed">
                        Explore our portfolio of high-performance digital products and the measurable value they generated for global leaders.
                    </p>
                </div>

                <CaseStudies />
                <CTA />
            </div>

            <Footer />
        </main>
    );
}
