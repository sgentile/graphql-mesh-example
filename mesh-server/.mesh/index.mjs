export var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder || (SortOrder = {}));
export var BookScalarFieldEnum;
(function (BookScalarFieldEnum) {
    BookScalarFieldEnum["id"] = "id";
    BookScalarFieldEnum["name"] = "name";
    BookScalarFieldEnum["authorId"] = "authorId";
})(BookScalarFieldEnum || (BookScalarFieldEnum = {}));
export var AuthorScalarFieldEnum;
(function (AuthorScalarFieldEnum) {
    AuthorScalarFieldEnum["id"] = "id";
    AuthorScalarFieldEnum["name"] = "name";
})(AuthorScalarFieldEnum || (AuthorScalarFieldEnum = {}));
import { parse } from 'graphql';
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { join, relative, isAbsolute, dirname } from 'path';
import { fileURLToPath } from 'url';
import ExternalModule_0 from '@graphql-mesh/cache-inmemory-lru';
import ExternalModule_1 from '@graphql-mesh/graphql';
import ExternalModule_2 from '@graphql-mesh/merger-stitching';
import ExternalModule_3 from '@graphql-mesh/transform-type-merging';
import ExternalModule_4 from './sources/BookService/schema.graphql.cjs';
import ExternalModule_5 from './sources/AuthorService/schema.graphql.cjs';
const importedModules = {
    // @ts-ignore
    ["@graphql-mesh/cache-inmemory-lru"]: ExternalModule_0,
    // @ts-ignore
    ["@graphql-mesh/graphql"]: ExternalModule_1,
    // @ts-ignore
    ["@graphql-mesh/merger-stitching"]: ExternalModule_2,
    // @ts-ignore
    ["@graphql-mesh/transform-type-merging"]: ExternalModule_3,
    // @ts-ignore
    [".mesh/sources/BookService/schema.graphql.cjs"]: ExternalModule_4,
    // @ts-ignore
    [".mesh/sources/AuthorService/schema.graphql.cjs"]: ExternalModule_5
};
const baseDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const importFn = (moduleId) => {
    const relativeModuleId = (isAbsolute(moduleId) ? relative(baseDir, moduleId) : moduleId).split('\\').join('/');
    if (!(relativeModuleId in importedModules)) {
        throw new Error(`Cannot find module '${relativeModuleId}'.`);
    }
    return Promise.resolve(importedModules[relativeModuleId]);
};
const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
}), {
    readonly: true,
    validate: false
});
import MeshCache from '@graphql-mesh/cache-inmemory-lru';
import { PubSub } from 'graphql-subscriptions';
import { EventEmitter } from 'events';
import { DefaultLogger } from '@graphql-mesh/utils';
import GraphqlHandler from '@graphql-mesh/graphql';
import StitchingMerger from '@graphql-mesh/merger-stitching';
import TypeMergingTransform from '@graphql-mesh/transform-type-merging';
import { resolveAdditionalResolvers } from '@graphql-mesh/utils';
export const rawConfig = { "sources": [{ "name": "AuthorService", "handler": { "graphql": { "endpoint": "http://localhost:5000/graphql" } }, "transforms": [{ "typeMerging": { "queryFields": [{ "queryFieldName": "author", "keyField": "id", "keyArg": "ids" }] } }] }, { "name": "BookService", "handler": { "graphql": { "endpoint": "http://localhost:5001/graphql" } }, "transforms": [{ "typeMerging": { "queryFields": [{ "queryFieldName": "book", "keyField": "id" }] } }] }], "additionalTypeDefs": "extend type Book {\n  author: Author\n}\n", "additionalResolvers": [{ "sourceName": "AuthorService", "sourceTypeName": "Query", "sourceFieldName": "authors", "keyField": "authorId", "keysArg": "ids", "targetTypeName": "Book", "targetFieldName": "author" }] };
export async function getMeshOptions() {
    const cache = new MeshCache({
        ...(rawConfig.cache || {}),
        store: rootStore.child('cache'),
    });
    const eventEmitter = new EventEmitter({ captureRejections: true });
    eventEmitter.setMaxListeners(Infinity);
    const pubsub = new PubSub({ eventEmitter });
    const sourcesStore = rootStore.child('sources');
    const logger = new DefaultLogger('🕸️');
    const sources = [];
    const transforms = [];
    const authorServiceTransforms = [];
    const bookServiceTransforms = [];
    const authorServiceHandler = new GraphqlHandler({
        name: rawConfig.sources[0].name,
        config: rawConfig.sources[0].handler["graphql"],
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child(rawConfig.sources[0].name),
        logger: logger.child(rawConfig.sources[0].name),
        importFn
    });
    const bookServiceHandler = new GraphqlHandler({
        name: rawConfig.sources[1].name,
        config: rawConfig.sources[1].handler["graphql"],
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child(rawConfig.sources[1].name),
        logger: logger.child(rawConfig.sources[1].name),
        importFn
    });
    const merger = new StitchingMerger({
        cache,
        pubsub,
        logger: logger.child('StitchingMerger'),
        store: rootStore.child('stitchingMerger')
    });
    const additionalTypeDefs = [parse(/* GraphQL */ `extend type Book {
  author: Author
}`),];
    authorServiceTransforms.push(new TypeMergingTransform({
        apiName: rawConfig.sources[0].name,
        config: rawConfig.sources[0].transforms[0]["typeMerging"],
        baseDir,
        cache,
        pubsub,
        importFn
    }));
    bookServiceTransforms.push(new TypeMergingTransform({
        apiName: rawConfig.sources[1].name,
        config: rawConfig.sources[1].transforms[0]["typeMerging"],
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
    additionalResolversRawConfig.push(rawConfig.additionalResolvers[0]);
    const additionalResolvers = await resolveAdditionalResolvers(baseDir, additionalResolversRawConfig, importFn, pubsub);
    const liveQueryInvalidations = rawConfig.liveQueryInvalidations;
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
export const documentsInSDL = /*#__PURE__*/ [];
export async function getBuiltMesh() {
    const meshConfig = await getMeshOptions();
    return getMesh(meshConfig);
}
export async function getMeshSDK() {
    const { sdkRequester } = await getBuiltMesh();
    return getSdk(sdkRequester);
}
export function getSdk(requester) {
    return {};
}
