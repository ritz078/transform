import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import { getWorker } from "@utils/workerWrapper";
import PrettierWorker from "@workers/prettier.worker";
import { xml2json } from "xml-js";

let prettier;
export default function() {
  const transformer = useCallback(async ({ value }) => {
    prettier = prettier || getWorker(PrettierWorker);
    return prettier.send({
      value: JSON.stringify(
        JSON.parse(
          xml2json(value, {
            compact: true
          })
        )
      ),
      language: "json"
    });
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="XML"
      editorLanguage="xml"
      resultTitle="JSON"
      resultLanguage={"json"}
    />
  );
}
