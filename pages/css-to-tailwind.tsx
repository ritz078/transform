import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import { cssToTailwind, createCssToTailwind } from "css-to-tailwind";

export default function() {
  const transformer = useCallback<Transformer>(async ({ value }) => {
    return JSON.stringify(await cssToTailwind(value), null, 2);
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="CSS"
      editorLanguage="css"
      editorDefaultValue="css2"
      resultTitle="TailwindCSS"
      resultLanguage={"text"}
    />
  );
}
