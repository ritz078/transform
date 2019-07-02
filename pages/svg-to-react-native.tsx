import * as React from "react";
import BabelWorker from "@workers/babel.worker";
import { SvgConverter } from "@components/SvgConverter";
import { useCallback, useEffect, useRef, useState } from "react";
import { SnackSession } from "snack-sdk";
import QRCode from "qrcode.react";
import { Pane } from "evergreen-ui";
import {
  defaultNativeSettings,
  formFields,
  nativeRequiredSettings
} from "@constants/svgoConfig";
import isSvg from "is-svg";
import { getWorker } from "@utils/workerWrapper";
import PrettierWorker from "@workers/prettier.worker";
import SvgoWorker from "@workers/svgo.worker";
import { BabelTransforms } from "@constants/babelTransforms";
import HTML from "htmltojsx";
import { Transformer } from "@components/ConversionPanel";

let prettier, svgo, _babelWorker, converter;
export default function() {
  const name = "SVG to React Native";
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");
  const [settings, setSettings] = useState(defaultNativeSettings);
  const [optimizedValue, setOptimizedValue] = useState("");
  const snackSession = useRef<any>();

  useEffect(() => {
    (async function() {
      snackSession.current = new SnackSession({
        files: { "App.js": { contents: "", type: "CODE" } },
        sessionId: Math.random()
          .toString(36)
          .substr(2, 8),
        sdkVersion: "33.0.0"
      });

      snackSession.current.startAsync();
      const url = await snackSession.current.getUrlAsync();
      setUrl(url);
    })();
  }, []);

  useEffect(() => {
    (async function() {
      await snackSession.current.sendCodeAsync({
        "App.js": { contents: value, type: "CODE" }
      });
    })();
  }, [value]);

  const transformer = useCallback<Transformer>(
    async ({ value }) => {
      if (!isSvg(value)) throw new Error("This is not a valid svg code.");

      prettier = prettier || getWorker(PrettierWorker);
      svgo = svgo || getWorker(SvgoWorker);

      let _value = await svgo.send({
        value,
        settings: {
          ...(settings.optimizeSvg ? settings : {}),
          ...nativeRequiredSettings
        }
      });

      // set optimized value in state to be used by preview.
      setOptimizedValue(_value);

      // Now that the svg has been properly optimized, we should convert it into JSX.
      converter =
        converter ||
        new HTML({
          createClass: false
        });

      _value = converter.convert(_value);

      _babelWorker = _babelWorker || getWorker(BabelWorker);

      _value = await _babelWorker.send({
        type: BabelTransforms.SVG_TO_REACT_NATIVE_SVG,
        value: _value
      });

      setValue(_value);

      return prettier.send({
        value: _value,
        language: "jsx"
      });
    },
    [settings]
  );

  return (
    <>
      <SvgConverter
        settings={settings}
        setSettings={setSettings}
        transformer={transformer}
        babelWorker={BabelWorker}
        name={name}
        resultTitle={"React Native"}
        formFields={formFields(defaultNativeSettings)}
        optimizedValue={optimizedValue}
      />
      <Pane padding={20}>
        <QRCode value={url} />
      </Pane>
    </>
  );
}
