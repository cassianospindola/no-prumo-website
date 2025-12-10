
import React from 'react';
import { Logo } from './Logo';
import { Telescope, CalendarCheck, ShieldCheck, Target, AlertTriangle, Scissors, PieChart, TrendingUp, Glasses, Wallet, Landmark, CreditCard, Sparkles, Tags, Scale, Building2, User, ArrowRightLeft, CheckCheck, Lock, KeyRound, TrendingDown, ChevronLeft, ChevronRight, Car, Info, ArrowRight, ScanLine, FileText, Receipt, RefreshCw, Link, Check } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50 overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Feature 1: Forecasting */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-end w-full">
             <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md relative mx-auto lg:mx-0">
                <div className="flex justify-between items-center mb-6">
                   <div>
                      <h4 className="font-bold text-gray-900">Fluxo de Caixa</h4>
                      <p className="text-xs text-gray-500">Outubro 2025</p>
                   </div>
                   <div className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold flex items-center">
                      <TrendingUp size={12} className="mr-1" />
                      Saldo Atual: +R$ 2.400
                   </div>
                </div>

                {/* Temporal Chart Container */}
                <div className="mb-2 select-none">
                   <div className="relative h-48 w-full">
                      {/* "Today" Marker Line and Label */}
                      <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-slate-200 border-l border-dashed border-slate-400 z-0"></div>
                      <div className="absolute left-[50%] -top-3 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm">
                          Hoje
                      </div>

                      <svg viewBox="0 0 400 160" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          {/* Baseline (0) */}
                          <line x1="0" y1="140" x2="400" y2="140" stroke="#e5e7eb" strokeWidth="1" />

                          {/* Past Line (Solid Blue) */}
                          <path 
                            d="M0,120 C30,110 50,130 80,100 C110,70 140,90 200,60" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                          />
                          {/* Area under curve */}
                          <path 
                            d="M0,140 L0,120 C30,110 50,130 80,100 C110,70 140,90 200,60 L200,140 Z" 
                            fill="url(#fillGradient)" 
                            stroke="none"
                          />

                          {/* Scheduled Line (Gray Dotted) */}
                          <path 
                            d="M200,60 C250,55 300,70 400,75" 
                            fill="none" 
                            stroke="#94a3b8" 
                            strokeWidth="2.5" 
                            strokeDasharray="3 3" 
                            strokeLinecap="round" 
                          />

                          {/* Forecast Line (Red Dashed) */}
                          <path 
                            d="M200,60 C240,40 280,110 320,130 C350,145 380,150 400,155" 
                            fill="none" 
                            stroke="#ef4444" 
                            strokeWidth="3" 
                            strokeDasharray="6 4" 
                            strokeLinecap="round" 
                          />
                          
                          {/* Point at "Today" */}
                          <circle cx="200" cy="60" r="5" fill="#3b82f6" stroke="white" strokeWidth="2" />
                          
                          {/* Point at End (Danger) */}
                          <circle cx="400" cy="155" r="5" fill="#ef4444" stroke="white" strokeWidth="2" />
                      </svg>
                   </div>
                   
                   {/* Labels for X Axis */}
                   <div className="flex justify-between text-[10px] text-gray-400 mt-2 px-1">
                      <span>Dia 01</span>
                      <span>Dia 15</span>
                      <span>Dia 30</span>
                   </div>
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-4 mt-4 mb-6 text-[10px] text-gray-500 font-medium border-t border-gray-50 pt-3">
                   <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-1.5"></div>
                      <span>Realizado</span>
                   </div>
                   <div className="flex items-center">
                      <div className="w-4 h-0.5 border-t-2 border-dotted border-slate-400 mr-1.5"></div>
                      <span>Agendado</span>
                   </div>
                   <div className="flex items-center">
                      <div className="w-4 h-0.5 border-t-2 border-dashed border-red-500 mr-1.5"></div>
                      <span>Previsão IA</span>
                   </div>
                </div>

                {/* Insight Box */}
                <div className="bg-red-50 border border-red-100 rounded-xl p-3 flex items-start space-x-3 mt-4">
                   <div className="bg-white p-1.5 rounded-full shadow-sm text-red-500 mt-0.5 shrink-0">
                      <Telescope size={16} />
                   </div>
                   <div>
                      <h5 className="text-xs font-bold text-red-700">Alerta de Caixa Futuro</h5>
                      <p className="text-xs text-red-600 leading-snug mt-0.5">
                         Projeção indica saldo negativo a partir do dia 25. 
                         <span className="font-semibold"> Motivo:</span> Compra parcelada + Baixa nas agendas confirmadas.
                      </p>
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
              A maioria dos sistemas só te mostra o que já aconteceu. O <span className="font-bold text-brand-600">No Prumo</span> avisa hoje se o caixa vai fechar no vermelho mês que vem, considerando seus gastos fixos e sua agenda futura.
            </p>
          </div>
        </div>

        {/* Feature 2: Agenda */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-4">
              Agenda Integrada
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Agendou, faturou.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Gerencie seus clientes no mesmo lugar. Finalizou o atendimento? O sistema já pergunta como foi o pagamento e lança no financeiro na hora. Tudo conectado.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center w-full">
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md mx-auto lg:mx-0">
                <div className="flex justify-between items-center mb-4 pb-4 border-b w-full">
                   <h4 className="font-bold text-gray-800">Agenda de Hoje</h4>
                   <CalendarCheck className="text-brand-500" />
                </div>
                <div className="space-y-3 w-full">
                   <div className="flex items-center p-3 bg-gray-50 rounded border-l-4 border-green-500 w-full">
                      <div className="flex-1">
                         <p className="font-bold text-gray-800">Corte + Barba</p>
                         <p className="text-sm text-gray-500">João Silva • 14:00</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">Pago</span>
                   </div>
                   <div className="flex items-center p-3 bg-white border border-gray-100 rounded shadow-sm opacity-50 w-full">
                      <div className="flex-1">
                         <p className="font-bold text-gray-800">Hidratação</p>
                         <p className="text-sm text-gray-500">Maria Oliveira • 15:30</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Feature: Open Banking / Conexão Bancária */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24">
           <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center w-full">
              <div className="bg-slate-50 p-6 rounded-2xl shadow-xl border border-slate-200 w-full max-w-md mx-auto lg:mx-0 relative overflow-hidden">
                 {/* Card Header */}
                 <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-slate-900 flex items-center">
                       <Landmark className="mr-2 text-slate-600" size={20} />
                       Contas Conectadas
                    </h4>
                    <div className="flex items-center text-[10px] text-green-600 font-bold bg-green-50 px-2 py-1 rounded border border-green-100">
                       <ShieldCheck size={12} className="mr-1" />
                       Ambiente Seguro
                    </div>
                 </div>

                 {/* Banks List */}
                 <div className="space-y-3 relative z-10">
                    {/* Nu */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between group">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#820AD1] text-white flex items-center justify-center font-bold text-xs">Nu</div>
                          <div>
                             <p className="text-sm font-bold text-slate-900">Nubank PJ</p>
                             <p className="text-[10px] text-green-600 flex items-center">
                                <RefreshCw size={10} className="mr-1 animate-spin" style={{ animationDuration: '3s' }} /> Sincronizando...
                             </p>
                          </div>
                       </div>
                       <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>

                    {/* Inter */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#FF7A00] text-white flex items-center justify-center font-bold text-xs">In</div>
                          <div>
                             <p className="text-sm font-bold text-slate-900">Inter Empresas</p>
                             <p className="text-[10px] text-slate-400 flex items-center">
                                <Check size={10} className="mr-1" /> Atualizado há 5min
                             </p>
                          </div>
                       </div>
                       <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>

                    {/* Itaú */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between opacity-60">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#EC7000] text-white flex items-center justify-center font-bold text-xs">It</div>
                          <div>
                             <p className="text-sm font-bold text-slate-900">Itaú</p>
                             <p className="text-[10px] text-slate-400">Desconectado</p>
                          </div>
                       </div>
                       <button className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded hover:bg-brand-100 transition-colors">
                          Conectar
                       </button>
                    </div>
                 </div>

                 {/* Magic Notification (STANDARDIZED STYLE) */}
                 <div className="mt-6 bg-indigo-50 border border-indigo-100 rounded-xl p-3 flex items-start space-x-3 relative animate-in slide-in-from-bottom-2 duration-700">
                    <div className="bg-white p-1.5 rounded-full shadow-sm text-indigo-600 shrink-0 mt-0.5">
                       <Sparkles size={16} />
                    </div>
                    <div>
                       <h5 className="text-xs font-bold text-indigo-800 mb-0.5 uppercase tracking-wide">Inteligência Artificial</h5>
                       <p className="text-xs text-indigo-700 leading-snug">
                          Encontrei <strong>3 gastos no Nubank</strong> que você esqueceu de lançar hoje. Já categorizei como "Alimentação". Posso confirmar?
                       </p>
                    </div>
                 </div>

              </div>
           </div>
           <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold mb-4">
                 <Link size={14} className="mr-1.5" />
                 Open Banking Automático
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Esqueceu de lançar? O banco avisa.</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 Conecte suas contas bancárias de forma 100% segura (Open Finance). O sistema varre seu extrato diariamente e a IA identifica qualquer gasto que você esqueceu de mandar no WhatsApp, garantindo que seu caixa bata até o último centavo.
              </p>
           </div>
        </div>

        {/* Feature 3: Budget Management */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-end w-full">
             <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden w-full max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col gap-6">
                  
                  {/* Top: The Control */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 w-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <PieChart size={16} className="text-amber-500" />
                        <span className="text-xs font-bold text-gray-700 uppercase">Marketing</span>
                      </div>
                      <span className="text-xs font-bold text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded">85%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div className="bg-amber-500 h-3 rounded-full w-[85%] relative">
                         <div className="absolute top-0 right-0 w-1 h-full bg-white opacity-50 animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-gray-800">R$ 850,00</span>
                      <span className="text-gray-400">de R$ 1.000</span>
                    </div>
                  </div>

                  {/* Bottom: The Alert */}
                  <div className="relative w-full">
                    {/* Vertical Connector Line */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[2px] h-4 border-l-2 border-dashed border-gray-300"></div>
                    
                    <div className="bg-[#efeae2] p-3 rounded-lg border border-gray-200 shadow-inner w-full">
                      <div className="bg-white rounded-lg p-2.5 shadow-sm text-xs border-l-4 border-amber-500 relative">
                        <div className="absolute top-3 -left-[5px] w-2 h-2 bg-amber-500 rotate-45"></div>
                        
                        <div className="font-bold text-amber-600 flex items-center mb-1">
                          <AlertTriangle size={10} className="mr-1" />
                          Atenção
                        </div>
                        <p className="text-gray-700 leading-snug">
                          Você atingiu <strong>85%</strong> do seu limite de Marketing. Restam <strong>R$ 150,00</strong> para o mês.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-4">
              Gestão de Orçamentos
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Defina suas metas. O No Prumo cuida do resto.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Pare de se assustar com a fatura no fim do mês. Crie tetos de gastos para categorias (como 'Insumos' ou 'Lazer') e receba alertas no WhatsApp antes de estourar o orçamento.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-lg text-brand-600 mt-0.5">
                  <Target size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900">Metas Mensais</h4>
                  <p className="text-sm text-slate-600">Diga quanto quer lucrar e o sistema calcula quanto você pode gastar.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-lg text-amber-600 mt-0.5">
                  <AlertTriangle size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900">Alertas em Tempo Real</h4>
                  <p className="text-sm text-slate-600">O sistema puxa sua orelha (com educação) quando você gasta demais.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg text-green-600 mt-0.5">
                  <Scissors size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900">Economia Inteligente</h4>
                  <p className="text-sm text-slate-600">Identifique gargalos e corte custos onde realmente importa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: Fricção Zero (Updated with Card Style) */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:w-1/2 order-1 lg:order-1 flex justify-center lg:justify-start">
            <div className="max-w-md">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold mb-4">
                  Fricção Zero
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Acesso Rápido e Blindado</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Funciona onde você já está: no WhatsApp. Registre gastos instantaneamente sem barreiras. Para consultar dados sensíveis, utilizamos autenticação segura via Links Mágicos. Sem senhas para decorar, mas com total proteção.
                </p>
            </div>
          </div>
          <div className="lg:w-1/2 order-2 lg:order-2 flex justify-center w-full">
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md relative overflow-hidden group mx-auto lg:mx-0">
                 {/* Card Header */}
                 <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 relative z-10 w-full">
                    <h4 className="font-bold text-gray-800 flex items-center">
                        <ShieldCheck className="text-yellow-500 mr-2" size={20} />
                        Segurança de Dados
                    </h4>
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold flex items-center">
                        <Lock size={10} className="mr-1" />
                        Protegido
                    </div>
                 </div>

                 {/* Security Items */}
                 <div className="space-y-4 relative z-10 w-full">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:border-yellow-200 transition-colors w-full">
                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-yellow-500 mr-3 shrink-0">
                            <KeyRound size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm">Login sem Senha</p>
                            <p className="text-xs text-gray-500">Autenticação via Magic Link</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:border-yellow-200 transition-colors delay-75 w-full">
                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-500 mr-3 shrink-0">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm">Criptografia Militar</p>
                            <p className="text-xs text-gray-500">Seus dados blindados ponta-a-ponta</p>
                        </div>
                    </div>
                 </div>

                 {/* Decorative background glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400 blur-[80px] opacity-10 pointer-events-none"></div>
             </div>
          </div>
        </div>

        {/* Feature 5: Visão Raio-X (Caixa vs Competência) - CUSTOM CHART */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-end w-full">
             <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md mx-auto lg:mx-0">
                {/* Header */}
                <div className="flex justify-between items-end mb-5 border-b border-gray-100 pb-3">
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">DRE vs Fluxo de Caixa</h4>
                        <p className="text-xs text-gray-500">Outubro 2025</p>
                    </div>
                    <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide">
                        Análise Mensal
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Group 1: Competência */}
                    <div className="relative">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Competência (Vendas Realizadas)</p>
                        <div className="space-y-2">
                            {/* Receita */}
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="text-gray-600 font-medium">Receita</span>
                                    <span className="font-bold text-gray-900">R$ 15.000</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full w-[100%]"></div>
                                </div>
                            </div>

                            {/* Despesa */}
                            <div className="mt-2">
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="text-gray-600 font-medium">Despesa</span>
                                    <span className="font-bold text-gray-900">- R$ 10.000</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-red-400 h-2 rounded-full w-[66%]"></div>
                                </div>
                            </div>

                            {/* Resultado */}
                            <div className="mt-2">
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="font-bold text-gray-800">Lucro Operacional</span>
                                    <span className="font-bold text-green-600">+ R$ 5.000</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full w-[33%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Group 2: Caixa */}
                    <div className="relative pt-2 border-t border-dashed border-gray-200">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-2">Caixa (Dinheiro na Mão)</p>
                        <div className="space-y-2">
                             {/* Entradas */}
                            <div>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="text-gray-600 font-medium">Entradas</span>
                                    <span className="font-bold text-gray-900">R$ 8.000</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-blue-400 h-2 rounded-full w-[53%] opacity-60"></div>
                                </div>
                            </div>

                            {/* Saídas */}
                            <div className="mt-2">
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="text-gray-600 font-medium">Saídas</span>
                                    <span className="font-bold text-gray-900">- R$ 10.000</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-red-400 h-2 rounded-full w-[66%]"></div>
                                </div>
                            </div>

                            {/* Saldo */}
                            <div className="mt-2">
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="font-bold text-gray-800">Saldo Final</span>
                                    <span className="font-bold text-red-600">- R$ 2.000</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2 relative">
                                     {/* Simple visual representation of negative balance */}
                                     <div className="bg-red-600 h-2 rounded-full w-[15%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Insight */}
                <div className="mt-6 bg-purple-50 border border-purple-100 rounded-xl p-3 relative">
                    <div className="flex items-start gap-3">
                        <div className="bg-white p-1.5 rounded-full shadow-sm text-purple-600 shrink-0 mt-0.5">
                            <Sparkles size={14} />
                        </div>
                        <div>
                            <h5 className="text-[11px] font-bold text-purple-800 mb-0.5 uppercase tracking-wide">Insight do Ciclo Financeiro</h5>
                            <p className="text-[11px] text-purple-700 leading-relaxed">
                                <span className="font-bold">Alerta:</span> Você teve Lucro (Competência), mas seu Caixa está negativo.
                                <br/>
                                <span className="font-semibold mt-1 block">Dica:</span> Seus clientes estão pagando em 30 dias, mas você paga fornecedores à vista. Tente negociar prazo ou antecipar recebíveis.
                            </p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold mb-4">
               <Glasses size={14} className="mr-1.5" />
               Visão Raio-X Contábil
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Saiba a diferença entre ter lucro e ter dinheiro.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
               O sistema separa automaticamente o dia da compra (Competência) do dia do pagamento (Caixa), gerando relatórios DRE profissionais sem esforço.
            </p>
          </div>
        </div>

        {/* Feature 6: Centralizador de Contas (UPDATED: Light Theme, General Forecast, Reduced Accounts, Insights) */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:w-1/2">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold mb-4">
               <Landmark size={14} className="mr-1.5" />
               Controle Multi-Carteiras
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Todas as suas contas em um único lugar.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
               Nubank, Itaú, Caixa Físico e Cartão de Crédito. Gerencie o saldo de todas as suas contas em um único painel unificado. Pare de pular de app em app.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center w-full">
             <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md text-gray-900 mx-auto lg:mx-0">
                
                {/* Header with General Balance and Forecast */}
                <div className="mb-6">
                   <div className="flex items-center justify-between text-gray-500 text-sm font-medium cursor-pointer hover:text-gray-800 transition-colors mb-4">
                      <ChevronLeft size={16} />
                      <span className="mx-2 select-none">Outubro 2025</span>
                      <ChevronRight size={16} />
                   </div>
                   
                   <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                       <div className="flex justify-between items-end mb-2">
                           <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Saldo Hoje</span>
                           <span className="text-xl font-extrabold text-gray-900">R$ 3.550,00</span>
                       </div>
                       <div className="w-full h-px bg-gray-200 my-2"></div>
                       <div className="flex justify-between items-end">
                           <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Previsão (31/Out)</span>
                           <div className="text-right">
                               <span className="text-lg font-bold text-gray-700">R$ 2.750,00</span>
                               <ArrowRight className="inline-block ml-1 text-gray-400 rotate-45 transform" size={14} />
                           </div>
                       </div>
                   </div>
                </div>

                {/* Account List */}
                <div className="space-y-3">
                   {/* Nubank */}
                   <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-purple-200 transition-colors">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-[#820AD1]/10 text-[#820AD1] flex items-center justify-center font-bold text-xs shrink-0">
                            Nu
                         </div>
                         <div>
                             <p className="font-bold text-gray-800 text-sm">Nubank PJ</p>
                             <p className="text-[10px] text-gray-500 flex items-center mt-0.5">
                                Previsto: <span className="text-green-600 font-bold ml-1">R$ 2.450</span>
                             </p>
                         </div>
                      </div>
                      <span className="font-bold text-gray-900 text-sm">R$ 3.200</span>
                   </div>

                   {/* Caixinha (Warning) */}
                   <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-red-100 shadow-sm hover:border-red-200 transition-colors relative overflow-hidden">
                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400"></div>
                      <div className="flex items-center gap-3 pl-2">
                         <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                            <Wallet size={16} />
                         </div>
                         <div>
                             <p className="font-bold text-gray-800 text-sm">Caixinha</p>
                             <p className="text-[10px] text-gray-500 flex items-center mt-0.5">
                                Previsto: <span className="text-red-600 font-bold ml-1">- R$ 450</span>
                             </p>
                         </div>
                      </div>
                      <span className="font-bold text-gray-900 text-sm">R$ 350</span>
                   </div>
                </div>

                {/* Easy Insights (Layperson Friendly) */}
                <div className="mt-6 space-y-3">
                    {/* Note 1: Unassigned Funds */}
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 flex gap-3 items-start">
                        <Info size={16} className="text-blue-500 shrink-0 mt-0.5" />
                        <div className="text-xs text-blue-800">
                            <span className="font-bold block mb-1">Nota: Dinheiro "Solto"</span>
                            Existem lançamentos previstos de <span className="font-bold">R$ 750,00</span> (receitas e despesas futuras) que ainda não foram atribuídos a nenhuma conta específica.
                        </div>
                    </div>

                    {/* Note 2: Negative Balance Warning */}
                    <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 flex gap-3 items-start">
                        <AlertTriangle size={16} className="text-orange-500 shrink-0 mt-0.5" />
                        <div className="text-xs text-orange-800">
                            <span className="font-bold block mb-1">Atenção no Caixinha</span>
                            O saldo do caixinha vai ficar <span className="font-bold text-red-600">negativo</span> dia 20/Out.
                            <br/>
                            <span className="underline decoration-orange-300 mt-1 inline-block">Dica:</span> Faça uma transferência do Nubank ou pague as contas usando outro método.
                        </div>
                    </div>
                </div>

             </div>
          </div>
        </div>

        {/* Feature 7: Categorização via IA - Updated Chat */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center w-full">
             <div className="bg-[#efeae2] p-4 rounded-2xl shadow-xl border border-gray-200 w-full max-w-md relative overflow-hidden mx-auto lg:mx-0">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.08] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none h-full"></div>

                {/* Header bar simulation */}
                <div className="bg-brand-900 text-white p-2 rounded-t-xl absolute top-0 left-0 right-0 z-10 flex items-center gap-2 shadow-md">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200">
                         <div className="scale-75"><Logo variant="icon-only" size="sm" /></div>
                    </div>
                    <div>
                        <p className="text-xs font-bold leading-tight">No Prumo</p>
                        <p className="text-[10px] text-green-400 leading-tight">Online</p>
                    </div>
                </div>

                <div className="mt-12 space-y-4 relative z-0">
                    {/* User Message */}
                    <div className="flex justify-end">
                        <div className="bg-[#d9fdd3] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-xs sm:text-sm text-gray-800 relative">
                            <p>Gastei 50 de Uber em dinheiro para vir trabalhar</p>
                            <div className="flex justify-end mt-1 space-x-1 items-center">
                                <span className="text-[9px] text-gray-500">10:42</span>
                                <CheckCheck size={12} className="text-blue-500" />
                            </div>
                        </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start w-full">
                        <div className="bg-white p-0 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-sm text-gray-800 overflow-hidden w-full">
                            <div className="p-3">
                                <div className="flex items-center gap-2 mb-3 text-green-600 font-bold text-xs uppercase tracking-wide">
                                     <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckCheck size={10} strokeWidth={3} />
                                     </div>
                                     Lançamento confirmado
                                </div>
                                
                                <div className="space-y-2 text-xs">
                                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-red-100 p-1 rounded text-red-500"><TrendingDown size={14}/></div>
                                            <span className="font-semibold text-gray-700">Despesa</span>
                                        </div>
                                    </div>
                                     <div className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-blue-100 p-1 rounded text-blue-500"><Building2 size={14}/></div>
                                            <span className="font-semibold text-gray-700">Gasto empresarial</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-orange-100 p-1 rounded text-orange-500"><Car size={14}/></div>
                                            <span className="font-semibold text-gray-700">Categoria</span>
                                        </div>
                                        <span className="font-bold text-gray-900">Transporte</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-gray-100 p-1 rounded text-gray-500"><Tags size={14}/></div>
                                            <span className="font-semibold text-gray-700">Valor</span>
                                        </div>
                                        <span className="font-bold text-gray-900">R$ 50,00</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded border border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-green-100 p-1 rounded text-green-500"><Wallet size={14}/></div>
                                            <span className="font-semibold text-gray-700">Conta</span>
                                        </div>
                                        <span className="font-bold text-gray-900">Carteira</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-brand-50 px-3 py-2 border-t border-brand-100 flex justify-between items-center">
                                <span className="text-xs text-brand-600 font-medium">Saldo Atualizado:</span>
                                <span className="text-sm font-bold text-brand-800">R$ 80,00</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-bold mb-4">
               <Sparkles size={14} className="mr-1.5" />
               Categorização Automática
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Você gasta, nós organizamos.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
               Adeus menus infinitos. Nossa Inteligência Artificial entende que 'Posto Ipiranga' é 'Transporte' e 'Madero' é 'Alimentação' automaticamente.
            </p>
          </div>
        </div>

        {/* Feature 8: Separação Pessoal vs. Empresa */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:w-1/2">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-4">
               <Scale size={14} className="mr-1.5" />
               Fim da Mistura de Contas
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">O erro nº 1 do empreendedor.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
               Pagar a conta de luz de casa com o dinheiro do caixa? Nunca mais. O sistema identifica e separa o que é Gasto Pessoal (Retirada) do que é Despesa da Empresa, revelando seu lucro real.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center w-full">
             <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md mx-auto lg:mx-0">
                <div className="flex justify-around mb-6 border-b border-gray-100 pb-4">
                   <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 mb-2">
                         <User size={24} />
                      </div>
                      <span className="text-xs font-bold text-gray-500">Pessoal</span>
                   </div>
                   <div className="w-px bg-gray-200"></div>
                   <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-2 ring-4 ring-teal-50">
                         <Building2 size={24} />
                      </div>
                      <span className="text-xs font-bold text-teal-700">Empresa</span>
                   </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 flex items-center border border-gray-200">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-yellow-500 mr-3">
                      <CreditCard size={20} />
                   </div>
                   <div className="flex-1">
                      <p className="font-bold text-gray-900 text-sm">CPFL Energia</p>
                      <p className="text-xs text-gray-500">Conta de Luz - Loja</p>
                   </div>
                   <div className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-[10px] font-bold uppercase">
                      Aprovado
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Feature 9: Leitura de Comprovantes */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-end w-full">
             <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md mx-auto lg:mx-0 relative overflow-hidden">
                {/* Scanner effect line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 animate-[scan_3s_ease-in-out_infinite]"></div>
                
                <style>{`
                  @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                  }
                `}</style>

                <div className="flex items-start gap-4 mb-4 relative z-10">
                   {/* Receipt simulation */}
                   <div className="w-24 h-32 bg-gray-50 border border-gray-200 rounded shadow-sm flex flex-col items-center p-2 shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mb-2"></div>
                      <div className="w-16 h-1 bg-gray-300 rounded mb-1"></div>
                      <div className="w-12 h-1 bg-gray-200 rounded mb-3"></div>
                      <div className="w-full space-y-1">
                        <div className="w-full h-px bg-gray-200"></div>
                        <div className="flex justify-between w-full mt-1">
                           <div className="w-8 h-1 bg-gray-300 rounded"></div>
                           <div className="w-4 h-1 bg-gray-300 rounded"></div>
                        </div>
                        <div className="flex justify-between w-full">
                           <div className="w-6 h-1 bg-gray-300 rounded"></div>
                           <div className="w-4 h-1 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                   </div>

                   {/* Extracted Data */}
                   <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 text-cyan-600 font-bold text-xs uppercase tracking-wide mb-1">
                         <ScanLine size={14} />
                         Dados Extraídos
                      </div>
                      
                      <div className="bg-cyan-50 border border-cyan-100 rounded p-2 flex justify-between items-center">
                         <div className="flex items-center gap-2">
                            <Receipt size={14} className="text-cyan-500" />
                            <span className="text-xs font-semibold text-gray-700">Valor Total</span>
                         </div>
                         <span className="text-xs font-bold text-gray-900">R$ 45,90</span>
                      </div>

                      <div className="bg-gray-50 border border-gray-100 rounded p-2 flex justify-between items-center">
                         <div className="flex items-center gap-2">
                            <FileText size={14} className="text-gray-400" />
                            <span className="text-xs font-semibold text-gray-700">Data</span>
                         </div>
                         <span className="text-xs font-bold text-gray-900">12/10/2025</span>
                      </div>

                      <div className="bg-gray-50 border border-gray-100 rounded p-2 flex justify-between items-center">
                         <div className="flex items-center gap-2">
                            <Building2 size={14} className="text-gray-400" />
                            <span className="text-xs font-semibold text-gray-700">Local</span>
                         </div>
                         <span className="text-xs font-bold text-gray-900">Restaurante Sabor</span>
                      </div>
                   </div>
                </div>

                <div className="bg-green-50 text-green-700 text-xs font-bold p-2 rounded text-center border border-green-100">
                   Lançamento Automático Realizado!
                </div>
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-4">
               <ScanLine size={14} className="mr-1.5" />
               Leitura de Comprovantes
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Esqueça a digitação.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
               Tirou foto, tá lançado. Envie fotos de notas fiscais, recibos ou PDFs. A IA lê os dados (CNPJ, Data, Valor) e lança para você em segundos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
