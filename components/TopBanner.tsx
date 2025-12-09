
import React, { useState, useEffect } from 'react';
import { AlertTriangle, X, Clock } from 'lucide-react';

interface TopBannerProps {
  onClose: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onClose }) => {
  const calculateTimeLeft = () => {
    // Data de encerramento do Lote 1 conforme especificado
    const targetDate = new Date('2025-12-31T23:59:59').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-yellow-400 text-yellow-900 py-2.5 px-4 text-center text-xs sm:text-sm font-bold fixed top-0 left-0 right-0 z-[60] shadow-sm flex items-center justify-center gap-2">
      <div className="flex items-center gap-1.5 animate-pulse shrink-0">
        <AlertTriangle size={14} fill="currentColor" className="text-yellow-700" />
        <span className="uppercase tracking-wide hidden sm:inline">Lote 1 (R$ 99): Acaba em</span>
        <span className="uppercase tracking-wide sm:hidden">Lote 1:</span>
      </div>
      
      <div className="bg-yellow-900/10 px-2 py-0.5 rounded text-yellow-950 font-mono tracking-tighter flex items-center gap-1 min-w-[120px] justify-center">
        <Clock size={12} className="opacity-50" />
        {timeLeft.days}d {timeLeft.hours.toString().padStart(2, '0')}h {timeLeft.minutes.toString().padStart(2, '0')}m
      </div>
      
      <span className="hidden md:inline text-yellow-800/80 font-medium">- Garanta o menor preço da história.</span>

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute right-2 sm:right-4 p-1 hover:bg-yellow-500/20 rounded transition-colors"
        aria-label="Fechar aviso"
      >
        <X size={16} />
      </button>
    </div>
  );
};
