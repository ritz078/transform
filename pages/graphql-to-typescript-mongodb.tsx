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
      type: GraphqlTransforms.TO_TYPESCRIPT_MONGODB,
      value
    });

    return prettierWorker.send({
      language: "typescript",
      value: result
    });
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      resultTitle="TypeScript MongoDB"
      editorTitle="GraphQL Schema"
      editorDefaultValue="graphqlMongodb"
      editorLanguage="graphql"
      resultLanguage="typescript"
      editorProps={props}
    />
  );
}
