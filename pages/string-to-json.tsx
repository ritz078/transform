import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";

export default function JsonToYaml() {
  const transformer = useCallback(
    ({ value }) =>
      Promise.resolve(JSON.stringify(JSON.parse(JSON.parse(value)))),
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="String"
      editorLanguage="plaintext"
      editorDefaultValue="stringjson"
      resultTitle="JSON"
      resultLanguage={"json"}
    />
  );
}
