import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorUpdateInput } from "../../../inputs/AuthorUpdateInput";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorUpdateInput, {
    nullable: false
  })
  data!: AuthorUpdateInput;

  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorWhereUniqueInput;
}
