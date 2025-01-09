import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '@/lib/db'; // Import the query function from db.ts

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    // Use a raw SQL query to fetch the meta tags from the metaTags table
    const result = await query<{ id: number; title: string; description: string; keywords: string }>(
      'SELECT * FROM "metaTags"' // Raw SQL query to fetch all rows from the metaTags table
    );
    // Send the result as a JSON response
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching meta tags:", error);
    res.status(500).json({ error: "Failed to fetch meta tags" });
  }
}
