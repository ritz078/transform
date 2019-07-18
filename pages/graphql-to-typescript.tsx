import { useCallback } from "react";
import * as React from "react";
import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import { getWorker } from "@utils/workerWrapper";
import GrapqlWorker from "@workers/graphql.worker";
import PrettierWorker from "@workers/prettier.worker";
import { GraphqlTransforms } from "@constants/graphqlTransforms";

let graphqlWorker, prettierWorker;

const props = {
  acceptFiles: ".graphql, .gql"
};

export default function() {
  const transformer = useCallback<Transformer>(
    async ({ value, splitEditorValue }) => {
      graphqlWorker = graphqlWorker || getWorker(GrapqlWorker);
      prettierWorker = prettierWorker || getWorker(PrettierWorker);

      const result = await graphqlWorker.send({
        type: GraphqlTransforms.TO_TYPESCRIPT,
        value,
        document: splitEditorValue
      });

      return prettierWorker.send({
        language: "typescript",
        value: result
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
      editorDefaultValue="graphql1"
      resultLanguage="typescript"
      editorProps={props}
      splitEditorProps={props}
      splitTitle="Document"
      splitLanguage="graphql"
      splitEditorDefaultValue="graphqlDocument"
    />
  );
}
