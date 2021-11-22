import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookOrderByWithRelationInput } from "../../../inputs/BookOrderByWithRelationInput";
import { BookWhereInput } from "../../../inputs/BookWhereInput";
import { BookWhereUniqueInput } from "../../../inputs/BookWhereUniqueInput";
import { BookScalarFieldEnum } from "../../../../enums/BookScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBookArgs {
  @TypeGraphQL.Field(_type => BookWhereInput, {
    nullable: true
  })
  where?: BookWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BookOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BookScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "authorId"> | undefined;
}
