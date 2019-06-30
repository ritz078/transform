import * as React from "react";
import { useCallback } from "react";
import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import HtmlToJsx from "htmltojsx";
import PrettierWorker from "@workers/prettier.worker";
import { getWorker } from "@utils/workerWrapper";
import isSvg from "is-svg";
import SvgoWorker from "@workers/svgo.worker";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";
import { useSettings } from "@hooks/useSettings";
import { lowerCase } from "lodash";

export interface Settings {
  cleanupAttrs: boolean;
  removeDoctype: boolean;
  removeXMLProcInst: boolean;
  removeComments: boolean;
  removeMetadata: boolean;
  removeTitle: boolean;
  removeDesc: boolean;
  removeUselessDefs: boolean;
  removeEditorsNSData: boolean;
  removeEmptyAttrs: boolean;
  removeHiddenElems: boolean;
  removeEmptyText: boolean;
  removeEmptyContainers: boolean;
  removeViewBox: boolean;
  cleanupEnableBackground: boolean;
  convertStyleToAttrs: boolean;
  convertColors: boolean;
  convertPathData: boolean;
  convertTransform: boolean;
  removeUnknownsAndDefaults: boolean;
  removeNonInheritableGroupAttrs: boolean;
  removeUselessStrokeAndFill: boolean;
  removeUnusedNS: boolean;
  cleanupIDs: boolean;
  cleanupNumericValues: boolean;
  moveElemsAttrsToGroup: boolean;
  moveGroupAttrsToElems: boolean;
  collapseGroups: boolean;
  removeRasterImages: boolean;
  mergePaths: boolean;
  convertShapeToPath: boolean;
  sortAttrs: boolean;
  removeDimensions: boolean;
  optimizeSvg: boolean;
}

const defaultSettings: Settings = {
  cleanupAttrs: true,
  removeDoctype: true,
  removeXMLProcInst: false,
  removeComments: true,
  removeMetadata: true,
  removeTitle: true,
  removeDesc: true,
  removeUselessDefs: true,
  removeEditorsNSData: true,
  removeEmptyAttrs: true,
  removeHiddenElems: true,
  removeEmptyText: true,
  removeEmptyContainers: true,
  removeViewBox: true,
  cleanupEnableBackground: true,
  convertStyleToAttrs: true,
  convertColors: true,
  convertPathData: true,
  convertTransform: true,
  removeUnknownsAndDefaults: true,
  removeNonInheritableGroupAttrs: true,
  removeUselessStrokeAndFill: true,
  removeUnusedNS: true,
  cleanupIDs: true,
  cleanupNumericValues: false,
  moveElemsAttrsToGroup: true,
  moveGroupAttrsToElems: true,
  collapseGroups: true,
  removeRasterImages: true,
  mergePaths: true,
  convertShapeToPath: true,
  sortAttrs: true,
  removeDimensions: true,
  optimizeSvg: false
};

const formFields = Object.keys({
  optimizeSvg: false,
  ...defaultSettings
}).map((property: keyof Settings) => ({
  label: lowerCase(property),
  type: InputType.SWITCH,
  key: property,
  ...(property !== "optimizeSvg"
    ? {
        isDisabled: values => !values.optimizeSvg,
        props: { paddingLeft: 20, borderLeft: "2px solid #FDF8F3" }
      }
    : {})
}));

let prettier, svgo;
export default function() {
  const name = "SVG to JSX";

  const [settings, setSettings] = useSettings(name, defaultSettings);

  const getSettingsPanel = useCallback<EditorPanelProps["settingElement"]>(
    ({ open, toggle }) => (
      <Form<Settings>
        initialValues={defaultSettings}
        open={open}
        toggle={toggle}
        title={"SVGO Settings"}
        onSubmit={setSettings}
        formsFields={formFields}
      />
    ),
    []
  );

  const transformer = useCallback<Transformer>(
    async ({ value }) => {
      if (!isSvg(value)) throw new Error("This is not a valid svg code.");

      const converter = new HtmlToJsx({
        createClass: false
      });
      const _prettier = prettier || getWorker(PrettierWorker);

      let _value = value;
      if (settings.optimizeSvg) {
        svgo = svgo || getWorker(SvgoWorker);
        _value = await svgo.send({
          value,
          settings
        });
      }

      return _prettier.send({
        value: converter.convert(_value),
        language: "jsx"
      });
    },
    [settings]
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="SVG"
      resultLanguage="javascript"
      resultTitle="JSX"
      editorLanguage="svg"
      settings={settings}
      editorSettingsElement={getSettingsPanel}
    />
  );
}
