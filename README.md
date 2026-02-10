# Epstein Research Hub v3.0 (Enterprise)

Full Microservices Architecture.

## Setup
1. **Frontend:** `cd frontend && npm install && npm run dev`
2. **AI Worker:** `cd ai-worker && pip install -r requirements.txt`
3. **Database:** Import `database/schema.sql` to Neon Console.

## Environment
Create `.env` in root:
```
DATABASE_URL=postgres://...
OPENAI_API_KEY=sk-...
```
