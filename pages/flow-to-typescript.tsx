import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import BabelWorker from "@workers/babel.worker";
import { getWorker } from "@utils/workerWrapper";
import { BabelTransforms } from "@constants/babelTransforms";
import babelFlowToTs from "babel-plugin-flow-to-typescript";
import { transform } from "@babel/standalone";

let babelWorker;
export default function() {
  const transformer = useCallback(async ({ value }) => {
    babelWorker = babelWorker || getWorker(BabelWorker);

    return transform(value, {
      plugins: [babelFlowToTs]
    }).code;
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
