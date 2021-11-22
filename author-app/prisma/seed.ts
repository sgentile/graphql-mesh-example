import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.author.deleteMany({});
    const user1 = await prisma.author.create({
        data: {
            id: 1,
            name: 'Alice',
        },
    });
    const user2 = await prisma.author.create({
        data: {
            id: 2,
            name: 'Bob',
        },
    });

    console.log({ user1, user2 });
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
