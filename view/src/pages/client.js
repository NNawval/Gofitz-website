import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://rrdwyabynnlseyxhwqqx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyZHd5YWJ5bm5sc2V5eGh3cXF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMjM2ODUsImV4cCI6MjAxNTY5OTY4NX0.yWJaSdDvKABNHJCn6lZEenp4ld-I_S0ysu_VyEpcHGs'
export const supabase = createClient(supabaseUrl, supabaseKey)