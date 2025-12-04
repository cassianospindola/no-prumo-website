import React from 'react';
import { Mic, Bot, LineChart } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900 text-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-400 font-semibold tracking-wider uppercase text-sm">Simples assim</span>
          <h2 className="text-3xl font-bold mt-2 sm:text-4xl">A mágica acontece em 3 passos</h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 opacity-30"></div>

          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center mb-6 z-10 shadow-xl shadow-brand-900/50">
              <Mic size={40} className="text-brand-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Envie um Áudio</h3>
            <p className="text-slate-400">
              "Gastei 150 reais na loja de peças, parcelei em 3x no cartão." Fale como quiser, sem formalidades.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center mb-6 z-10 shadow-xl shadow-brand-900/50">
              <Bot size={40} className="text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. IA Organiza Tudo</h3>
            <p className="text-slate-400">
              Nossa inteligência separa o que é despesa, receita, caixa e competência. Categoriza e agenda os pagamentos.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center mb-6 z-10 shadow-xl shadow-brand-900/50">
              <LineChart size={40} className="text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Receba Insights</h3>
            <p className="text-slate-400">
              Receba gráficos de lucro e alertas antecipados se o dinheiro for faltar no fim do mês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};