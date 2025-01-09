import { PrismaClient } from "@prisma/client";

// Extend the global object in TypeScript to include `prisma`
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Use a single instance of PrismaClient in development
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
