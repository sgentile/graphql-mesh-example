import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookAvgAggregate } from "../outputs/BookAvgAggregate";
import { BookCountAggregate } from "../outputs/BookCountAggregate";
import { BookMaxAggregate } from "../outputs/BookMaxAggregate";
import { BookMinAggregate } from "../outputs/BookMinAggregate";
import { BookSumAggregate } from "../outputs/BookSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateBook {
  @TypeGraphQL.Field(_type => BookCountAggregate, {
    nullable: true
  })
  _count!: BookCountAggregate | null;

  @TypeGraphQL.Field(_type => BookAvgAggregate, {
    nullable: true
  })
  _avg!: BookAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookSumAggregate, {
    nullable: true
  })
  _sum!: BookSumAggregate | null;

  @TypeGraphQL.Field(_type => BookMinAggregate, {
    nullable: true
  })
  _min!: BookMinAggregate | null;

  @TypeGraphQL.Field(_type => BookMaxAggregate, {
    nullable: true
  })
  _max!: BookMaxAggregate | null;
}
