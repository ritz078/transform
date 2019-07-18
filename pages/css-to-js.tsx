import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import React, { useCallback } from "react";
import { getWorker } from "@utils/workerWrapper";
import PostCssWorker from "@workers/postcss.worker";
import PrettierWorker from "@workers/prettier.worker";
import { useSettings } from "@hooks/useSettings";

let postCssWorker, prettier;
export default function() {
  const name = "CSS to JS";

  const [settings, setSettings] = useSettings(name, {
    reactNativeCompatible: false,
    cleanPropertyNames: false
  });

  const transformer = useCallback<Transformer>(async ({ value }) => {
    postCssWorker = postCssWorker || getWorker(PostCssWorker);
    prettier = prettier || getWorker(PrettierWorker);

    const _value = await postCssWorker.send(value);
    return prettier.send({
      value: `const converted = ${_value}`,
      language: "javascript"
    });
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      resultTitle="JavaScript Object"
      editorTitle="CSS"
      editorLanguage="css"
      resultLanguage="javascript"
      editorProps={{
        acceptFiles: "text/css"
      }}
    />
  );
}
