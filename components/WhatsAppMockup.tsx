
import React from 'react';
import { Logo } from './Logo';
import { Mic, CheckCheck, TrendingDown, Calendar, AlertTriangle, Battery, Signal, Wifi, ChevronLeft, Video, Phone, MoreVertical } from 'lucide-react';

export const WhatsAppMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      {/* Phone Frame Elements */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      {/* Top Bar / Status Bar */}
      <div className="bg-brand-900 text-white pt-2 px-4 pb-2">
        <div className="flex justify-between items-center text-[10px] mb-2 font-medium">
          <span>9:41</span>
          <div className="flex space-x-1.5 items-center">
            <Signal size={12} />
            <Wifi size={12} />
            <Battery size={12} />
          </div>
        </div>
        
        {/* WhatsApp Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChevronLeft size={24} className="text-white" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200 overflow-hidden">
                <div className="scale-75">
                  <Logo variant="icon-only" size="sm" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm leading-tight">No Prumo</span>
                <span className="text-[10px] text-gray-300">Assistente IA • Online</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 text-white">
            <Video size={20} />
            <Phone size={18} />
            <MoreVertical size={18} />
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-[#efeae2] p-3 flex flex-col space-y-4 overflow-y-auto chat-scroll relative">
        {/* Background Pattern Overlay (Subtle) */}
        <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none"></div>

        {/* Date Divider */}
        <div className="flex justify-center z-10">
          <span className="bg-[#e1f3fb] text-gray-600 text-[10px] px-2 py-1 rounded shadow-sm font-medium">Hoje</span>
        </div>

        {/* User Message (Audio) */}
        <div className="self-end max-w-[85%] z-10">
          <div className="bg-[#d9fdd3] rounded-lg p-2 shadow-sm rounded-tr-none">
            <div className="flex items-center space-x-3 min-w-[160px]">
              <div className="text-brand-600">
                <Mic size={20} />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                 <div className="h-1 bg-gray-300 rounded-full w-full mb-1 overflow-hidden">
                    <div className="h-full bg-brand-500 w-2/3"></div>
                 </div>
                 <div className="flex justify-between text-[10px] text-gray-500">
                    <span>0:05</span>
                 </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center shadow">
                 <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="flex justify-end mt-1 space-x-1">
              <span className="text-[10px] text-gray-500">10:42</span>
              <CheckCheck size={14} className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* Bot Response (Rich Data) */}
        <div className="self-start max-w-[90%] z-10">
          <div className="bg-white rounded-lg p-3 shadow-sm rounded-tl-none text-sm text-gray-800">
            <div className="font-semibold text-green-600 flex items-center mb-2">
              <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-1">
                <CheckCheck size={10} strokeWidth={3} />
              </span>
              Lançamento Confirmado!
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex items-start">
                <div className="bg-red-100 p-1.5 rounded text-red-600 mr-2 mt-0.5">
                    <TrendingDown size={14} />
                </div>
                <div>
                    <p className="font-medium text-gray-900">R$ 150,00</p>
                    <p className="text-xs text-gray-500">Despesa: Peças de Reposição</p>
                </div>
              </div>
              
              <div className="flex items-start">
                 <div className="bg-blue-100 p-1.5 rounded text-blue-600 mr-2 mt-0.5">
                    <Calendar size={14} />
                 </div>
                 <div>
                    <p className="font-medium text-gray-900">Parcelado em 3x</p>
                    <p className="text-xs text-gray-500">Cartão Nubank (Venc. dia 10)</p>
                 </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-2 border-yellow-400 p-2 rounded-r text-xs text-gray-700">
               <div className="flex items-center font-bold text-yellow-700 mb-1">
                 <AlertTriangle size={12} className="mr-1" />
                 Alerta de Caixa
               </div>
               Com esse gasto, sua previsão de saldo para o dia 20 ficou apertada (R$ 45,00 projetado).
            </div>
            
            <div className="flex justify-end mt-2">
              <span className="text-[10px] text-gray-400">10:42</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area (Static) */}
      <div className="bg-gray-100 p-2 flex items-center justify-between px-3">
         <div className="bg-white rounded-full flex-1 py-2 px-4 text-gray-400 text-sm shadow-sm mx-2">
            Mensagem
         </div>
         <div className="bg-brand-600 p-2.5 rounded-full text-white shadow-sm">
            <Mic size={20} />
         </div>
      </div>
    </div>
  );
};
