'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import { SpotlightNavbar } from '@/components/ui/spotlight-navbar';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
];

const mobileLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between gap-8">

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                            <div className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all shadow-lg">
                                <Zap className="text-white w-5 h-5 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-xl font-[900] italic tracking-tighter uppercase text-white font-heading">
                                Lumina
                            </span>
                        </Link>

                        {/* CENTER: SpotlightNavbar pill — desktop only */}
                        <div className="hidden lg:block flex-1">
                            <SpotlightNavbar
                                items={navItems}
                                defaultActiveIndex={0}
                            />
                        </div>

                        {/* Right CTA — desktop */}
                        <div className="hidden lg:block flex-shrink-0">
                            <Link
                                href="/contact"
                                className="px-7 py-3 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5 font-heading"
                            >
                                Start Project
                            </Link>
                        </div>

                        {/* Mobile menu toggle */}
                        <button
                            className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>

                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                        className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-2xl lg:hidden flex flex-col justify-center p-10 gap-6"
                    >
                        <button
                            className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {mobileLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-5xl font-[900] uppercase italic tracking-tighter flex items-center justify-between group hover:text-primary transition-colors font-heading"
                            >
                                <span>{link.name}</span>
                                <ChevronRight className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-8 py-7 rounded-[40px] bg-white text-black text-center font-black text-3xl uppercase tracking-tighter font-heading"
                        >
                            Let's Talk
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
