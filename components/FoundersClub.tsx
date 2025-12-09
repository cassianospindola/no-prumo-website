
import React from 'react';
import { CheckCircle2, Lock, TrendingUp, Crown, AlertTriangle } from 'lucide-react';

export const FoundersClub: React.FC = () => {
  const lots = [
    {id: 1, price: 99, status: 'sold_out', label: 'Lote 1'},
    {id: 2, price: 149, status: 'active', label: 'Lote 2'},
    {id: 3, price: 249, status: 'future', label: 'Lote 3'},
    {id: 4, price: 349, status: 'future', label: 'Lote 4'},
    {id: 5, price: 426, status: 'future', label: 'Lote 5'},
  ];

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4 border border-yellow-500/20">
            <Crown size={12} />
            Clube dos Fundadores
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Cronograma de Valorização
          </h2>
          <p className="text-lg text-slate-400">
            O No Prumo funciona por lotes de adesão. Quem entra antes, paga menos e garante mais benefícios. 
            <span className="text-white font-bold block mt-2">O valor da sua adesão nunca mais será tão baixo quanto hoje.</span>
          </p>
        </div>

        {/* Lots Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {lots.map((lot) => {
            const isSoldOut = lot.status === 'sold_out';
            const isActive = lot.status === 'active';
            const isFuture = lot.status === 'future';

            return (
              <div 
                key={lot.id}
                className={`
                  relative rounded-2xl p-4 flex flex-col items-center justify-center text-center border transition-all duration-300 min-h-[160px]
                  ${isSoldOut ? 'bg-slate-800/50 border-slate-700 opacity-60 grayscale' : ''}
                  ${isActive ? 'bg-gradient-to-b from-brand-900 to-slate-900 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.15)] transform scale-105 z-10' : ''}
                  ${isFuture ? 'bg-slate-800/30 border-slate-800' : ''}
                `}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                   {isSoldOut && (
                     <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wide whitespace-nowrap">
                       Esgotado
                     </span>
                   )}
                   {isActive && (
                     <span className="bg-yellow-500 text-yellow-950 text-[10px] font-bold px-3 py-1 rounded shadow-lg shadow-yellow-500/40 uppercase tracking-wide whitespace-nowrap flex items-center gap-1 animate-pulse">
                       <TrendingUp size={10} /> Liberado
                     </span>
                   )}
                   {isFuture && (
                     <span className="bg-slate-700 text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wide whitespace-nowrap flex items-center gap-1">
                       <Lock size={8} /> Em breve
                     </span>
                   )}
                </div>

                <span className={`text-xs font-bold uppercase mb-2 ${isActive ? 'text-yellow-500' : 'text-slate-500'}`}>
                  {lot.label}
                </span>

                <div className="mb-2 relative">
                   <span className={`text-2xl font-black ${isActive ? 'text-white' : 'text-slate-400'}`}>
                     R$ {lot.price}
                   </span>
                   {isSoldOut && (
                     <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500 -rotate-12"></div>
                   )}
                </div>

                <p className="text-[10px] text-slate-500 leading-tight">
                  {isSoldOut ? 'Encerrado em Maio/24' : isActive ? 'Vagas Abertas Agora' : 'Previsão Out/25'}
                </p>

                {isActive && (
                  <div className="mt-3 w-full">
                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                       <div className="h-full bg-yellow-500 w-[70%]"></div>
                    </div>
                    <p className="text-[9px] text-yellow-500 mt-1 font-bold">70% Vendido</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-lg border border-red-500/20 text-sm">
                <AlertTriangle size={16} />
                <p><strong>Atenção:</strong> Assim que o Lote 2 encerrar, o preço subirá automaticamente para <strong>R$ 249,00</strong>.</p>
            </div>
        </div>

      </div>
    </section>
  );
};
