import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";

let flow2ts;
if (IN_BROWSER) {
  require("flow-to-ts");
  // @ts-ignore
  flow2ts = window.flow2ts;
}
export default function() {
  const transformer = useCallback(async ({ value }) => {
    return flow2ts(value);
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="Flow"
      editorLanguage="plaintext"
      editorDefaultValue="flow"
      resultTitle="TypeScript"
      resultLanguage={"typescript"}
    />
  );
}
