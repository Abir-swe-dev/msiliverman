import { Play, Pause } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface SoundPreviewButtonProps {
  title: string;
  subtitle: string;
  audioSrc?: string;
  isActive: boolean;
  onToggle: () => void;
}

export function SoundPreviewButton({ title, subtitle, audioSrc, isActive, onToggle }: SoundPreviewButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioSrc) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.onended = () => {
        if (isActive) onToggle();
      };
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isActive) {
      audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isActive]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-full flex items-center justify-between p-4 backdrop-blur-lg rounded-lg border-2 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)] ${isActive
          ? 'bg-[#4A9370]/60 border-[#9DFF00] shadow-[0_0_20px_rgba(157,255,0,0.3)]'
          : 'bg-[#3d7a5b]/40 border-[#4A9370]/60 hover:bg-[#4A9370]/50 hover:border-[#9DFF00]/40'
        }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 backdrop-blur-md rounded-md flex items-center justify-center border transition-colors ${isActive ? 'bg-[#9DFF00]/20 border-[#9DFF00]/40' : 'bg-white/10 border-white/20'
          }`}>
          {isActive ? (
            <Pause className="w-6 h-6 text-[#9DFF00] fill-[#9DFF00]" />
          ) : (
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          )}
        </div>
        <div className="text-left text-white">
          <div className="text-[20px] font-bold leading-none">
            {title} : <span className={`font-normal transition-opacity ${isActive ? 'opacity-100 text-[#9DFF00]' : 'opacity-80'}`}>{subtitle}</span>
          </div>
        </div>
      </div>
    </button>
  );
}