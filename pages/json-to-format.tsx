import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";

export default function JsonToYaml() {
  const transformer = useCallback(
    ({ value }) => Promise.resolve(JSON.stringify(JSON.parse(value))),
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      editorDefaultValue="jsonformat"
      resultTitle="Format"
      resultLanguage={"json"}
    />
  );
}
