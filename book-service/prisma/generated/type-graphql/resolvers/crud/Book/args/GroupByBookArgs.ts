import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookOrderByWithAggregationInput } from "../../../inputs/BookOrderByWithAggregationInput";
import { BookScalarWhereWithAggregatesInput } from "../../../inputs/BookScalarWhereWithAggregatesInput";
import { BookWhereInput } from "../../../inputs/BookWhereInput";
import { BookScalarFieldEnum } from "../../../../enums/BookScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookArgs {
  @TypeGraphQL.Field(_type => BookWhereInput, {
    nullable: true
  })
  where?: BookWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BookOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "authorId">;

  @TypeGraphQL.Field(_type => BookScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
