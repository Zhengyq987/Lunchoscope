import { PrismaClient } from '@prisma/client';
import { Account, User as AuthUser } from 'next-auth';


const prisma = new PrismaClient();

export default async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    return null;
  }
}

