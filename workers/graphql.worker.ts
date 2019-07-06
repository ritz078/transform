import { codegen } from "@graphql-codegen/core";
import { buildSchema, GraphQLSchema, parse, printSchema } from "graphql";
import { plugin as typescriptPlugin } from "@graphql-codegen/typescript";
import { plugin as typescriptOperation } from "@graphql-codegen/typescript-operations";
import { plugin as flowPlugin } from "@graphql-codegen/flow";
import { plugin as flowOperation } from "@graphql-codegen/flow-operations";
import { plugin as introspection } from "@graphql-codegen/introspection";
import { plugin as fragmentMatcher } from "@graphql-codegen/fragment-matcher";
import { plugin as schemaAst } from "@graphql-codegen/schema-ast";
import { plugin as java } from "@graphql-codegen/java";
import { GraphqlTransforms } from "@constants/graphqlTransforms";

const _self: any = self;

function getPlugins(type: GraphqlTransforms) {
  if (type === GraphqlTransforms.TO_TYPESCRIPT) {
    return [typescriptPlugin, typescriptOperation];
  } else if (type === GraphqlTransforms.TO_FLOW) {
    return [flowPlugin, flowOperation];
  } else if (type === GraphqlTransforms.TO_INTROSPECTION_JSON) {
    return [introspection];
  } else if (type === GraphqlTransforms.TO_FRAGMENT_MATCHER) {
    return [fragmentMatcher];
  } else if (type === GraphqlTransforms.TO_SCHEMA_AST) {
    return [schemaAst];
  } else if (type === GraphqlTransforms.TO_JAVA) {
    return [java];
  }
}

_self.onmessage = async ({ data: { id, payload } }) => {
  const { value, document = "", type } = payload;

  try {
    const plugins = getPlugins(type);

    const pluginMap = {};

    plugins.forEach((plugin, i) => {
      pluginMap[i + 1] = {
        plugin
      };
    });

    const schema: GraphQLSchema = buildSchema(value);

    const result = await codegen({
      filename: "a.ts",
      schema: parse(printSchema(schema)),
      // @ts-ignore
      plugins: plugins.map((_plugin, i) => ({
        [i + 1]: {}
      })),
      documents: document.trim()
        ? [
            {
              filePath: "",
              content: parse(document)
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
