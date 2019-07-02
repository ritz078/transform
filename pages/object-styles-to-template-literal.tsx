import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import BabelWorker from "@workers/babel.worker";
import React, { useCallback } from "react";
import { getWorker } from "@utils/workerWrapper";
import { BabelTransforms } from "@constants/babelTransforms";

let babelWorker;
export default function() {
  const transformer = useCallback<Transformer>(({ value }) => {
    babelWorker = babelWorker || getWorker(BabelWorker);

    return babelWorker.send({
      value,
      type: BabelTransforms.OBJECT_STYLES_TO_TEMPLATE
    });
  }, []);

  return (
    <ConversionPanel
      resultLanguage="javascript"
      editorLanguage="javascript"
      editorTitle={"Object Styles"}
      resultTitle="Template Literal"
      transformer={transformer}
    />
  );
}
