'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';
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
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-24">
            <div className="container mx-auto px-6">
                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
                    <div>
                        <h2 className="about-reveal text-5xl md:text-7xl font-black mb-10 italic">Our <span className="gradient-text">Story</span></h2>
                        <p className="about-reveal text-xl text-muted-foreground leading-relaxed font-medium mb-8">
                            Founded in 2018, Lumina was born from a simple mission: to bridge the gap between complex technology and high-performance digital results. We realized that many agencies were building beautiful sites, but few were building sites that actually <span className="text-white">scaled businesses</span>.
                        </p>
                        <p className="about-reveal text-xl text-muted-foreground leading-relaxed font-medium">
                            We specialize in the triple threat of modern digital growth: <span className="text-secondary">Shopify</span> for commerce, <span className="text-primary">WordPress</span> for content authority, and <span className="text-accent">SEO</span> for organic dominance.
                        </p>
                    </div>
                    <div className="about-reveal relative rounded-[60px] overflow-hidden aspect-square lg:aspect-video border border-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                            alt="Team Work"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                    </div>
                </div>

                {/* Mission/Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
                    {[
                        { title: 'Mission', desc: 'Accelerating digital growth through performance-first engineering.', icon: Target, color: 'text-primary' },
                        { title: 'Vision', desc: 'To become the global standard for high-performance creative development.', icon: Eye, color: 'text-secondary' },
                        { title: 'Excellence', desc: 'Crafting every pixel with precision and purpose.', icon: Award, color: 'text-accent' },
                        { title: 'Team', desc: 'A collective of specialists obsessing over your results.', icon: Users, color: 'text-white' },
                    ].map((item, i) => (
                        <div key={i} className="about-reveal p-10 rounded-[48px] glass border border-white/5 hover:border-primary/40 transition-all flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8`}>
                                <item.icon className={`w-8 h-8 ${item.color}`} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 uppercase italic">{item.title}</h3>
                            <p className="text-muted-foreground font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Why Choose Us */}
                <div className="rounded-[60px] glass-morphism p-12 md:p-24 border border-white/5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Why <span className="gradient-text italic">Lumina?</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: 'Specialized Expertise', text: 'We don’t do everything. We do Shopify, WordPress, and SEO better than anyone else.' },
                            { title: 'Performance First', text: 'Our code is optimized for speed, accessibility, and search engine dominance from day one.' },
                            { title: 'Transparent Strategy', text: 'No black-box tactics. We provide clear, data-driven roadmaps and honest reporting.' }
                        ].map((feature, i) => (
                            <div key={i} className="space-y-4">
                                <h4 className="text-2xl font-black text-secondary">{feature.title}</h4>
                                <p className="text-muted-foreground text-lg leading-relaxed">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
