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
  const transformer = useCallback<Transformer>(async ({ value }) => {
    graphqlWorker = graphqlWorker || getWorker(GrapqlWorker);
    prettierWorker = prettierWorker || getWorker(PrettierWorker);

    const result = await graphqlWorker.send({
      type: GraphqlTransforms.TO_SCHEMA_AST,
      value
    });

    return prettierWorker.send({
      language: "graphql",
      value: result
    });
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      resultTitle="Schema AST"
      editorTitle="GraphQL Schema"
      editorLanguage="graphql"
      resultLanguage="graphql"
      editorProps={props}
    />
  );
}
