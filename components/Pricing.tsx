import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Investimento que se paga na primeira semana</h2>
          <p className="text-slate-400">Mais barato que um contador, mais eficiente que um assistente.</p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
          <div className="p-8 sm:p-10">
            <div className="flex justify-between items-baseline mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Plano Pro</h3>
              <div className="text-right">
                <span className="text-4xl font-extrabold text-brand-600">R$ 49,90</span>
                <span className="text-slate-500">/mês</span>
              </div>
            </div>
            
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
              Começar Teste Grátis
            </Button>
            <p className="text-center text-xs text-slate-400 mt-4">7 dias grátis. Cancele quando quiser.</p>
          </div>
        </div>
      </div>
    </section>
  );
};