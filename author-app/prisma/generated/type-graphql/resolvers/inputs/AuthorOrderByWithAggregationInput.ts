import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorAvgOrderByAggregateInput } from "../inputs/AuthorAvgOrderByAggregateInput";
import { AuthorCountOrderByAggregateInput } from "../inputs/AuthorCountOrderByAggregateInput";
import { AuthorMaxOrderByAggregateInput } from "../inputs/AuthorMaxOrderByAggregateInput";
import { AuthorMinOrderByAggregateInput } from "../inputs/AuthorMinOrderByAggregateInput";
import { AuthorSumOrderByAggregateInput } from "../inputs/AuthorSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AuthorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AuthorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AuthorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AuthorAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AuthorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AuthorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AuthorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AuthorMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AuthorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AuthorSumOrderByAggregateInput | undefined;
}
