import { createClient } from '@supabase/supabase-js';

// Usa variáveis de ambiente se disponíveis, ou chaves diretas como fallback para garantir funcionamento
const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL ||;
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY ||;
// Exporta verificação simples (será sempre true com os fallbacks)
export const isSupabaseConfigured = !!supabaseUrl && !!supabaseAnonKey;

// Cria o cliente Supabase diretamente
export const supabase = createClient(supabaseUrl, supabaseAnonKey);