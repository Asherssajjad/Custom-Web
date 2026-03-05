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
            <div className="pt-48">
                <div className="container mx-auto px-6 mb-32 space-y-12">
                    <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/[0.02] text-primary uppercase font-black text-xs tracking-[0.4em]">
                        <Zap className="w-4 h-4 fill-primary/30" />
                        <span>Domain Expertise</span>
                    </div>
                    <h1 className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-[900] italic tracking-tighter uppercase leading-[0.8] font-heading">
                        Our Core <br /><span className="gradient-text italic opacity-60">Disciplines</span>
                    </h1>
                    <p className="text-2xl text-muted-foreground max-w-2xl font-medium font-sans tracking-tight leading-relaxed">
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
