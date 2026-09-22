import React from 'react';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'hero' | 'symbol';
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  className = '',
  onClick,
}) => {
  const isSymbolOnly = variant === 'symbol';
  const isHero = variant === 'hero';
  const isFooter = variant === 'footer';

  return (
    <div
      id={`brand-logo-${variant}`}
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Precision Geometric Gold Industrial Emblem */}
      <div
        className={`relative shrink-0 flex items-center justify-center rounded-xl overflow-hidden border border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.22)] bg-gradient-to-br from-[#0e1b38] via-[#081023] to-[#040813] ${
          isHero
            ? 'w-16 h-16 sm:w-20 sm:h-20'
            : isFooter
            ? 'w-12 h-12'
            : 'w-11 h-11'
        }`}
      >
        {/* Subtle radial inner glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.25),transparent_70%)]" />

        {/* Scalable SVG Emblem */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isHero ? 'w-12 h-12 sm:w-14 sm:h-14' : isFooter ? 'w-8 h-8' : 'w-7 h-7'}
        >
          <defs>
            <linearGradient id="goldMetallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fae596" />
              <stop offset="45%" stopColor="#d4af37" />
              <stop offset="85%" stopColor="#a37e19" />
              <stop offset="100%" stopColor="#e5c158" />
            </linearGradient>
            <linearGradient id="goldLightGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.2" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Hexagonal / Diamond facet outer shield */}
          <polygon
            points="50,6 88,27 88,73 50,94 12,73 12,27"
            stroke="url(#goldMetallicGrad)"
            strokeWidth="2.8"
            strokeLinejoin="round"
            fill="none"
          />
          <polygon
            points="50,14 80,31 80,69 50,86 20,69 20,31"
            stroke="url(#goldMetallicGrad)"
            strokeWidth="1.2"
            strokeOpacity="0.5"
            strokeDasharray="2 3"
            fill="none"
          />

          {/* Central Stylized "A" and "G" architectural monogram with industrial chemical facet */}
          <path
            d="M50 22L66 68H56L51 52H39L50 22Z"
            fill="url(#goldMetallicGrad)"
            filter="url(#goldGlow)"
          />
          <path
            d="M44 60H65C68 60 70 63 70 67C70 71 67 74 62 74H42C34 74 29 67 29 57C29 46 35 39 44 39"
            stroke="url(#goldMetallicGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Central reflective chemical/pigment facet prism */}
          <circle cx="50" cy="46" r="3.2" fill="#fff" opacity="0.9" />
          <polygon points="50,40 54,46 50,52 46,46" fill="url(#goldMetallicGrad)" />
        </svg>

        {/* Corner gold metallic highlight dots */}
        <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#fae596]/80" />
      </div>

      {/* Brand Typography */}
      {!isSymbolOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-heading font-extrabold tracking-wide text-white leading-none ${
                isHero
                  ? 'text-xl sm:text-2xl'
                  : isFooter
                  ? 'text-base sm:text-lg'
                  : 'text-base sm:text-lg'
              }`}
            >
              AL GHAFFAR
            </span>
          </div>

          <div className="flex items-center gap-2 mt-0.5">
            <span
              className={`font-semibold tracking-[0.25em] text-[#d4af37] leading-none ${
                isHero
                  ? 'text-xs sm:text-sm'
                  : isFooter
                  ? 'text-[10px] sm:text-xs'
                  : 'text-[10px] sm:text-xs'
              }`}
            >
              ENTERPRISES
            </span>
          </div>

          <span className="hidden sm:inline-block text-[8px] uppercase tracking-wider text-slate-400 mt-0.5 font-medium">
            Industrial Chemicals &amp; Pigments
          </span>
        </div>
      )}
    </div>
  );
};
