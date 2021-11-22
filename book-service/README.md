# Typegraphql Prisma API

This template is for creating an Apollo server typegraphql project that use prisma. In addition, this template utilizes the 'prisma.typegraphql' generator.

## Typegraphql

https://typegraphql.com/

## Prisma.Typegraphql

https://prisma.typegraphql.com/

Out of the box it will generate everything, to exclude or pick what you want to expose, or to extend types - check out the examples: https://prisma.typegraphql.com/docs/examples

## Apollo Server

https://www.apollographql.com/

## Installation

```
npm run install
```

### Local development

The setup by default is to configure the prisma schema. After configuration of the prisma schema, it include the generator to create the graphql resolvers and schemas. Those schemas are then read into Apollo server for hosting.

Any modification to the schema require a migration to be created.

```
npm run migrate
```

Additionally the 'prisma generate' is required

The package json make this easy to run with the run dev command:

```
npm run dev
```

This will invoke the 'predev' which generates the prisma, then starts the node server.

Reference the commands in the package.json scripts for more details
