import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark-only' | 'horizontal';
  showTelugu?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'full',
  showTelugu = true,
  theme = 'light',
  className = '',
}) => {
  // Dimension scaling
  const emblemSizes = {
    sm: 36,
    md: 48,
    lg: 64,
    xl: 84,
  };

  const emblemSize = emblemSizes[size];
  const textColor = theme === 'dark' ? 'text-[#FCFAF4]' : 'text-[#24483A]';
  const subtitleColor = theme === 'dark' ? 'text-[#C5A35A]' : 'text-[#5F7657]';
  const teluguColor = theme === 'dark' ? 'text-[#A8B69A]' : 'text-[#24483A]/80';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* The Visiting Card Authentic Mudra (Circular Grain & Sun Medallion) */}
      <div className="relative shrink-0" style={{ width: emblemSize, height: emblemSize }}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Swirling Sun & Millet Warm Harvest Gold to Forest Olive Gradient */}
            <linearGradient id="gmSpiral" x1="15%" y1="15%" x2="85%" y2="85%">
              <stop offset="0%" stopColor="#D8B76E" />
              <stop offset="35%" stopColor="#C5A35A" />
              <stop offset="70%" stopColor="#5F7657" />
              <stop offset="100%" stopColor="#24483A" />
            </linearGradient>

            {/* Outer Deep Forest Olive Ring Gradient */}
            <linearGradient id="gmRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#24483A" />
              <stop offset="50%" stopColor="#355D4D" />
              <stop offset="100%" stopColor="#19342A" />
            </linearGradient>

            {/* Radiating Grain Spikes Gradient */}
            <linearGradient id="gmFlora" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5F7657" />
              <stop offset="60%" stopColor="#C5A35A" />
              <stop offset="100%" stopColor="#24483A" />
            </linearGradient>
          </defs>

          {/* Radiating agricultural grain rays (matching visiting card top-left aura) */}
          <g opacity="0.85">
            <path d="M12 28 C18 18, 30 10, 44 8" stroke="url(#gmFlora)" strokeWidth="3" strokeLinecap="round" />
            <path d="M8 38 C14 24, 26 14, 38 12" stroke="url(#gmFlora)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
            <path d="M22 18 L28 8" stroke="#5F7657" strokeWidth="2" strokeLinecap="round" />
            <path d="M34 14 L42 6" stroke="#C5A35A" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 32 L6 26" stroke="#5F7657" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Outer Deep Forest Olive Mudra Circle */}
          <circle cx="50" cy="52" r="41" fill="#FCFAF4" stroke="url(#gmRing)" strokeWidth="6" />
          <circle cx="50" cy="52" r="37.5" stroke="#C5A35A" strokeWidth="1.5" fill="none" opacity="0.85" />

          {/* Inner Swirling Mudra Grain Arc (Stylized 'G' / Germinating seed) */}
          <path
            d="M50 20
               A 32 32 0 1 1 24 64
               C 28 44, 46 36, 60 44
               C 70 50, 72 65, 62 72
               C 52 79, 40 73, 42 63
               C 44 54, 55 52, 60 58
               C 58 63, 52 64, 50 61"
            fill="url(#gmSpiral)"
          />

          {/* Subtle inner seed center */}
          <circle cx="50" cy="52" r="7" fill="#C5A35A" opacity="0.95" />
          <path d="M47 48 C51 45, 55 49, 53 53 Z" fill="#FCFAF4" opacity="0.9" />
        </svg>
      </div>

      {/* Brand Typography */}
      {variant !== 'mark-only' && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-serif font-bold tracking-[0.12em] uppercase leading-none ${textColor} ${
                size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-3xl'
              }`}
            >
              GRAMA MUDRA
            </span>
          </div>

          <div className="flex items-center gap-2 mt-0.5">
            {showTelugu && (
              <span className={`text-[11px] font-semibold tracking-wide ${teluguColor}`}>
                గ్రామ ముద్ర
              </span>
            )}
            <span className={`text-[10px] tracking-widest uppercase font-medium ${subtitleColor}`}>
              Traditional Foods
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
