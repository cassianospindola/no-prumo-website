import { createClient } from '@supabase/supabase-js';

// We cast import.meta to any to avoid TypeScript errors if vite/client types are missing or not configured.
const env = (import.meta as any).env || {};

// Acesso seguro via optional chaining para evitar crash se import.meta.env for undefined
const supabaseUrl = env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || '';

// Verifica se as variáveis existem e não são vazias
export const isSupabaseConfigured = supabaseUrl.length > 0 && supabaseAnonKey.length > 0;

// Cria o cliente. Se não houver configuração, usa valores placeholder para não quebrar a inicialização da página.
export const supabase = createClient(
  isSupabaseConfigured ? supabaseUrl : 'https://placeholder.supabase.co',
  isSupabaseConfigured ? supabaseAnonKey : 'placeholder'
);