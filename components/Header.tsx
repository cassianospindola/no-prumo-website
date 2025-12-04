
import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Typewriter state
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["gestão", "finanças", "suavida"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect logic
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      let delta = 150;

      if (isDeleting) { 
        delta = 75; // Faster deletion
      }

      if (!isDeleting && text === fullText) {
        delta = 2000; // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        delta = 500; // Pause before starting new word
      }

      setTypingSpeed(delta);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Function to handle smooth scrolling without changing URL hash (prevents iframe reloads)
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-900/95 backdrop-blur-md shadow-lg py-3 border-b border-brand-800' 
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo icon only */}
          <div className="bg-white/10 p-1.5 rounded-lg border border-white/5 backdrop-blur-sm shrink-0">
            <Logo variant="icon-only" size="sm" />
          </div>
          
          {/* Dynamic Text */}
          <div className="font-mono font-bold text-lg sm:text-xl tracking-tight text-white min-w-[140px] sm:min-w-[180px] flex items-center">
            <span className="text-green-400">{text}</span>
            <span className="text-green-400 animate-blink mx-[1px]">|</span>
            <span className="text-white">.noprumo</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              Como funciona
            </a>
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              Recursos
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              Preços
            </a>
          </nav>
          <Button variant="whatsapp" className="px-5 py-2 text-sm font-bold">
            Entrar
          </Button>
        </div>

        {/* Mobile Menu Button - Hidden as requested */}
        <div className="md:hidden hidden">
            <Button variant="whatsapp" className="px-4 py-1.5 text-xs font-bold">
              Entrar
            </Button>
        </div>
      </div>
    </header>
  );
};
