import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { PrismaClient } from '@prisma/client';
import { resolvers } from '@generated/type-graphql';
import path from 'path';

interface Context {
    prisma: PrismaClient;
}

async function main() {
    const schema = await buildSchema({
        resolvers,
        emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
        validate: false,
    });

    const prisma = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
    });
    await prisma.$connect();

    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
        context: (): Context => ({ prisma }),
        healthCheckPath: '/api/health',
    });
    const { port } = await server.listen(process.env.APP_PORT || 4000);
    console.log(`GraphQL Server is listening on http://localhost:${port}/graphql`);
}

main().catch(console.error);
