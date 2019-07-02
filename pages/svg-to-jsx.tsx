import * as React from "react";
import { SvgConverter } from "@components/SvgConverter";
import { useState } from "react";
import { defaultSettings, formFields } from "@constants/svgoConfig";
import { useCallback } from "react";
import { Transformer } from "@components/ConversionPanel";
import isSvg from "is-svg";
import { getWorker } from "@utils/workerWrapper";
import PrettierWorker from "@workers/prettier.worker";
import SvgoWorker from "@workers/svgo.worker";
import HTML from "htmltojsx";

let prettier, svgo, converter;
export default function() {
  const name = "SVG to JSX";
  const [settings, setSettings] = useState(defaultSettings);
  const [optimizedValue, setOptimizedValue] = useState("");

  const transformer = useCallback<Transformer>(
    async ({ value }) => {
      if (!isSvg(value)) throw new Error("This is not a valid svg code.");

      prettier = prettier || getWorker(PrettierWorker);
      svgo = svgo || getWorker(SvgoWorker);

      let _value = value;

      if (settings.optimizeSvg) {
        _value = await svgo.send({
          value,
          settings
        });
      }

      // set optimized value in state to be used by preview.
      setOptimizedValue(_value);

      // Now that the svg has been properly optimized, we should convert it into JSX.
      converter =
        converter ||
        new HTML({
          createClass: false
        });

      _value = converter.convert(_value);

      return prettier.send({
        value: _value,
        language: "jsx"
      });
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
      resultTitle={"JSX"}
    />
  );
}
