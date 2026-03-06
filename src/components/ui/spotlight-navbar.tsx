'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface NavItem { label: string; href: string; }

export interface SpotlightNavbarProps {
    items?: NavItem[];
    className?: string;
    onItemClick?: (item: NavItem, index: number) => void;
    defaultActiveIndex?: number;
}

export function SpotlightNavbar({
    items = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
    ],
    className,
    onItemClick,
    defaultActiveIndex = 0,
}: SpotlightNavbarProps) {
    const navRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const [hoverX, setHoverX] = useState<number | null>(null);
    const spotlightX = useRef(0);
    const ambienceX = useRef(0);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = nav.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setHoverX(x);
            spotlightX.current = x;
            nav.style.setProperty('--spotlight-x', `${x}px`);
        };

        const handleMouseLeave = () => {
            setHoverX(null);
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
            if (activeItem) {
                const navRect = nav.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const targetX = itemRect.left - navRect.left + itemRect.width / 2;
                animate(spotlightX.current, targetX, {
                    type: 'spring', stiffness: 200, damping: 20,
                    onUpdate: (v) => { spotlightX.current = v; nav.style.setProperty('--spotlight-x', `${v}px`); },
                });
            }
        };

        nav.addEventListener('mousemove', handleMouseMove);
        nav.addEventListener('mouseleave', handleMouseLeave);
        return () => { nav.removeEventListener('mousemove', handleMouseMove); nav.removeEventListener('mouseleave', handleMouseLeave); };
    }, [activeIndex]);

    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
        if (activeItem) {
            const navRect = nav.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const targetX = itemRect.left - navRect.left + itemRect.width / 2;
            animate(ambienceX.current, targetX, {
                type: 'spring', stiffness: 200, damping: 20,
                onUpdate: (v) => { ambienceX.current = v; nav.style.setProperty('--ambience-x', `${v}px`); },
            });
        }
    }, [activeIndex]);

    const handleItemClick = (item: NavItem, index: number) => {
        setActiveIndex(index);
        onItemClick?.(item, index);
    };

    return (
        <div className={cn('relative flex justify-center', className)}>
            <nav
                ref={navRef}
                className={cn(
                    'spotlight-nav relative h-12 rounded-full transition-all duration-300 overflow-hidden',
                    'bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                )}
            >
                <ul className="relative flex items-center h-full px-3 z-[10]">
                    {items.map((item, idx) => (
                        <li key={idx} className="relative h-full flex items-center">
                            <a
                                href={item.href}
                                data-index={idx}
                                onClick={(e) => { e.preventDefault(); handleItemClick(item, idx); window.location.href = item.href; }}
                                className={cn(
                                    'px-6 py-2 text-[11px] font-black tracking-[0.15em] uppercase transition-all duration-300 rounded-full font-body',
                                    'focus-visible:outline-none relative group',
                                    activeIndex === idx ? 'text-white' : 'text-white/50 hover:text-white'
                                )}
                            >
                                <span className="relative z-10">{item.label}</span>
                                {activeIndex === idx && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-x-2 inset-y-2 bg-[#0088ff]/20 rounded-full -z-0"
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mouse spotlight - ELECTRIC BLUE */}
                <div className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300"
                    style={{
                        opacity: hoverX !== null ? 1 : 0,
                        background: `radial-gradient(120px circle at var(--spotlight-x) 100%, rgba(0,136,255,0.25) 0%, transparent 60%)`,
                    }}
                />

                {/* Active ambience line - NEON ELECTRIC BLUE */}
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[3px] z-[2]"
                    style={{
                        background: `radial-gradient(70px circle at var(--ambience-x) 0%, #00d4ff 0%, transparent 100%)`,
                        boxShadow: '0 -2px 10px rgba(0,212,255,0.5)'
                    }}
                />

                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-0" />
            </nav>
        </div>
    );
}
