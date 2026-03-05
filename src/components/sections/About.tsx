'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Zap } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function About() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.about-reveal', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 70%',
            },
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-24 bg-black selection:bg-primary/20">
            <div className="container mx-auto px-6">
                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 text-xs font-black tracking-[0.4em] uppercase text-primary">
                            <Zap className="w-4 h-4 fill-primary/30" />
                            <span>Our Lineage</span>
                        </div>
                        <h2 className="about-reveal text-6xl md:text-8xl font-[900] mb-10 italic uppercase tracking-tighter font-heading">Our <br /><span className="gradient-text italic opacity-60">Architecture</span></h2>
                        <p className="about-reveal text-xl text-muted-foreground leading-relaxed font-medium font-sans tracking-tight">
                            Founded in 2018, Lumina was born from a simple mission: to bridge the gap between complex digital architecture and market-leading results. We build systems that <span className="text-white font-bold">don&apos;t just look better; they perform better</span>.
                        </p>
                        <p className="about-reveal text-xl text-muted-foreground leading-relaxed font-medium font-sans tracking-tight">
                            Our discipline focuses on the nexus of high-speed e-commerce, content authority, and aggressive search dominance.
                        </p>
                    </div>
                    <div className="about-reveal relative rounded-[48px] overflow-hidden aspect-square border border-white/5 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                            alt="Team Work"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                    </div>
                </div>

                {/* Mission/Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Mission', desc: 'Accelerating digital growth through performance-first engineering.', icon: Target },
                        { title: 'Vision', desc: 'To become the global standard for high-performance creative development.', icon: Eye },
                        { title: 'Excellence', desc: 'Crafting every pixel with precision and purpose.', icon: Award },
                        { title: 'Team', desc: 'A collective of specialists obsessing over your results.', icon: Users },
                    ].map((item, i) => (
                        <div key={i} className="about-reveal p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all text-center group">
                            <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 mx-auto group-hover:bg-primary/20 group-hover:border-primary transition-all`}>
                                <item.icon className="w-7 h-7 text-white/50 group-hover:text-primary" />
                            </div>
                            <h3 className="text-xl font-black mb-4 uppercase italic font-heading tracking-tighter">{item.title}</h3>
                            <p className="text-muted-foreground font-medium font-sans text-lg leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
