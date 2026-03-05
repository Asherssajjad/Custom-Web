'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Rocket, ChevronRight, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    // Advanced header styles on scroll
    const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
    const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);
    const headerY = useTransform(scrollY, [0, 100], [0, 10]);
    const headerScale = useTransform(scrollY, [0, 100], [1, 0.95]);

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-[100] px-6 py-6"
            >
                <div className="container mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-secondary rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="relative w-full h-full bg-background/80 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center">
                                <Rocket className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
                            </div>
                        </div>
                        <span className="text-2xl font-black tracking-tighter uppercase italic text-white">Lumina</span>
                    </Link>

                    {/* Desktop Nav - Floating Pill Style */}
                    <div className="hidden lg:flex items-center gap-2 p-1.5 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-6 py-2.5 text-sm font-bold text-muted-foreground hover:text-white hover:bg-white/5 rounded-full transition-all relative"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="ml-4 px-8 py-2.5 rounded-full bg-white text-black font-black text-sm hover:scale-105 active:scale-95 transition-all"
                        >
                            Get Started
                        </Link>
                    </div>

                    <button
                        className="lg:hidden w-12 h-12 rounded-2xl glass flex items-center justify-center text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-2xl lg:hidden p-8 flex flex-col justify-center gap-10"
                    >
                        <button
                            className="absolute top-8 right-8 w-12 h-12 rounded-2xl glass flex items-center justify-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-5xl font-black uppercase italic tracking-tighter flex items-center justify-between group"
                            >
                                <span>{link.name}</span>
                                <ChevronRight className="w-10 h-10 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-10 py-8 rounded-[40px] bg-gradient-to-r from-primary via-accent to-secondary text-white text-center font-black text-4xl shadow-2xl shadow-primary/20"
                        >
                            Let&apos;s Talk
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
