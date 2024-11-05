import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/src/prisma/prismaClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Example: Fetch meta tags
    console.log("request user>>>>>>>>>>")

    const metaTags = await prisma.meta_tags.findMany();
    
    res.status(200).json(metaTags);
  } catch (error) {
    console.error("Error fetching meta tags:", error);
    res.status(500).json({ error: "Failed to fetch meta tags" });
  }
}