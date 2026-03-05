'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const cases = [
  {
    title: 'Everest E-commerce',
    category: 'Shopify Excellence',
    impact: '+240% Sales Growth',
    tags: ['E-commerce', 'Headless', 'Speed'],
    description: 'We rebuilt their entire store using a high-performance headless architecture, resulting in record-breaking conversions.',
    image: 'https://images.unsplash.com/photo-1558281063-17045f14e9f3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Nexus Real Estate',
    category: 'WordPress Enterprise',
    impact: '99.9% Core Web Vitals',
    tags: ['CMS', 'CRM Sync', 'Enterprise'],
    description: 'A bespoke WordPress platform integrated with custom CRM workflows to manage premium listings globally.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function CaseStudies({ isPreview = false }: { isPreview?: boolean }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.case-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="case-studies" className={`py-40 bg-black selection:bg-primary/20 ${isPreview ? '' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4 text-xs font-black tracking-[0.4em] uppercase text-primary">
              <Zap className="w-4 h-4 fill-primary/30" />
              <span>Impact Report</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-[900] italic leading-tight uppercase tracking-tighter font-heading">Global <span className="gradient-text">Results</span></h2>
          </div>
          {isPreview && (
            <Link href="/case-studies" className="group flex items-center gap-4 font-black uppercase text-xs tracking-widest text-primary hover:text-white transition-all pb-2 border-b border-primary/20 hover:border-white">
              View All Cases
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div ref={container} className="grid grid-cols-1 gap-40">
          {cases.map((project, i) => (
            <div key={i} className="case-card grid grid-cols-1 lg:grid-cols-2 gap-24 items-center group">
              <div className={`relative aspect-[16/10] rounded-[48px] overflow-hidden border border-white/5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="inline-flex glass px-8 py-4 rounded-full items-center gap-3 backdrop-blur-2xl border-white/10 shadow-2xl">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-black text-2xl italic uppercase tracking-tighter font-heading">{project.impact}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="inline-block glass px-4 py-1.5 rounded-full border border-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase font-heading">{project.category}</div>
                <h3 className="text-6xl md:text-8xl font-[900] italic tracking-tighter leading-none font-heading uppercase">{project.title}</h3>
                <p className="text-muted-foreground text-xl leading-relaxed font-medium font-sans tracking-tight max-w-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-[0.2em] font-heading opacity-50">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="pt-8 group flex items-center gap-4 text-2xl font-black italic group-hover:text-primary transition-all font-heading uppercase tracking-tighter">
                  Case Study Protocol
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

