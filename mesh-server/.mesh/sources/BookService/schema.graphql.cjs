const { buildSchema, Source } = require('graphql');

const source = new Source(/* GraphQL */`
schema {
  query: Query
  mutation: Mutation
}

type Query {
  book(where: BookWhereUniqueInput!): Book
  findFirstBook(where: BookWhereInput, orderBy: [BookOrderByWithRelationInput!], cursor: BookWhereUniqueInput, take: Int, skip: Int, distinct: [BookScalarFieldEnum!]): Book
  books(where: BookWhereInput, orderBy: [BookOrderByWithRelationInput!], cursor: BookWhereUniqueInput, take: Int, skip: Int, distinct: [BookScalarFieldEnum!]): [Book!]!
  aggregateBook(where: BookWhereInput, orderBy: [BookOrderByWithRelationInput!], cursor: BookWhereUniqueInput, take: Int, skip: Int): AggregateBook!
  groupByBook(where: BookWhereInput, orderBy: [BookOrderByWithAggregationInput!], by: [BookScalarFieldEnum!]!, having: BookScalarWhereWithAggregatesInput, take: Int, skip: Int): [BookGroupBy!]!
}

type Book {
  id: Int!
  name: String
  authorId: Int!
}

input BookWhereUniqueInput {
  id: Int
}

input BookWhereInput {
  AND: [BookWhereInput!]
  OR: [BookWhereInput!]
  NOT: [BookWhereInput!]
  id: IntFilter
  name: StringNullableFilter
  authorId: IntFilter
}

input IntFilter {
  equals: Int
  in: [Int!]
  notIn: [Int!]
  lt: Int
  lte: Int
  gt: Int
  gte: Int
  not: NestedIntFilter
}

input NestedIntFilter {
  equals: Int
  in: [Int!]
  notIn: [Int!]
  lt: Int
  lte: Int
  gt: Int
  gte: Int
  not: NestedIntFilter
}

input StringNullableFilter {
  equals: String
  in: [String!]
  notIn: [String!]
  lt: String
  lte: String
  gt: String
  gte: String
  contains: String
  startsWith: String
  endsWith: String
  not: NestedStringNullableFilter
}

input NestedStringNullableFilter {
  equals: String
  in: [String!]
  notIn: [String!]
  lt: String
  lte: String
  gt: String
  gte: String
  contains: String
  startsWith: String
  endsWith: String
  not: NestedStringNullableFilter
}

input BookOrderByWithRelationInput {
  id: SortOrder
  name: SortOrder
  authorId: SortOrder
}

enum SortOrder {
  asc
  desc
}

enum BookScalarFieldEnum {
  id
  name
  authorId
}

type AggregateBook {
  _count: BookCountAggregate
  _avg: BookAvgAggregate
  _sum: BookSumAggregate
  _min: BookMinAggregate
  _max: BookMaxAggregate
}

type BookCountAggregate {
  id: Int!
  name: Int!
  authorId: Int!
  _all: Int!
}

type BookAvgAggregate {
  id: Float
  authorId: Float
}

type BookSumAggregate {
  id: Int
  authorId: Int
}

type BookMinAggregate {
  id: Int
  name: String
  authorId: Int
}

type BookMaxAggregate {
  id: Int
  name: String
  authorId: Int
}

type BookGroupBy {
  id: Int!
  name: String
  authorId: Int!
  _count: BookCountAggregate
  _avg: BookAvgAggregate
  _sum: BookSumAggregate
  _min: BookMinAggregate
  _max: BookMaxAggregate
}

input BookOrderByWithAggregationInput {
  id: SortOrder
  name: SortOrder
  authorId: SortOrder
  _count: BookCountOrderByAggregateInput
  _avg: BookAvgOrderByAggregateInput
  _max: BookMaxOrderByAggregateInput
  _min: BookMinOrderByAggregateInput
  _sum: BookSumOrderByAggregateInput
}

input BookCountOrderByAggregateInput {
  id: SortOrder
  name: SortOrder
  authorId: SortOrder
}

input BookAvgOrderByAggregateInput {
  id: SortOrder
  authorId: SortOrder
}

input BookMaxOrderByAggregateInput {
  id: SortOrder
  name: SortOrder
  authorId: SortOrder
}

input BookMinOrderByAggregateInput {
  id: SortOrder
  name: SortOrder
  authorId: SortOrder
}

input BookSumOrderByAggregateInput {
  id: SortOrder
  authorId: SortOrder
}

input BookScalarWhereWithAggregatesInput {
  AND: [BookScalarWhereWithAggregatesInput!]
  OR: [BookScalarWhereWithAggregatesInput!]
  NOT: [BookScalarWhereWithAggregatesInput!]
  id: IntWithAggregatesFilter
  name: StringNullableWithAggregatesFilter
  authorId: IntWithAggregatesFilter
}

input IntWithAggregatesFilter {
  equals: Int
  in: [Int!]
  notIn: [Int!]
  lt: Int
  lte: Int
  gt: Int
  gte: Int
  not: NestedIntWithAggregatesFilter
  _count: NestedIntFilter
  _avg: NestedFloatFilter
  _sum: NestedIntFilter
  _min: NestedIntFilter
  _max: NestedIntFilter
}

input NestedIntWithAggregatesFilter {
  equals: Int
  in: [Int!]
  notIn: [Int!]
  lt: Int
  lte: Int
  gt: Int
  gte: Int
  not: NestedIntWithAggregatesFilter
  _count: NestedIntFilter
  _avg: NestedFloatFilter
  _sum: NestedIntFilter
  _min: NestedIntFilter
  _max: NestedIntFilter
}

input NestedFloatFilter {
  equals: Float
  in: [Float!]
  notIn: [Float!]
  lt: Float
  lte: Float
  gt: Float
  gte: Float
  not: NestedFloatFilter
}

input StringNullableWithAggregatesFilter {
  equals: String
  in: [String!]
  notIn: [String!]
  lt: String
  lte: String
  gt: String
  gte: String
  contains: String
  startsWith: String
  endsWith: String
  not: NestedStringNullableWithAggregatesFilter
  _count: NestedIntNullableFilter
  _min: NestedStringNullableFilter
  _max: NestedStringNullableFilter
}

input NestedStringNullableWithAggregatesFilter {
  equals: String
  in: [String!]
  notIn: [String!]
  lt: String
  lte: String
  gt: String
  gte: String
  contains: String
  startsWith: String
  endsWith: String
  not: NestedStringNullableWithAggregatesFilter
  _count: NestedIntNullableFilter
  _min: NestedStringNullableFilter
  _max: NestedStringNullableFilter
}

input NestedIntNullableFilter {
  equals: Int
  in: [Int!]
  notIn: [Int!]
  lt: Int
  lte: Int
  gt: Int
  gte: Int
  not: NestedIntNullableFilter
}

type Mutation {
  createBook(data: BookCreateInput!): Book!
  deleteBook(where: BookWhereUniqueInput!): Book
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  deleteManyBook(where: BookWhereInput): AffectedRowsOutput!
  updateManyBook(data: BookUpdateManyMutationInput!, where: BookWhereInput): AffectedRowsOutput!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
}

input BookCreateInput {
  name: String
  authorId: Int!
}

input BookUpdateInput {
  name: NullableStringFieldUpdateOperationsInput
  authorId: IntFieldUpdateOperationsInput
}

input NullableStringFieldUpdateOperationsInput {
  set: String
}

input IntFieldUpdateOperationsInput {
  set: Int
  increment: Int
  decrement: Int
  multiply: Int
  divide: Int
}

type AffectedRowsOutput {
  count: Int!
}

input BookUpdateManyMutationInput {
  name: NullableStringFieldUpdateOperationsInput
  authorId: IntFieldUpdateOperationsInput
}
`, `.mesh/sources/BookService/schema.graphql`);

module.exports = buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true
});