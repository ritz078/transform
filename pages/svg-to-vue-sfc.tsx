import * as React from "react";
import { SvgConverter } from "@components/SvgConverter";
import { useState } from "react";
import { defaultSettings, formFields } from "@constants/svgoConfig";
import { useCallback } from "react";
import { Transformer } from "@components/ConversionPanel";
import isSvg from "is-svg";
import { getWorker } from "@utils/workerWrapper";
import SvgoWorker from "@workers/svgo.worker";

let prettier, svgo, svgr;
export default function Index() {
  const name = "SVG to Vue SFC";
  const [settings, setSettings] = useState(defaultSettings);
  const [optimizedValue, setOptimizedValue] = useState("");

  const transformer = useCallback<Transformer>(
    async ({ value }) => {
      if (!isSvg(value)) throw new Error("This is not a valid svg code.");

      svgo = svgo || getWorker(SvgoWorker);

      let _value = value;

      if (settings.optimizeSvg) {
        _value = await svgo.send({
          value,
          settings
        });
      }

      setOptimizedValue(_value);

      return `
<template>
${_value}
</template>
      `;
    },
    [settings]
  );

  return (
    <SvgConverter
      transformer={transformer}
      formFields={formFields(defaultSettings)}
      setSettings={setSettings}
      optimizedValue={optimizedValue}
      settings={settings}
      name={name}
      resultTitle={"Vue Component"}
    />
  );
}
