import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import yaml from "yaml";
import { getWorker } from "@utils/workerWrapper";
import PrettierWorker from "@workers/prettier.worker";

let prettier;
export default function() {
  const transformer = useCallback(async ({ value }) => {
    prettier = prettier || getWorker(PrettierWorker);
    return prettier.send({
      value: JSON.stringify(yaml.parse(value)),
      language: "json"
    });
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="YAML"
      editorLanguage="yaml"
      resultTitle="JSON"
      resultLanguage={"json"}
    />
  );
}
