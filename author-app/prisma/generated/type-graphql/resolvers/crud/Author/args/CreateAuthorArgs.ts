import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorCreateInput } from "../../../inputs/AuthorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorCreateInput, {
    nullable: false
  })
  data!: AuthorCreateInput;
}
