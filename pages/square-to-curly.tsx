import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";

export default function SquareToCurly() {
  const transformer = useCallback(async ({ value }) => {
    if (typeof value === "string") {
      return value.replace(/\[/g, "{").replace(/\]/g, "}");
    }
    return "";
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="Square Brackets"
      editorDefaultValue="square"
      editorLanguage="plaintext"
      resultTitle="Curly Braces"
      resultLanguage={"plaintext"}
    />
  );
}
