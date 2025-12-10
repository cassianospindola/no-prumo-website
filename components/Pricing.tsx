
import React, { useState } from 'react';
import { Button } from './Button';
import { Check, Sparkles, TrendingUp, Headphones, Users, Lock, Crown, Zap, ArrowRight, ShieldCheck, FileText, PieChart, ScanLine, Wallet, Scale, Mic, Calendar, Lightbulb, Star, Landmark } from 'lucide-react';

interface PricingProps {
  onOpenModal: (plan: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  // PREÇOS PADRÃO (Valores de Tabela Futura)
  const prices = {
      initial: {
          monthly: 50,
          annual_total: 456,
          annual_monthly_eq: 38,
          discount_percent: 24
      },
      pro: {
          monthly: 70,
          annual_total: 588,
          annual_monthly_eq: 49,
          discount_percent: 30
      }
  };

  // Preço do Lote Atual (Lote 1)
  const founderPrice = {
      total: 99,
      monthly_eq: 8.25,
      savings_vs_pro: 88 // (840 referência base cheia vs 99)
  };

  return (
    <section id="pricing" className="py-20 bg-slate-900 scroll-mt-24 relative overflow-hidden">
      {/* Background Warning Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
         <div className="absolute top-20 left-10 rotate-12 text-9xl font-black text-white">FUTURO</div>
         <div className="absolute bottom-20 right-10 -rotate-12 text-9xl font-black text-white">PREÇOS</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-800 text-slate-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-slate-700">
            <Lock size={12} />
            Tabela de Preços 2026
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Investimento Padrão</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Compare os valores futuros com a oportunidade única do <span className="text-yellow-400 font-bold">Lote 1</span> disponível hoje.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span 
            className={`text-sm font-medium transition-colors cursor-pointer ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`} 
            onClick={() => setBillingCycle('monthly')}
          >
            Mensal
          </span>
          
          <button 
            onClick={() => setBillingCycle(prev => prev === 'annual' ? 'monthly' : 'annual')}
            className="w-14 h-8 bg-gray-700 rounded-full relative shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
            aria-label="Alternar ciclo de cobrança"
          >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${billingCycle === 'annual' ? 'left-7' : 'left-1'}`}></div>
          </button>

          <span 
            className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}`} 
            onClick={() => setBillingCycle('annual')}
          >
            Anual
            <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg shadow-green-500/20">
              ATÉ 30% OFF
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto items-end">
          
          {/* CARD 1: INICIAL (PADRÃO) */}
          <div className="bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 flex flex-col relative opacity-70 hover:opacity-100 scale-95 origin-bottom h-full">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-1">Inicial</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Preço Padrão (2026)</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-2xl font-extrabold text-white">
                    R$ {billingCycle === 'annual' ? prices.initial.annual_monthly_eq : prices.initial.monthly}
                  </span>
                  <span className="text-slate-500 ml-1 text-xs">/mês</span>
                </div>
                {billingCycle === 'annual' && (
                  <div className="flex items-center gap-2 mt-1">
                     <p className="text-[10px] text-slate-500">Total R$ {prices.initial.annual_total}</p>
                     <span className="text-[9px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-bold">
                        -{prices.initial.discount_percent}% OFF
                     </span>
                  </div>
                )}
              </div>

              <div className="w-full h-px bg-slate-700/50 mb-6"></div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start">
                  <Users size={16} className="text-slate-400 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">1 Usuário</span>
                </li>
                <li className="flex items-start">
                  <Mic size={16} className="text-slate-400 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">IA no WhatsApp (Texto e Áudio)</span>
                </li>
                <li className="flex items-start">
                  <Sparkles size={16} className="text-slate-400 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Categorização Automática</span>
                </li>
                 <li className="flex items-start">
                  <Wallet size={16} className="text-slate-400 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Multi-Carteiras</span>
                </li>
                <li className="flex items-start">
                  <Scale size={16} className="text-slate-400 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Separação PJ e PF</span>
                </li>
                <li className="flex items-start">
                  <PieChart size={16} className="text-slate-400 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Gestão de Orçamentos</span>
                </li>
                <li className="flex items-start">
                  <FileText size={16} className="text-slate-400 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Relatórios Mensais</span>
                </li>
              </ul>

              <Button 
                variant="outline" 
                fullWidth 
                className="py-2 text-xs font-bold mt-auto border-slate-600 text-slate-400 hover:bg-slate-700 hover:text-white"
                onClick={() => onOpenModal('Plano Inicial (Padrão)')}
              >
                Lista de Espera
              </Button>
            </div>
          </div>

          {/* CARD 2: MEMBRO FUNDADOR (LOTE 1) - PRIMARY */}
          <div className="bg-gradient-to-b from-yellow-500 via-yellow-400 to-orange-500 p-[2px] rounded-3xl shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] transform md:-translate-y-4 z-20 relative h-full">
             <div className="bg-white rounded-[22px] overflow-hidden h-full flex flex-col">
                
                {/* Header Promocional */}
                <div className="bg-yellow-50 p-4 pb-2 text-center border-b border-yellow-100">
                    <div className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                        <Crown size={12} />
                        Oferta Lote 1
                    </div>
                    <p className="text-xs text-yellow-700 font-medium">
                        Economize <span className="font-extrabold">{founderPrice.savings_vs_pro}%</span> vs. Preço Cheio
                    </p>
                </div>

                <div className="p-6 pt-4 flex-grow flex flex-col">
                  <div className="mb-2">
                    <h3 className="text-2xl font-black text-slate-900 mb-1 flex items-center gap-2">
                        Fundador
                        <Crown className="text-yellow-500 fill-yellow-500" size={20} />
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Acesso Vitalício às condições de Lançamento.</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-end gap-2 mb-1">
                        {/* Comparando com o preço mensal cheio do Pro (70) para ancoragem forte */}
                        <span className="text-sm text-gray-400 line-through mb-1">R$ {prices.pro.monthly}</span>
                        <div className="flex items-baseline">
                            <span className="text-5xl font-black text-slate-900 tracking-tight">
                                R$ {founderPrice.monthly_eq}
                            </span>
                            <span className="text-slate-500 ml-1 text-sm font-bold">/mês</span>
                        </div>
                    </div>
                    <p className="text-xs text-green-600 font-bold bg-green-50 inline-block px-2 py-1 rounded border border-green-100">
                        Cobrado R$ {founderPrice.total} por ano (Lote 1)
                    </p>
                  </div>

                  <div className="w-full h-px bg-gray-100 mb-6"></div>

                  <div className="space-y-4 mb-8 flex-1">
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center">
                            <Crown size={12} className="text-yellow-600 mr-1" />
                            Bônus Exclusivos Lote 1:
                        </p>
                        <ul className="space-y-2">
                             <li className="flex items-start">
                                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-yellow-200 flex items-center justify-center mt-0.5">
                                    <Zap size={10} className="text-yellow-800" strokeWidth={3} />
                                </div>
                                <span className="ml-2 text-slate-800 text-xs font-bold">
                                    Onboarding VIP
                                    <span className="block text-[9px] text-slate-500 font-normal">Configuramos para você.</span>
                                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-yellow-200 flex items-center justify-center mt-0.5">
                                    <ShieldCheck size={10} className="text-yellow-800" strokeWidth={3} />
                                </div>
                                <span className="ml-2 text-slate-800 text-xs font-bold">
                                    Trava de Preço Vitalícia
                                    <span className="block text-[9px] text-slate-500 font-normal">Renovação sem aumentos.</span>
                                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-yellow-200 flex items-center justify-center mt-0.5">
                                    <Star size={10} className="text-yellow-800" strokeWidth={3} />
                                </div>
                                <span className="ml-2 text-slate-800 text-xs font-bold">
                                    Prioridade Total
                                    <span className="block text-[9px] text-slate-500 font-normal">Acesso antecipado a novas funções.</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="pt-2 text-center">
                        <p className="text-xs text-gray-700 font-medium bg-gray-50 py-2 rounded-lg border border-gray-100">
                            + Inclui todas as funcionalidades do <strong className="text-brand-600">Plano Pro</strong>
                        </p>
                    </div>
                  </div>

                  <Button 
                    fullWidth 
                    className="py-4 text-sm font-black shadow-xl shadow-yellow-500/20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:brightness-110 border-0"
                    onClick={() => onOpenModal('Membro Fundador (Lote 1)')}
                  >
                    QUERO SER FUNDADOR
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <p className="text-[10px] text-center text-gray-400 mt-3 font-medium">
                      Garantia de 7 dias ou seu dinheiro de volta.
                  </p>
                </div>
             </div>
          </div>

          {/* CARD 3: PRO (PADRÃO - ANCHOR) */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 flex flex-col relative opacity-80 hover:opacity-100 scale-95 origin-bottom h-full">
            <div className="p-6 flex-grow flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide font-bold">Preço Padrão (2026)</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-2xl font-extrabold text-white">
                    R$ {billingCycle === 'annual' ? prices.pro.annual_monthly_eq : prices.pro.monthly}
                  </span>
                  <span className="text-slate-500 ml-1 text-xs">/mês</span>
                </div>
                {billingCycle === 'annual' && (
                  <div className="flex items-center gap-2 mt-1">
                     <p className="text-[10px] text-slate-500">Total R$ {prices.pro.annual_total}</p>
                     <span className="text-[9px] bg-green-900/30 text-green-400 border border-green-900/50 px-1.5 py-0.5 rounded font-bold">
                        -{prices.pro.discount_percent}% OFF
                     </span>
                  </div>
                )}
              </div>

              <div className="w-full h-px bg-slate-700 mb-6"></div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start">
                  <Users size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="ml-3 text-white text-xs font-bold">3 Usuários</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Tudo do Plano Inicial</span>
                </li>
                 <li className="flex items-start">
                  <Landmark size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Conexão Bancária (Open Finance)</span>
                </li>
                <li className="flex items-start">
                  <ScanLine size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Leitura de Imagens e PDF</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Forecasting (Previsão)</span>
                </li>
                 <li className="flex items-start">
                  <Lightbulb size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Insights de Inteligência</span>
                </li>
                <li className="flex items-start">
                  <Calendar size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Agenda Integrada</span>
                </li>
                <li className="flex items-start">
                  <Headphones size={16} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="ml-3 text-slate-300 text-xs font-medium">Suporte Prioritário</span>
                </li>
              </ul>

              <Button 
                variant="secondary" 
                fullWidth 
                className="py-2 text-xs font-bold mt-auto bg-slate-700 text-white border-transparent hover:bg-slate-600"
                onClick={() => onOpenModal('Plano Pro (Padrão)')}
              >
                Lista de Espera
              </Button>
            </div>
          </div>

        </div>

        <p className="text-center text-xs text-slate-500 mt-12 max-w-2xl mx-auto">
          * Os valores dos planos "Inicial" e "Pro" apresentados acima são projeções para a tabela oficial de 2026. Ao adquirir o plano <strong className="text-slate-300">Fundador</strong> hoje, você garante o preço de R$ 99 vitaliciamente nas renovações.
        </p>
      </div>
    </section>
  );
};
