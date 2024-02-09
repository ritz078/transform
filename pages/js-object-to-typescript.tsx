import * as React from "react";
import { useCallback } from "react";
import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import { useSettings } from "@hooks/useSettings";
import { EditorPanelProps } from "@components/EditorPanel";
import { Settings } from "@constants/svgoConfig";
import Form, { InputType } from "@components/Form";

const formFields = [
  {
    type: InputType.SWITCH,
    key: "typealias",
    label: "Create Mono Type"
  }
];

export default function JsObjectToTypescript() {
  const name = "JS Object to Typescript";

  const [settings, setSettings] = useSettings(name, {
    typealias: false
  });

  const transformer = useCallback(
    async ({ value }) => {
      const result = JSON.stringify
        (eval("("
          + value
          + ")"), null, 2);

      const { run } = await import("json_typegen_wasm");

      return run(
        "Root",
        result,
        JSON.stringify({
          output_mode: settings.typealias
            ? "typescript/typealias"
            : "typescript"
        })
      );
    },
    [settings]
  );

  const getSettingsElement = useCallback<EditorPanelProps["settingElement"]>(
    ({ open, toggle }) => {
      return (
        <Form<Settings>
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

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JS Object"
      editorDefaultValue="jsObject"
      editorLanguage="javascript"
      resultTitle="TypeScript"
      resultLanguage={"typescript"}
      editorSettingsElement={getSettingsElement}
      settings={settings}
    />
  );
}
