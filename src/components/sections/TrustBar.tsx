'use client';

import { motion } from 'framer-motion';

const logos = [
    'Shopify', 'WordPress', 'HubSpot', 'Salesforce', 'Figma', 'Vercel', 'Next.js', 'Stripe'
];

export default function TrustBar() {
    return (
        <section className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Top Logo Strip — matches screenshot */}
                <div className="mb-24 flex flex-col items-center">
                    <p className="font-body text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">Technologies & Platforms We Master</p>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                        {logos.map((logo) => (
                            <span key={logo} className="font-display text-xl font-[900] uppercase italic tracking-widest text-white/10 hover:text-white/40 transition-colors cursor-default">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Core Expertise Section — matches screenshot exactly */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[2px] bg-primary" />
                            <span className="font-body text-[10px] font-black uppercase tracking-[0.3em] text-primary">Our Domain</span>
                        </div>

                        <h2 className="font-display text-[12vw] md:text-[8vw] lg:text-[7vw] font-[900] uppercase italic leading-[0.8] tracking-tighter text-white">
                            Core<br />
                            <span className="gradient-text">Expertise</span>
                        </h2>
                    </div>

                    <div className="lg:pt-20">
                        <p className="font-body text-white text-2xl md:text-3xl font-bold leading-tight max-w-xl">
                            We deliver high-impact digital solutions that accelerate scalability for modern enterprises.
                        </p>
                        <div className="mt-12 grid grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <p className="font-display text-4xl font-[900] italic text-primary">150+</p>
                                <p className="font-body text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Projects Shipped</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-display text-4xl font-[900] italic text-primary">98%</p>
                                <p className="font-body text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Client Retention</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
