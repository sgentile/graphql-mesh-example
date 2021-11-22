import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorOrderByWithAggregationInput } from "../../../inputs/AuthorOrderByWithAggregationInput";
import { AuthorScalarWhereWithAggregatesInput } from "../../../inputs/AuthorScalarWhereWithAggregatesInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";
import { AuthorScalarFieldEnum } from "../../../../enums/AuthorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorWhereInput, {
    nullable: true
  })
  where?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AuthorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AuthorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => AuthorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AuthorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
