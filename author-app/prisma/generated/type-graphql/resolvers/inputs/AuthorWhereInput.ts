import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorWhereInput {
  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true
  })
  AND?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true
  })
  OR?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true
  })
  NOT?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;
}
