import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorUpdateManyMutationInput } from "../../../inputs/AuthorUpdateManyMutationInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorUpdateManyMutationInput, {
    nullable: false
  })
  data!: AuthorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AuthorWhereInput, {
    nullable: true
  })
  where?: AuthorWhereInput | undefined;
}
