import shading from "../assets/shading.svg";
import GeminiBgremove from "../assets/Gemini-bgremove.png";
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
          <h1 className="font-gruppo font-bold text-white leading-none flex items-baseline gap-0">
            <span
              className="font-black text-white tracking-[0.08em] text-[28px] sm:text-[36px] md:text-[50px] lg:text-[65px]"
              style={{
                textShadow:
                  "0 0 20px rgba(100,200,255,0.6), 0 0 40px rgba(80,180,255,0.3), 2px 2px 6px rgba(0,0,0,0.5)",
              }}
            >
              tinnitus
            </span>
            <span
              className="font-normal text-[#0000FF] tracking-normal text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px]"
              style={{
                textShadow:
                  "2px 4px 6px rgba(0,0,0,0.5), 2px 4px 12px rgba(0,0,120,0.3)",
              }}
            >
              relief
            </span>
            {/* <span
              className="font-normal text-[#0000FF] tracking-normal text-[18px] sm:text-[22px] md:text-[32px] lg:text-[40px]"
              style={{
                textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
              }}
            >
              relief
            </span> */}
          </h1>
          {/* <span
            className="
              font-gruppo font-normal opacity-70 text-white
              text-[11px] sm:text-[14px] md:text-[18px]
              mt-1 sm:mt-0
            "
          >
            <span className="text-[#808080]">by</span>{" "}
            <span className="">
              {" "}
              <img
                className="-mt-2 ml-3"
                src={GeminiBgremove}
                alt=""
                height={50}
                width={50}
              />
              earvana
            </span>
          </span> */}
          <span className="font-gruppo font-normal opacity-70 text-white text-[11px] sm:text-[14px] md:text-[18px] mt-1 sm:mt-0 flex items-baseline">
            <span className="text-[#808080] mr-1">by</span>

            {/* <span className="relative inline-flex items-baseline">
              
              <span>ear</span>

              
              <span className="relative inline-block  ">
                <img
                  src={GeminiBgremove}
                  alt=""
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none "
                  style={{
                    bottom: "50%",
                    width: "40px",
                    height: "40px",
                    marginBottom: "1px",
                  }}
                />
                v
              </span>
              <span>ana</span>
            </span> */}
            <span className="relative inline-flex items-baseline ml-1">
              {/* Note image floating above entire "earvana" text */}
              <img
                src={GeminiBgremove}
                alt=""
                className="pointer-events-none"
                style={{
                  position: "absolute",
                  bottom: "50%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "55px",
                  height: "auto",
                  marginBottom: "2px",
                }}
              />
              <span>earvana</span>
            </span>
          </span>
        </div>

        <p
          className="
            font-gruppo   opacity-80 text-black
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
          endorsed by Harvard Research
          <br />
          and audiologists
        </div>
      </div>
    </header>
  );
}
