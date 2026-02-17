import iPadSvg from '../assets/ipad.svg';
import iPhoneSvg from '../assets/iPhone.svg';

export function DeviceMockups() {
  return (
    <div className="relative mt-6 md:mt-12 h-[320px] md:h-[450px] w-full max-w-[600px] mx-auto">

      {/* iPad Mockup */}
      <div className="absolute left-0 md:left- 
                      bottom-0 
                      w-[200px] h-[280px] 
                      md:w-[280px] md:h-[400px] 
                      z-10 transition-all duration-300">
        <img
          src={iPadSvg}
          alt="iPad Mockup"
          className="w-full h-full object-contain"
        />
      </div>

      {/* iPhone Mockup */}
      <div className="absolute right-0 md:right-24
                      bottom-4 md:bottom-8 
                      w-[120px] h-[240px] 
                      md:w-[180px] md:h-[360px] 
                      z-20 transition-all duration-300">
        <img
          src={iPhoneSvg}
          alt="iPhone Mockup"
          className="w-full h-full object-contain"
        />
      </div>

    </div>
  );
}
