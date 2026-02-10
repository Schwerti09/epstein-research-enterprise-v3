
import { serverlessQuery } from './neon-client';

export const handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

  try {
    const { page = 1, limit = 20, q = '' } = event.queryStringParameters || {};
    const offset = (page - 1) * limit;
    
    let query = `
      SELECT d.*, COUNT(*) OVER() as total_count
      FROM documents d
      WHERE 1=1
    `;
    
    const params = [];
    if (q) {
        query += ` AND (d.title ILIKE $1 OR d.content ILIKE $1)`;
        params.push(`%${q}%`);
    }
    
    query += ` LIMIT ${limit} OFFSET ${offset}`;

    const result = await serverlessQuery(query, params);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, data: result.rows || result }),
    };
  } catch (error) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
  }
};