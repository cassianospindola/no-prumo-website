
import React, { useState } from 'react';
import { Button } from './Button';
import { Check, Sparkles, Image as ImageIcon, TrendingUp, Headphones, BrainCircuit, Users, Lock } from 'lucide-react';

interface PricingProps {
  onOpenModal: (plan: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing" className="py-20 bg-slate-900 scroll-mt-24 relative overflow-hidden">
      {/* Background Warning Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
         <div className="absolute top-20 left-10 rotate-12 text-9xl font-black text-white">FUTURO</div>
         <div className="absolute bottom-20 right-10 -rotate-12 text-9xl font-black text-white">PREÇOS</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-800 text-slate-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-slate-700">
            <Lock size={12} />
            Preços Pós-Lançamento (2025)
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Investimento Futuro</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Estes serão os valores praticados após o período Beta. <br/>
            <span className="text-yellow-400 font-bold">Garanta sua oferta de fundador hoje para travar o valor promocional.</span>
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span 
            className={`text-sm font-medium transition-colors cursor-pointer ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`} 
            onClick={() => setBillingCycle('monthly')}
          >
            Mensal
          </span>
          
          <button 
            onClick={() => setBillingCycle(prev => prev === 'annual' ? 'monthly' : 'annual')}
            className="w-14 h-8 bg-gray-700 rounded-full relative shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
            aria-label="Alternar ciclo de cobrança"
          >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${billingCycle === 'annual' ? 'left-7' : 'left-1'}`}></div>
          </button>

          <span 
            className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}`} 
            onClick={() => setBillingCycle('annual')}
          >
            Anual
            <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg shadow-green-500/20 animate-pulse">
              -30% OFF
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* PLANO INICIAL */}
          <div className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 flex flex-col h-full relative opacity-80 hover:opacity-100">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">Inicial</h3>
                <p className="text-xs text-slate-400">Para organizar a casa e largar o caderno.</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold text-white">
                    R$ {billingCycle === 'annual' ? '28' : '40'}
                  </span>
                  <span className="text-slate-500 ml-1 text-sm">/mês</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-[10px] text-slate-500 mt-1">Cobrado R$ 336 anualmente</p>
                )}
              </div>

              <div className="w-full h-px bg-slate-700 mb-6"></div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-white text-xs font-bold flex items-center">
                    1 Usuário
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-300 text-xs">IA no WhatsApp (Texto e Áudio)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-300 text-xs">Categorização Automática</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-300 text-xs">Multi-Carteiras</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-300 text-xs">Separação PJ e PF</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-300 text-xs">Gestão de Orçamentos</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-300 text-xs">Relatórios Mensais</span>
                </li>
              </ul>

              <Button 
                variant="secondary" 
                fullWidth 
                className="py-2.5 text-sm font-bold mt-auto"
                onClick={() => onOpenModal('Plano Inicial')}
              >
                Entrar na Lista
              </Button>
            </div>
          </div>

          {/* PLANO PRO */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-600 relative flex flex-col h-full z-10 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Ribbon */}
            <div className="absolute top-0 right-0">
              <div className="bg-slate-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-md flex items-center">
                <Sparkles size={10} className="mr-1" />
                Futuro Padrão
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pro</h3>
                <p className="text-xs text-slate-500">Gestão avançada para crescer com segurança.</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-800">
                    R$ {billingCycle === 'annual' ? '49' : '71'}
                  </span>
                  <span className="text-slate-500 ml-1 text-sm">/mês</span>
                </div>
                {billingCycle === 'annual' && (
                  <p className="text-[10px] text-gray-400 mt-1">Cobrado R$ 588 anualmente</p>
                )}
              </div>

              <div className="w-full h-px bg-gray-100 mb-6"></div>

              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-green-600" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-900 text-xs font-bold flex items-center">
                    3 Usuários
                    <Users size={12} className="ml-1.5 text-brand-500" />
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-green-600" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-700 text-xs font-semibold">Tudo do Plano Inicial</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-brand-600" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-700 text-xs font-medium flex items-center">
                    Leitura de Imagens e PDF
                    <ImageIcon size={12} className="ml-1.5 text-brand-500" />
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-brand-600" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-700 text-xs font-medium flex items-center">
                    Forecasting (Previsão)
                    <TrendingUp size={12} className="ml-1.5 text-brand-500" />
                  </span>
                </li>
                 <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-brand-600" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-700 text-xs font-medium flex items-center">
                    Insights de Inteligência
                    <BrainCircuit size={12} className="ml-1.5 text-brand-500" />
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-brand-600" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-700 text-xs font-medium">Agenda Integrada</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-brand-600" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-700 text-xs font-medium flex items-center">
                    Suporte Prioritário
                     <Headphones size={12} className="ml-1.5 text-brand-500" />
                  </span>
                </li>
              </ul>

              <Button 
                fullWidth 
                className="py-3 text-sm font-bold shadow-lg mt-auto bg-slate-800 text-white hover:bg-slate-700"
                onClick={() => onOpenModal('Plano Pro')}
              >
                Garantir Oferta Secreta
              </Button>
            </div>
          </div>

        </div>

        <p className="text-center text-xs text-slate-500 mt-12">
          Preços de referência. Oferta de lançamento disponível apenas no cadastro.
        </p>
      </div>
    </section>
  );
};
