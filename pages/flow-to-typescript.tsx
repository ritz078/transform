import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import BabelWorker from "@workers/babel.worker";
import { getWorker } from "@utils/workerWrapper";
import { BabelTransforms } from "@constants/babelTransforms";

let babelWorker;
export default function() {
  const transformer = useCallback(async ({ value }) => {
    babelWorker = babelWorker || getWorker(BabelWorker);

    return babelWorker.send({
      type: BabelTransforms.FLOW_TO_TYPESCRIPT,
      value
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
