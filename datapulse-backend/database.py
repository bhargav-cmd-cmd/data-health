import os
from typing import List, Dict, Any
from db import get_db_conn, supabase
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class DatabaseManager:
    def __init__(self):
        self.supabase = supabase
    
    def test_connection(self) -> bool:
        """Test database connection"""
        try:
            conn = get_db_conn()
            conn.close()
            return True
        except Exception as e:
            print(f"Database connection failed: {e}")
            return False
    
    def execute_query(self, query: str, params: tuple = None) -> List[Dict[str, Any]]:
        """Execute a SQL query and return results"""
        try:
            conn = get_db_conn()
            cursor = conn.cursor()
            
            if params:
                cursor.execute(query, params)
            else:
                cursor.execute(query)
            
            if query.strip().upper().startswith('SELECT'):
                columns = [desc[0] for desc in cursor.description]
                results = [dict(zip(columns, row)) for row in cursor.fetchall()]
            else:
                conn.commit()
                results = [{"affected_rows": cursor.rowcount}]
            
            cursor.close()
            conn.close()
            return results
        except Exception as e:
            print(f"Query execution failed: {e}")
            return []
    
    def insert_data(self, table: str, data: Dict[str, Any]) -> bool:
        """Insert data into a table"""
        try:
            result = self.supabase.table(table).insert(data).execute()
            return True
        except Exception as e:
            print(f"Insert failed: {e}")
            return False
    
    def get_data(self, table: str, filters: Dict[str, Any] = None) -> List[Dict[str, Any]]:
        """Get data from a table with optional filters"""
        try:
            query = self.supabase.table(table).select("*")
            
            if filters:
                for key, value in filters.items():
                    query = query.eq(key, value)
            
            result = query.execute()
            return result.data
        except Exception as e:
            print(f"Get data failed: {e}")
            return []
    
    def update_data(self, table: str, data: Dict[str, Any], filters: Dict[str, Any]) -> bool:
        """Update data in a table"""
        try:
            query = self.supabase.table(table).update(data)
            
            for key, value in filters.items():
                query = query.eq(key, value)
            
            result = query.execute()
            return True
        except Exception as e:
            print(f"Update failed: {e}")
            return False
    
    def delete_data(self, table: str, filters: Dict[str, Any]) -> bool:
        """Delete data from a table"""
        try:
            query = self.supabase.table(table).delete()
            
            for key, value in filters.items():
                query = query.eq(key, value)
            
            result = query.execute()
            return True
        except Exception as e:
            print(f"Delete failed: {e}")
            return False

# Create a global instance
db_manager = DatabaseManager()
