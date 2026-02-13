import { DeviceMockups } from './DeviceMockups';

export function HeroContent() {
  return (
    <div className="flex flex-col text-left max-w-2xl px-4 lg:px-0">
      {/* Main Headline */}
      <div className="mb-4">
        <h1 className="font-heading text-[34px] md:text-[42px] font-bold leading-[1.05] tracking-tighter" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.8)' }}>
          <span className="text-[#89FF00]">750 Million people</span>{' '}
          <span className="text-[#81FF00]">suffer from</span>
          <br />
          <span className="text-[#7CFF00] font-black italic">ringing in the ears.</span>
        </h1>
        <p className="font-body text-white text-[18px] md:text-[20px] mt-1 font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          Are <span className="font-bold underline">you</span> one of them?
        </p>
      </div>

      {/* Tinnitus Info */}
      <div className="mb-4 space-y-4">
        <p className="font-body text-white text-[15px] leading-snug font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          <span className="font-black">TINNITUS</span> — to date — is not curable.
          <br />
          <span className="text-[14px] font-semibold text-black" style={{ textShadow: 'none' }}>But new research shows significant success</span>
          <br />
          <span className="text-[14px] font-semibold text-black" style={{ textShadow: 'none' }}>in a alternative solution. See and preview below:</span>
        </p>

        <h2 className="font-body text-white text-[18px] md:text-[20px] font-bold leading-tight" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          ENT's and Audiologists recommend
          <br />
          <span className="text-[24px] md:text-[28px] font-black tracking-tighter uppercase italic text-white">masking,</span>{' '}
          <span className="text-[16px] md:text-[18px] font-normal opacity-90">a technique used for years.</span>
        </h2>

        <p className="font-body text-white text-[15px] leading-tight font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          Masking is the use of EXTERNAL sound,
          <br />
          to overshadow the INTERNAL ringing.
        </p>
      </div>

      {/* The Old Way Section */}
      <div className="mb-6 space-y-4">
        <div className="space-y-1">
          <h3 className="font-body text-white font-bold text-[17px] md:text-[19px]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            The old way: <span className="font-black uppercase tracking-wider">WHITE NOISE AUDIO</span>
          </h3>
          <p className="font-body text-white text-[13px] leading-tight font-bold opacity-95" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            <span className="italic underline">White noise</span> is the presence of ALL audio frequencies
            <br />
            blasting at you simultaneously.
          </p>
          <div className="pt-2">
            <p className="font-body text-white text-[13px] leading-[1.3] font-medium opacity-80 max-w-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              While it can be effective in drowning out your internal ringing,
              <br />
              it is an extremely annoying sound; akin to standing behind a jet engine.
              <br />
              Studies have shown a connection with listening to white noise and
              <br />
              high blood pressure.
            </p>
          </div>
        </div>

        {/* The NEW Way Section */}
        <div className="space-y-1 mt-6">
          <h3 className="font-body text-[#7CFF00] font-bold text-[17px] md:text-[19px]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            The NEW way:{' '}
            <span className="font-normal">Replace the annoying ringing with</span>
          </h3>
          <p className="font-body text-[#7CFF00] text-[17px] md:text-[19px] leading-tight font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            a specialized nature soundtrack - digitally designed
            <br />
            to mask the most common tinnitus frequencies.
          </p>
        </div>
      </div>

      {/* App Intro */}
      <div className="mb-8">
        <p className="font-body text-white text-[20px] font-light lowercase mb-0 opacity-90" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          the innovative new
        </p>
        <div className="flex items-baseline gap-1 mt-[-8px]">
          <span className="font-heading text-[48px] md:text-[54px] font-black text-[#7CFF00] lowercase tracking-tighter" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
            tinnitus relief
          </span>
          <span className="font-heading text-[48px] md:text-[54px] font-medium text-[#7CFF00] lowercase tracking-tighter" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
            app
          </span>
        </div>
        <p className="font-body text-white text-[20px] font-medium mt-[-4px]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          by <span className="font-bold underline">earvana.</span>
        </p>
      </div>

      {/* Take a Listen Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="font-body text-[32px] text-black font-bold tracking-tight lowercase" style={{ textShadow: 'none' }}>
            take a listen:
          </h3>
          <div className="h-[2px] w-48 bg-gradient-to-r from-white/80 via-[#7CFF00] to-transparent relative">
            <div className="absolute right-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#7CFF00] border-b-[6px] border-b-transparent shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"></div>
          </div>
        </div>
        <p className="font-body text-[#7CFF00] text-[16px] font-bold mb-6 lowercase italic" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          ( best in headphones or ear buds )
        </p>

        <div className="space-y-4">
          <p className="font-body text-white font-bold text-[16px] mb-2 lowercase" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            as you turn up the volume, you will likely notice:
          </p>
          <ul className="space-y-2 font-body text-[15px] font-bold">
            <li className="text-white flex items-center gap-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <span className="w-1.5 h-1.5 bg-white flex-shrink-0"></span>
              <span className="lowercase">
                the ringing{' '}
                <span className="font-black uppercase">disappears</span>
              </span>
            </li>
            <li className="text-white flex items-center gap-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <span className="w-1.5 h-1.5 bg-white flex-shrink-0"></span>
              <span className="lowercase">uncanny realism: full immersion to the environment</span>
            </li>
            <li className="text-white flex items-center gap-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <span className="w-1.5 h-1.5 bg-white flex-shrink-0"></span>
              <span className="lowercase">deep relaxation</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <h3 className="font-heading text-[24px] font-black text-[#FFD700] uppercase tracking-widest" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            TRY IT FOR 7 days:: FREE
          </h3>
          <div className="h-[2px] w-20 bg-[#FFD700] relative">
            <div className="absolute -right-1 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-[#FFD700] border-b-[6px] border-b-transparent"></div>
          </div>
        </div>
      </div>

      <DeviceMockups />
    </div>
  );
}