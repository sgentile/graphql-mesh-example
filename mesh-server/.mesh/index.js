"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.getMeshSDK = exports.getBuiltMesh = exports.documentsInSDL = exports.getMeshOptions = exports.rawConfig = exports.AuthorScalarFieldEnum = exports.BookScalarFieldEnum = exports.SortOrder = void 0;
const tslib_1 = require("tslib");
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var BookScalarFieldEnum;
(function (BookScalarFieldEnum) {
    BookScalarFieldEnum["id"] = "id";
    BookScalarFieldEnum["name"] = "name";
    BookScalarFieldEnum["authorId"] = "authorId";
})(BookScalarFieldEnum = exports.BookScalarFieldEnum || (exports.BookScalarFieldEnum = {}));
var AuthorScalarFieldEnum;
(function (AuthorScalarFieldEnum) {
    AuthorScalarFieldEnum["id"] = "id";
    AuthorScalarFieldEnum["name"] = "name";
})(AuthorScalarFieldEnum = exports.AuthorScalarFieldEnum || (exports.AuthorScalarFieldEnum = {}));
const graphql_1 = require("graphql");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const path_1 = require("path");
const cache_inmemory_lru_1 = (0, tslib_1.__importDefault)(require("@graphql-mesh/cache-inmemory-lru"));
const graphql_2 = (0, tslib_1.__importDefault)(require("@graphql-mesh/graphql"));
const merger_stitching_1 = (0, tslib_1.__importDefault)(require("@graphql-mesh/merger-stitching"));
const transform_type_merging_1 = (0, tslib_1.__importDefault)(require("@graphql-mesh/transform-type-merging"));
const schema_graphql_cjs_1 = (0, tslib_1.__importDefault)(require("./sources/BookService/schema.graphql.cjs"));
const schema_graphql_cjs_2 = (0, tslib_1.__importDefault)(require("./sources/AuthorService/schema.graphql.cjs"));
const importedModules = {
    // @ts-ignore
    ["@graphql-mesh/cache-inmemory-lru"]: cache_inmemory_lru_1.default,
    // @ts-ignore
    ["@graphql-mesh/graphql"]: graphql_2.default,
    // @ts-ignore
    ["@graphql-mesh/merger-stitching"]: merger_stitching_1.default,
    // @ts-ignore
    ["@graphql-mesh/transform-type-merging"]: transform_type_merging_1.default,
    // @ts-ignore
    [".mesh/sources/BookService/schema.graphql.cjs"]: schema_graphql_cjs_1.default,
    // @ts-ignore
    [".mesh/sources/AuthorService/schema.graphql.cjs"]: schema_graphql_cjs_2.default
};
const baseDir = (0, path_1.join)(__dirname, '..');
const importFn = (moduleId) => {
    const relativeModuleId = ((0, path_1.isAbsolute)(moduleId) ? (0, path_1.relative)(baseDir, moduleId) : moduleId).split('\\').join('/');
    if (!(relativeModuleId in importedModules)) {
        throw new Error(`Cannot find module '${relativeModuleId}'.`);
    }
    return Promise.resolve(importedModules[relativeModuleId]);
};
const rootStore = new store_1.MeshStore('.mesh', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
}), {
    readonly: true,
    validate: false
});
const cache_inmemory_lru_2 = (0, tslib_1.__importDefault)(require("@graphql-mesh/cache-inmemory-lru"));
const graphql_subscriptions_1 = require("graphql-subscriptions");
const events_1 = require("events");
const utils_1 = require("@graphql-mesh/utils");
const graphql_3 = (0, tslib_1.__importDefault)(require("@graphql-mesh/graphql"));
const merger_stitching_2 = (0, tslib_1.__importDefault)(require("@graphql-mesh/merger-stitching"));
const transform_type_merging_2 = (0, tslib_1.__importDefault)(require("@graphql-mesh/transform-type-merging"));
const utils_2 = require("@graphql-mesh/utils");
exports.rawConfig = { "sources": [{ "name": "AuthorService", "handler": { "graphql": { "endpoint": "http://localhost:5000/graphql" } }, "transforms": [{ "typeMerging": { "queryFields": [{ "queryFieldName": "author", "keyField": "id", "keyArg": "ids" }] } }] }, { "name": "BookService", "handler": { "graphql": { "endpoint": "http://localhost:5001/graphql" } }, "transforms": [{ "typeMerging": { "queryFields": [{ "queryFieldName": "book", "keyField": "id" }] } }] }], "additionalTypeDefs": "extend type Book {\n  author: Author\n}\n", "additionalResolvers": [{ "sourceName": "AuthorService", "sourceTypeName": "Query", "sourceFieldName": "authors", "keyField": "authorId", "keysArg": "ids", "targetTypeName": "Book", "targetFieldName": "author" }] };
async function getMeshOptions() {
    const cache = new cache_inmemory_lru_2.default({
        ...(exports.rawConfig.cache || {}),
        store: rootStore.child('cache'),
    });
    const eventEmitter = new events_1.EventEmitter({ captureRejections: true });
    eventEmitter.setMaxListeners(Infinity);
    const pubsub = new graphql_subscriptions_1.PubSub({ eventEmitter });
    const sourcesStore = rootStore.child('sources');
    const logger = new utils_1.DefaultLogger('🕸️');
    const sources = [];
    const transforms = [];
    const authorServiceTransforms = [];
    const bookServiceTransforms = [];
    const authorServiceHandler = new graphql_3.default({
        name: exports.rawConfig.sources[0].name,
        config: exports.rawConfig.sources[0].handler["graphql"],
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child(exports.rawConfig.sources[0].name),
        logger: logger.child(exports.rawConfig.sources[0].name),
        importFn
    });
    const bookServiceHandler = new graphql_3.default({
        name: exports.rawConfig.sources[1].name,
        config: exports.rawConfig.sources[1].handler["graphql"],
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child(exports.rawConfig.sources[1].name),
        logger: logger.child(exports.rawConfig.sources[1].name),
        importFn
    });
    const merger = new merger_stitching_2.default({
        cache,
        pubsub,
        logger: logger.child('StitchingMerger'),
        store: rootStore.child('stitchingMerger')
    });
    const additionalTypeDefs = [(0, graphql_1.parse)(/* GraphQL */ `extend type Book {
  author: Author
}`),];
    authorServiceTransforms.push(new transform_type_merging_2.default({
        apiName: exports.rawConfig.sources[0].name,
        config: exports.rawConfig.sources[0].transforms[0]["typeMerging"],
        baseDir,
        cache,
        pubsub,
        importFn
    }));
    bookServiceTransforms.push(new transform_type_merging_2.default({
        apiName: exports.rawConfig.sources[1].name,
        config: exports.rawConfig.sources[1].transforms[0]["typeMerging"],
        baseDir,
        cache,
        pubsub,
        importFn
    }));
    sources.push({
        name: 'AuthorService',
        handler: authorServiceHandler,
        transforms: authorServiceTransforms
    });
    sources.push({
        name: 'BookService',
        handler: bookServiceHandler,
        transforms: bookServiceTransforms
    });
    const additionalResolversRawConfig = [];
    additionalResolversRawConfig.push(exports.rawConfig.additionalResolvers[0]);
    const additionalResolvers = await (0, utils_2.resolveAdditionalResolvers)(baseDir, additionalResolversRawConfig, importFn, pubsub);
    const liveQueryInvalidations = exports.rawConfig.liveQueryInvalidations;
    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        liveQueryInvalidations,
    };
}
exports.getMeshOptions = getMeshOptions;
exports.documentsInSDL = [];
async function getBuiltMesh() {
    const meshConfig = await getMeshOptions();
    return (0, runtime_1.getMesh)(meshConfig);
}
exports.getBuiltMesh = getBuiltMesh;
async function getMeshSDK() {
    const { sdkRequester } = await getBuiltMesh();
    return getSdk(sdkRequester);
}
exports.getMeshSDK = getMeshSDK;
function getSdk(requester) {
    return {};
}
exports.getSdk = getSdk;
