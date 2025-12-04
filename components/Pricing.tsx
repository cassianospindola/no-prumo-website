
import React, { useState } from 'react';
import { Button } from './Button';
import { Check, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing" className="py-20 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Investimento que se paga na primeira semana</h2>
          <p className="text-slate-400">Mais eficiente que fazer sozinho, muito mais barato que contratar um assistente.</p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-medium transition-colors cursor-pointer ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`} onClick={() => setBillingCycle('monthly')}>
            Mensal
          </span>
          
          <button 
            onClick={() => setBillingCycle(prev => prev === 'annual' ? 'monthly' : 'annual')}
            className="w-14 h-8 bg-gray-700 rounded-full relative shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
            aria-label="Alternar ciclo de cobrança"
          >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${billingCycle === 'annual' ? 'left-7' : 'left-1'}`}></div>
          </button>

          <span className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}`} onClick={() => setBillingCycle('annual')}>
            Anual
            <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg shadow-green-500/20 animate-pulse">
              -30% OFF
            </span>
          </span>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 relative">
          {/* Ribbon for Annual Plan */}
          {billingCycle === 'annual' && (
            <div className="absolute top-0 right-0">
              <div className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl shadow-md flex items-center">
                <Sparkles size={12} className="mr-1" />
                Melhor Escolha
              </div>
            </div>
          )}

          <div className="p-8 sm:p-10">
            <div className="flex flex-col mb-8">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-bold text-slate-900">Plano Pro</h3>
                
                <div className="text-right">
                  {billingCycle === 'annual' && (
                    <span className="block text-sm text-gray-400 line-through font-medium mb-1">
                      R$ 71,00
                    </span>
                  )}
                  <div className="flex items-baseline justify-end">
                    <span className="text-4xl font-extrabold text-brand-600">
                      R$ {billingCycle === 'annual' ? '49,00' : '71,00'}
                    </span>
                    <span className="text-slate-500 ml-1">/mês</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-right text-gray-400 font-medium">
                {billingCycle === 'annual' 
                  ? 'Cobrado R$ 588,00 anualmente' 
                  : 'Cobrado mensalmente sem fidelidade'}
              </p>
            </div>
            
            <div className="w-full h-px bg-gray-100 mb-8"></div>
            
            <ul className="space-y-4 mb-8">
              {[
                "Lançamentos ilimitados via áudio/texto",
                "Relatórios de Fluxo de Caixa e DRE",
                "Agenda de clientes integrada",
                "Previsão de caixa (Forecasting)",
                "Suporte prioritário no WhatsApp"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-green-600" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-slate-600">{item}</span>
                </li>
              ))}
            </ul>

            <Button fullWidth className="py-4 text-lg font-bold shadow-lg shadow-brand-500/30">
              {billingCycle === 'annual' ? 'Garantir Desconto Agora' : 'Começar Teste Grátis'}
            </Button>
            <p className="text-center text-xs text-slate-400 mt-4">7 dias grátis. Cancele quando quiser.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
