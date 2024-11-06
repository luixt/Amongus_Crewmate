import { createClient } from '@supabase/supabase-js'

const URL = 'https://fdlzwxvfgzuzelbwwyji.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkbHp3eHZmZ3p1emVsYnd3eWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4NTkyMDgsImV4cCI6MjA0NjQzNTIwOH0.p06Tqdq62bXmHJOkTO6l8dMgNqgE_13F9Jw3xNDhKqo';
export const supabase = createClient(URL, API_KEY);