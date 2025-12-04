import React from 'react';
import { Telescope, CalendarCheck, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Feature 1: Forecasting */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
                {/* Visual representation of a forecast alert */}
                <div className="flex items-start space-x-4">
                   <div className="p-3 bg-red-100 rounded-lg">
                      <Telescope className="text-red-600" size={24}/>
                   </div>
                   <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Previsão para 20/Out</h4>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div className="bg-red-500 h-2.5 rounded-full w-[85%]"></div>
                      </div>
                      <p className="text-sm text-gray-600">Alerta: Seus custos fixos vão consumir 85% da receita prevista. Sugestão: adiar compra de equipamentos.</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-brand-700 text-xs font-bold mb-4">
              Forecasting
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Pare de olhar pelo retrovisor.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              A maioria dos sistemas só te mostra o que já aconteceu. O <span className="font-bold text-brand-600">No Prumo</span> avisa hoje se o caixa vai fechar no vermelho mês que vem, te dando tempo para agir.
            </p>
          </div>
        </div>

        {/* Feature 2: Agenda */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-4">
              Agenda Integrada
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Agendou, faturou.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Gerencie seus clientes no mesmo lugar. Finalizou o atendimento? O sistema já pergunta como foi o pagamento e lança no financeiro na hora. Tudo conectado.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md">
                <div className="flex justify-between items-center mb-4 pb-4 border-b">
                   <h4 className="font-bold text-gray-800">Agenda de Hoje</h4>
                   <CalendarCheck className="text-brand-500" />
                </div>
                <div className="space-y-3">
                   <div className="flex items-center p-3 bg-gray-50 rounded border-l-4 border-green-500">
                      <div className="flex-1">
                         <p className="font-bold text-gray-800">Corte + Barba</p>
                         <p className="text-sm text-gray-500">João Silva • 14:00</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">Pago</span>
                   </div>
                   <div className="flex items-center p-3 bg-white border border-gray-100 rounded shadow-sm opacity-50">
                      <div className="flex-1">
                         <p className="font-bold text-gray-800">Hidratação</p>
                         <p className="text-sm text-gray-500">Maria Oliveira • 15:30</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Feature 3: Frictionless */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center">
              <div className="relative">
                 <div className="absolute inset-0 bg-brand-500 blur-[50px] opacity-20 rounded-full"></div>
                 <Zap size={180} className="text-slate-900 relative z-10" strokeWidth={1} />
              </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold mb-4">
              Fricção Zero
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Sem login, sem senha, sem instalação.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Funciona onde você já está: no WhatsApp. Não ocupa espaço no celular e você não precisa decorar mais uma senha. É falar e pronto.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};