import { createClient } from '@supabase/supabase-js';

// Usa variáveis de ambiente se disponíveis, ou chaves diretas como fallback para garantir funcionamento
const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://czzghkraykyqjrrlqaiq.supabase.co';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6emdoa3JheWt5cWpycmxxYWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1Mzg3NzAsImV4cCI6MjA4MTExNDc3MH0.ktJXcCF8waWpCAPvLVTn0-0HPsI_8usdvuKwXa3EdDA';

// Exporta verificação simples (será sempre true com os fallbacks)
export const isSupabaseConfigured = !!supabaseUrl && !!supabaseAnonKey;

// Cria o cliente Supabase diretamente
export const supabase = createClient(supabaseUrl, supabaseAnonKey);