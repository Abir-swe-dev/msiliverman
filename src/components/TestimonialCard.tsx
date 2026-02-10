import React from 'react';
import { Star } from 'lucide-react';
interface TestimonialCardProps {
  quote: string;
}
export function TestimonialCard({ quote }: TestimonialCardProps) {
  return (
    <div className="mb-6">
      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) =>
        <Star key={star} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
        )}
      </div>
      <p className="text-[#FFD700] italic text-sm font-medium leading-relaxed">
        "{quote}"
      </p>
    </div>);

}