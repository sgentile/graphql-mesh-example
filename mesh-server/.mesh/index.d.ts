import { GraphQLResolveInfo } from 'graphql';
import { DocumentNode } from 'graphql';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
} & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type Query = {
    book?: Maybe<Book>;
    findFirstBook?: Maybe<Book>;
    books: Array<Book>;
    aggregateBook: AggregateBook;
    groupByBook: Array<BookGroupBy>;
    author?: Maybe<Author>;
    findFirstAuthor?: Maybe<Author>;
    authors: Array<Author>;
    aggregateAuthor: AggregateAuthor;
    groupByAuthor: Array<AuthorGroupBy>;
};
export declare type QuerybookArgs = {
    where: BookWhereUniqueInput;
};
export declare type QueryfindFirstBookArgs = {
    where?: InputMaybe<BookWhereInput>;
    orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
    cursor?: InputMaybe<BookWhereUniqueInput>;
    take?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
};
export declare type QuerybooksArgs = {
    where?: InputMaybe<BookWhereInput>;
    orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
    cursor?: InputMaybe<BookWhereUniqueInput>;
    take?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
};
export declare type QueryaggregateBookArgs = {
    where?: InputMaybe<BookWhereInput>;
    orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
    cursor?: InputMaybe<BookWhereUniqueInput>;
    take?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
};
export declare type QuerygroupByBookArgs = {
    where?: InputMaybe<BookWhereInput>;
    orderBy?: InputMaybe<Array<BookOrderByWithAggregationInput>>;
    by: Array<BookScalarFieldEnum>;
    having?: InputMaybe<BookScalarWhereWithAggregatesInput>;
    take?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
};
export declare type QueryauthorArgs = {
    where: AuthorWhereUniqueInput;
};
export declare type QueryfindFirstAuthorArgs = {
    where?: InputMaybe<AuthorWhereInput>;
    orderBy?: InputMaybe<Array<AuthorOrderByWithRelationInput>>;
    cursor?: InputMaybe<AuthorWhereUniqueInput>;
    take?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    distinct?: InputMaybe<Array<AuthorScalarFieldEnum>>;
};
export declare type QueryauthorsArgs = {
    where?: InputMaybe<AuthorWhereInput>;
    orderBy?: InputMaybe<Array<AuthorOrderByWithRelationInput>>;
    cursor?: InputMaybe<AuthorWhereUniqueInput>;
    take?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
    distinct?: InputMaybe<Array<AuthorScalarFieldEnum>>;
};
export declare type QueryaggregateAuthorArgs = {
    where?: InputMaybe<AuthorWhereInput>;
    orderBy?: InputMaybe<Array<AuthorOrderByWithRelationInput>>;
    cursor?: InputMaybe<AuthorWhereUniqueInput>;
    take?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
};
export declare type QuerygroupByAuthorArgs = {
    where?: InputMaybe<AuthorWhereInput>;
    orderBy?: InputMaybe<Array<AuthorOrderByWithAggregationInput>>;
    by: Array<AuthorScalarFieldEnum>;
    having?: InputMaybe<AuthorScalarWhereWithAggregatesInput>;
    take?: InputMaybe<Scalars['Int']>;
    skip?: InputMaybe<Scalars['Int']>;
};
export declare type Mutation = {
    createBook: Book;
    deleteBook?: Maybe<Book>;
    updateBook?: Maybe<Book>;
    deleteManyBook: AffectedRowsOutput;
    updateManyBook: AffectedRowsOutput;
    upsertBook: Book;
    createAuthor: Author;
    deleteAuthor?: Maybe<Author>;
    updateAuthor?: Maybe<Author>;
    deleteManyAuthor: AffectedRowsOutput;
    updateManyAuthor: AffectedRowsOutput;
    upsertAuthor: Author;
};
export declare type MutationcreateBookArgs = {
    data: BookCreateInput;
};
export declare type MutationdeleteBookArgs = {
    where: BookWhereUniqueInput;
};
export declare type MutationupdateBookArgs = {
    data: BookUpdateInput;
    where: BookWhereUniqueInput;
};
export declare type MutationdeleteManyBookArgs = {
    where?: InputMaybe<BookWhereInput>;
};
export declare type MutationupdateManyBookArgs = {
    data: BookUpdateManyMutationInput;
    where?: InputMaybe<BookWhereInput>;
};
export declare type MutationupsertBookArgs = {
    where: BookWhereUniqueInput;
    create: BookCreateInput;
    update: BookUpdateInput;
};
export declare type MutationcreateAuthorArgs = {
    data: AuthorCreateInput;
};
export declare type MutationdeleteAuthorArgs = {
    where: AuthorWhereUniqueInput;
};
export declare type MutationupdateAuthorArgs = {
    data: AuthorUpdateInput;
    where: AuthorWhereUniqueInput;
};
export declare type MutationdeleteManyAuthorArgs = {
    where?: InputMaybe<AuthorWhereInput>;
};
export declare type MutationupdateManyAuthorArgs = {
    data: AuthorUpdateManyMutationInput;
    where?: InputMaybe<AuthorWhereInput>;
};
export declare type MutationupsertAuthorArgs = {
    where: AuthorWhereUniqueInput;
    create: AuthorCreateInput;
    update: AuthorUpdateInput;
};
export declare type Book = {
    id: Scalars['Int'];
    name?: Maybe<Scalars['String']>;
    authorId: Scalars['Int'];
    author?: Maybe<Author>;
};
export declare type BookWhereUniqueInput = {
    id?: InputMaybe<Scalars['Int']>;
};
export declare type BookWhereInput = {
    AND?: InputMaybe<Array<BookWhereInput>>;
    OR?: InputMaybe<Array<BookWhereInput>>;
    NOT?: InputMaybe<Array<BookWhereInput>>;
    id?: InputMaybe<IntFilter>;
    name?: InputMaybe<StringNullableFilter>;
    authorId?: InputMaybe<IntFilter>;
};
export declare type IntFilter = {
    equals?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<Array<Scalars['Int']>>;
    notIn?: InputMaybe<Array<Scalars['Int']>>;
    lt?: InputMaybe<Scalars['Int']>;
    lte?: InputMaybe<Scalars['Int']>;
    gt?: InputMaybe<Scalars['Int']>;
    gte?: InputMaybe<Scalars['Int']>;
    not?: InputMaybe<NestedIntFilter>;
};
export declare type NestedIntFilter = {
    equals?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<Array<Scalars['Int']>>;
    notIn?: InputMaybe<Array<Scalars['Int']>>;
    lt?: InputMaybe<Scalars['Int']>;
    lte?: InputMaybe<Scalars['Int']>;
    gt?: InputMaybe<Scalars['Int']>;
    gte?: InputMaybe<Scalars['Int']>;
    not?: InputMaybe<NestedIntFilter>;
};
export declare type StringNullableFilter = {
    equals?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    notIn?: InputMaybe<Array<Scalars['String']>>;
    lt?: InputMaybe<Scalars['String']>;
    lte?: InputMaybe<Scalars['String']>;
    gt?: InputMaybe<Scalars['String']>;
    gte?: InputMaybe<Scalars['String']>;
    contains?: InputMaybe<Scalars['String']>;
    startsWith?: InputMaybe<Scalars['String']>;
    endsWith?: InputMaybe<Scalars['String']>;
    not?: InputMaybe<NestedStringNullableFilter>;
};
export declare type NestedStringNullableFilter = {
    equals?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    notIn?: InputMaybe<Array<Scalars['String']>>;
    lt?: InputMaybe<Scalars['String']>;
    lte?: InputMaybe<Scalars['String']>;
    gt?: InputMaybe<Scalars['String']>;
    gte?: InputMaybe<Scalars['String']>;
    contains?: InputMaybe<Scalars['String']>;
    startsWith?: InputMaybe<Scalars['String']>;
    endsWith?: InputMaybe<Scalars['String']>;
    not?: InputMaybe<NestedStringNullableFilter>;
};
export declare type BookOrderByWithRelationInput = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    authorId?: InputMaybe<SortOrder>;
};
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum BookScalarFieldEnum {
    id = "id",
    name = "name",
    authorId = "authorId"
}
export declare type AggregateBook = {
    _count?: Maybe<BookCountAggregate>;
    _avg?: Maybe<BookAvgAggregate>;
    _sum?: Maybe<BookSumAggregate>;
    _min?: Maybe<BookMinAggregate>;
    _max?: Maybe<BookMaxAggregate>;
};
export declare type BookCountAggregate = {
    id: Scalars['Int'];
    name: Scalars['Int'];
    authorId: Scalars['Int'];
    _all: Scalars['Int'];
};
export declare type BookAvgAggregate = {
    id?: Maybe<Scalars['Float']>;
    authorId?: Maybe<Scalars['Float']>;
};
export declare type BookSumAggregate = {
    id?: Maybe<Scalars['Int']>;
    authorId?: Maybe<Scalars['Int']>;
};
export declare type BookMinAggregate = {
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    authorId?: Maybe<Scalars['Int']>;
};
export declare type BookMaxAggregate = {
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    authorId?: Maybe<Scalars['Int']>;
};
export declare type BookGroupBy = {
    id: Scalars['Int'];
    name?: Maybe<Scalars['String']>;
    authorId: Scalars['Int'];
    _count?: Maybe<BookCountAggregate>;
    _avg?: Maybe<BookAvgAggregate>;
    _sum?: Maybe<BookSumAggregate>;
    _min?: Maybe<BookMinAggregate>;
    _max?: Maybe<BookMaxAggregate>;
};
export declare type BookOrderByWithAggregationInput = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    authorId?: InputMaybe<SortOrder>;
    _count?: InputMaybe<BookCountOrderByAggregateInput>;
    _avg?: InputMaybe<BookAvgOrderByAggregateInput>;
    _max?: InputMaybe<BookMaxOrderByAggregateInput>;
    _min?: InputMaybe<BookMinOrderByAggregateInput>;
    _sum?: InputMaybe<BookSumOrderByAggregateInput>;
};
export declare type BookCountOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    authorId?: InputMaybe<SortOrder>;
};
export declare type BookAvgOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
    authorId?: InputMaybe<SortOrder>;
};
export declare type BookMaxOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    authorId?: InputMaybe<SortOrder>;
};
export declare type BookMinOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    authorId?: InputMaybe<SortOrder>;
};
export declare type BookSumOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
    authorId?: InputMaybe<SortOrder>;
};
export declare type BookScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<BookScalarWhereWithAggregatesInput>>;
    OR?: InputMaybe<Array<BookScalarWhereWithAggregatesInput>>;
    NOT?: InputMaybe<Array<BookScalarWhereWithAggregatesInput>>;
    id?: InputMaybe<IntWithAggregatesFilter>;
    name?: InputMaybe<StringNullableWithAggregatesFilter>;
    authorId?: InputMaybe<IntWithAggregatesFilter>;
};
export declare type IntWithAggregatesFilter = {
    equals?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<Array<Scalars['Int']>>;
    notIn?: InputMaybe<Array<Scalars['Int']>>;
    lt?: InputMaybe<Scalars['Int']>;
    lte?: InputMaybe<Scalars['Int']>;
    gt?: InputMaybe<Scalars['Int']>;
    gte?: InputMaybe<Scalars['Int']>;
    not?: InputMaybe<NestedIntWithAggregatesFilter>;
    _count?: InputMaybe<NestedIntFilter>;
    _avg?: InputMaybe<NestedFloatFilter>;
    _sum?: InputMaybe<NestedIntFilter>;
    _min?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedIntFilter>;
};
export declare type NestedIntWithAggregatesFilter = {
    equals?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<Array<Scalars['Int']>>;
    notIn?: InputMaybe<Array<Scalars['Int']>>;
    lt?: InputMaybe<Scalars['Int']>;
    lte?: InputMaybe<Scalars['Int']>;
    gt?: InputMaybe<Scalars['Int']>;
    gte?: InputMaybe<Scalars['Int']>;
    not?: InputMaybe<NestedIntWithAggregatesFilter>;
    _count?: InputMaybe<NestedIntFilter>;
    _avg?: InputMaybe<NestedFloatFilter>;
    _sum?: InputMaybe<NestedIntFilter>;
    _min?: InputMaybe<NestedIntFilter>;
    _max?: InputMaybe<NestedIntFilter>;
};
export declare type NestedFloatFilter = {
    equals?: InputMaybe<Scalars['Float']>;
    in?: InputMaybe<Array<Scalars['Float']>>;
    notIn?: InputMaybe<Array<Scalars['Float']>>;
    lt?: InputMaybe<Scalars['Float']>;
    lte?: InputMaybe<Scalars['Float']>;
    gt?: InputMaybe<Scalars['Float']>;
    gte?: InputMaybe<Scalars['Float']>;
    not?: InputMaybe<NestedFloatFilter>;
};
export declare type StringNullableWithAggregatesFilter = {
    equals?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    notIn?: InputMaybe<Array<Scalars['String']>>;
    lt?: InputMaybe<Scalars['String']>;
    lte?: InputMaybe<Scalars['String']>;
    gt?: InputMaybe<Scalars['String']>;
    gte?: InputMaybe<Scalars['String']>;
    contains?: InputMaybe<Scalars['String']>;
    startsWith?: InputMaybe<Scalars['String']>;
    endsWith?: InputMaybe<Scalars['String']>;
    not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
    _count?: InputMaybe<NestedIntNullableFilter>;
    _min?: InputMaybe<NestedStringNullableFilter>;
    _max?: InputMaybe<NestedStringNullableFilter>;
};
export declare type NestedStringNullableWithAggregatesFilter = {
    equals?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    notIn?: InputMaybe<Array<Scalars['String']>>;
    lt?: InputMaybe<Scalars['String']>;
    lte?: InputMaybe<Scalars['String']>;
    gt?: InputMaybe<Scalars['String']>;
    gte?: InputMaybe<Scalars['String']>;
    contains?: InputMaybe<Scalars['String']>;
    startsWith?: InputMaybe<Scalars['String']>;
    endsWith?: InputMaybe<Scalars['String']>;
    not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
    _count?: InputMaybe<NestedIntNullableFilter>;
    _min?: InputMaybe<NestedStringNullableFilter>;
    _max?: InputMaybe<NestedStringNullableFilter>;
};
export declare type NestedIntNullableFilter = {
    equals?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<Array<Scalars['Int']>>;
    notIn?: InputMaybe<Array<Scalars['Int']>>;
    lt?: InputMaybe<Scalars['Int']>;
    lte?: InputMaybe<Scalars['Int']>;
    gt?: InputMaybe<Scalars['Int']>;
    gte?: InputMaybe<Scalars['Int']>;
    not?: InputMaybe<NestedIntNullableFilter>;
};
export declare type BookCreateInput = {
    name?: InputMaybe<Scalars['String']>;
    authorId: Scalars['Int'];
};
export declare type BookUpdateInput = {
    name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    authorId?: InputMaybe<IntFieldUpdateOperationsInput>;
};
export declare type NullableStringFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars['String']>;
};
export declare type IntFieldUpdateOperationsInput = {
    set?: InputMaybe<Scalars['Int']>;
    increment?: InputMaybe<Scalars['Int']>;
    decrement?: InputMaybe<Scalars['Int']>;
    multiply?: InputMaybe<Scalars['Int']>;
    divide?: InputMaybe<Scalars['Int']>;
};
export declare type AffectedRowsOutput = {
    count: Scalars['Int'];
};
export declare type BookUpdateManyMutationInput = {
    name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
    authorId?: InputMaybe<IntFieldUpdateOperationsInput>;
};
export declare type Author = {
    id: Scalars['Int'];
    name?: Maybe<Scalars['String']>;
};
export declare type AuthorWhereUniqueInput = {
    id?: InputMaybe<Scalars['Int']>;
};
export declare type AuthorWhereInput = {
    AND?: InputMaybe<Array<AuthorWhereInput>>;
    OR?: InputMaybe<Array<AuthorWhereInput>>;
    NOT?: InputMaybe<Array<AuthorWhereInput>>;
    id?: InputMaybe<IntFilter>;
    name?: InputMaybe<StringNullableFilter>;
};
export declare type AuthorOrderByWithRelationInput = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
};
export declare enum AuthorScalarFieldEnum {
    id = "id",
    name = "name"
}
export declare type AggregateAuthor = {
    _count?: Maybe<AuthorCountAggregate>;
    _avg?: Maybe<AuthorAvgAggregate>;
    _sum?: Maybe<AuthorSumAggregate>;
    _min?: Maybe<AuthorMinAggregate>;
    _max?: Maybe<AuthorMaxAggregate>;
};
export declare type AuthorCountAggregate = {
    id: Scalars['Int'];
    name: Scalars['Int'];
    _all: Scalars['Int'];
};
export declare type AuthorAvgAggregate = {
    id?: Maybe<Scalars['Float']>;
};
export declare type AuthorSumAggregate = {
    id?: Maybe<Scalars['Int']>;
};
export declare type AuthorMinAggregate = {
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
};
export declare type AuthorMaxAggregate = {
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
};
export declare type AuthorGroupBy = {
    id: Scalars['Int'];
    name?: Maybe<Scalars['String']>;
    _count?: Maybe<AuthorCountAggregate>;
    _avg?: Maybe<AuthorAvgAggregate>;
    _sum?: Maybe<AuthorSumAggregate>;
    _min?: Maybe<AuthorMinAggregate>;
    _max?: Maybe<AuthorMaxAggregate>;
};
export declare type AuthorOrderByWithAggregationInput = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    _count?: InputMaybe<AuthorCountOrderByAggregateInput>;
    _avg?: InputMaybe<AuthorAvgOrderByAggregateInput>;
    _max?: InputMaybe<AuthorMaxOrderByAggregateInput>;
    _min?: InputMaybe<AuthorMinOrderByAggregateInput>;
    _sum?: InputMaybe<AuthorSumOrderByAggregateInput>;
};
export declare type AuthorCountOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
};
export declare type AuthorAvgOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
};
export declare type AuthorMaxOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
};
export declare type AuthorMinOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
};
export declare type AuthorSumOrderByAggregateInput = {
    id?: InputMaybe<SortOrder>;
};
export declare type AuthorScalarWhereWithAggregatesInput = {
    AND?: InputMaybe<Array<AuthorScalarWhereWithAggregatesInput>>;
    OR?: InputMaybe<Array<AuthorScalarWhereWithAggregatesInput>>;
    NOT?: InputMaybe<Array<AuthorScalarWhereWithAggregatesInput>>;
    id?: InputMaybe<IntWithAggregatesFilter>;
    name?: InputMaybe<StringNullableWithAggregatesFilter>;
};
export declare type AuthorCreateInput = {
    name?: InputMaybe<Scalars['String']>;
};
export declare type AuthorUpdateInput = {
    name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};
export declare type AuthorUpdateManyMutationInput = {
    name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};
export declare type WithIndex<TObject> = TObject & Record<string, any>;
export declare type ResolversObject<TObject> = WithIndex<TObject>;
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = ResolversObject<{
    Query: ResolverTypeWrapper<{}>;
    Mutation: ResolverTypeWrapper<{}>;
    Book: ResolverTypeWrapper<Book>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    String: ResolverTypeWrapper<Scalars['String']>;
    BookWhereUniqueInput: BookWhereUniqueInput;
    BookWhereInput: BookWhereInput;
    IntFilter: IntFilter;
    NestedIntFilter: NestedIntFilter;
    StringNullableFilter: StringNullableFilter;
    NestedStringNullableFilter: NestedStringNullableFilter;
    BookOrderByWithRelationInput: BookOrderByWithRelationInput;
    SortOrder: SortOrder;
    BookScalarFieldEnum: BookScalarFieldEnum;
    AggregateBook: ResolverTypeWrapper<AggregateBook>;
    BookCountAggregate: ResolverTypeWrapper<BookCountAggregate>;
    BookAvgAggregate: ResolverTypeWrapper<BookAvgAggregate>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    BookSumAggregate: ResolverTypeWrapper<BookSumAggregate>;
    BookMinAggregate: ResolverTypeWrapper<BookMinAggregate>;
    BookMaxAggregate: ResolverTypeWrapper<BookMaxAggregate>;
    BookGroupBy: ResolverTypeWrapper<BookGroupBy>;
    BookOrderByWithAggregationInput: BookOrderByWithAggregationInput;
    BookCountOrderByAggregateInput: BookCountOrderByAggregateInput;
    BookAvgOrderByAggregateInput: BookAvgOrderByAggregateInput;
    BookMaxOrderByAggregateInput: BookMaxOrderByAggregateInput;
    BookMinOrderByAggregateInput: BookMinOrderByAggregateInput;
    BookSumOrderByAggregateInput: BookSumOrderByAggregateInput;
    BookScalarWhereWithAggregatesInput: BookScalarWhereWithAggregatesInput;
    IntWithAggregatesFilter: IntWithAggregatesFilter;
    NestedIntWithAggregatesFilter: NestedIntWithAggregatesFilter;
    NestedFloatFilter: NestedFloatFilter;
    StringNullableWithAggregatesFilter: StringNullableWithAggregatesFilter;
    NestedStringNullableWithAggregatesFilter: NestedStringNullableWithAggregatesFilter;
    NestedIntNullableFilter: NestedIntNullableFilter;
    BookCreateInput: BookCreateInput;
    BookUpdateInput: BookUpdateInput;
    NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
    IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
    AffectedRowsOutput: ResolverTypeWrapper<AffectedRowsOutput>;
    BookUpdateManyMutationInput: BookUpdateManyMutationInput;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Author: ResolverTypeWrapper<Author>;
    AuthorWhereUniqueInput: AuthorWhereUniqueInput;
    AuthorWhereInput: AuthorWhereInput;
    AuthorOrderByWithRelationInput: AuthorOrderByWithRelationInput;
    AuthorScalarFieldEnum: AuthorScalarFieldEnum;
    AggregateAuthor: ResolverTypeWrapper<AggregateAuthor>;
    AuthorCountAggregate: ResolverTypeWrapper<AuthorCountAggregate>;
    AuthorAvgAggregate: ResolverTypeWrapper<AuthorAvgAggregate>;
    AuthorSumAggregate: ResolverTypeWrapper<AuthorSumAggregate>;
    AuthorMinAggregate: ResolverTypeWrapper<AuthorMinAggregate>;
    AuthorMaxAggregate: ResolverTypeWrapper<AuthorMaxAggregate>;
    AuthorGroupBy: ResolverTypeWrapper<AuthorGroupBy>;
    AuthorOrderByWithAggregationInput: AuthorOrderByWithAggregationInput;
    AuthorCountOrderByAggregateInput: AuthorCountOrderByAggregateInput;
    AuthorAvgOrderByAggregateInput: AuthorAvgOrderByAggregateInput;
    AuthorMaxOrderByAggregateInput: AuthorMaxOrderByAggregateInput;
    AuthorMinOrderByAggregateInput: AuthorMinOrderByAggregateInput;
    AuthorSumOrderByAggregateInput: AuthorSumOrderByAggregateInput;
    AuthorScalarWhereWithAggregatesInput: AuthorScalarWhereWithAggregatesInput;
    AuthorCreateInput: AuthorCreateInput;
    AuthorUpdateInput: AuthorUpdateInput;
    AuthorUpdateManyMutationInput: AuthorUpdateManyMutationInput;
}>;
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = ResolversObject<{
    Query: {};
    Mutation: {};
    Book: Book;
    Int: Scalars['Int'];
    String: Scalars['String'];
    BookWhereUniqueInput: BookWhereUniqueInput;
    BookWhereInput: BookWhereInput;
    IntFilter: IntFilter;
    NestedIntFilter: NestedIntFilter;
    StringNullableFilter: StringNullableFilter;
    NestedStringNullableFilter: NestedStringNullableFilter;
    BookOrderByWithRelationInput: BookOrderByWithRelationInput;
    AggregateBook: AggregateBook;
    BookCountAggregate: BookCountAggregate;
    BookAvgAggregate: BookAvgAggregate;
    Float: Scalars['Float'];
    BookSumAggregate: BookSumAggregate;
    BookMinAggregate: BookMinAggregate;
    BookMaxAggregate: BookMaxAggregate;
    BookGroupBy: BookGroupBy;
    BookOrderByWithAggregationInput: BookOrderByWithAggregationInput;
    BookCountOrderByAggregateInput: BookCountOrderByAggregateInput;
    BookAvgOrderByAggregateInput: BookAvgOrderByAggregateInput;
    BookMaxOrderByAggregateInput: BookMaxOrderByAggregateInput;
    BookMinOrderByAggregateInput: BookMinOrderByAggregateInput;
    BookSumOrderByAggregateInput: BookSumOrderByAggregateInput;
    BookScalarWhereWithAggregatesInput: BookScalarWhereWithAggregatesInput;
    IntWithAggregatesFilter: IntWithAggregatesFilter;
    NestedIntWithAggregatesFilter: NestedIntWithAggregatesFilter;
    NestedFloatFilter: NestedFloatFilter;
    StringNullableWithAggregatesFilter: StringNullableWithAggregatesFilter;
    NestedStringNullableWithAggregatesFilter: NestedStringNullableWithAggregatesFilter;
    NestedIntNullableFilter: NestedIntNullableFilter;
    BookCreateInput: BookCreateInput;
    BookUpdateInput: BookUpdateInput;
    NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
    IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
    AffectedRowsOutput: AffectedRowsOutput;
    BookUpdateManyMutationInput: BookUpdateManyMutationInput;
    Boolean: Scalars['Boolean'];
    Author: Author;
    AuthorWhereUniqueInput: AuthorWhereUniqueInput;
    AuthorWhereInput: AuthorWhereInput;
    AuthorOrderByWithRelationInput: AuthorOrderByWithRelationInput;
    AggregateAuthor: AggregateAuthor;
    AuthorCountAggregate: AuthorCountAggregate;
    AuthorAvgAggregate: AuthorAvgAggregate;
    AuthorSumAggregate: AuthorSumAggregate;
    AuthorMinAggregate: AuthorMinAggregate;
    AuthorMaxAggregate: AuthorMaxAggregate;
    AuthorGroupBy: AuthorGroupBy;
    AuthorOrderByWithAggregationInput: AuthorOrderByWithAggregationInput;
    AuthorCountOrderByAggregateInput: AuthorCountOrderByAggregateInput;
    AuthorAvgOrderByAggregateInput: AuthorAvgOrderByAggregateInput;
    AuthorMaxOrderByAggregateInput: AuthorMaxOrderByAggregateInput;
    AuthorMinOrderByAggregateInput: AuthorMinOrderByAggregateInput;
    AuthorSumOrderByAggregateInput: AuthorSumOrderByAggregateInput;
    AuthorScalarWhereWithAggregatesInput: AuthorScalarWhereWithAggregatesInput;
    AuthorCreateInput: AuthorCreateInput;
    AuthorUpdateInput: AuthorUpdateInput;
    AuthorUpdateManyMutationInput: AuthorUpdateManyMutationInput;
}>;
export declare type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QuerybookArgs, 'where'>>;
    findFirstBook?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QueryfindFirstBookArgs, never>>;
    books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<QuerybooksArgs, never>>;
    aggregateBook?: Resolver<ResolversTypes['AggregateBook'], ParentType, ContextType, RequireFields<QueryaggregateBookArgs, never>>;
    groupByBook?: Resolver<Array<ResolversTypes['BookGroupBy']>, ParentType, ContextType, RequireFields<QuerygroupByBookArgs, 'by'>>;
    author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryauthorArgs, 'where'>>;
    findFirstAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryfindFirstAuthorArgs, never>>;
    authors?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<QueryauthorsArgs, never>>;
    aggregateAuthor?: Resolver<ResolversTypes['AggregateAuthor'], ParentType, ContextType, RequireFields<QueryaggregateAuthorArgs, never>>;
    groupByAuthor?: Resolver<Array<ResolversTypes['AuthorGroupBy']>, ParentType, ContextType, RequireFields<QuerygroupByAuthorArgs, 'by'>>;
}>;
export declare type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
    createBook?: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationcreateBookArgs, 'data'>>;
    deleteBook?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<MutationdeleteBookArgs, 'where'>>;
    updateBook?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<MutationupdateBookArgs, 'data' | 'where'>>;
    deleteManyBook?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationdeleteManyBookArgs, never>>;
    updateManyBook?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationupdateManyBookArgs, 'data'>>;
    upsertBook?: Resolver<ResolversTypes['Book'], ParentType, ContextType, RequireFields<MutationupsertBookArgs, 'where' | 'create' | 'update'>>;
    createAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationcreateAuthorArgs, 'data'>>;
    deleteAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationdeleteAuthorArgs, 'where'>>;
    updateAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, RequireFields<MutationupdateAuthorArgs, 'data' | 'where'>>;
    deleteManyAuthor?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationdeleteManyAuthorArgs, never>>;
    updateManyAuthor?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationupdateManyAuthorArgs, 'data'>>;
    upsertAuthor?: Resolver<ResolversTypes['Author'], ParentType, ContextType, RequireFields<MutationupsertAuthorArgs, 'where' | 'create' | 'update'>>;
}>;
export declare type BookResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    authorId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AggregateBookResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregateBook'] = ResolversParentTypes['AggregateBook']> = ResolversObject<{
    _count?: Resolver<Maybe<ResolversTypes['BookCountAggregate']>, ParentType, ContextType>;
    _avg?: Resolver<Maybe<ResolversTypes['BookAvgAggregate']>, ParentType, ContextType>;
    _sum?: Resolver<Maybe<ResolversTypes['BookSumAggregate']>, ParentType, ContextType>;
    _min?: Resolver<Maybe<ResolversTypes['BookMinAggregate']>, ParentType, ContextType>;
    _max?: Resolver<Maybe<ResolversTypes['BookMaxAggregate']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BookCountAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookCountAggregate'] = ResolversParentTypes['BookCountAggregate']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    authorId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BookAvgAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookAvgAggregate'] = ResolversParentTypes['BookAvgAggregate']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    authorId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BookSumAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookSumAggregate'] = ResolversParentTypes['BookSumAggregate']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    authorId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BookMinAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookMinAggregate'] = ResolversParentTypes['BookMinAggregate']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    authorId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BookMaxAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookMaxAggregate'] = ResolversParentTypes['BookMaxAggregate']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    authorId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BookGroupByResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BookGroupBy'] = ResolversParentTypes['BookGroupBy']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    authorId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    _count?: Resolver<Maybe<ResolversTypes['BookCountAggregate']>, ParentType, ContextType>;
    _avg?: Resolver<Maybe<ResolversTypes['BookAvgAggregate']>, ParentType, ContextType>;
    _sum?: Resolver<Maybe<ResolversTypes['BookSumAggregate']>, ParentType, ContextType>;
    _min?: Resolver<Maybe<ResolversTypes['BookMinAggregate']>, ParentType, ContextType>;
    _max?: Resolver<Maybe<ResolversTypes['BookMaxAggregate']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AffectedRowsOutputResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AffectedRowsOutput'] = ResolversParentTypes['AffectedRowsOutput']> = ResolversObject<{
    count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AuthorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AggregateAuthorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregateAuthor'] = ResolversParentTypes['AggregateAuthor']> = ResolversObject<{
    _count?: Resolver<Maybe<ResolversTypes['AuthorCountAggregate']>, ParentType, ContextType>;
    _avg?: Resolver<Maybe<ResolversTypes['AuthorAvgAggregate']>, ParentType, ContextType>;
    _sum?: Resolver<Maybe<ResolversTypes['AuthorSumAggregate']>, ParentType, ContextType>;
    _min?: Resolver<Maybe<ResolversTypes['AuthorMinAggregate']>, ParentType, ContextType>;
    _max?: Resolver<Maybe<ResolversTypes['AuthorMaxAggregate']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AuthorCountAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorCountAggregate'] = ResolversParentTypes['AuthorCountAggregate']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AuthorAvgAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorAvgAggregate'] = ResolversParentTypes['AuthorAvgAggregate']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AuthorSumAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorSumAggregate'] = ResolversParentTypes['AuthorSumAggregate']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AuthorMinAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorMinAggregate'] = ResolversParentTypes['AuthorMinAggregate']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AuthorMaxAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorMaxAggregate'] = ResolversParentTypes['AuthorMaxAggregate']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AuthorGroupByResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorGroupBy'] = ResolversParentTypes['AuthorGroupBy']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    _count?: Resolver<Maybe<ResolversTypes['AuthorCountAggregate']>, ParentType, ContextType>;
    _avg?: Resolver<Maybe<ResolversTypes['AuthorAvgAggregate']>, ParentType, ContextType>;
    _sum?: Resolver<Maybe<ResolversTypes['AuthorSumAggregate']>, ParentType, ContextType>;
    _min?: Resolver<Maybe<ResolversTypes['AuthorMinAggregate']>, ParentType, ContextType>;
    _max?: Resolver<Maybe<ResolversTypes['AuthorMaxAggregate']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type Resolvers<ContextType = MeshContext> = ResolversObject<{
    Query?: QueryResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    Book?: BookResolvers<ContextType>;
    AggregateBook?: AggregateBookResolvers<ContextType>;
    BookCountAggregate?: BookCountAggregateResolvers<ContextType>;
    BookAvgAggregate?: BookAvgAggregateResolvers<ContextType>;
    BookSumAggregate?: BookSumAggregateResolvers<ContextType>;
    BookMinAggregate?: BookMinAggregateResolvers<ContextType>;
    BookMaxAggregate?: BookMaxAggregateResolvers<ContextType>;
    BookGroupBy?: BookGroupByResolvers<ContextType>;
    AffectedRowsOutput?: AffectedRowsOutputResolvers<ContextType>;
    Author?: AuthorResolvers<ContextType>;
    AggregateAuthor?: AggregateAuthorResolvers<ContextType>;
    AuthorCountAggregate?: AuthorCountAggregateResolvers<ContextType>;
    AuthorAvgAggregate?: AuthorAvgAggregateResolvers<ContextType>;
    AuthorSumAggregate?: AuthorSumAggregateResolvers<ContextType>;
    AuthorMinAggregate?: AuthorMinAggregateResolvers<ContextType>;
    AuthorMaxAggregate?: AuthorMaxAggregateResolvers<ContextType>;
    AuthorGroupBy?: AuthorGroupByResolvers<ContextType>;
}>;
import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { InContextSdkMethod } from '@graphql-mesh/types';
export declare type QueryBookServiceSdk = {
    book: InContextSdkMethod<Query['book'], QuerybookArgs, MeshContext>;
    findFirstBook: InContextSdkMethod<Query['findFirstBook'], QueryfindFirstBookArgs, MeshContext>;
    books: InContextSdkMethod<Query['books'], QuerybooksArgs, MeshContext>;
    aggregateBook: InContextSdkMethod<Query['aggregateBook'], QueryaggregateBookArgs, MeshContext>;
    groupByBook: InContextSdkMethod<Query['groupByBook'], QuerygroupByBookArgs, MeshContext>;
};
export declare type MutationBookServiceSdk = {
    createBook: InContextSdkMethod<Mutation['createBook'], MutationcreateBookArgs, MeshContext>;
    deleteBook: InContextSdkMethod<Mutation['deleteBook'], MutationdeleteBookArgs, MeshContext>;
    updateBook: InContextSdkMethod<Mutation['updateBook'], MutationupdateBookArgs, MeshContext>;
    deleteManyBook: InContextSdkMethod<Mutation['deleteManyBook'], MutationdeleteManyBookArgs, MeshContext>;
    updateManyBook: InContextSdkMethod<Mutation['updateManyBook'], MutationupdateManyBookArgs, MeshContext>;
    upsertBook: InContextSdkMethod<Mutation['upsertBook'], MutationupsertBookArgs, MeshContext>;
};
export declare type SubscriptionBookServiceSdk = {};
export declare type QueryAuthorServiceSdk = {
    author: InContextSdkMethod<Query['author'], QueryauthorArgs, MeshContext>;
    findFirstAuthor: InContextSdkMethod<Query['findFirstAuthor'], QueryfindFirstAuthorArgs, MeshContext>;
    authors: InContextSdkMethod<Query['authors'], QueryauthorsArgs, MeshContext>;
    aggregateAuthor: InContextSdkMethod<Query['aggregateAuthor'], QueryaggregateAuthorArgs, MeshContext>;
    groupByAuthor: InContextSdkMethod<Query['groupByAuthor'], QuerygroupByAuthorArgs, MeshContext>;
};
export declare type MutationAuthorServiceSdk = {
    createAuthor: InContextSdkMethod<Mutation['createAuthor'], MutationcreateAuthorArgs, MeshContext>;
    deleteAuthor: InContextSdkMethod<Mutation['deleteAuthor'], MutationdeleteAuthorArgs, MeshContext>;
    updateAuthor: InContextSdkMethod<Mutation['updateAuthor'], MutationupdateAuthorArgs, MeshContext>;
    deleteManyAuthor: InContextSdkMethod<Mutation['deleteManyAuthor'], MutationdeleteManyAuthorArgs, MeshContext>;
    updateManyAuthor: InContextSdkMethod<Mutation['updateManyAuthor'], MutationupdateManyAuthorArgs, MeshContext>;
    upsertAuthor: InContextSdkMethod<Mutation['upsertAuthor'], MutationupsertAuthorArgs, MeshContext>;
};
export declare type SubscriptionAuthorServiceSdk = {};
export declare type BookServiceContext = {
    ["BookService"]: {
        Query: QueryBookServiceSdk;
        Mutation: MutationBookServiceSdk;
        Subscription: SubscriptionBookServiceSdk;
    };
};
export declare type AuthorServiceContext = {
    ["AuthorService"]: {
        Query: QueryAuthorServiceSdk;
        Mutation: MutationAuthorServiceSdk;
        Subscription: SubscriptionAuthorServiceSdk;
    };
};
export declare type MeshContext = BookServiceContext & AuthorServiceContext & BaseMeshContext;
import { GetMeshOptions } from '@graphql-mesh/runtime';
import { YamlConfig } from '@graphql-mesh/types';
export declare const rawConfig: YamlConfig.Config;
export declare function getMeshOptions(): GetMeshOptions;
export declare const documentsInSDL: any[];
export declare function getBuiltMesh(): Promise<MeshInstance>;
export declare function getMeshSDK(): Promise<{}>;
export declare type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>;
export declare function getSdk<C>(requester: Requester<C>): {};
export declare type Sdk = ReturnType<typeof getSdk>;
