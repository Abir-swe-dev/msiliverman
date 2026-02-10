import React from 'react';
import { Play } from 'lucide-react';
interface SoundPreviewButtonProps {
  title: string;
  subtitle: string;
  variant?: 'cyan' | 'green';
}
export function SoundPreviewButton({
  title,
  subtitle,
  variant = 'cyan'
}: SoundPreviewButtonProps) {
  const borderColor =
  variant === 'cyan' ? 'border-[#3AA4FF]/50' : 'border-[#7CFF00]/50';
  const glowColor =
  variant === 'cyan' ?
  'shadow-[0_0_15px_rgba(58,164,255,0.2)]' :
  'shadow-[0_0_15px_rgba(124,255,0,0.2)]';
  return (
    <button
      className={`w-full group relative overflow-hidden rounded-xl border ${borderColor} bg-white/5 backdrop-blur-md p-4 transition-all hover:bg-white/10 ${glowColor}`}>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 group-hover:scale-110 transition-transform">
          <Play className="h-6 w-6 text-white fill-white ml-1" />
        </div>
        <div className="text-left">
          <span className="text-xl text-white font-medium">{title}</span>
          <span className="text-xl text-white/70 font-light mx-2">:</span>
          <span className="text-xl text-white/90 font-light">{subtitle}</span>
        </div>
      </div>
    </button>);

}