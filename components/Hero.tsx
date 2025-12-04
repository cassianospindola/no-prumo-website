
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ChatSimulation } from './ChatSimulation';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const [platform, setPlatform] = useState<'whatsapp' | 'telegram'>('whatsapp');
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade out
      
      setTimeout(() => {
        setPlatform(prev => prev === 'whatsapp' ? 'telegram' : 'whatsapp');
        setFade(false); // Start fade in
      }, 300); // Wait for fade out to finish before changing text

    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const isWhatsApp = platform === 'whatsapp';

  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-900 transition-colors duration-700">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className={`absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-50 transition-colors duration-1000 ${isWhatsApp ? 'bg-brand-800' : 'bg-[#1b4b66]'}`}></div>
         <div className={`absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-40 transition-colors duration-1000 ${isWhatsApp ? 'bg-blue-900' : 'bg-[#24A1DE]'}`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left mb-10 lg:mb-0">
            <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide mb-6 transition-colors duration-500 ${isWhatsApp ? 'bg-brand-800 border-brand-600 text-brand-500' : 'bg-[#24A1DE]/10 border-[#24A1DE]/30 text-[#24A1DE]'}`}>
              <Star size={12} className="mr-1 fill-current" />
              Gestão Financeira via IA
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Transforme seu <span className={`transition-all duration-300 ${fade ? 'opacity-0' : 'opacity-100'} ${isWhatsApp ? 'text-green-400' : 'text-[#24A1DE]'}`}>{platform === 'whatsapp' ? 'WhatsApp' : 'Telegram'}</span> <br className="hidden lg:block" />
              <span className={`transition-all duration-500 ${isWhatsApp ? 'text-green-400' : 'text-[#24A1DE]'}`}>
                no Diretor Financeiro
              </span>
              <br className="hidden lg:block" /> do seu negócio.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-2.5 max-w-2xl mx-auto lg:mx-0 font-light">
              Abandone o caderninho e as planilhas chatas. Envie um áudio, agende clientes e controle seu lucro sem sair do chat. Inteligência Artificial que trabalha por você.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button 
                variant={isWhatsApp ? 'whatsapp' : 'telegram'} 
                className={`w-full sm:w-auto text-lg px-8 py-4 font-bold shadow-lg transition-all duration-500 group ${isWhatsApp ? 'shadow-green-900/20' : 'shadow-[#24A1DE]/20'}`}
              >
                Quero Acesso Antecipado
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
                Ver demonstração
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              * Vagas limitadas para a versão beta. Sem cartão de crédito necessário.
            </p>
          </div>

          {/* Visual Content (Mockup) */}
          <div className="lg:col-span-5 relative flex justify-center">
             <div className="relative z-10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
               <ChatSimulation />
             </div>
             {/* Decorative blob behind phone */}
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gradient-to-tr rounded-full blur-[60px] opacity-30 -z-10 transition-colors duration-1000 ${isWhatsApp ? 'from-brand-600 to-green-400' : 'from-blue-600 to-[#24A1DE]'}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
