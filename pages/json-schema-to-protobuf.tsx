import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import convert from "jsonschema-protobuf";

const PROTO_IDENTIFIER_RE = /^[A-Za-z_][A-Za-z0-9_]*$/;

function sanitizeIdentifier(identifier: string) {
  let sanitized = identifier.replace(/[^A-Za-z0-9_]/g, "_");
  if (!sanitized || /^[0-9]/.test(sanitized)) {
    sanitized = `field_${sanitized}`;
  }
  return sanitized;
}

function sanitizeSchema(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(sanitizeSchema);
  }

  if (!value || typeof value !== "object") {
    return value;
  }

  const source = value as Record<string, unknown>;
  const next: Record<string, unknown> = {};

  for (const [key, entry] of Object.entries(source)) {
    if (key === "properties" && entry && typeof entry === "object" && !Array.isArray(entry)) {
      const sanitizedProperties: Record<string, unknown> = {};
      const nameCounts: Record<string, number> = {};

      for (const [propName, propValue] of Object.entries(entry as Record<string, unknown>)) {
        let safeName = PROTO_IDENTIFIER_RE.test(propName)
          ? propName
          : sanitizeIdentifier(propName);

        const count = nameCounts[safeName] ?? 0;
        nameCounts[safeName] = count + 1;
        if (count > 0) {
          safeName = `${safeName}_${count + 1}`;
        }

        sanitizedProperties[safeName] = sanitizeSchema(propValue);
      }

      next[key] = sanitizedProperties;
      continue;
    }

    next[key] = sanitizeSchema(entry);
  }

  return next;
}

export default function JsonSchemaToProtobuf() {
  const transformer = useCallback<Transformer>(
    async ({ value }) => {
      const parsed = JSON.parse(value);
      const sanitized = sanitizeSchema(parsed);
      return convert(JSON.stringify(sanitized));
    },
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON Schema"
      editorLanguage="json"
      editorDefaultValue="jsonSchema"
      resultTitle="Protobuf"
      resultLanguage={"text"}
    />
  );
}
