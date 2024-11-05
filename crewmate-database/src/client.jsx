
import { createClient } from '@supabase/supabase-js';

const URL = 'https://jeeqtzvmdzneblnvbyyj.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplZXF0enZtZHpuZWJsbnZieXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNTAxNDcsImV4cCI6MjA0NTgyNjE0N30.-0f6TCvbM9Ec3z2ptHd7D40U3KqsUlof38MIe1dl4Q0';

export const supabase = createClient(URL, API_KEY);