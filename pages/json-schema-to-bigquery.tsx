import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";

interface JsonSchemaProperty {
  description?: string;
  nullable?: boolean;
  type: string;
  items?: JsonSchema;
}

interface JsonSchema {
  properties: {
    [key: string]: JsonSchemaProperty;
  };
  required?: string[];
}

interface BigQuerySchema {
  name: string;
  description?: string;
  type: string;
  mode?: string;
  fields?: BigQuerySchema[];
}

function convertJsonSchemaToBigQuery(
  jsonSchema: JsonSchema
): { fields: BigQuerySchema[] } {
  const bigquerySchema: BigQuerySchema[] = [];

  // Loop through each field in the JSON schema object
  for (let field in jsonSchema.properties) {
    const schema: BigQuerySchema = {} as BigQuerySchema;

    // Set the name of the field
    schema.name = field;

    // Set the description of the field, if available
    if (jsonSchema.properties[field].description) {
      schema.description = jsonSchema.properties[field].description;
    }

    // Set the required of the field, if available
    if (jsonSchema.required && jsonSchema.required.includes(field)) {
      schema.mode = "REQUIRED";
    }
    // Set the nullable of the field, if available
    else if (jsonSchema.properties[field].nullable) {
      schema.mode = "NULLABLE";
    }

    // Determine the type of the field
    switch (jsonSchema.properties[field].type) {
      case "string":
        schema.type = "STRING";
        break;
      case "number":
        schema.type = "FLOAT";
        break;
      case "integer":
        schema.type = "INTEGER";
        break;
      case "boolean":
        schema.type = "BOOLEAN";
        break;
      case "array":
        schema.mode = "REPEATED";
        schema.type = "RECORD";
        schema.fields = convertJsonSchemaToBigQuery(
          jsonSchema.properties[field].items
        ).fields;
        break;
      case "object":
        schema.type = "RECORD";
        const subJsonSchema: JsonSchema = {
          properties: { [field]: jsonSchema.properties[field] }
        };
        schema.fields = convertJsonSchemaToBigQuery(subJsonSchema).fields;
        break;
      default:
        schema.type = "STRING";
    }

    // Add the schema to the BigQuery schema array
    bigquerySchema.push(schema);
  }

  // Return the BigQuery schema object
  return { fields: bigquerySchema };
}

export default function JsonSchemaToBigQuery() {
  const transformer = useCallback(async ({ value }) => {
    const jsonSchema: JsonSchema = JSON.parse(value);
    const bigQueryFieldSchema = convertJsonSchemaToBigQuery(jsonSchema).fields;
    return JSON.stringify(bigQueryFieldSchema);
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON Schema"
      editorLanguage="json"
      editorDefaultValue="jsonSchema"
      resultTitle="BigQuery Schema"
      resultLanguage={"json"}
    />
  );
}
