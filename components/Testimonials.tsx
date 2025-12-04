import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Quem usa, recomenda</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-2xl relative">
            <Quote className="absolute top-6 left-6 text-brand-200 w-10 h-10" />
            <p className="text-slate-700 italic relative z-10 pt-6 mb-6">
              "Antes eu perdia 2 horas todo sábado tentando fechar o caixa na planilha. Agora gasto 30 segundos mandando áudio entre um cliente e outro. Mudou minha vida."
            </p>
            <div className="flex items-center">
              <img src="https://picsum.photos/100/100?random=1" alt="João" className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <h4 className="font-bold text-slate-900">João Marcos</h4>
                <p className="text-sm text-slate-500">Dono da Barbearia Vintage</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl relative">
            <Quote className="absolute top-6 left-6 text-brand-200 w-10 h-10" />
            <p className="text-slate-700 italic relative z-10 pt-6 mb-6">
              "Eu nunca sabia se estava tendo lucro ou prejuízo. O No Prumo me avisou que eu estava gastando muito com material e me ajudou a precificar melhor meu serviço."
            </p>
            <div className="flex items-center">
              <img src="https://picsum.photos/100/100?random=2" alt="Ana" className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <h4 className="font-bold text-slate-900">Ana Paula</h4>
                <p className="text-sm text-slate-500">Esteticista e Empreendedora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};