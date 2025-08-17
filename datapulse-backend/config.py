import os

# Supabase Configuration
SUPABASE_URL = "https://sbxblxxuacmgsojfenqp.supabase.co"
SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNieGJseHh1YWNtZ3NvamZlbnFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTQyODc2OCwiZXhwIjoyMDcxMDA0NzY4fQ.o00B2ZUFUWLlGzYyTcWZmns_a0GvEDmqLyUw5XMD2S4"

# Set environment variables
os.environ["SUPABASE_URL"] = SUPABASE_URL
os.environ["SUPABASE_SERVICE_KEY"] = SUPABASE_SERVICE_KEY
