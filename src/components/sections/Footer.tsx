import Link from 'next/link';
import { Rocket, ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-20 border-t border-white/5 bg-[#01030e]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                                <Rocket className="text-white w-5 h-5" />
                            </div>
                            <span className="text-2xl font-black italic tracking-tighter uppercase">Lumina</span>
                        </Link>
                        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                            We engineer high-performance digital products for brands that demand excellence.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center hover:border-primary transition-all group">
                                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-10 text-white">Services</h4>
                        <ul className="space-y-6">
                            {['Shopify Development', 'WordPress Solutions', 'SEO Strategies', 'Custom App Dev', 'CRM Integration'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center justify-between group">
                                        {item}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-10 text-white">Agency</h4>
                        <ul className="space-y-6">
                            {['About Us', 'Case Studies', 'Process', 'Our Team', 'Careers'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center justify-between group">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-10 text-white">Newsletter</h4>
                        <p className="text-muted-foreground mb-8 font-medium">Subscribe to our weekly insights on digital growth.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary text-white font-medium"
                            />
                            <button className="absolute right-2 top-2 w-10 h-10 rounded-xl bg-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                                <ArrowUpRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold tracking-widest uppercase text-muted-foreground">
                    <p>© 2026 Lumina Digital Agency. All rights reserved.</p>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Use</Link>
                        <Link href="#" className="hover:text-white">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
