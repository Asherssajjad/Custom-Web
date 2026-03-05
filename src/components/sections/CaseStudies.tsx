'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const cases = [
  {
    title: 'Everest E-commerce',
    category: 'Shopify Development',
    impact: '+240% Sales Increase',
    tags: ['Next.js', 'Shopify Headless', 'SEO'],
    description: 'We rebuilt their entire store using a headless architecture, resulting in lightning-fast load times and record-breaking conversions.',
    image: 'https://images.unsplash.com/photo-1558281063-17045f14e9f3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Nexus Real Estate',
    category: 'WordPress Enterprise',
    impact: '99.9% Core Web Vitals',
    tags: ['Custom Theme', 'CRM Sync', 'Speed Dev'],
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
      y: 60,
      opacity: 0,
      stagger: 0.3,
      duration: 1.2,
      ease: 'power4.out'
    });
  }, { scope: container });

  return (
    <section id="case-studies" className={`py-32 ${isPreview ? 'bg-black/20' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic">Proven <span className="gradient-text">Results</span></h2>
            <p className="text-muted-foreground text-xl font-medium">
              We don&apos;t just build websites; we build performance engines that drive business outcomes.
            </p>
          </div>
          {isPreview && (
            <motion.button
              whileHover={{ x: 5 }}
              className="group flex items-center gap-3 font-black uppercase text-sm tracking-widest text-primary"
            >
              View More Cases
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </div>

        <div ref={container} className="grid grid-cols-1 gap-24">
          {cases.map((project, i) => (
            <div key={i} className="case-card grid grid-cols-1 lg:grid-cols-2 gap-16 items-center group">
              <div className={`relative aspect-[16/10] rounded-[60px] overflow-hidden border border-white/5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="glass px-6 py-3 rounded-full flex items-center gap-3 backdrop-blur-xl border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="font-black text-xl italic">{project.impact}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-secondary font-black tracking-widest uppercase text-sm">{project.category}</div>
                <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-tight">{project.title}</h3>
                <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="pt-6 group flex items-center gap-4 text-xl font-black italic group-hover:text-primary transition-colors">
                  Case Study Details
                  <ArrowUpRight className="w-8 h-8 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
