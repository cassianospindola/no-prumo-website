import React from 'react';
import { FileX, Calculator, Clock, BrainCircuit } from 'lucide-react';

export const Problem: React.FC = () => {
  const pains = [
    {
      icon: Clock,
      title: "Perde tempo tentando lembrar?",
      description: "Chega sexta-feira e você não sabe onde foi parar o dinheiro da semana. Memória não é gestão."
    },
    {
      icon: Calculator,
      title: "Mistura PJ com Pessoa Física?",
      description: "Paga a escola do filho com o dinheiro das peças? O No Prumo te ajuda a separar as coisas sem dor."
    },
    {
      icon: FileX,
      title: "Trabalha muito, lucra pouco?",
      description: "Faturar é diferente de lucrar. Mostramos onde seu dinheiro está vazando de verdade."
    },
    {
      icon: BrainCircuit,
      title: "Medo de sistemas complexos?",
      description: "Ninguém merece perder horas aprendendo ERP. Se você sabe mandar áudio no Zap, você sabe usar o No Prumo."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Você é excelente no seu serviço, <br className="hidden md:block" />
            <span className="text-brand-600">mas a gestão te atrapalha?</span>
          </h2>
          <p className="text-lg text-slate-600">
            Você não abriu seu negócio para virar contador. Deixe a parte chata com a gente e foque no cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <pain.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{pain.title}</h3>
              <p className="text-slate-600 leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};