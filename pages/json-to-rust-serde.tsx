import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import * as React from "react";
import { useCallback, useEffect } from "react";

export default function() {
  useEffect(() => {
    import("@utils/textEncoder");
  }, []);

  const transformer = useCallback<Transformer>(async ({ value }) => {
    const { run } = await import(
      "@assets/vendor/json-to-rust/json_typegen_wasm"
    );
    return run(
      "Hello",
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
