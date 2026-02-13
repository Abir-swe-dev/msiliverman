import { Play } from 'lucide-react';

interface SoundPreviewButtonProps {
  title: string;
  subtitle: string;
}

export function SoundPreviewButton({ title, subtitle }: SoundPreviewButtonProps) {
  return (
    <button className="w-full flex items-center justify-between p-4 bg-[#4A9370]/30 backdrop-blur-md rounded-lg border border-[#4A9370]/40 group hover:bg-[#4A9370]/50 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#4A9370]/40 rounded flex items-center justify-center border border-[#4A9370]/60">
          <Play className="w-6 h-6 text-white fill-white ml-1" />
        </div>
        <div className="text-left text-white">
          <div className="text-[20px] font-bold leading-none">{title} : <span className="font-normal opacity-80">{subtitle}</span></div>
        </div>
      </div>
    </button>
  );
}