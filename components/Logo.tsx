
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'default',
  size = 'md'
}) => {
  const isWhite = variant === 'white';
  const isIconOnly = variant === 'icon-only';
  
  // Size mapping
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl"
  };

  const iconSize = size === 'lg' ? 48 : (size === 'sm' ? 24 : 32);
  const colorPrimary = isWhite ? "currentColor" : "#3b82f6"; // Blue
  const colorSecondary = isWhite ? "currentColor" : "#22c55e"; // Green

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon: The "Growth Plumb" - Stability + Growth */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size]} w-auto aspect-square`}>
        <svg 
          width={iconSize} 
          height={iconSize} 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transform transition-transform hover:scale-105 duration-300"
        >
          {/* The String (Line) - Represents Alignment/Control */}
          <path 
            d="M16 0V10" 
            stroke={colorPrimary} 
            strokeWidth="2.5" 
            strokeLinecap="round" 
          />
          
          {/* The Pivot Dot at Top */}
          <circle cx="16" cy="2" r="2" fill={colorPrimary} />

          {/* The Weight (Hexagon) - Represents Stability/Technology/Structure */}
          <path 
            d="M16 31L7.33975 26V16L16 11L24.6603 16V26L16 31Z" 
            fill={colorSecondary} 
            stroke={colorSecondary}
            strokeWidth="1"
            className="drop-shadow-sm"
          />

          {/* The Arrow Up - Represents Growth/Profit/Positivity */}
          <path 
            d="M16 16V26M16 16L11 21M16 16L21 21" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text Brand */}
      {!isIconOnly && (
        <div className={`font-bold tracking-tight flex flex-col justify-center leading-none ${textSizeClasses[size]} ${isWhite ? 'text-white' : 'text-slate-900'}`}>
          <span>No Prumo</span>
        </div>
      )}
    </div>
  );
};
