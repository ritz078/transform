import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import { json2ts } from "json-ts";
import { useSettings } from "@hooks/useSettings";
import Form, { InputType } from "@components/Form";
import { EditorPanelProps } from "@components/EditorPanel";
import { Settings } from "@constants/svgoConfig";

export const formFields = [
  {
    type: InputType.TEXT_INPUT,
    key: "namespace",
    label: "Namespace"
  },
  {
    type: InputType.TEXT_INPUT,
    key: "prefix",
    label: "prefix"
  },
  {
    type: InputType.TEXT_INPUT,
    key: "rootName",
    label: "Root Name"
  }
];

export const defaultSettings = {
  namespace: "",
  prefix: "I",
  rootName: "RootObject"
};

export default function() {
  const name = "json-to-typescript";

  const [settings, setSettings] = useSettings(name, defaultSettings);

  const getSettingsElement = useCallback<EditorPanelProps["settingElement"]>(
    ({ open, toggle }) => {
      return (
        <Form<Settings>
          title="JSON to TypeScript"
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

  const transformer = useCallback(
    async ({ value }) => {
      return json2ts(value, settings);
    },
    [settings]
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="TypeScript"
      resultLanguage={"typescript"}
      editorSettingsElement={getSettingsElement}
      settings={settings}
    />
  );
}
