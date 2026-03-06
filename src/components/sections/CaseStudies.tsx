'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const cases = [
  {
    slug: 'everest-ecommerce',
    title: 'Everest E-commerce',
    category: 'Shopify Excellence',
    impact: '+240% Sales Growth',
    tags: ['E-commerce', 'Headless', 'Speed'],
    description: 'We rebuilt their entire store using a high-performance headless architecture, resulting in record-breaking conversions.',
    image: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'nexus-real-estate',
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
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="case-studies" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-12">
          <div className="max-w-2xl space-y-4">
            <div className="section-label">
              <span className="dot" />
              <Zap className="w-3.5 h-3.5" />
              <span>Impact Report</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic leading-tight tracking-tighter font-display pr-2">
              Global <span className="gradient-text italic">Results</span>
            </h2>
          </div>
          {isPreview && (
            <Link href="/case-studies" className="group flex items-center gap-2 font-bold uppercase text-[9px] tracking-widest text-white/40 hover:text-primary-light transition-all pb-2 border-b border-white/5 hover:border-primary-light">
              View All Cases
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div ref={container} className="grid grid-cols-1 gap-24 md:gap-32">
          {cases.map((project, i) => (
            <div key={i} className="case-card grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center group">
              <div className={`relative aspect-[16/10] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-xl">
                    <CheckCircle2 className="w-4 h-4 text-primary-light" />
                    <span className="font-black text-lg italic uppercase tracking-tighter font-display text-white pr-1">{project.impact}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="badge text-[9px] px-3 py-1">{project.category}</div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black italic tracking-tighter leading-[0.95] font-display uppercase pr-2">{project.title}</h3>
                <p className="text-white/40 text-sm md:text-base font-medium font-body leading-relaxed max-w-md">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[8px] font-bold uppercase tracking-widest font-body text-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/case-studies/${project.slug}`} className="block pt-4">
                  <span className="group inline-flex items-center gap-2.5 text-lg font-black italic group-hover:text-primary-light transition-all font-display uppercase tracking-tight pr-1">
                    Case Study Protocol
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Background Decorations */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary-deep/5 blur-[120px] -z-10" />
    </section>
  );
}
