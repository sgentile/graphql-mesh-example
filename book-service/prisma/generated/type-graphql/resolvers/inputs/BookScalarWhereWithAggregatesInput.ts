import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BookScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  authorId?: IntWithAggregatesFilter | undefined;
}
