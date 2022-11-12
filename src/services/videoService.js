import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://unldybyiimesejqozxnj.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVubGR5YnlpaW1lc2VqcW96eG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTYzMzMsImV4cCI6MTk4Mzc3MjMzM30.WRYK2xJDT6srAlaGLi71UpKktN-NclWnmJz7655lRJQ"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}