'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { val: '150+', label: 'Projects Delivered', suffix: '' },
    { val: '98', label: 'Client Retention', suffix: '%' },
    { val: '3', label: 'Avg Revenue Growth', suffix: 'x' },
    { val: '120', label: 'Enterprise Clients Served', suffix: '+' },
];

const logos = [
    'Shopify', 'WordPress', 'HubSpot', 'Salesforce', 'Figma', 'Vercel', 'Next.js', 'Stripe'
];

export default function TrustBar() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.trust-stat', {
            scrollTrigger: { trigger: container.current, start: 'top 80%' },
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
        });

        // Counter animation
        document.querySelectorAll('.trust-counter').forEach((el) => {
            const target = parseInt(el.getAttribute('data-target') || '0');
            gsap.fromTo({ val: 0 }, { val: target }, {
                scrollTrigger: { trigger: el, start: 'top 85%' },
                duration: 2,
                ease: 'power2.out',
                onUpdate: function () {
                    el.textContent = Math.round(this.targets()[0].val).toString();
                }
            });
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-24 border-y border-white/5 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(99,102,241,0.03),transparent)]" />

            <div className="container mx-auto px-6 space-y-20">
                {/* Animated Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <div key={i} className="trust-stat opacity-0 text-center space-y-2">
                            <div className="text-5xl md:text-6xl font-[900] italic tracking-tighter font-heading text-white flex items-end justify-center gap-0">
                                <span className="trust-counter" data-target={s.val.replace(/\D/g, '')}>{s.val.replace(/\D/g, '')}</span>
                                <span className="text-primary">{s.suffix}</span>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 font-heading">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Logo / Tech strip */}
                <div className="space-y-5">
                    <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-heading">Technologies & Platforms We Master</p>
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                        {logos.map((logo) => (
                            <span key={logo} className="text-sm font-[900] uppercase italic tracking-widest text-white/15 hover:text-white/50 transition-colors font-heading cursor-default">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
