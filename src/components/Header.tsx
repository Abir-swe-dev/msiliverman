export function Header() {
  return (
    <header className="py-6 flex justify-between items-start">
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <h1 className="font-heading text-[38px] md:text-[45px] font-black text-white tracking-tighter leading-none" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            tinnitus<span className="text-[#8B8DFF] font-medium">relief</span>
          </h1>
          <span className="text-white text-[12px] opacity-70 mb-1 font-medium">by earvana</span>
        </div>
        <p className="font-body text-white text-[10px] uppercase tracking-[0.25em] mt-1 opacity-60 font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          professional masking solution
        </p>
      </div>

      <div className="pt-2 flex flex-col items-end">
        <button className="flex flex-col gap-1.5 p-2 mr-[-8px]">
          <div className="w-10 h-[2.5px] bg-white opacity-80"></div>
          <div className="w-10 h-[2.5px] bg-white opacity-80"></div>
          <div className="w-10 h-[2.5px] bg-white opacity-80"></div>
        </button>
        <div className="text-white text-[10px] text-right mt-4 opacity-60 leading-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          endorsed by Harvard Research<br />
          and audiologists
        </div>
      </div>
    </header>
  );
}