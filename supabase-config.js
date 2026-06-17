// Supabase configuration
// Replace with your actual project URL and Anon Key from the Supabase dashboard (Settings -> API)
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabase = supabaseClient; // Make it globally accessible for our components
