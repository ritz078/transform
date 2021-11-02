import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import { parse } from "@iarna/toml";

export default function TomlToJson() {
  const transformer = useCallback(
    ({ value }) => Promise.resolve(JSON.stringify(parse(value))),
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="TOML"
      editorLanguage="toml"
      resultTitle="JSON"
      resultLanguage={"json"}
    />
  );
}
