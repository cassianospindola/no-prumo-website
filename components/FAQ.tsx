import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-600" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "É seguro colocar meus dados financeiros?",
      answer: "Sim, 100% seguro. Utilizamos criptografia de ponta a ponta (a mesma dos bancos) e seguimos rigorosamente a LGPD. Seus dados são seus e não são compartilhados com terceiros."
    },
    {
      question: "Preciso de contador se usar o No Prumo?",
      answer: "O No Prumo organiza sua gestão financeira gerencial (dia a dia). Ele facilita muito a vida do seu contador enviando relatórios prontos, mas para a parte fiscal e tributária oficial, recomendamos manter seu contador."
    },
    {
      question: "Funciona para quem é MEI?",
      answer: "Perfeitamente! Foi desenhado pensando justamente no MEI e no pequeno prestador de serviço que mistura as contas e precisa de organização rápida."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim. Sem fidelidade, sem multas. Você usa enquanto fizer sentido para o seu negócio."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 sm:px-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};