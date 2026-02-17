// import shading from "../assets/shading.svg";
// export function Header() {
//   return (
//     <header
//       className="flex justify-between items-start bg-cover bg-center w-full h-[20rem] pb-0 px-6 md:px-12 lg:px-24 xl:px-40 relative"
//       // style={{ backgroundImage: `url(${shading})` }}
//       style={{
//         backgroundImage: `url(${shading})`,
//         backgroundPosition: 'center top'
//       }}
//     >
//       <div className="flex flex-col relative z-10 mt-4 md:mt-8">
//         <div className="flex items-baseline gap-1">
//           <h1 className="font-gruppo text-[42px] md:text-[65px] text-white leading-none font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
//             <span className="tracking-[0.2em]">tinnitus</span><span className="text-[#8B8DFF] font-black tracking-normal text-[26px] md:text-[40px]">relief</span>
//           </h1>
//           <span className="font-gruppo text-white text-[14px] md:text-[20px] opacity-70 mb-1 font-bold italic">by earvana</span>
//         </div>
//         <p className="font-gruppo text-black text-[12px] md:text-[14px] uppercase tracking-[0.25em] mt-3 md:mt-5 opacity-80 font-bold" style={{ textShadow: 'none' }}>
//           professional masking solution
//         </p>
//       </div>

//       <div className="flex flex-col items-center z-10 mt-5 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-10 md:mt-0">
//         <button className="flex flex-col gap-1.5 md:gap-2 p-2">
//           <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-white opacity-80"></div>
//           <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-white opacity-80"></div>
//           <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-white opacity-80"></div>
//         </button>
//         <div className="text-white text-[10px] md:text-[12px] text-center mt-3 md:mt-5 opacity-70 leading-tight font-body font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
//           endorsed by Harvard Research<br />
//           and audiologists
//         </div>
//       </div>
//     </header>
//   );

// }




import shading from "../assets/shading.svg";

export function Header() {
  return (
    <header
      className="
        relative w-full bg-cover bg-top
        px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40
        pt-6 sm:pt-8 md:pt-10
        pb-8 md:pb-6
        min-h-[26rem] sm:min-h-[16rem] md:min-h-[32rem]
        flex max-md:justify-between items-start
        max-sm:mb-10 lg:gap-24
      "
      style={{
        backgroundImage: `url(${shading})`,
        backgroundPosition: "center top",
      }}
    >
      {/* LEFT SIDE (Logo + Text) */}
      <div className="flex flex-col z-10 max-w-[75%]">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h1
            className="
              font-gruppo font-bold text-white leading-none
              text-[28px] sm:text-[36px] md:text-[50px] lg:text-[65px]
            "
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            <span className="tracking-[0.12em] block sm:inline">
              tinnitus
            </span>
            <span
              className="
                text-[#2D6CFF] font-black tracking-normal
                text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px]
                sm:ml-2 block sm:inline
              "
            >
              relief
            </span>
          </h1>

          <span
            className="
              font-gruppo italic font-bold opacity-70 text-white
              text-[11px] sm:text-[14px] md:text-[18px]
              mt-1 sm:mt-0
            "
          >
            by earvana
          </span>
        </div>

        <p
          className="
            font-gruppo uppercase font-bold opacity-80 text-black
            text-[10px] sm:text-[12px] md:text-[14px]
            tracking-[0.18em]
            mt-3 md:mt-4
          "
        >
          professional masking solution
        </p>
      </div>

      {/* RIGHT SIDE (Menu Icon) */}
      <div className="flex flex-col items-start z-10 mt-1 sm:mt-5">
        <button className="flex flex-col gap-1.5 md:gap-2 p-2">
          <div className="w-8 sm:w-10 md:w-14 h-[2px] md:h-[3px] bg-white opacity-80"></div>
          <div className="w-8 sm:w-10 md:w-14 h-[2px] md:h-[3px] bg-white opacity-80"></div>
          <div className="w-8 sm:w-10 md:w-14 h-[2px] md:h-[3px] bg-white opacity-80"></div>
        </button>

        <div
          className="
            font-body font-medium text-white opacity-70 
            text-[8px] sm:text-[10px] md:text-[12px]
            mt-2 md:mt-4
            leading-tight
          "
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
        >
          endorsed by Harvard Research<br />
          and audiologists
        </div>
      </div>
    </header>
  );
}
