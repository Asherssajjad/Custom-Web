'use client';

import Navbar from '@/components/sections/Navbar';
import Services from '@/components/sections/Services';
import Footer from '@/components/sections/Footer';
import CTA from '@/components/sections/CTA';
import { Zap } from 'lucide-react';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/20">
            <Navbar />

            <div className="pt-48 relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] -z-10" />
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-deep/10 blur-[120px] -z-10" />

                <div className="container mx-auto px-6 mb-32 space-y-10 text-center lg:text-left">
                    <div className="section-label mx-auto lg:mx-0">
                        <span className="dot" />
                        <Zap className="w-4 h-4" />
                        <span>Domain Expertise</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] font-display">
                        Our Core <br /><span className="gradient-text italic opacity-60">Disciplines</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/45 max-w-2xl font-medium font-body leading-relaxed mx-auto lg:mx-0">
                        Architecting the world-clase engines that power the next generation of digital leaders.
                    </p>
                </div>

                <Services />
                <CTA />
            </div>

            <Footer />
        </main>
    );
}
