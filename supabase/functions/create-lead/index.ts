import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// @ts-ignore: Deno types might not be available in all environments
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, activity, plan_interest, lot } = await req.json()

    if (!email) {
      throw new Error('Email é obrigatório.')
    }

    const supabaseClient = createClient(
      // @ts-ignore: Deno types might not be available in all environments
      Deno.env.get('SUPABASE_URL') ?? '',
      // @ts-ignore: Deno types might not be available in all environments
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 1. Inserir o Lead
    const { data, error: insertError } = await supabaseClient
      .from('leads')
      .insert([
        {
          name,
          email,
          phone,
          activity,
          plan_interest,
          lot: lot || null,
          metadata: {
            origin: 'landing_page_modal'
          }
        },
      ])
      .select()

    if (insertError) throw insertError

    // 2. Obter Posição na Fila via View SQL
    // Tenta ler da View criada 'leads_queue_position'
    let position = 0;
    
    try {
        const { data: viewData, error: viewError } = await supabaseClient
            .from('leads_queue_position')
            .select('current_position')
            .maybeSingle();

        if (!viewError && viewData) {
            position = viewData.current_position;
        } else {
            // Se a View não existir ou der erro, faz o cálculo manual (Fallback)
            throw new Error("View fallback");
        }
    } catch (err) {
        // Fallback: Contagem manual se a view falhar (agora ajustado para 100)
        const { count } = await supabaseClient
            .from('leads')
            .select('*', { count: 'exact', head: true });
        
        position = 100 + (count || 0);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      data, 
      position: position,
      debug_source: 'leads_queue_position_view'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error: any) {
    // Retorna erro formatado
    const msg = error instanceof Error ? error.message : String(error || 'Erro desconhecido');
    return new Response(JSON.stringify({ error: msg }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})