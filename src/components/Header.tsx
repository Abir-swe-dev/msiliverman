
import { Menu } from 'lucide-react';
export function Header() {
  return (
    <header className="w-full flex justify-between items-start pt-6 pb-6">
      {/* Logo Section */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-0">
          <h1 className="font-logo text-4xl font-semibold tracking-tight lowercase text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            tinnitus
          </h1>
          <span className="font-logo text-4xl font-medium italic tracking-tight lowercase text-[#5B7FFF]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            relief
          </span>
        </div>
        <p className="text-[9px] tracking-[0.15em] text-white/50 mt-1 font-body font-light lowercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          professional masking solution
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-start gap-8">
        <div className="text-right">
          <p className="text-sm text-white/70 font-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            by earvana
          </p>
        </div>
        <button className="text-white hover:text-[#7CFF00] transition-colors">
          <Menu className="w-8 h-8 stroke-[1.5]" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.8))' }} />
        </button>
      </div>
      
      {/* Bottom Right Text */}
      <div className="absolute top-32 right-12">
        <p className="text-[10px] text-white/60 font-light leading-tight text-right" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          endorsed by Harvard Research<br />and audiologists
        </p>
      </div>

    </header>);

}