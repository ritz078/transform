import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import BabelWorker from "@workers/babel.worker";
import { getWorker } from "@utils/workerWrapper";
import { BabelTransforms } from "@constants/babelTransforms";
import PrettierWorker from "@workers/prettier.worker";

let babelWorker, prettier;
export default function() {
  const transformer = useCallback(async ({ value }) => {
    babelWorker = babelWorker || getWorker(BabelWorker);
    prettier = prettier || getWorker(PrettierWorker);

    const _value = await babelWorker.send({
      type: BabelTransforms.FLOW_TO_TYPESCRIPT,
      value
    });

    return prettier.send({
      language: "typescript",
      value: _value
    });
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="Flow"
      editorLanguage="flow"
      resultTitle="TypeScript"
      resultLanguage={"typescript"}
    />
  );
}
