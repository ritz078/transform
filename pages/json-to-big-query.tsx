import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import gs from "generate-schema";
import stringify from "stringify-object";

export default function() {
  const transformer = useCallback(({ value }) => {
    return stringify(gs.bigquery(JSON.parse(value)));
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="Big Query Schema"
      resultLanguage={"json"}
    />
  );
}
