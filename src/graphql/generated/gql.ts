/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery getPages($first: Int) {\n    pages(first: $first) {\n        id\n        heading\n        slug\n        body {\n            html\n        }\n    }\n}\n": types.GetPagesDocument,
    "\nquery getPageBySlug ($slug: String){\n    page(where: {slug: $slug}){\n     id\n     slug\n     heading\n     body {\n    html      }\n} }\n": types.GetPageBySlugDocument,
    "\nquery getPlaces($first: Int) {\n    places(first: $first) {\n    id\n    slug\n    name\n    location {\n        latitude\n        longitude\n    }\n    \n    description {\n        html\n    }\n    \n    gallery {\n        url\n        width\n        height\n    }}\n}\n": types.GetPlacesDocument,
    "\nquery getPlaceBySlug($slug: String) {\n    place (where: {slug: $slug}){\n    id\n    slug\n    name\n    location {\n        latitude\n        longitude\n    }\n    \n    description {\n        html\n        text\n    }\n    \n    gallery {\n            url\n            width\n            height\n    }\n}\n}\n": types.GetPlaceBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getPages($first: Int) {\n    pages(first: $first) {\n        id\n        heading\n        slug\n        body {\n            html\n        }\n    }\n}\n"): (typeof documents)["\nquery getPages($first: Int) {\n    pages(first: $first) {\n        id\n        heading\n        slug\n        body {\n            html\n        }\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getPageBySlug ($slug: String){\n    page(where: {slug: $slug}){\n     id\n     slug\n     heading\n     body {\n    html      }\n} }\n"): (typeof documents)["\nquery getPageBySlug ($slug: String){\n    page(where: {slug: $slug}){\n     id\n     slug\n     heading\n     body {\n    html      }\n} }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getPlaces($first: Int) {\n    places(first: $first) {\n    id\n    slug\n    name\n    location {\n        latitude\n        longitude\n    }\n    \n    description {\n        html\n    }\n    \n    gallery {\n        url\n        width\n        height\n    }}\n}\n"): (typeof documents)["\nquery getPlaces($first: Int) {\n    places(first: $first) {\n    id\n    slug\n    name\n    location {\n        latitude\n        longitude\n    }\n    \n    description {\n        html\n    }\n    \n    gallery {\n        url\n        width\n        height\n    }}\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getPlaceBySlug($slug: String) {\n    place (where: {slug: $slug}){\n    id\n    slug\n    name\n    location {\n        latitude\n        longitude\n    }\n    \n    description {\n        html\n        text\n    }\n    \n    gallery {\n            url\n            width\n            height\n    }\n}\n}\n"): (typeof documents)["\nquery getPlaceBySlug($slug: String) {\n    place (where: {slug: $slug}){\n    id\n    slug\n    name\n    location {\n        latitude\n        longitude\n    }\n    \n    description {\n        html\n        text\n    }\n    \n    gallery {\n            url\n            width\n            height\n    }\n}\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;