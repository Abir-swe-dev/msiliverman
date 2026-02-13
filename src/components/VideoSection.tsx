import { Play, SkipForward, Maximize2 } from 'lucide-react';
import { AppStoreButtons } from './AppStoreButtons';
import { SoundPreviewButton } from './SoundPreviewButton';

export function VideoSection() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[420px] mx-auto lg:mx-0">
      {/* Video Player */}
      <div className="relative aspect-video w-full bg-[#1A1A1A] rounded-sm border-[1.5px] border-[#4A4A4A] overflow-hidden shadow-xl group cursor-pointer">
        {/* Play Button Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform duration-300">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Video Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/80 flex items-center justify-between px-3">
          <div className="flex items-center gap-3">
            <SkipForward className="w-3 h-3 text-white fill-white" />
            <Play className="w-3 h-3 text-white fill-white" />
            <SkipForward className="w-3 h-3 text-white fill-white rotate-180" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 text-white">●</div>
              <div className="w-4 h-3 border border-white rounded-sm"></div>
              <Maximize2 className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-0 right-0 h-1 bg-white/20">
          <div className="h-full w-1/4 bg-white/40"></div>
        </div>
      </div>

      {/* Top App Store Buttons */}
      <div className="flex justify-start">
        <AppStoreButtons />
      </div>

      {/* Testimonials */}
      <div className="space-y-4 py-4">
        <div className="space-y-1">
          <div className="flex text-[#FFD700] text-[10px] tracking-[2px]">★★★★★</div>
          <p className="text-white text-[13px] font-medium leading-tight italic opacity-90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            "No joke, this has literally changed my life."
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex text-[#FFD700] text-[10px] tracking-[2px]">★★★★★</div>
          <p className="text-white text-[13px] font-medium leading-tight italic opacity-90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            "Without the constant nag of that high squeal in my head, my BP has gone down!"
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex text-[#FFD700] text-[10px] tracking-[2px]">★★★★★</div>
          <p className="text-white text-[13px] font-medium leading-tight italic opacity-90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            "I'm now in a constant state of deep relaxation and I've never felt better."
          </p>
        </div>
      </div>

      {/* Sound Previews */}
      <div className="space-y-4">
        <SoundPreviewButton title="Ocean Aire" subtitle="calm" />
        <SoundPreviewButton title="Forest Rain" subtitle="lite" />
      </div>

      {/* Bottom App Store Buttons */}
      <div className="flex justify-start mt-4">
        <AppStoreButtons variant="glow" />
      </div>
    </div>
  );
}