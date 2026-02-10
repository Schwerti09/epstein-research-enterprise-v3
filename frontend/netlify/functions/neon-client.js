
import { Pool } from 'pg';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);
let pool;

if (!global._neonPool) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  });
  global._neonPool = pool;
} else {
  pool = global._neonPool;
}

export async function queryDatabase(text, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
}

export async function serverlessQuery(text, params) {
  try {
    if (text.trim().toUpperCase().startsWith('SELECT')) {
      return await sql(text, params);
    }
    return await queryDatabase(text, params);
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}