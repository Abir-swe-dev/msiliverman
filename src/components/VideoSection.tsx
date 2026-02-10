import React from 'react';
import { Play, SkipForward, Maximize2, Settings } from 'lucide-react';
import { AppStoreButtons } from './AppStoreButtons';
import { TestimonialCard } from './TestimonialCard';
import { SoundPreviewButton } from './SoundPreviewButton';
export function VideoSection() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-[500px] mx-auto lg:mx-0">
      {/* Video Player */}
      <div className="relative aspect-video w-full bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden shadow-2xl group cursor-pointer">
        {/* Play Button Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-10 h-10 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Video Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/60 flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <SkipForward className="w-4 h-4 text-white rotate-180" />
            <Play className="w-4 h-4 text-white fill-white" />
            <SkipForward className="w-4 h-4 text-white" />
          </div>
          <div className="flex items-center gap-3">
            <Settings className="w-4 h-4 text-white" />
            <div className="w-4 h-3 border border-white rounded-sm"></div>
            <Maximize2 className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-10 left-0 right-0 h-1 bg-white/20">
          <div className="h-full w-1/3 bg-white"></div>
        </div>
      </div>

      {/* Top App Store Buttons */}
      <div className="flex justify-center lg:justify-start">
        <AppStoreButtons />
      </div>

      {/* Testimonials */}
      <div className="py-4">
        <TestimonialCard quote="No joke, this has literally changed my life." />
        <TestimonialCard quote="Without the constant nag of that high squeal in my head, my BP has gone down!" />
        <TestimonialCard quote="I'm now in a constant state of deep relaxation and I've never felt better." />
      </div>

      {/* Sound Previews */}
      <div className="space-y-4">
        <SoundPreviewButton title="Ocean Aire" subtitle="calm" variant="cyan" />
        <SoundPreviewButton
          title="Forest Rain"
          subtitle="lite"
          variant="green" />

      </div>

      {/* Bottom App Store Buttons (Glow) */}
      <div className="flex justify-center lg:justify-start mt-8">
        <AppStoreButtons variant="glow" />
      </div>
    </div>);

}