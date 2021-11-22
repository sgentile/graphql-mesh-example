import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookCreateInput } from "../../../inputs/BookCreateInput";
import { BookUpdateInput } from "../../../inputs/BookUpdateInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookArgs {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateInput, {
    nullable: false
  })
  create!: BookCreateInput;

  @TypeGraphQL.Field(_type => BookUpdateInput, {
    nullable: false
  })
  update!: BookUpdateInput;
}
