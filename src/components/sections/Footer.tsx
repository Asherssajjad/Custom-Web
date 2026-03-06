import Link from 'next/link';
import { Rocket, ArrowUpRight, Github, Twitter, Linkedin, Instagram, Zap } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-24 border-t border-white/5 bg-black text-white relative overflow-hidden">
            {/* Ambient Footer Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#0088ff]/10 blur-[150px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl group-hover:bg-[#0088ff] transition-colors">
                                <Zap className="text-white w-5 h-5 group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="text-2xl font-black italic tracking-tighter uppercase font-display text-white">Lumina</span>
                        </Link>
                        <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium font-body max-w-xs">
                            Engineering high-performance digital products for brands that demand absolute excellence.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#0088ff]/10 hover:border-[#0088ff] transition-all group">
                                    <Icon className="w-4 h-4 text-white/40 group-hover:text-[#00fbff] transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white/20 font-display">Services</h4>
                        <ul className="space-y-4">
                            {['Shopify Development', 'WordPress Solutions', 'SEO Strategies', 'Custom App Dev', 'CRM Integration'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-white/40 hover:text-[#00fbff] transition-colors font-bold flex items-center justify-between group text-xs uppercase tracking-tight font-display">
                                        {item}
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white/20 font-display">Agency</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Case Studies', 'Process', 'Our Team', 'Careers'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-white/40 hover:text-[#00fbff] transition-colors font-bold block text-xs uppercase tracking-tight font-display">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white/20 font-display">Newsletter</h4>
                        <p className="text-white/40 mb-6 font-bold text-xs uppercase tracking-tight font-body">Subscribe for weekly insights.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-full px-6 py-3.5 focus:outline-none focus:border-[#0088ff] text-white text-xs font-bold font-body transition-all"
                            />
                            <button className="absolute right-1 top-1 bottom-1 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#0088ff] hover:text-white transition-all shadow-xl">
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black tracking-[0.3em] uppercase text-white/20 font-display">
                    <p>© 2026 Lumina Digital Agency. Performance Architecture.</p>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
