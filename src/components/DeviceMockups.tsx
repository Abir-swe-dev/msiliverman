import iPadSvg from '../assets/ipad.svg';
import iPhoneSvg from '../assets/iPhone.svg';

export function DeviceMockups() {
  return (
    <div className="relative mt-12 h-[450px] w-full max-w-[600px]">
      {/* iPad Mockup (Left) */}
      <div className="absolute left-0 bottom-0 w-[280px] h-[400px] transform z-10">
        <img src={iPadSvg} alt="iPad Mockup" className="w-full h-full object-contain" />
      </div>

      {/* iPhone Mockup (Right) */}
      <div className="absolute right-0 bottom-8 w-[180px] h-[360px] transform z-20">
        <img src={iPhoneSvg} alt="iPhone Mockup" className="w-full h-full object-contain" />
      </div>
    </div>);

}