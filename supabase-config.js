// Supabase Configuration
const SUPABASE_URL = 'https://uyltpkejlyprwrylwetj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5bHRwa2VqbHlwcndyeWx3ZXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0ODczMTUsImV4cCI6MjA5NDA2MzMxNX0.p4XY_UKMrVbjuMsFSTvQAKcSutMyW-3pvVRazRc7VQE';

// Initialize the Supabase client globally as supabaseClient
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
