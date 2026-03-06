'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import { SpotlightNavbar } from '@/components/ui/spotlight-navbar';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-2 backdrop-blur-xl bg-black/60' : 'py-5'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between gap-6">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                                <Zap className="w-4 h-4 text-white group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-display text-2xl font-[900] italic uppercase tracking-tight text-white pr-1">
                                Lumina
                            </span>
                        </Link>

                        {/* Center pill nav – desktop */}
                        <div className="hidden lg:flex flex-1 justify-center">
                            <SpotlightNavbar items={navLinks} />
                        </div>

                        {/* CTA – desktop */}
                        <div className="hidden lg:block flex-shrink-0">
                            <Link href="/contact" className="btn-primary text-sm px-7 py-3">
                                Start Project
                            </Link>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            className="lg:hidden w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                        className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-2xl lg:hidden flex flex-col justify-center p-10 gap-5"
                    >
                        <button
                            className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="font-display text-5xl font-[900] uppercase italic tracking-tight flex items-center justify-between group hover:text-primary transition-colors pr-2"
                            >
                                <span>{link.label}</span>
                                <ChevronRight className="w-7 h-7 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-6 btn-primary text-center justify-center text-xl rounded-full"
                        >
                            Let's Talk
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
