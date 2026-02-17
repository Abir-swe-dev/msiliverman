import { DeviceMockups } from './DeviceMockups';

export function HeroContent() {
  return (
    <div className="flex flex-col text-left max-w-2xl px-4 lg:px-0">
      {/* Main Headline */}
      <div className="mb-4">
        <h1 className="font-heading text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.05] tracking-tighter" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.8)' }}>
          <span className="text-[#9DFF00]">750 Million people</span>{' '}
          <span className="text-[#9DFF00] font-medium">suffer from</span>
          <br />
          <span className="text-[#9DFF00] font-black ">ringing in the ears</span>
        </h1>
        <p className="font-body text-white text-[15px] md:text-[18px] mt-2 font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          Are <span className="font-bold">you</span> one of them?
        </p>
      </div>

      {/* Tinnitus Info */}
      <div className="mb-4 space-y-4">
        <p className="font-body text-white text-[14px] leading-snug font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          <span className="font-black">TINNITUS</span> — to date — is not curable
          <br />
          <span className="text-[15px] font-black text-black" style={{ textShadow: 'none' }}>But new research shows significant success</span>
          <br />
          <span className="text-[15px] font-black text-black" style={{ textShadow: 'none' }}>in a alternative solution. See and preview below:</span>
        </p>

        <h2 className="font-heading text-white text-[16px] md:text-[18px] font-bold leading-tight" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          ENT's and Audiologists recommend
          <br />
          <span className="text-[22px] md:text-[26px] font-black tracking-tighter  text-white">masking,</span>{' '}
          <span className="text-[14px] md:text-[16px] font-normal opacity-90">a technique used for years</span>
        </h2>

        <p className="font-body text-white text-[14px] leading-tight font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          Masking is the use of EXTERNAL sound,
          <br />
          to overshadow the INTERNAL ringing.
        </p>
      </div>

      {/* The Old Way Section */}
      <div className="mb-6 space-y-4">
        <div className="space-y-1">
          <h3 className="font-heading text-white font-bold text-[15px] md:text-[17px]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            The old way: <span className="font-black tracking-wider">white noise audio</span>
          </h3>
          <p className="font-body text-white text-[12px] leading-tight  opacity-95" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            <span className="font-bold">White noise</span><span className=''> is the presence of ALL audio frequencies
            <br />
            blasting at you simultaneously</span>
          </p>
          <div className="pt-2">
            <p className="font-body text-white text-[12px] leading-[1.3] font-medium opacity-80 max-w-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              While it can be effective in drowning out your internal ringing,
              <br />
              it is an extremely annoying sound; akin to standing behind a jet engine.
              
              Studies have shown a connection with listening to white noise and
             
              high blood pressure
            </p>
          </div>
        </div>

        {/* The NEW Way Section */}
        <div className="space-y-1 mt-6">
          <h3 className="font-heading text-[#9DFF00] font-bold text-[15px] md:text-[17px]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
            <span className='font-bold'>The NEW way:{' '}</span>
            <span className="font-normal text-[#9DFF00]">Replace the annoying ringing with</span>
        
         
            a specialized nature soundtrack - digitally designed
            
            to mask the most common tinnitus frequencies
             
         </h3>
        </div>
      </div>

      {/* App Intro */}
      <div className="mb-8">
        <p className="font-body text-white text-[16px] md:text-[18px] font-light lowercase mb-0 opacity-90" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          the innovative new
        </p>
        <div className="flex items-baseline gap-1 mt-[-6px] md:mt-[-8px]">
          <span className="font-heading text-[32px] md:text-[44px] lg:text-[50px] font-black text-[#9DFF00] lowercase tracking-tighter" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
            tinnitus relief
          </span>
          <span className="font-heading text-[32px] md:text-[44px] lg:text-[50px] font-medium text-[#9DFF00] lowercase tracking-tighter" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
            app
          </span>
        </div>
        <p className="font-body text-white text-[16px] md:text-[18px]  mt-[-4px]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          by <span className="font-bold text-[18px]">earvana</span>
        </p>
      </div>

      {/* Take a Listen Section */}
      <div className="mb-2 md:mb-2">
        <div className="flex items-center gap-4 mb-1">
          <h3 className="font-body text-[26px] md:text-[32px] text-black font-bold tracking-tight lowercase" style={{ textShadow: 'none' }}>
            take a listen:
          </h3>
          <div className="h-[4px] w-48 bg-[#00FF80] relative border border-black shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
            <div className="absolute -right-[8px] -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-black border-b-[6px] border-b-transparent"></div>
            <div className="absolute -right-[6px] -top-[4px] w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-[#00FF80] border-b-[5px] border-b-transparent"></div>
          </div>
        </div>
      </div>
      <p className="font-body text-[#9DFF00] text-[15px] md:text-[16px] font-bold mb-4 md:mb-6 lowercase " style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
        ( best in headphones or ear buds )
      </p>

      <div className="space-y-4">
        <p className="font-body text-white font-bold text-[15px] md:text-[16px] mb-2 lowercase" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          as you turn up the volume, you will likely notice:
        </p>
        <ul className="space-y-2 font-body text-[15px] font-bold">
          <li className="text-white flex items-center gap-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            <span className="w-2 h-2 bg-white flex-shrink-0"></span>
            <span className="lowercase">
              the ringing{' '}
              <span className="font-black underline tracking-wide">disappears</span>
            </span>
          </li>
          <li className="text-white flex items-center gap-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            <span className="w-2 h-2 bg-white flex-shrink-0"></span>
            <span className="lowercase">uncanny realism: full immersion to the environment</span>
          </li>
          <li className="text-white flex items-center gap-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            <span className="w-2 h-2 bg-white flex-shrink-0"></span>
            <span className="lowercase">deep relaxation</span>
          </li>
        </ul>
      </div>

      {/* Final CTA */}
      <div className="mb-6 md:mb-10 mt-12">
        <div className="flex items-center gap-0">
          <h3 className="font-heading text-[20px] md:text-[24px] font-black text-[#FFD700] uppercase tracking-widest" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            TRY IT FOR 7 days:: FREE
          </h3>
          <div className="h-[2px] w-24 bg-[#FFD700] relative">
            <div className="absolute -right-2 -top-[7px] w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-[#FFD700] border-b-[8px] border-b-transparent"></div>
          </div>
        </div>
      </div>

      <DeviceMockups />
    </div >
  );
}


// import { DeviceMockups } from './DeviceMockups';

// export function HeroContent() {
//   return (
//     <div className="flex flex-col text-left max-w-xl sm:max-w-2xl px-4 sm:px-6 lg:px-0 mx-auto lg:mx-0">

//       {/* Main Headline */}
//       <div className="mb-6 sm:mb-8">
//         <h1
//           className="font-heading font-bold leading-[1.05] tracking-tighter
//           text-[24px] sm:text-[30px] md:text-[38px] lg:text-[44px]"
//           style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.8)' }}
//         >
//           <span className="text-[#9DFF00]">750 Million people</span>{' '}
//           <span className="text-[#9DFF00] font-medium">suffer from</span>
//           <br />
//           <span className="text-[#9DFF00] font-black">ringing in the ears</span>
//         </h1>

//         <p
//           className="font-body text-white font-medium mt-3
//           text-[15px] sm:text-[16px] md:text-[18px]"
//           style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
//         >
//           Are <span className="font-bold">you</span> one of them?
//         </p>
//       </div>

//       {/* Tinnitus Info */}
//       <div className="mb-6 sm:mb-8 space-y-4 max-w-md sm:max-w-lg">
//         <p
//           className="font-body text-white text-[14px] leading-snug font-medium"
//           style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
//         >
//           <span className="font-black">TINNITUS</span> — to date — is not curable
//           <br />
//           <span className="text-[15px] font-black text-black">
//             But new research shows significant success
//           </span>
//           <br />
//           <span className="text-[15px] font-black text-black">
//             in a alternative solution. See and preview below:
//           </span>
//         </p>

//         <h2
//           className="font-heading text-white font-bold leading-tight
//           text-[16px] md:text-[18px]"
//           style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
//         >
//           ENT's and Audiologists recommend
//           <br />
//           <span className="text-[22px] md:text-[26px] font-black tracking-tighter">
//             masking,
//           </span>{' '}
//           <span className="text-[14px] md:text-[16px] font-normal opacity-90">
//             a technique used for years
//           </span>
//         </h2>

//         <p
//           className="font-body text-white text-[14px] leading-tight font-bold"
//           style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
//         >
//           Masking is the use of EXTERNAL sound,
//           <br />
//           to overshadow the INTERNAL ringing.
//         </p>
//       </div>

//       {/* Old Way */}
//       <div className="mb-8 space-y-4 max-w-md sm:max-w-lg">
//         <div className="space-y-2">
//           <h3
//             className="font-heading text-white font-bold
//             text-[15px] md:text-[17px]"
//             style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
//           >
//             The old way:{' '}
//             <span className="font-black tracking-wider">white noise audio</span>
//           </h3>

//           <p
//             className="font-body text-white text-[13px] leading-tight opacity-95"
//             style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
//           >
//             <span className="font-bold">White noise</span> is the presence of ALL
//             audio frequencies blasting at you simultaneously
//           </p>

//           <p
//             className="font-body text-white text-[13px] leading-[1.3] font-medium opacity-80"
//             style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
//           >
//             While it can be effective in drowning out your internal ringing,
//             it is an extremely annoying sound; akin to standing behind a jet
//             engine. Studies have shown a connection with listening to white noise
//             and high blood pressure.
//           </p>
//         </div>

//         {/* New Way */}
//         <div className="space-y-2 mt-6">
//           <h3
//             className="font-heading text-[#9DFF00] font-bold
//             text-[15px] md:text-[17px]"
//             style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
//           >
//             <span className="font-bold">The NEW way: </span>
//             Replace the annoying ringing with a specialized nature soundtrack
//             digitally designed to mask the most common tinnitus frequencies
//           </h3>
//         </div>
//       </div>

//       {/* App Intro */}
//       <div className="mb-10">
//         <p
//           className="font-body text-white font-light lowercase opacity-90
//           text-[16px] md:text-[18px]"
//           style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
//         >
//           the innovative new
//         </p>

//         <div className="flex flex-wrap items-baseline gap-2 mt-1">
//           <span
//             className="font-heading font-black text-[#9DFF00] lowercase tracking-tighter
//             text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px]"
//             style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}
//           >
//             tinnitus relief
//           </span>
//           <span
//             className="font-heading font-medium text-[#9DFF00] lowercase tracking-tighter
//             text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px]"
//             style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}
//           >
//             app
//           </span>
//         </div>

//         <p
//           className="font-body text-white text-[16px] md:text-[18px]"
//           style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
//         >
//           by <span className="font-bold text-[18px]">earvana</span>
//         </p>
//       </div>

//       {/* Take a Listen */}
//       <div className="mb-4">
//         <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
//           <h3 className="font-body text-[24px] sm:text-[28px] md:text-[32px] text-black font-bold lowercase">
//             take a listen:
//           </h3>

//           <div className="h-[4px] w-40 sm:w-48 bg-[#00FF80] border border-black"></div>
//         </div>

//         <p
//           className="font-body text-[#9DFF00] font-bold lowercase
//           text-[14px] md:text-[16px]"
//           style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
//         >
//           ( best in headphones or ear buds )
//         </p>
//       </div>

//       {/* Benefits */}
//       <div className="space-y-4 max-w-md sm:max-w-lg">
//         <p
//           className="font-body text-white font-bold lowercase
//           text-[15px] md:text-[16px]"
//           style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
//         >
//           as you turn up the volume, you will likely notice:
//         </p>

//         <ul className="space-y-2 font-body text-[15px] font-bold">
//           <li className="text-white flex items-center gap-2">
//             <span className="w-2 h-2 bg-white"></span>
//             the ringing <span className="font-black underline">disappears</span>
//           </li>

//           <li className="text-white flex items-center gap-2">
//             <span className="w-2 h-2 bg-white"></span>
//             uncanny realism: full immersion
//           </li>

//           <li className="text-white flex items-center gap-2">
//             <span className="w-2 h-2 bg-white"></span>
//             deep relaxation
//           </li>
//         </ul>
//       </div>

//       {/* CTA */}
//       <div className="mt-12 mb-10">
//         <h3
//           className="font-heading font-black text-[#FFD700] uppercase tracking-widest
//           text-[20px] md:text-[24px]"
//           style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
//         >
//           TRY IT FOR 7 days FREE
//         </h3>
//       </div>

//       {/* Device Mockups */}
//       <div className="mt-10 sm:mt-14">
//         <DeviceMockups />
//       </div>

//     </div>
//   );
// }



