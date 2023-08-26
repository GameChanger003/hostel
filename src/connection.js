import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
    "https://jfrtzgcmlyhlamqazwmx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcnR6Z2NtbHlobGFtcWF6d214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4MDg5MDIsImV4cCI6MjAwODM4NDkwMn0.lau7WR-NRw5EMhlo4vXyqoJoX82UqeGkBxT31CctfNg"
)