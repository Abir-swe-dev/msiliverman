import { Link } from 'react-router-dom';

interface FooterProps {
}

export function Footer({ }: FooterProps) {
    const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

    return (
        <footer className="w-full relative bg-gradient-to-t from-black via-[#05110B] to-transparent pt-32 pb-12">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 xl:px-40">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-logo text-2xl text-white/90 lowercase">
                            <span className="font-black tracking-[0.08em]">tinnitus</span><span className="text-[#2D6CFF] font-medium tracking-[0.08em]">relief</span>
                        </h2>
                        <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
                            professional masking solution by earvana
                        </p>
                    </div>

                    <div className="flex gap-8 text-[11px] font-medium text-white/40 uppercase tracking-widest">
                        <Link
                        onClick={scrollToTop}
                            to="/privacy-policy"
                            className="hover:text-[#8FFF20] transition-colors uppercase tracking-widest"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            onClick={scrollToTop}
                            to="/terms-of-service"
                            className="hover:text-[#8FFF20] transition-colors uppercase tracking-widest"
                        >
                            Terms of Service
                        </Link>
                        <Link
                        onClick={scrollToTop}
                            to="/faq"
                            className="hover:text-[#8FFF20] transition-colors uppercase tracking-widest"
                        >
                            FAQ
                        </Link>
                    </div>

                    <p className="text-[10px] text-white/20 font-light">
                        © {new Date().getFullYear()} earvana labs. all rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
