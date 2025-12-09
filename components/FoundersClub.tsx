
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Lock, TrendingUp, Crown, AlertTriangle, Clock } from 'lucide-react';

export const FoundersClub: React.FC = () => {
  const [currentProgress, setCurrentProgress] = useState(0);

  // Configuração dos Lotes
  const lots = [
    { 
      id: 1, 
      label: 'Lote 1', 
      price: 99, 
      startDate: '2025-12-01T00:00:00', // Calibrado para dar 29% em 09/12 com taxa de 3.23%
      endDate: '2025-12-31T23:59:59', 
      dailyRate: 3.23, // 3.23% Linear
      status: 'active'
    },
    { 
      id: 2, 
      label: 'Lote 2', 
      price: 149, 
      startDate: '2026-01-01T00:00:00',
      endDate: '2026-01-31T23:59:59', 
      dailyRate: 7, 
      status: 'future'
    },
    { 
      id: 3, 
      label: 'Lote 3', 
      price: 249, 
      startDate: '2026-02-01T00:00:00',
      endDate: '2026-02-28T23:59:59', 
      dailyRate: 4, 
      status: 'future'
    },
    { 
      id: 4, 
      label: 'Lote 4', 
      price: 349, 
      startDate: '2026-03-01T00:00:00',
      endDate: '2026-03-31T23:59:59', 
      dailyRate: 4,
      status: 'future'
    },
    { 
      id: 5, 
      label: 'Lote 5', 
      price: 426, 
      startDate: '2026-04-01T00:00:00',
      endDate: '2026-04-30T23:59:59', 
      dailyRate: 4,
      status: 'future'
    },
  ];

  // Cálculo de Progresso Real
  useEffect(() => {
    const activeLot = lots.find(l => l.status === 'active');
    
    if (activeLot && activeLot.startDate) {
      const now = new Date().getTime();
      const start = new Date(activeLot.startDate).getTime();
      
      // Diferença em dias
      const diffTime = Math.abs(now - start);
      const diffDays = diffTime / (1000 * 60 * 60 * 24); 
      
      // Cálculo: Dias passados * Taxa Diária
      let calculatedPercentage = diffDays * activeLot.dailyRate;

      // Travas de segurança visual
      if (calculatedPercentage > 98) calculatedPercentage = 98; // Nunca mostra 100% cheio para manter desejo
      if (calculatedPercentage < 5) calculatedPercentage = 5;   // Nunca mostra vazio demais

      setCurrentProgress(calculatedPercentage);
    }
  }, []);

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

            // Formatação da data para exibição amigável
            const dateObj = new Date(lot.endDate);
            const dateStr = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

            return (
              <div 
                key={lot.id}
                className={`
                  relative rounded-2xl p-4 flex flex-col items-center justify-center text-center border transition-all duration-300 min-h-[180px]
                  ${isSoldOut ? 'bg-slate-800/50 border-slate-700 opacity-60 grayscale' : ''}
                  ${isActive ? 'bg-gradient-to-b from-brand-900 to-slate-900 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.15)] transform scale-105 z-10' : ''}
                  ${isFuture ? 'bg-slate-800/30 border-slate-800' : ''}
                `}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-full flex justify-center">
                   {isSoldOut && (
                     <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wide whitespace-nowrap">
                       Esgotado
                     </span>
                   )}
                   {isActive && (
                     <span className="bg-yellow-500 text-yellow-950 text-[10px] font-bold px-3 py-1 rounded shadow-lg shadow-yellow-500/40 uppercase tracking-wide whitespace-nowrap flex items-center gap-1 animate-pulse">
                       <TrendingUp size={10} /> Disponível
                     </span>
                   )}
                   {isFuture && (
                     <span className="bg-slate-700 text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wide whitespace-nowrap flex items-center gap-1">
                       <Lock size={8} /> Bloqueado
                     </span>
                   )}
                </div>

                <span className={`text-xs font-bold uppercase mb-2 mt-2 ${isActive ? 'text-yellow-500' : 'text-slate-500'}`}>
                  {lot.label}
                </span>

                <div className="mb-1 relative">
                   <span className={`text-2xl font-black ${isActive ? 'text-white' : 'text-slate-400'}`}>
                     R$ {lot.price}
                   </span>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                   <Clock size={10} className={isActive ? 'text-yellow-500' : 'text-slate-600'} />
                   <p className={`text-[10px] leading-tight ${isActive ? 'text-yellow-500 font-bold' : 'text-slate-600'}`}>
                     Até {dateStr}
                   </p>
                </div>

                {isActive && (
                  <div className="w-full mt-auto">
                    <div className="flex justify-between text-[9px] text-yellow-500 mb-1 font-bold uppercase">
                       <span>Alta Procura</span>
                       <span>{currentProgress.toFixed(1)}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
                       <div 
                         className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-1000 ease-out"
                         style={{ width: `${currentProgress}%` }}
                       ></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-3 rounded-lg border border-red-500/20 text-sm max-w-2xl text-left sm:text-center">
                <AlertTriangle size={20} className="shrink-0" />
                <p>
                  <strong>Oportunidade Única:</strong> O Lote 1 (R$ 99) é a oferta de lançamento mais baixa da história. 
                  Em <strong>31/12/2025</strong>, o preço subirá automaticamente para <strong>R$ 149</strong> (Lote 2), ou enquanto haver vaga para clientes fundadores.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};
