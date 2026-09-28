import ConversionPanel from "@components/ConversionPanel";
import * as React from "react";
import { useCallback, useState } from "react";
import CadenceWorker from "@workers/cadence.worker.ts?worker";
import { getWorker } from "@utils/workerWrapper";
import { EditorPanelProps } from "@components/EditorPanel";
import Form, { InputType } from "@components/Form";

interface Settings {
  generateContractCode: boolean;
}

let worker: ReturnType<typeof getWorker>;

export default function CadenceToGo() {
  const [settings, setSettings] = useState<Settings>({
    generateContractCode: false
  });
  const transformer = useCallback(
    async ({ value }) => {
      worker = worker || getWorker(CadenceWorker);
      return worker.send({
        value,
        generateContractCode: settings.generateContractCode
      });
    },
    [settings]
  );

  const outputSettingsElement = useCallback<
    NonNullable<EditorPanelProps["settingElement"]>
  >(({ open, toggle }) => {
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
  }, []);

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
