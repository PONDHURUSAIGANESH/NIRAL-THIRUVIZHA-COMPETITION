import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

require('dotenv').config();

console.log('Database URL:', process.env.DATABASE_URL); 
const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL } },
  });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
