import React from 'react';

/**
 * Glass Button Component
 * Frosted glass effect with neon outline and glow
 * Based on Tinnitus Relief design system
 */
interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'neon' | 'gold' | 'blue';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export function GlassButton({
    variant = 'neon',
    size = 'md',
    children,
    className = '',
    ...props
}: GlassButtonProps) {
    const baseStyles = "backdrop-blur-md bg-white/10 rounded-lg transition font-heading font-bold uppercase tracking-wide";

    const variantStyles = {
        neon: "border border-neonGreen/60 text-softWhite hover:bg-neonGreen/10 shadow-[0_0_20px_rgba(157,255,0,0.3)] hover:shadow-[0_0_30px_rgba(157,255,0,0.5)]",
        gold: "border border-gold/60 text-gold hover:bg-gold/10 shadow-[0_0_20px_rgba(245,197,66,0.3)] hover:shadow-[0_0_30px_rgba(245,197,66,0.5)]",
        blue: "border border-electricBlue/60 text-electricBlue hover:bg-electricBlue/10 shadow-[0_0_20px_rgba(45,108,255,0.3)] hover:shadow-[0_0_30px_rgba(45,108,255,0.5)]",
    };

    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

/**
 * Hero Wave Divider
 * Curved liquid divider for section transitions
 */
interface HeroWaveProps {
    fillColor?: string;
    className?: string;
}

export function HeroWave({ fillColor = '#0b1a12', className = '' }: HeroWaveProps) {
    return (
        <svg
            viewBox="0 0 1440 120"
            className={`w-full ${className}`}
            preserveAspectRatio="none"
        >
            <path
                fill={fillColor}
                d="M0,60 C240,120 480,0 720,30 960,60 1200,0 1440,40 L1440,0 L0,0 Z"
            />
        </svg>
    );
}

/**
 * Typography Components
 * Pre-styled text components following design system hierarchy
 */

interface HeadlineProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'hero' | 'section' | 'subsection';
}

export function Headline({ children, className = '', variant = 'hero' }: HeadlineProps) {
    const variants = {
        hero: "font-heading text-neonGreen text-[28px] md:text-[40px] font-semibold leading-tight",
        section: "font-heading text-white text-2xl md:text-3xl font-semibold",
        subsection: "font-heading text-white text-xl md:text-2xl font-normal",
    };

    return (
        <h2
            className={`${variants[variant]} ${className}`}
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
            {children}
        </h2>
    );
}

interface BodyTextProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'muted';
    size?: 'xs' | 'sm' | 'base' | 'lg';
}

export function BodyText({
    children,
    className = '',
    variant = 'primary',
    size = 'base'
}: BodyTextProps) {
    const variants = {
        primary: "text-softWhite",
        secondary: "text-white",
        muted: "text-mutedGray",
    };

    const sizes = {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
    };

    return (
        <p
            className={`font-body ${variants[variant]} ${sizes[size]} leading-relaxed ${className}`}
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
        >
            {children}
        </p>
    );
}

/**
 * Glass Card Component
 * Frosted glass container for content sections
 */
interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    borderColor?: 'neon' | 'white' | 'none';
}

export function GlassCard({
    children,
    className = '',
    borderColor = 'white'
}: GlassCardProps) {
    const borderStyles = {
        neon: "border border-neonGreen/30",
        white: "border border-white/20",
        none: "",
    };

    return (
        <div
            className={`
        backdrop-blur-md 
        bg-white/5 
        ${borderStyles[borderColor]}
        rounded-xl 
        p-6
        shadow-lg
        ${className}
      `}
        >
            {children}
        </div>
    );
}

/**
 * Neon Accent Line
 * Decorative line with arrow for visual emphasis
 */
interface NeonLineProps {
    color?: 'neon' | 'gold';
    width?: string;
    className?: string;
}

export function NeonLine({
    color = 'neon',
    width = 'w-32',
    className = ''
}: NeonLineProps) {
    const colors = {
        neon: {
            bg: 'bg-neonGreen',
            border: 'border-neonGreen',
        },
        gold: {
            bg: 'bg-gold',
            border: 'border-gold',
        },
    };

    return (
        <div className={`h-1 ${width} ${colors[color].bg} relative ${className}`}>
            <div
                className={`
          absolute -right-1 -top-1.5 
          w-0 h-0 
          border-t-[6px] border-t-transparent 
          border-l-[10px] ${colors[color].border}
          border-b-[6px] border-b-transparent
        `}
            />
        </div>
    );
}

/**
 * Star Rating Component
 * Gold star rating display
 */
interface StarRatingProps {
    rating: number;
    maxRating?: number;
    className?: string;
}

export function StarRating({
    rating,
    maxRating = 5,
    className = ''
}: StarRatingProps) {
    return (
        <div className={`flex gap-1 ${className}`}>
            {Array.from({ length: maxRating }).map((_, index) => (
                <svg
                    key={index}
                    className={`w-5 h-5 ${index < rating ? 'text-gold' : 'text-gray-400'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

/**
 * Bullet List Component
 * Styled bullet list with custom markers
 */
interface BulletListProps {
    items: string[];
    className?: string;
    markerColor?: 'white' | 'neon' | 'gold';
}

export function BulletList({
    items,
    className = '',
    markerColor = 'white'
}: BulletListProps) {
    const markerColors = {
        white: 'bg-white',
        neon: 'bg-neonGreen',
        gold: 'bg-gold',
    };

    return (
        <ul className={`space-y-2 font-body text-sm ${className}`}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className="text-white flex items-start gap-2"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
                >
                    <span className={`w-1.5 h-1.5 ${markerColors[markerColor]} rounded-full mt-1.5 flex-shrink-0`} />
                    <span className="lowercase">{item}</span>
                </li>
            ))}
        </ul>
    );
}
