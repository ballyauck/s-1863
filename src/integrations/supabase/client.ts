// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wsvhvrgiseoiilyknsab.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzdmh2cmdpc2VvaWlseWtuc2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MTk1NjksImV4cCI6MjA1MDQ5NTU2OX0.-rZqWzXvasokdmTYYD7h7rPYENeCnAwQd-j0MSAue-A";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);