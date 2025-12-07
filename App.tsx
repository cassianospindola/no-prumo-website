
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LeadFormModal } from './components/LeadFormModal';

const App: React.FC = () => {
  const [showStickyBtn, setShowStickyBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planOfInterest, setPlanOfInterest] = useState('Geral');

  const handleOpenModal = (plan: string = 'Geral') => {
    setPlanOfInterest(plan);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button only after scrolling past the Hero section (approx 650px)
      if (window.scrollY > 650) {
        setShowStickyBtn(true);
      } else {
        setShowStickyBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {/* Passando a função de abrir modal para a Hero */}
        <Hero onOpenModal={() => handleOpenModal('Hero CTA')} />
        <Problem />
        <HowItWorks />
        <Features />
        <Testimonials />
        {/* Passando a função de abrir modal para o Pricing */}
        <Pricing onOpenModal={handleOpenModal} />
        <FAQ />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA - Agora abre o modal ao invés de scrollar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${
          showStickyBtn ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button 
          onClick={() => handleOpenModal('Sticky Mobile')}
          className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-500 transition-colors flex items-center justify-center"
        >
          Testar Agora
        </button>
      </div>

      {/* O Modal Global */}
      <LeadFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planOfInterest={planOfInterest}
      />
    </div>
  );
};

export default App;
