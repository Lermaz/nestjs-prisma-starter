import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  // await prisma.post.deleteMany();

  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'isaac@gmail.com',
      firstname: 'Isaac',
      lastname: 'Lerma',
      password: '$2a$12$AtjRyW.8XpkZG.dSYft/FupugNEZGFT3J.2cdtLHjoyPz.r05OIOm', // 1234
      role: 'USER',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'admin@bladmir.com',
      firstname: 'Admin',
      lastname: 'Bladmir',
      role: 'ADMIN',
      password: '$2a$12$AtjRyW.8XpkZG.dSYft/FupugNEZGFT3J.2cdtLHjoyPz.r05OIOm', // 1234
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
