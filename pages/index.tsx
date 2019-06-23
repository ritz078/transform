import * as React from "react";
import { useCallback } from "react";
import { json } from "@constants/data";
import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import { getWorker } from "@utils/workerWrapper";

export default function() {
  const transformer = useCallback<Transformer>(async ({ value }) => {
    const Worker = require("@workers/babel.worker");
    return getWorker(Worker).send(value);
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      defaultEditorValue={json}
      editorTitle="JSON"
      resultLanguage="javascript"
      resultTitle="PropTypes"
      editorLanguage="json"
    />
  );
}
