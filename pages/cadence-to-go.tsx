import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import { newEasiGen } from "@lemonneko/easi-gen";

export default function CadenceToGo() {
  let generator;
  const transformer = useCallback(async ({ value }) => {
    if (!generator) generator = await newEasiGen();
    const generated = generator(value);
    return generated;
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="Cadence contract"
      editorLanguage="text"
      editorDefaultValue="cadence"
      resultTitle="Go interaction code"
      resultLanguage={"go"}
    />
  );
}
