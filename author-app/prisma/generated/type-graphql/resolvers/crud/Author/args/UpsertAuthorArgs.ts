import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorCreateInput } from "../../../inputs/AuthorCreateInput";
import { AuthorUpdateInput } from "../../../inputs/AuthorUpdateInput";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorCreateInput, {
    nullable: false
  })
  create!: AuthorCreateInput;

  @TypeGraphQL.Field(_type => AuthorUpdateInput, {
    nullable: false
  })
  update!: AuthorUpdateInput;
}
