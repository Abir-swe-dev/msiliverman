export function Footer() {
    return (
        <footer className="w-full relative bg-gradient-to-t from-black via-[#05110B] to-transparent pt-32 pb-12">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-heading text-2xl font-black text-white/90 tracking-tighter lowercase">
                            tinnitus<span className="text-[#8B8DFF]/80 font-medium">relief</span>
                        </h2>
                        <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
                            professional masking solution by earvana
                        </p>
                    </div>

                    <div className="flex gap-8 text-[11px] font-medium text-white/40 uppercase tracking-widest">
                        <a href="#" className="hover:text-[#7CFF00] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#7CFF00] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#7CFF00] transition-colors">Support</a>
                    </div>

                    <p className="text-[10px] text-white/20 font-light">
                        © {new Date().getFullYear()} earvana labs. all rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
