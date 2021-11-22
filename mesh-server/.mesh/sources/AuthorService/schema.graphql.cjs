const { buildSchema, Source } = require('graphql');

const source = new Source(/* GraphQL */`
schema {
  query: Query
  mutation: Mutation
}

type Query {
  author(where: AuthorWhereUniqueInput!): Author
  findFirstAuthor(where: AuthorWhereInput, orderBy: [AuthorOrderByWithRelationInput!], cursor: AuthorWhereUniqueInput, take: Int, skip: Int, distinct: [AuthorScalarFieldEnum!]): Author
  authors(where: AuthorWhereInput, orderBy: [AuthorOrderByWithRelationInput!], cursor: AuthorWhereUniqueInput, take: Int, skip: Int, distinct: [AuthorScalarFieldEnum!]): [Author!]!
  aggregateAuthor(where: AuthorWhereInput, orderBy: [AuthorOrderByWithRelationInput!], cursor: AuthorWhereUniqueInput, take: Int, skip: Int): AggregateAuthor!
  groupByAuthor(where: AuthorWhereInput, orderBy: [AuthorOrderByWithAggregationInput!], by: [AuthorScalarFieldEnum!]!, having: AuthorScalarWhereWithAggregatesInput, take: Int, skip: Int): [AuthorGroupBy!]!
}

type Author {
  id: Int!
  name: String
}

input AuthorWhereUniqueInput {
  id: Int
}

input AuthorWhereInput {
  AND: [AuthorWhereInput!]
  OR: [AuthorWhereInput!]
  NOT: [AuthorWhereInput!]
  id: IntFilter
  name: StringNullableFilter
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

input AuthorOrderByWithRelationInput {
  id: SortOrder
  name: SortOrder
}

enum SortOrder {
  asc
  desc
}

enum AuthorScalarFieldEnum {
  id
  name
}

type AggregateAuthor {
  _count: AuthorCountAggregate
  _avg: AuthorAvgAggregate
  _sum: AuthorSumAggregate
  _min: AuthorMinAggregate
  _max: AuthorMaxAggregate
}

type AuthorCountAggregate {
  id: Int!
  name: Int!
  _all: Int!
}

type AuthorAvgAggregate {
  id: Float
}

type AuthorSumAggregate {
  id: Int
}

type AuthorMinAggregate {
  id: Int
  name: String
}

type AuthorMaxAggregate {
  id: Int
  name: String
}

type AuthorGroupBy {
  id: Int!
  name: String
  _count: AuthorCountAggregate
  _avg: AuthorAvgAggregate
  _sum: AuthorSumAggregate
  _min: AuthorMinAggregate
  _max: AuthorMaxAggregate
}

input AuthorOrderByWithAggregationInput {
  id: SortOrder
  name: SortOrder
  _count: AuthorCountOrderByAggregateInput
  _avg: AuthorAvgOrderByAggregateInput
  _max: AuthorMaxOrderByAggregateInput
  _min: AuthorMinOrderByAggregateInput
  _sum: AuthorSumOrderByAggregateInput
}

input AuthorCountOrderByAggregateInput {
  id: SortOrder
  name: SortOrder
}

input AuthorAvgOrderByAggregateInput {
  id: SortOrder
}

input AuthorMaxOrderByAggregateInput {
  id: SortOrder
  name: SortOrder
}

input AuthorMinOrderByAggregateInput {
  id: SortOrder
  name: SortOrder
}

input AuthorSumOrderByAggregateInput {
  id: SortOrder
}

input AuthorScalarWhereWithAggregatesInput {
  AND: [AuthorScalarWhereWithAggregatesInput!]
  OR: [AuthorScalarWhereWithAggregatesInput!]
  NOT: [AuthorScalarWhereWithAggregatesInput!]
  id: IntWithAggregatesFilter
  name: StringNullableWithAggregatesFilter
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
  createAuthor(data: AuthorCreateInput!): Author!
  deleteAuthor(where: AuthorWhereUniqueInput!): Author
  updateAuthor(data: AuthorUpdateInput!, where: AuthorWhereUniqueInput!): Author
  deleteManyAuthor(where: AuthorWhereInput): AffectedRowsOutput!
  updateManyAuthor(data: AuthorUpdateManyMutationInput!, where: AuthorWhereInput): AffectedRowsOutput!
  upsertAuthor(where: AuthorWhereUniqueInput!, create: AuthorCreateInput!, update: AuthorUpdateInput!): Author!
}

input AuthorCreateInput {
  name: String
}

input AuthorUpdateInput {
  name: NullableStringFieldUpdateOperationsInput
}

input NullableStringFieldUpdateOperationsInput {
  set: String
}

type AffectedRowsOutput {
  count: Int!
}

input AuthorUpdateManyMutationInput {
  name: NullableStringFieldUpdateOperationsInput
}
`, `.mesh/sources/AuthorService/schema.graphql`);

module.exports = buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true
});