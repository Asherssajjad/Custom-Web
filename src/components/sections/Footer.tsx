import Link from 'next/link';
import { Rocket, ArrowUpRight, Github, Twitter, Linkedin, Instagram, Zap } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-32 border-t border-white/5 bg-black text-white selection:bg-primary/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">

                    <div className="space-y-12">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl group-hover:bg-primary transition-colors">
                                <Zap className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="text-3xl font-[900] italic tracking-tighter uppercase font-heading">Lumina</span>
                        </Link>
                        <p className="text-muted-foreground text-xl leading-relaxed font-medium font-sans">
                            Engineering high-performance digital products for brands that demand absolute excellence.
                        </p>
                        <div className="flex gap-6">
                            {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all group">
                                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-12 text-white/40 font-heading">Services</h4>
                        <ul className="space-y-8">
                            {['Shopify Development', 'WordPress Solutions', 'SEO Strategies', 'Custom App Dev', 'CRM Integration'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-white transition-colors font-bold flex items-center justify-between group text-lg font-heading tracking-tighter uppercase">
                                        {item}
                                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-primary" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-12 text-white/40 font-heading">Agency</h4>
                        <ul className="space-y-8">
                            {['About Us', 'Case Studies', 'Process', 'Our Team', 'Careers'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-white transition-colors font-bold block text-lg font-heading tracking-tighter uppercase">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-12 text-white/40 font-heading">Intel</h4>
                        <p className="text-muted-foreground mb-10 font-bold text-lg font-sans">Subscribe to our weekly performance insights.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary text-white font-bold font-sans"
                            />
                            <button className="absolute right-2 top-2 bottom-2 w-14 rounded-xl bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl">
                                <ArrowUpRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black tracking-[0.3em] uppercase text-white/30 font-heading">
                    <p>© 2026 Lumina Digital Agency. Performance Architecture.</p>
                    <div className="flex gap-12">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
