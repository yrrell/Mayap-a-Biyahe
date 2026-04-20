import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_rL7JXIadaSLfj3lHRBHSig_NHoHJOs8';

export const supabase = createClient(supabaseUrl, supabaseKey);