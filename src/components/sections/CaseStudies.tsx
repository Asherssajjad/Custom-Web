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
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="case-studies" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl space-y-6">
            <div className="section-label">
              <span className="dot" />
              <Zap className="w-4 h-4" />
              <span>Impact Report</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic leading-tight tracking-tighter font-display">
              Global <span className="gradient-text italic">Results</span>
            </h2>
          </div>
          {isPreview && (
            <Link href="/case-studies" className="group flex items-center gap-3 font-bold uppercase text-[10px] tracking-widest text-white/50 hover:text-primary-light transition-all pb-2 border-b border-white/10 hover:border-primary-light">
              View All Cases
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div ref={container} className="grid grid-cols-1 gap-32 md:gap-48">
          {cases.map((project, i) => (
            <div key={i} className="case-card grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center group">
              <div className={`relative aspect-[16/10] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex glass-card px-6 py-3 rounded-2xl items-center gap-3 backdrop-blur-xl border-white/20 shadow-2xl">
                    <CheckCircle2 className="w-5 h-5 text-primary-light" />
                    <span className="font-black text-xl italic uppercase tracking-tighter font-display">{project.impact}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="badge">{project.category}</div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter leading-[0.9] font-display uppercase">{project.title}</h3>
                <p className="text-white/45 text-lg font-medium font-body leading-relaxed max-w-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[9px] font-bold uppercase tracking-[0.15em] font-body text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/case-studies/${project.slug}`} className="block pt-6">
                  <span className="group inline-flex items-center gap-3 text-xl font-black italic group-hover:text-primary-light transition-all font-display uppercase tracking-tight">
                    Case Study Protocol
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
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
