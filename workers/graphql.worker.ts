import { codegen } from "@graphql-codegen/core";
import { buildSchema, printSchema, parse, GraphQLSchema } from "graphql";
import { plugin as typescriptPlugin } from "@graphql-codegen/typescript";
import { plugin as typescriptOperation } from "@graphql-codegen/typescript-operations";
const _self: any = self;

_self.onmessage = async ({ data: { id, payload } }) => {
  const { value, document = "" } = payload;

  try {
    const schema: GraphQLSchema = buildSchema(value);

    const result = await codegen({
      filename: "",
      schema: parse(printSchema(schema)),
      plugins: [
        {
          typescript: {}
        },
        {
          typescriptOperation: {}
        }
      ],
      documents: document
        ? [
            {
              filePath: "",
              content: parse(document)
            }
          ]
        : [],
      config: {},
      pluginMap: {
        typescript: {
          plugin: typescriptPlugin
        },
        typescriptOperation: {
          plugin: typescriptOperation
        }
      }
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
