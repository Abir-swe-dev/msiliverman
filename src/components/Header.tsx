import shading from "../assets/shading.svg";
export function Header() {
  return (
    <header
      className="flex justify-between items-start bg-cover bg-center w-full h-[20rem] pb-0 px-6 md:px-12 lg:px-24 xl:px-40 relative"
      // style={{ backgroundImage: `url(${shading})` }}
      style={{
        backgroundImage: `url(${shading})`,
        backgroundPosition: 'center top'
      }}
    >
      <div className="flex flex-col relative z-10 mt-4 md:mt-8">
        <div className="flex items-baseline gap-1">
          <h1 className="font-gruppo text-[42px] md:text-[65px] text-white leading-none font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            <span className="tracking-[0.2em]">tinnitus</span><span className="text-[#8B8DFF] font-black tracking-normal text-[26px] md:text-[40px]">relief</span>
          </h1>
          <span className="font-gruppo text-white text-[14px] md:text-[20px] opacity-70 mb-1 font-bold italic">by earvana</span>
        </div>
        <p className="font-gruppo text-black text-[12px] md:text-[14px] uppercase tracking-[0.25em] mt-3 md:mt-5 opacity-80 font-bold" style={{ textShadow: 'none' }}>
          professional masking solution
        </p>
      </div>

      <div className="flex flex-col items-center z-10 mt-5 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:mt-0">
        <button className="flex flex-col gap-1.5 md:gap-2 p-2">
          <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-white opacity-80"></div>
          <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-white opacity-80"></div>
          <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-white opacity-80"></div>
        </button>
        <div className="text-white text-[10px] md:text-[12px] text-center mt-3 md:mt-5 opacity-70 leading-tight font-body font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          endorsed by Harvard Research<br />
          and audiologists
        </div>
      </div>
    </header>
  );

}

