
import React, { useState, useRef, useEffect } from 'react';
import { X, CheckCircle, Loader2, ShieldCheck, ChevronDown, Search, AlertCircle, Crown, Sparkles, Rocket, Gift, Gem, Star, Zap } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  planOfInterest?: string;
}

// Lista filtrada focada em quem vende tempo/agendamento
const SERVICES_LIST = [
  "Barbearia", "Salão de Beleza", "Manicure/Pedicure", "Estética Facial/Corporal", 
  "Design de Sobrancelhas/Cílios", "Maquiagem", "Tatuagem/Piercing",
  "Banho e Tosa", "Adestramento", "Veterinária",
  "Lava Rápido", "Estética Automotiva",
  "Odontologia/Dentista", "Fisioterapia", "Psicologia", "Psiquiatria", "Dermatologia", "Nutrição", "Personal Trainer",
  "Outros"
];

export const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose, planOfInterest = 'Geral' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    activity: ''
  });
  
  // Estratégia de Marketing: Default selecionado é a oferta para gerar viés de ancoragem
  const [offerType, setOfferType] = useState<'waitlist' | 'founder'>('founder');

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  
  // States for Activity Dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputActivityRef = useRef<HTMLInputElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Safe access to recaptcha key
  const recaptchaKey = (() => {
    try { return (import.meta as any).env?.VITE_RECAPTCHA_SITE_KEY || ''; } catch { return ''; }
  })();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  // Função para formatar telefone (99) 99999-9999
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const truncated = numbers.slice(0, 11);
    if (truncated.length <= 2) return truncated;
    if (truncated.length <= 7) return `(${truncated.slice(0, 2)}) ${truncated.slice(2)}`;
    return `(${truncated.slice(0, 2)}) ${truncated.slice(2, 7)}-${truncated.slice(7)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (e.target.name === 'phone') {
      value = formatPhoneNumber(value);
    }
    setFormData({ ...formData, [e.target.name]: value });
    if (errorMessage) setErrorMessage('');
  };

  const handleActivitySelect = (activity: string) => {
    setFormData({ ...formData, activity });
    setShowDropdown(false);
    if (errorMessage) setErrorMessage('');
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (errorMessage) setErrorMessage('');
  };

  // UX Mobile: Prevent keyboard on arrow click
  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevents focus on input
    setShowDropdown(!showDropdown);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // --- VALIDAÇÕES ---
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      setErrorMessage('Por favor, digite seu nome completo (mínimo 3 letras).');
      return;
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrorMessage('Por favor, digite um e-mail válido (ex: nome@gmail.com).');
      return;
    }

    if (!formData.phone || formData.phone.length < 14) {
      setErrorMessage('Por favor, digite um telefone válido com DDD.');
      return;
    }

    if (!formData.activity) {
      setErrorMessage('Por favor, selecione ou digite seu tipo de serviço.');
      return;
    }

    // --- MODO DEMO (Se não houver backend configurado) ---
    if (!isSupabaseConfigured || !recaptchaKey) {
      console.log('Modo Demo Ativado: Simulando envio...', { 
        ...formData, 
        offer: offerType,
        finalPlan: offerType === 'founder' ? 'Membro Fundador (1 Ano Promo + Trava)' : planOfInterest 
      });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStatus('success');
      }, 1500);
      return;
    }

    // --- MODO REAL ---
    if (!captchaToken) {
      setErrorMessage('Por favor, confirme que você não é um robô.');
      return;
    }

    setLoading(true);

    try {
      const finalPlanInterest = offerType === 'founder' 
        ? 'Membro Fundador (1 Ano Promo + Trava)' 
        : planOfInterest;

      // Chama a Edge Function para validar captcha e salvar
      const { data, error } = await supabase.functions.invoke('create-lead', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          activity: formData.activity,
          plan_interest: finalPlanInterest,
          captchaToken
        }
      });

      if (error) {
        throw new Error(error.message || 'Erro ao conectar com o servidor.');
      }

      setStatus('success');
    } catch (error: any) {
      console.error('Erro no envio:', error);
      setErrorMessage('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  // Filter services logic
  const filteredServices = SERVICES_LIST.filter(service => 
    service.toLowerCase().includes(formData.activity.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[95vh] border border-white/10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white z-30 p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={24} />
        </button>

        {status === 'success' ? (
          <div className="p-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300 bg-white h-full justify-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 relative">
              <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-25"></div>
              <CheckCircle size={48} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Sua Vaga está Reservada!</h3>
            <p className="text-slate-600 mb-8 max-w-xs mx-auto">
              Parabéns, <strong>{formData.name.split(' ')[0]}</strong>! <br/>
              Você garantiu sua prioridade na lista. Em breve nossa equipe entrará em contato via WhatsApp para liberar seu acesso.
            </p>
            
            {offerType === 'founder' && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 p-5 rounded-2xl text-yellow-900 text-sm mb-8 w-full max-w-xs shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 blur-[40px] opacity-20"></div>
                 <p className="font-bold flex items-center justify-center gap-2 mb-2 text-yellow-800 uppercase tracking-wide text-xs">
                   <Crown size={14} /> Status Confirmado
                 </p>
                 <p className="font-medium text-lg">Membro Fundador</p>
                 <p className="text-yellow-700 mt-1 font-bold">R$ 99 (1º Ano) + Trava de Preço</p>
              </div>
            )}
            
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
            >
              Entendido
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-full overflow-y-auto custom-scrollbar bg-slate-50">
            
            {/* Header Marketing Section */}
            <div className="bg-slate-900 pt-8 pb-12 px-6 sm:px-8 relative overflow-hidden shrink-0 text-center">
               {/* Decorative background */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-800 via-slate-900 to-slate-900 opacity-50"></div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600 rounded-full blur-[80px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="relative z-10">
                 <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-200 text-[10px] font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
                    <Sparkles size={12} className="text-yellow-400" />
                    Convite Exclusivo Beta
                 </div>
                 <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                   Pare de perder dinheiro <br/> com gestão amadora.
                 </h2>
               </div>
            </div>

            {/* Content Section with Card Overlap */}
            <div className="px-4 sm:px-6 -mt-8 pb-6 relative z-20 flex-grow">
              
              {/* FOUNDER OFFER CARD - THE GOLDEN TICKET */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-yellow-400/30 relative mb-5 ring-4 ring-black/5">
                 {/* Ribbon */}
                 <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-xl shadow-sm uppercase tracking-wide flex items-center">
                       <Zap size={10} className="mr-1 fill-white" />
                       83% OFF (1º Ano)
                    </div>
                 </div>

                 <label className={`block cursor-pointer transition-all ${offerType === 'founder' ? 'bg-yellow-50/50' : 'bg-white hover:bg-gray-50'}`}>
                    <div className="p-5">
                       <div className="flex items-start gap-4">
                          <div className="relative flex items-center justify-center mt-1">
                             <input 
                               type="radio" 
                               name="offer_type" 
                               checked={offerType === 'founder'}
                               onChange={() => setOfferType('founder')}
                               className="w-6 h-6 text-brand-600 border-gray-300 focus:ring-brand-500 transition-all"
                             />
                          </div>
                          <div className="flex-1">
                             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                <span className="text-slate-900 font-extrabold text-lg flex items-center gap-2">
                                   <Crown size={18} className="text-yellow-500 fill-yellow-500" />
                                   Membro Fundador
                                </span>
                                <div className="flex items-center gap-2">
                                   <span className="text-xs text-gray-400 line-through font-medium">R$ 588</span>
                                   <span className="text-xl font-black text-brand-600">R$ 99</span>
                                </div>
                             </div>
                             
                             <p className="text-xs text-gray-500 mb-3">
                                Adesão promocional pelo <strong className="text-gray-800">1º Ano de Acesso Pro</strong>.
                                <span className="block text-brand-600 font-bold mt-0.5">Renovação garantida por R$ 588/ano (Sem aumentos).</span>
                             </p>

                             {/* Bonuses Stacking */}
                             <div className={`space-y-2 overflow-hidden transition-all duration-300 ${offerType === 'founder' ? 'max-h-40 opacity-100 mt-3 pt-3 border-t border-yellow-200/50' : 'max-h-0 opacity-0'}`}>
                                <p className="text-[10px] font-bold text-yellow-700 uppercase tracking-wide mb-1">Bônus Inclusos Agora:</p>
                                <ul className="space-y-1.5">
                                   <li className="flex items-center text-xs text-slate-700">
                                      <Gem size={12} className="text-purple-500 mr-2 shrink-0" />
                                      <span>Onboarding VIP (Configuramos para você)</span>
                                   </li>
                                   <li className="flex items-center text-xs text-slate-700">
                                      <ShieldCheck size={12} className="text-green-500 mr-2 shrink-0" />
                                      <span>Trava de Preço Vitalícia na renovação</span>
                                   </li>
                                   <li className="flex items-center text-xs text-slate-700">
                                      <Star size={12} className="text-orange-500 mr-2 shrink-0" />
                                      <span>Prioridade total em novas funcionalidades</span>
                                   </li>
                                </ul>
                             </div>
                          </div>
                       </div>
                    </div>
                 </label>
              </div>

              {/* STANDARD OPTION - THE "BORING" ONE */}
              <label className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:border-gray-300 transition-colors mb-8 opacity-80 hover:opacity-100">
                 <input 
                   type="radio" 
                   name="offer_type" 
                   checked={offerType === 'waitlist'}
                   onChange={() => setOfferType('waitlist')}
                   className="w-5 h-5 text-gray-400 border-gray-300 focus:ring-gray-400"
                 />
                 <div>
                    <span className="text-slate-700 font-bold text-sm block">Não quero a oferta agora</span>
                    <span className="text-xs text-gray-500">Apenas entrar na lista de espera (sem bônus)</span>
                 </div>
              </label>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 ml-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white text-slate-900 placeholder-gray-400 transition-all font-medium"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 ml-1">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white text-slate-900 placeholder-gray-400 transition-all font-medium"
                        placeholder="(99) 99999-9999"
                        maxLength={15}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 ml-1">
                        E-mail Profissional
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white text-slate-900 placeholder-gray-400 transition-all font-medium"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                </div>

                <div className="relative" ref={dropdownRef}>
                  <label htmlFor="activity" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5 ml-1">
                    Ramo de Atividade
                  </label>
                  <div className="relative">
                    <input
                      ref={inputActivityRef}
                      type="text"
                      id="activity"
                      name="activity"
                      value={formData.activity}
                      onChange={(e) => {
                        handleChange(e);
                        setShowDropdown(true);
                      }}
                      onFocus={() => setShowDropdown(true)}
                      className="w-full px-4 py-3 pr-14 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-white text-slate-900 placeholder-gray-400 transition-all font-medium"
                      placeholder="Ex: Barbearia, Dentista..."
                      autoComplete="off"
                      required
                    />
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-14 flex items-center justify-center cursor-pointer text-gray-400 hover:text-brand-600"
                      onMouseDown={handleToggleDropdown}
                    >
                      {showDropdown ? <ChevronDown size={20} className="rotate-180 transition-transform" /> : <Search size={20} />}
                    </div>
                  </div>

                  {showDropdown && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-52 overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-top-2">
                      {filteredServices.length > 0 ? (
                        filteredServices.map((service, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleActivitySelect(service)}
                            className="w-full text-left px-4 py-3 hover:bg-brand-50 text-slate-700 text-sm border-b border-gray-50 last:border-none transition-colors font-medium"
                          >
                            {service}
                          </button>
                        ))
                      ) : (
                        <div className="p-3">
                           <p className="text-xs text-gray-500 px-2 mb-2">Serviço não encontrado na lista?</p>
                           <button
                            type="button"
                            onClick={() => handleActivitySelect("Outros")}
                            className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded text-brand-600 text-sm font-medium transition-colors border border-gray-200"
                           >
                            Selecionar "Outros"
                           </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {errorMessage && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-start gap-2 animate-in slide-in-from-top-1">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <p className="font-medium">{errorMessage}</p>
                  </div>
                )}

                {recaptchaKey && (
                  <div className="flex justify-center pt-2 scale-90 origin-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={recaptchaKey}
                      onChange={handleCaptchaChange}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2 text-white font-bold text-lg ${
                    offerType === 'founder' 
                      ? 'bg-gradient-to-r from-brand-600 to-indigo-600 shadow-brand-500/30' 
                      : 'bg-slate-800 shadow-slate-800/20'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      {offerType === 'founder' ? 'GARANTIR MINHA VAGA' : 'Entrar na Lista de Espera'}
                      {!loading && <Rocket size={20} />}
                    </>
                  )}
                </button>
                
                {offerType === 'founder' && (
                    <p className="text-center text-xs text-gray-500 mt-2 font-medium">
                        * Garantia de 7 dias incondicional após o lançamento.
                    </p>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
