import { createClient } from '@supabase/supabase-js';

// Função segura para ler variáveis de ambiente sem quebrar o build
const getEnv = (key: string) => {
  try {
    // @ts-ignore
    return import.meta.env?.[key] || '';
  } catch (e) {
    return '';
  }
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY');

// Verifica se as configurações reais existem
export const isSupabaseConfigured = !!supabaseUrl && !!supabaseAnonKey && supabaseUrl !== 'undefined';

// Se não houver configuração, cria um cliente dummy para não quebrar a aplicação na inicialização.
// A lógica nos componentes deve checar `isSupabaseConfigured` antes de tentar usar o `supabase`.
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder'); // Dummy values to prevent crash