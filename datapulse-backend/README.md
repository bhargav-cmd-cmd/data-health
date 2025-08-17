# DataPulse Backend

A FastAPI-based backend service for the DataPulse application.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
```bash
# On Windows
.\venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

### Development Mode
Start the development server:
```bash
uvicorn main:app --reload
```

The API will be available at http://localhost:8000`

### Docker Mode
Build and run with Docker:
```bash
# Build the Docker image
docker build -t datapulse-backend .

# Run the container
docker run -p 8000:8000 datapulse-backend
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the server is running, you can access:
- Interactive API docs: `http://localhost:8000/docs`
- Alternative API docs: `http://localhost:8000/redoc`

## Database Setup

1. Copy the environment template:
```bash
cp env.example .env
```

2. Update the `.env` file with your database credentials:
```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_KEY=your_supabase_service_key

# PostgreSQL Database Configuration
DB_HOST=localhost
DB_NAME=datapulse
DB_USER=postgres
DB_PASS=your_password
DB_PORT=5432
```

## Endpoints

- `GET /` - Health check endpoint
- `GET /health` - Health check with database status
- `GET /data/{table}` - Get data from a specific table
- `POST /data/{table}` - Insert data into a specific table
- `GET /query?query=SQL_QUERY` - Execute custom SQL queries
