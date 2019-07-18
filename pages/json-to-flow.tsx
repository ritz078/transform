import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import { json2ts } from "json-ts";
import { useSettings } from "@hooks/useSettings";
import Form from "@components/Form";
import { EditorPanelProps } from "@components/EditorPanel";
import { Settings } from "@constants/svgoConfig";
import { defaultSettings, formFields } from "./json-to-typescript";

export default function() {
  const name = "json-to-flow";

  const [settings, setSettings] = useSettings(name, defaultSettings);

  const getSettingsElement = useCallback<EditorPanelProps["settingElement"]>(
    ({ open, toggle }) => {
      return (
        <Form<Settings>
          title="JSON to Flow"
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
      return json2ts(value, { flow: true, ...settings });
    },
    [settings]
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="Flow"
      resultLanguage={"typescript"}
      resultSettingsElement={getSettingsElement}
      settings={settings}
    />
  );
}
