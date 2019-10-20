import * as React from "react";
import { useCallback } from "react";
import ConversionPanel from "@components/ConversionPanel";

export default function() {
  const transformer = useCallback(async ({ value }) => {
    return JSON.stringify(
      eval(
        "(" +
        value
          .replace("=>", ":")
          .replace(":", "")
          .replace(/"/g, '\\"') // escape double quotes
          .replace(/([a-zA-Z0-9_]+?):/g, '"$1":') // double quote keys
          .replace(/'(.+?)'(,| })/g, '"$1"$2') + // double quote values
          ")"
      ),
      null,
      2
    );
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="Ruby Hash"
      editorLanguage="ruby"
      resultTitle="JSON"
      resultLanguage={"json"}
    />
  );
}
