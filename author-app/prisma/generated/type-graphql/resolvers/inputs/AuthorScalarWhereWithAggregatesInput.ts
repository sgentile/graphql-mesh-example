import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
