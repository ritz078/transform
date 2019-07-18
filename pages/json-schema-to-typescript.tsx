import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import { compile } from "json-schema-to-typescript";
import { getWorker } from "@utils/workerWrapper";
import PrettierWorker from "@workers/prettier.worker";

let prettierWorker;
export default function() {
  const transformer = useCallback(async ({ value }) => {
    prettierWorker = prettierWorker || getWorker(PrettierWorker);

    const result = await compile(JSON.parse(value), "MySchema", {
      bannerComment: ""
    });
    return prettierWorker.send({
      language: "typescript",
      value: result
    });
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON Schema"
      editorLanguage="json"
      editorDefaultValue="jsonSchema"
      resultTitle="TypeScript"
      resultLanguage={"typescript"}
    />
  );
}
