import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import request from "@utils/request";
import { Alert } from "evergreen-ui";

export default function TypescriptToJsonSchema() {
  const transformer = useCallback(async ({ value }) => {
    const x = await request(
      "/api/typescript-to-json-schema",
      value,
      "text/plain"
    );
    return JSON.stringify(x, null, 2);
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="TypeScript"
      editorLanguage="typescript"
      editorDefaultValue="typeScriptInterface"
      resultTitle="JSON Schema"
      resultLanguage={"json"}
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
