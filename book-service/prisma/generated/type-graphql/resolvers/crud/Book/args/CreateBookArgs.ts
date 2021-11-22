import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookCreateInput } from "../../../inputs/BookCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookArgs {
  @TypeGraphQL.Field(_type => BookCreateInput, {
    nullable: false
  })
  data!: BookCreateInput;
}
