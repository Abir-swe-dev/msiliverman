import { Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface SoundPreviewButtonProps {
  title: string;
  subtitle: string;
  audioSrc?: string;
}

export function SoundPreviewButton({ title, subtitle, audioSrc }: SoundPreviewButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioSrc) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.onended = () => setIsPlaying(false);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="w-full flex items-center justify-between p-4 bg-[#4A9370]/30 backdrop-blur-md rounded-lg border border-[#4A9370]/40 group hover:bg-[#4A9370]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.2),0_0_10px_rgba(255,255,255,0.15)]"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#4A9370]/40 rounded flex items-center justify-center border border-[#4A9370]/60">
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white fill-white" />
          ) : (
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          )}
        </div>
        <div className="text-left text-white">
          <div className="text-[20px] font-bold leading-none">{title} : <span className="font-normal opacity-80">{subtitle}</span></div>
        </div>
      </div>
    </button>
  );
}