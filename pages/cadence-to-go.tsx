import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import { Alert } from "evergreen-ui";
import gofmt from "gofmt.js";
import { CadenceParser } from "@lemonneko/flow__cadence-parser";

async function cadenceToGo(value: string) {
  const parser = await CadenceParser.create("https://cdn.jsdelivr.net/npm/@lemonneko/flow__cadence-parser@0.24.1/dist/cadence-parser.wasm")
  const ast = parser.parse(value);
  console.log(ast)
  // TODO:
}

export default function CadenceToGo() {
  const transformer = useCallback(({ value }) => gofmt(cadenceToGo(value)),[]);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="Cadence"
      editorLanguage="cadence"
      editorDefaultValue="cadence"
      resultTitle="Go struct"
      resultLanguage={"go"}
      resultEditorProps={{
        topNotifications: () => (
          <Alert
            backgroundColor="#e7f7ff"
            title="This code is converted on the server."
          />
        )
      }}
    />
  );
}
