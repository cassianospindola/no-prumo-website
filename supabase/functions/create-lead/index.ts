
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
    const { name, email, phone, activity, plan_interest, lot, captchaToken } = await req.json()

    if (!email || !captchaToken) {
      throw new Error('Email e Captcha são obrigatórios.')
    }

    // @ts-ignore: Deno types might not be available in all environments
    const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET_KEY')
    if (!recaptchaSecret) throw new Error('Erro de configuração no servidor.')

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${recaptchaSecret}&response=${captchaToken}`,
    })

    const verifyJson = await verifyRes.json()

    if (!verifyJson.success) {
      throw new Error('Falha na verificação de segurança (Captcha).')
    }

    const supabaseClient = createClient(
      // @ts-ignore: Deno types might not be available in all environments
      Deno.env.get('SUPABASE_URL') ?? '',
      // @ts-ignore: Deno types might not be available in all environments
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data, error } = await supabaseClient
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
            captcha_score: verifyJson.score,
            origin: 'landing_page_modal'
          }
        },
      ])
      .select()

    if (error) throw error

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
