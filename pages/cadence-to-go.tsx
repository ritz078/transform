import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback, useState } from "react";
import { newEasiGen } from "@lemonneko/easi-gen";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";

interface Settings {
  generateContractCode: boolean;
}

export default function CadenceToGo() {
  let generator: (source: string, ignoreContractGeneration: boolean) => string;
  const [settings, setSettings] = useState<Settings>({
    generateContractCode: false
  });
  React.useEffect(console.log, [settings]);
  const transformer = useCallback(
    async ({ value }) => {
      if (!generator) generator = await newEasiGen();
      const generated = generator(value, !settings.generateContractCode);
      return generated;
    },
    [settings]
  );

  const outputSettingsElement = useCallback<EditorPanelProps["settingElement"]>(
    ({ open, toggle }) => {
      return (
        <Form<Partial<Settings>>
          initialValues={settings}
          open={open}
          toggle={toggle}
          title={"Output Settings"}
          onSubmit={setSettings as any}
          formsFields={[
            {
              key: "generateContractCode",
              type: InputType.SWITCH,
              label: "Generate Interaction Code With Functions"
            }
          ]}
        />
      );
    },
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="Cadence types"
      editorLanguage="text"
      editorDefaultValue="cadence"
      resultTitle="Go types"
      resultLanguage={"go"}
      settings={settings}
      resultSettingsElement={outputSettingsElement}
    />
  );
}
