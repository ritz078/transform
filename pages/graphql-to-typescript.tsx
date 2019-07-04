import { useCallback } from "react";
import * as React from "react";
import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import { getWorker } from "@utils/workerWrapper";
import GrapqlWorker from "@workers/graphql.worker";

let graphqlWorker;
export default function() {
  const transformer = useCallback<Transformer>(
    async ({ value, splitEditorValue }) => {
      graphqlWorker = graphqlWorker || getWorker(GrapqlWorker);

      return graphqlWorker.send({
        value,
        document: splitEditorValue
      });
    },
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      resultTitle="TypeScript"
      editorTitle="GraphQL Schema"
      editorLanguage="graphql"
      resultLanguage="typescript"
      editorProps={{
        acceptFiles: "text/css"
      }}
      splitTitle="Document"
      splitLanguage="graphqlDocument"
    />
  );
}
