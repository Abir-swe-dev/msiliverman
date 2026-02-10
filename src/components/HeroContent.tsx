import { ArrowRight } from 'lucide-react';
import { DeviceMockups } from './DeviceMockups';
export function HeroContent() {
  return (
    <div className="flex flex-col text-left max-w-xl">
      {/* Main Headline */}
      <div className="mb-6">
        <h2 className="font-heading text-[28px] font-semibold leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          <span className="text-[#B8FF00]">750 Million people</span>{' '}
          <span className="text-[#B8FF00]">suffer from</span>
          <br />
          <span className="text-[#B8FF00]">ringing in the ears.</span>
        </h2>
        <p className="font-body text-white text-base mt-2 font-light" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          Are <span className="font-semibold">you</span> one of them?
        </p>
      </div>

      {/* Tinnitus Info */}
      <div className="mb-6 space-y-3">
        <p className="font-body text-white text-sm leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          <span className="font-bold uppercase">TINNITUS</span> — to date — is not curable.
          <br />
          But new research shows significant success
          <br />
          in a alternative solution. See and preview below:
        </p>

        <h3 className="font-body text-white text-base font-normal leading-tight mt-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          ENT's and Audiologists recommend
          <br />
          <span className="font-bold">masking,</span>{' '}
          <span className="font-normal">a technique used for years.</span>
        </h3>

        <p className="font-body text-white text-sm leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          <span className="font-bold">Masking</span> is the use of EXTERNAL sound,
          <br />
          to overshadow the INTERNAL ringing.
        </p>
      </div>

      {/* Old Way vs New Way */}
      <div className="mb-8 space-y-4">
        <div>
          <h4 className="font-body text-white font-normal text-base mb-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            The old way: <span className="font-bold uppercase">WHITE NOISE AUDIO</span>
          </h4>
          <p className="font-body text-gray-300 text-xs leading-tight max-w-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            <span className="font-bold text-white">White noise</span> is the presence of ALL audio frequencies blasting at you simultaneously.
          </p>
          <p className="font-body text-gray-400 text-xs mt-2 leading-tight max-w-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            While it can be effective in drowning out your internal ringing, it is an extremely annoying sound; akin to standing behind a jet engine. Studies have shown a connection with listening to white noise and high blood pressure.
          </p>
        </div>

        <div>
          <h4 className="font-body text-[#B8FF00] font-normal text-base mb-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            The NEW way:{' '}
            <span className="font-normal">Replace the annoying ringing with</span>
          </h4>
          <p className="font-body text-[#B8FF00] text-base leading-tight font-normal" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            a specialized nature soundtrack - digitally designed
            <br />
            to mask the most common tinnitus frequencies.
          </p>
        </div>
      </div>

      {/* App Intro */}
      <div className="mb-10">
        <p className="font-body text-white text-xl font-light lowercase mb-0" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          the innovative new
        </p>
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-[40px] font-semibold text-[#B8FF00] lowercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            tinnitus relief
          </span>
          <span className="font-heading text-[40px] font-normal text-[#B8FF00] lowercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            app
          </span>
        </div>
        <p className="font-body text-white text-lg font-normal mt-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          by <span className="font-semibold">earvana.</span>
        </p>
      </div>

      {/* Take a Listen */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="font-body text-2xl text-white font-normal tracking-tight lowercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            take a listen:
          </h3>
          <div className="h-1 w-32 bg-gradient-to-r from-[#B8FF00] to-[#B8FF00] relative">
            <div className="absolute -right-1 -top-1.5 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#B8FF00] border-b-[6px] border-b-transparent"></div>
          </div>
        </div>
        <p className="font-body text-[#B8FF00] text-xs mb-6 lowercase" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          ( best in headphones or ear buds )
        </p>

        <div className="space-y-2">
          <p className="font-body text-white font-normal text-sm mb-2 lowercase" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            as you turn up the volume, you will likely notice:
          </p>
          <ul className="space-y-1 font-body text-sm">
            <li className="text-white flex items-start gap-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
              <span className="lowercase">
                the ringing{' '}
                <span className="font-semibold">disappears</span>
              </span>
            </li>
            <li className="text-white flex items-start gap-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
              <span className="lowercase">uncanny realism: full immersion to the environment</span>
            </li>
            <li className="text-white flex items-start gap-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
              <span className="lowercase">deep relaxation</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <h3 className="font-heading text-xl font-bold text-[#FFD700] uppercase tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            TRY IT FOR 7 days:: FREE
          </h3>
          <div className="h-1 w-16 bg-[#FFD700] relative">
            <div className="absolute -right-1 -top-1.5 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#FFD700] border-b-[6px] border-b-transparent"></div>
          </div>
        </div>
      </div>

      <DeviceMockups />
    </div>);

}