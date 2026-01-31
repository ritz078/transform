import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import jwt from "jsonwebtoken";

export default function JwtToJson() {
  const name = "jwt-to-json";

  const transformer = useCallback(async ({ value }) => {
    try {
      const decoded = jwt.decode(value.trim(), { complete: true });
      return JSON.stringify(decoded, null, 2);
    } catch (error) {
      return `Error decoding JWT: ${error}`;
    }
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JWT"
      editorLanguage="text"
      editorDefaultValue="jwt"
      resultTitle="JSON"
      resultLanguage={"json"}
    />
  );
}
