import { codegen } from "@graphql-codegen/core";
import { parse } from "graphql";
import * as typescriptPlugin from "@graphql-codegen/typescript";
import * as typescriptOperation from "@graphql-codegen/typescript-operations";
import * as flowPlugin from "@graphql-codegen/flow";
import * as flowOperation from "@graphql-codegen/flow-operations";
import * as introspection from "@graphql-codegen/introspection";
import * as fragmentMatcher from "@graphql-codegen/fragment-matcher";
import * as schemaAst from "@graphql-codegen/schema-ast";
import * as java from "@graphql-codegen/java";
import * as apolloAngular from "@graphql-codegen/typescript-apollo-angular";
import * as reactApollo from "@graphql-codegen/typescript-react-apollo";
import * as stencilApollo from "@graphql-codegen/typescript-stencil-apollo";
import * as tsResolvers from "@graphql-codegen/typescript-resolvers";
import * as flowResolvers from "@graphql-codegen/flow-resolvers";
import * as javaResolvers from "@graphql-codegen/java-resolvers";
import * as tsMongoDB from "@graphql-codegen/typescript-mongodb";
import * as urql from "@graphql-codegen/typescript-urql";
import { GraphqlTransforms } from "@constants/graphqlTransforms";

const _self: any = self;

function getPlugins(type: GraphqlTransforms) {
  switch (type) {
    case GraphqlTransforms.TO_TYPESCRIPT:
      return [typescriptPlugin, typescriptOperation];
    case GraphqlTransforms.TO_FLOW:
      return [flowPlugin, flowOperation];
    case GraphqlTransforms.TO_INTROSPECTION_JSON:
      return [introspection];
    case GraphqlTransforms.TO_FRAGMENT_MATCHER:
      return [fragmentMatcher];
    case GraphqlTransforms.TO_SCHEMA_AST:
      return [schemaAst];
    case GraphqlTransforms.TO_JAVA:
      return [java];
    case GraphqlTransforms.TO_REACT_APOLLO:
      return [typescriptPlugin, typescriptOperation, reactApollo];
    case GraphqlTransforms.TO_APOLLO_ANGULAR:
      return [typescriptPlugin, typescriptOperation, apolloAngular];
    case GraphqlTransforms.TO_STENCIL_APOLLO:
      return [typescriptPlugin, typescriptOperation, stencilApollo];
    case GraphqlTransforms.TO_TYPESCRIPT_RESOLVERS_SIGNATURE:
      return [typescriptPlugin, tsResolvers];
    case GraphqlTransforms.TO_JAVA_RESOLVERS_SIGNATURE:
      return [javaResolvers];
    case GraphqlTransforms.TO_FLOW_RESOLVERS_SIGNATURE:
      return [flowPlugin, flowResolvers];
    case GraphqlTransforms.TO_URQL:
      return [typescriptPlugin, typescriptOperation, urql];
    case GraphqlTransforms.TO_TYPESCRIPT_MONGODB:
      return [typescriptPlugin, tsMongoDB];
  }
}

_self.onmessage = async ({ data: { id, payload } }) => {
  const { value, document = "", type, extension = "tsx" } = payload;

  try {
    const plugins = getPlugins(type);

    const pluginMap = {};

    plugins.forEach((plugin, i) => {
      pluginMap[i + 1] = plugin;
    });

    const result = await codegen({
      filename: `a.${extension}`,
      schema: parse(value),
      // @ts-ignore
      plugins: plugins.map((_plugin, i) => ({
        [i + 1]: {}
      })),
      documents: document.trim()
        ? [
            {
              location: "",
              document: parse(document)
            }
          ]
        : [],
      config: {},
      pluginMap
    });

    _self.postMessage({
      id,
      payload: result
    });
  } catch (e) {
    _self.postMessage({
      id,
      err: e.message
    });
  }
};
