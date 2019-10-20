import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import { normalize } from "jsonld";

export default function() {
  const transformer = useCallback(async ({ value }) => {
    return (await normalize(JSON.parse(value))) as Promise<string>;
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON-LD"
      editorDefaultValue="jsonLd"
      editorLanguage="json"
      resultTitle="Normalized"
      resultLanguage={"plaintext"}
    />
  );
}
