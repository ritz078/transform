import ConversionPanel from "@components/ConversionPanel";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";
import { useSettings } from "@hooks/useSettings";
import * as React from "react";
import { useCallback } from "react";

interface Settings {
  rootName: string;
}

const formFields = [
  {
    type: InputType.TEXT_INPUT,
    key: "rootName",
    label: "Root Schema Name"
  }
];

export default function JsonSchemaToZod() {
  const name = "JSON Schema to Zod Schema";

  const [settings, setSettings] = useSettings(name, {
    rootName: "schema"
  });

  const transformer = useCallback(
    async ({ value }) => {
      const { jsonSchemaToZod } = await import("json-schema-to-zod");
      return jsonSchemaToZod(JSON.parse(value), settings.rootName, true);
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
      editorTitle="JSON Schema"
      editorLanguage="json"
      editorDefaultValue="jsonSchema"
      resultTitle="Zod Schema"
      resultLanguage={"typescript"}
      editorSettingsElement={getSettingsElement}
      settings={settings}
    />
  );
}
