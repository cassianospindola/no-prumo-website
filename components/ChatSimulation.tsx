
import React, { useEffect, useState, useRef } from 'react';
import { Logo } from './Logo';
import { Signal, Wifi, Battery, ChevronLeft, Video, Phone, MoreVertical, CheckCheck, Mic, TrendingDown, Calendar, AlertTriangle } from 'lucide-react';

export const ChatSimulation: React.FC = () => {
  const [step, setStep] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Sequence Logic
    // 0s: Start
    // 1s: User sends Audio
    // 3s: Bot starts typing
    // 4.5s: Bot asks confirmation
    // 6.5s: User starts typing
    // 8s: User confirms "Sim, isso mesmo!"
    // 9.5s: Bot starts typing
    // 11s: Bot sends Final Card
    // 18s: Restart

    const clearTimeouts = () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };

    const runSequence = () => {
      clearTimeouts(); // Clear any existing sequence
      setStep(0); 
      
      const times = [
        { ms: 1000, s: 1 },
        { ms: 3000, s: 2 },
        { ms: 4500, s: 3 },
        { ms: 6500, s: 4 },
        { ms: 8000, s: 5 },
        { ms: 9500, s: 6 },
        { ms: 11000, s: 7 }
      ];

      times.forEach(({ ms, s }) => {
        const t = setTimeout(() => setStep(s), ms);
        timeoutsRef.current.push(t);
      });
    };

    // Initial run
    runSequence();

    // Loop interval
    const interval = setInterval(() => {
        runSequence();
    }, 19000); // Loop total time

    return () => {
      clearTimeouts();
      clearInterval(interval);
    };
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [step]);

  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[12px] rounded-[2.5rem] h-[600px] w-[280px] shadow-2xl flex flex-col overflow-hidden font-sans ring-1 ring-white/10">
      {/* Phone Frame Elements */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[15px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[15px] top-[124px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[15px] top-[142px] rounded-r-lg"></div>

      {/* Header */}
      <div className="bg-brand-900 text-white pt-3 px-3 pb-2 z-20 shadow-md">
        <div className="flex justify-between items-center text-[10px] mb-2 font-medium opacity-90">
          <span>10:41</span>
          <div className="flex space-x-1 items-center">
            <Signal size={10} />
            <Wifi size={10} />
            <Battery size={10} />
          </div>
        </div>
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center space-x-1">
            <ChevronLeft size={20} className="text-white -ml-1" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 overflow-hidden shrink-0">
                <div className="scale-75">
                   <Logo variant="icon-only" size="sm" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs leading-tight">No Prumo</span>
                <span className="text-[9px] text-green-400 font-medium">Assistente IA • Online</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 text-white opacity-90">
            <Video size={18} />
            <Phone size={16} />
            <MoreVertical size={16} />
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={chatContainerRef}
        className="flex-1 bg-[#efeae2] p-2 flex flex-col space-y-3 relative overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none h-full"></div>

        {/* Date Divider */}
        <div className={`flex justify-center transition-opacity duration-500 mb-2 shrink-0 ${step > 0 ? 'opacity-100' : 'opacity-0'}`}>
          <span className="bg-[#e1f3fb] text-gray-600 text-[9px] px-2 py-1 rounded shadow-sm font-medium z-10 uppercase tracking-wide">Hoje</span>
        </div>

        {/* Step 1: User Audio Message */}
        <div 
          className={`self-end max-w-[90%] z-10 transition-all duration-500 transform origin-bottom-right shrink-0 ${
            step >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          <div className="bg-[#d9fdd3] rounded-lg p-2 shadow-sm rounded-tr-none min-w-[180px]">
            <div className="flex items-center space-x-2">
               <div className="relative">
                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Mic size={16} className="text-gray-500" />
                 </div>
                 <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-3.5 h-3.5 flex items-center justify-center border-2 border-[#d9fdd3]">
                   <Mic size={8} className="text-white" />
                 </div>
               </div>
               <div className="flex-1">
                  <div className="h-1.5 bg-gray-300 rounded-full w-full mb-1.5 overflow-hidden">
                     <div className="h-full bg-green-500 w-[60%] animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-gray-500">
                     <span>0:05</span>
                     <span>10:42</span>
                  </div>
               </div>
            </div>
            <div className="flex justify-end -mt-1 mr-1">
               <CheckCheck size={12} className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* Bot Typing Indicator 1 */}
        {step === 2 && (
           <div className="self-start z-10 bg-white rounded-lg p-2.5 shadow-sm rounded-tl-none flex space-x-1 items-center h-8 w-14 shrink-0">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
           </div>
        )}

        {/* Step 3: Bot Question Text */}
        <div 
          className={`self-start max-w-[90%] z-10 transition-all duration-500 transform origin-bottom-left shrink-0 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'
          }`}
        >
          <div className="bg-white rounded-lg p-2.5 px-3 shadow-sm rounded-tl-none text-[12px] leading-snug text-gray-800">
            <p>Certo, você gostaria de lançar uma despesa no valor de <strong>R$ 150,00</strong> parcelado em <strong>3x no cartão Roxinho</strong> referente a compra de um <strong>aparador de cabelo</strong>?</p>
            <span className="text-[9px] text-gray-400 block text-right mt-1">10:42</span>
          </div>
        </div>

        {/* User Typing Indicator */}
        {step === 4 && (
           <div className="self-end z-10 bg-[#d9fdd3] rounded-lg p-2.5 shadow-sm rounded-tr-none flex space-x-1 items-center h-8 w-14 shrink-0">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce"></div>
           </div>
        )}

        {/* Step 5: User Confirmation Text */}
        <div 
          className={`self-end max-w-[85%] z-10 transition-all duration-500 transform origin-bottom-right shrink-0 ${
            step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'
          }`}
        >
          <div className="bg-[#d9fdd3] rounded-lg p-2 px-3 shadow-sm rounded-tr-none text-[12px] text-gray-800">
            <p>Sim, isso mesmo!</p>
            <div className="flex justify-end mt-1 space-x-1 items-center">
              <span className="text-[9px] text-gray-500">10:43</span>
              <CheckCheck size={12} className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* Bot Typing Indicator 2 */}
        {step === 6 && (
           <div className="self-start z-10 bg-white rounded-lg p-2.5 shadow-sm rounded-tl-none flex space-x-1 items-center h-8 w-14 shrink-0">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
           </div>
        )}

        {/* Step 7: Bot Success Card */}
        <div 
          className={`self-start max-w-[95%] z-10 transition-all duration-500 transform origin-bottom-left shrink-0 pb-2 ${
            step >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'
          }`}
        >
          <div className="bg-white rounded-lg p-2.5 shadow-sm rounded-tl-none text-sm text-gray-800">
            <div className="font-bold text-green-600 flex items-center mb-2 text-xs">
              <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-1.5">
                <CheckCheck size={10} strokeWidth={3} />
              </span>
              Lançamento Confirmado!
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex items-start">
                <div className="bg-red-50 p-1.5 rounded text-red-500 mr-2 mt-0.5">
                    <TrendingDown size={12} />
                </div>
                <div>
                    <p className="font-bold text-gray-900 text-sm">R$ 150,00</p>
                    <p className="text-[10px] text-gray-500">Despesa: Utensílios</p>
                </div>
              </div>
              
              <div className="flex items-start">
                 <div className="bg-blue-50 p-1.5 rounded text-blue-500 mr-2 mt-0.5">
                    <Calendar size={12} />
                 </div>
                 <div>
                    <p className="font-bold text-gray-900 text-sm">Parcelado em 3x</p>
                    <p className="text-[10px] text-gray-500">Cartão Nubank</p>
                 </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-2 border-yellow-400 p-2 rounded-r text-[10px] text-gray-700 leading-snug">
               <div className="flex items-center font-bold text-yellow-700 mb-0.5">
                 <AlertTriangle size={10} className="mr-1" />
                 Alerta de Caixa
               </div>
               Com esse gasto, sua previsão de caixa para o dia 20 ficou apertada.
            </div>
            
            <div className="flex justify-end mt-1">
              <span className="text-[9px] text-gray-400">10:43</span>
            </div>
          </div>
        </div>
        
        {/* Spacer for bottom scrolling */}
        <div className="h-4 w-full shrink-0"></div>

      </div>

      {/* Input Area (Static) */}
      <div className="bg-[#f0f2f5] p-2 flex items-center justify-between px-2 z-20 pb-4 md:pb-3 border-t border-gray-200">
         <div className="bg-white rounded-full flex-1 py-2 px-3 text-gray-400 text-[12px] shadow-sm mx-1 flex justify-between items-center h-9">
            <span>Mensagem</span>
         </div>
         <div className="bg-brand-600 w-9 h-9 rounded-full text-white shadow-md hover:bg-brand-500 transition-colors cursor-pointer flex items-center justify-center">
            <Mic size={18} fill="white" />
         </div>
      </div>
    </div>
  );
};
