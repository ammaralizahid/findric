// lib/db.ts
import { Client, QueryResult, QueryResultRow } from 'pg';

// PostgreSQL Client using the DATABASE_URL environment variable
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false },
});

export interface MetaTag {
  id: number;
  title: string;
  description: string;
  keywords: string;
}

// Query function that returns a typed result
export async function query<T extends QueryResultRow>(text: string, params?: (string | number | boolean)[]): Promise<QueryResult<T>> {
  try {
    await client.connect();
    const result = await client.query<T>(text, params);
    return result;
  } catch (err: unknown) {  // Type error to 'unknown'
    // Narrow the type of `err` to an actual `Error` object
    if (err instanceof Error) {
      console.error('Database query error:', err.message);
      throw err;
    } else {
      // Handle unexpected error types
      console.error('An unknown error occurred:', err);
      throw new Error('An unexpected error occurred');
    }
  } finally {
    await client.end();
  }
}
