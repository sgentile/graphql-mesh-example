import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookUpdateInput } from "../../../inputs/BookUpdateInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookArgs {
  @TypeGraphQL.Field(_type => BookUpdateInput, {
    nullable: false
  })
  data!: BookUpdateInput;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;
}
