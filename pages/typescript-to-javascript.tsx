import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import request from "@utils/request";
import { Alert } from "evergreen-ui";

export default function TypescriptToJavascript() {
  const transformer = useCallback(
    ({ value }) =>
      request("/api/typescript-to-javascript", value, "plain/text"),
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="TypeScript"
      editorLanguage="typescript"
      editorDefaultValue="typescript"
      resultTitle="JavaScript"
      resultLanguage={"javascript"}
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
