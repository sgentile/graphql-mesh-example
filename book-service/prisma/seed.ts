import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.book.deleteMany({});
    const user1 = await prisma.book.create({
        data: {
            id: 1,
            name: 'A Tale of Two Cities',
            authorId: 1,
        },
    });
    const user2 = await prisma.book.create({
        data: {
            id: 2,
            name: 'The Lord of the Ringss',
            authorId: 2,
        },
    });

    console.log({ user1, user2 });
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
