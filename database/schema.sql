
-- 1. Main Documents Table
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id VARCHAR(255) UNIQUE NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    content_vector vector(1536),
    document_type VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Analysis Results
CREATE TABLE document_analyses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
    summary TEXT,
    key_entities JSONB,
    risk_score FLOAT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Entities Graph
CREATE TABLE entities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50),
    embedding vector(1536)
);

-- 4. Audit Log
CREATE TABLE api_usage (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    api_key VARCHAR(255),
    endpoint VARCHAR(255),
    timestamp TIMESTAMPTZ DEFAULT NOW()
);
