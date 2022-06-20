import ConversionPanel from "@components/ConversionPanel";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";
import { useSettings } from "@hooks/useSettings";
import * as React from "react";
import { useCallback } from "react";
import request from "@utils/request";

interface Settings {
  keepComments: boolean;
  skipParseJSDoc: boolean;
}

const formFields = [
  {
    type: InputType.SWITCH,
    key: "keepComments",
    label: "Keep TSDoc Comments"
  },
  {
    type: InputType.SWITCH,
    key: "skipParseJSDoc",
    label: "Skip the creation of zod validators from JSDoc annotations"
  }
];

export default function TypescriptToZod() {
  const name = "JSON to Zod Schema";

  const [settings, setSettings] = useSettings(name, {
    keepComments: false,
    skipParseJSDoc: false
  });

  const transformer = useCallback(
    async ({ value }) => {
      const { keepComments, skipParseJSDoc } = settings;
      const params = new URLSearchParams({
        keepComments,
        skipParseJSDoc
      }).toString();

      const { schema, error } = await request(
        `/api/typescript-to-zod?${params}`,
        value,
        "text/plain"
      );

      if (error) {
        throw new Error(error);
      }

      return schema;
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
      editorTitle="TypeScript"
      editorLanguage="typescript"
      editorDefaultValue="typeScriptInterface"
      resultTitle="Zod Schema"
      resultLanguage={"typescript"}
      editorSettingsElement={getSettingsElement}
      settings={settings}
    />
  );
}
