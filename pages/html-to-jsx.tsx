import * as React from "react";
import { useCallback } from "react";
import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import HtmlToJsx from "htmltojsx";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";
import { useSettings } from "@hooks/useSettings";

interface Settings {
  createClass: boolean;
  outputClassName: string;
}

const formFields = [
  {
    type: InputType.SWITCH,
    key: "createClass",
    label: "Create Class"
  },
  {
    type: InputType.TEXT_INPUT,
    key: "outputClassName",
    label: "Output Class Name"
  }
];

export default function() {
  const name = "HTML to JSX";

  const [settings, setSettings] = useSettings(name, {
    createClass: false,
    outputClassName: "TransformedComponent"
  });

  const transformer = useCallback<Transformer>(
    async ({ value }) => {
      const converter = new HtmlToJsx(settings);
      return converter.convert(value);
    },
    [settings]
  );

  const getSettingsElement = useCallback<EditorPanelProps["settingElement"]>(
    ({ open, toggle }) => {
      return (
        <Form<Settings>
          title="HTML to JSX"
          onSubmit={setSettings}
          open={open}
          toggle={toggle}
          formsFields={formFields}
          initialValues={settings}
        />
      );
    },
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="HTML"
      resultLanguage="javascript"
      resultTitle="JSX"
      editorLanguage="html"
      editorSettingsElement={getSettingsElement}
      settings={settings}
    />
  );
}
