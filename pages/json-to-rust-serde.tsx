import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import { useSettings } from "@hooks/useSettings";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";
import jsonToRustSerde from "@assets/vendor/json-to-rust-serde";

const formFields = [
  {
    label: "Convert keys to Snake Case",
    key: "snakeCase",
    type: InputType.SWITCH
  }
];

export default function() {
  const name = "JSON to Rust Serde";

  const [settings, setSettings] = useSettings(name, {
    snakeCase: false
  });

  const getSettingsElement = useCallback<EditorPanelProps["settingElement"]>(
    ({ open, toggle }) => {
      return (
        <Form<{
          snakeCase: boolean;
        }>
          title={name}
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

  const transformer = useCallback<Transformer>(
    async ({ value }) => {
      return jsonToRustSerde(value, {
        lang: "rust-serde",
        rustCase: settings.snakeCase ? "snakeCase" : "camelCase"
      });
    },
    [settings]
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="Rust Serde"
      resultLanguage={"rust"}
      editorSettingsElement={getSettingsElement}
      settings={settings}
    />
  );
}
