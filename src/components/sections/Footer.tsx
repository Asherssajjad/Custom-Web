import Link from 'next/link';
import { Rocket, ArrowUpRight, Github, Twitter, Linkedin, Instagram, Zap, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-24 border-t border-white/5 bg-black text-white relative overflow-hidden">
            {/* Ambient Footer atmosphere */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#0088ff]/10 blur-[200px] pointer-events-none rounded-full" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00fbff]/5 blur-[150px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">

                    {/* Logo & Info */}
                    <div className="space-y-10">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl group-hover:bg-[#0088ff] transition-all duration-500">
                                <Zap className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="text-3xl font-black italic tracking-tighter uppercase font-display text-white pr-2 uppercase">Lumina</span>
                        </Link>
                        <p className="text-white/40 text-base md:text-lg leading-relaxed font-medium font-body max-w-sm">
                            Engineering high-performance digital products for brands that demand absolute excellence.
                        </p>
                        <div className="flex gap-5">
                            {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:bg-[#0088ff]/10 hover:border-[#0088ff] transition-all group shadow-xl">
                                    <Icon className="w-5 h-5 text-white/30 group-hover:text-[#00fbff] transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 1 */}
                    <div>
                        <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 text-[#00fbff] font-display">Services</h4>
                        <ul className="grid gap-6">
                            {['Shopify Excellence', 'WordPress Systems', 'Growth Engineering', 'Full-Stack Dev', 'CRM Automation'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-white/40 hover:text-white transition-all font-black flex items-center justify-between group text-sm uppercase tracking-tight font-display italic">
                                        {item}
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-[#00fbff]" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 text-[#00fbff] font-display">Navigation</h4>
                        <ul className="grid gap-6">
                            {['About Us', 'Case Studies', 'Our Process', 'Meet The Team', 'Careers'].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-white/40 hover:text-white transition-all font-black block text-sm uppercase tracking-tight font-display italic">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 text-[#00fbff] font-display">Intel Node</h4>
                        <p className="text-white/40 mb-8 font-medium text-sm md:text-base font-body">Subscribe for weekly performance architecture reports.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Direct Email"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-full px-8 py-5 focus:outline-none focus:border-[#0088ff] text-white text-sm font-bold font-body transition-all shadow-inner"
                            />
                            <button className="absolute right-2 top-2 bottom-2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#0088ff] hover:text-white transition-all shadow-2xl hover:shadow-[#0088ff]/50 active:scale-95">
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </div>
                        <p className="mt-4 text-[9px] font-black uppercase tracking-widest text-white/20 italic">No Spam Node. Just Performance.</p>
                    </div>

                </div>

                <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black tracking-[0.4em] uppercase text-white/20 font-display">
                    <p className="text-center md:text-left">© {new Date().getFullYear()} Lumina Digital Architecture. Built with Precision.</p>
                    <div className="flex gap-12">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Security</Link>
                    </div>
                </div>
            </div>

            {/* Very Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0088ff]/40 to-transparent" />
        </footer>
    );
}
