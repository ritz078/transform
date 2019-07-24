import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";

export default function() {
  const transformer = useCallback<Transformer>(async ({ value }) => {
    const { run } = await import("json_typegen_wasm");
    return run(
      "Root",
      value,
      JSON.stringify({
        output_mode: "rust"
      })
    );
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="Rust Serde"
      resultLanguage={"rust"}
    />
  );
}
