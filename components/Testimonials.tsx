
import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Quem usa, recomenda</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            {/* Aspas posicionadas no fluxo normal, topo esquerdo */}
            <div className="mb-4">
              <Quote className="text-brand-500 w-10 h-10" fill="currentColor" fillOpacity={0.1} />
            </div>
            
            <p className="text-slate-700 text-lg italic mb-8 leading-relaxed">
              "Antes eu perdia 2 horas todo sábado tentando fechar o caixa na planilha. Agora gasto 30 segundos mandando áudio entre um cliente e outro. Mudou minha vida."
            </p>
            
            <div className="flex items-center border-t border-gray-100 pt-6">
              <img src="https://picsum.photos/100/100?random=1" alt="João" className="w-14 h-14 rounded-full mr-4 object-cover ring-4 ring-gray-50" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">João Marcos</h4>
                <p className="text-sm text-brand-600 font-medium">Dono da Barbearia Vintage</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-4">
              <Quote className="text-brand-500 w-10 h-10" fill="currentColor" fillOpacity={0.1} />
            </div>
            
            <p className="text-slate-700 text-lg italic mb-8 leading-relaxed">
              "Eu nunca sabia se estava tendo lucro ou prejuízo. O No Prumo me avisou que eu estava gastando muito com material e me ajudou a precificar melhor meu serviço."
            </p>
            
            <div className="flex items-center border-t border-gray-100 pt-6">
              <img src="https://picsum.photos/100/100?random=2" alt="Ana" className="w-14 h-14 rounded-full mr-4 object-cover ring-4 ring-gray-50" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Ana Paula</h4>
                <p className="text-sm text-brand-600 font-medium">Esteticista e Empreendedora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
