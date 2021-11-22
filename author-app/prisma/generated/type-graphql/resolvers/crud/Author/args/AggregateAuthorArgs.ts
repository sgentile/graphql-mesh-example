import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AuthorOrderByWithRelationInput } from "../../../inputs/AuthorOrderByWithRelationInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorWhereInput, {
    nullable: true
  })
  where?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AuthorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AuthorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: true
  })
  cursor?: AuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
