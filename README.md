## Example application

author-app - npm install, npm run prisma npm run dev
book-service - npm install, npm run prisma npm run dev
mesh-server - npm install, npm start

### Scenario

use graphql-mesh to combine 'books' - which stores the book as well as the authorId with 'authors' that store the authors.

Sample queries to test. The first example works, the second query fails.

```
query getAllBooksWithAuthor {
  books {
    id
    name
    author {
      id
      name
    }
  }
}
```

```
query getBookById {
  book(where: {id: 1}) {
    id
    name
    author {
      id
      name
    }
  }
}
```
