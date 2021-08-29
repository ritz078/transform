import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import { stringify } from "@iarna/toml";

export default function JsonToToml() {
  const transformer = useCallback(
    ({ value }) => Promise.resolve(stringify(JSON.parse(value))),
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="TOML"
      resultLanguage={"toml"}
    />
  );
}
