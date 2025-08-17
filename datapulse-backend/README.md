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

The API will be available at `http://localhost:8000`

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

## Endpoints

- `GET /` - Health check endpoint
