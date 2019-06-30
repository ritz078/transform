import { Pane, Alert, Intent } from "evergreen-ui";
import EditorPanel, { EditorPanelProps } from "@components/EditorPanel";
import * as React from "react";
import { useEffect, useState } from "react";
import { Language, useData } from "@hooks/useData";

function getEditorLanguage(lang: Language) {
  const mapping = {
    svg: "html"
  };

  return mapping[lang] || lang;
}

export type Transformer = (args: {
  value: string;
  splitEditorValue?: string;
}) => Promise<string>;

export interface ConversionPanelProps {
  splitTitle?: string;
  splitLanguage?: Language;
  editorTitle: string;
  editorLanguage: Language;
  resultTitle: string;
  resultLanguage: Language;
  splitEditorProps?: Partial<EditorPanelProps>;
  editorProps?: Partial<EditorPanelProps>;
  resultEditorProps?: Partial<EditorPanelProps>;
  transformer: Transformer;
  defaultSplitValue?: string;
  editorSettingsElement?: EditorPanelProps["settingElement"];
  settings?: any;
}

const ConversionPanel: React.FunctionComponent<
  ConversionPanelProps
> = function({
  splitEditorProps,
  editorProps,
  resultEditorProps,
  transformer,
  splitLanguage,
  splitTitle,
  editorLanguage,
  editorTitle,
  resultLanguage,
  resultTitle,
  editorSettingsElement,
  settings
}) {
  const [value, setValue] = useData(editorLanguage);
  const [splitValue, setSplitValue] = useData(splitLanguage);
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function transform() {
      try {
        const result = await transformer({
          value,
          splitEditorValue: splitTitle ? splitValue : undefined
        });

        setResult(result);
        setMessage("");
      } catch (e) {
        setMessage(e.message);
      }
    }

    transform();
  }, [splitValue, value, splitTitle, settings]);

  return (
    <>
      <Pane
        display="flex"
        flexDirection="row"
        height={"100vh"}
        overflow="hidden"
        flex={1}
      >
        <Pane display="flex" flex={1} borderRight flexDirection="column">
          <EditorPanel
            language={getEditorLanguage(editorLanguage)}
            onChange={setValue}
            hasLoad
            defaultValue={value}
            id={1}
            hasCopy={false}
            title={editorTitle}
            settingElement={editorSettingsElement}
            hasClear
            {...editorProps}
          />

          {splitTitle && (
            <EditorPanel
              title={splitTitle}
              defaultValue={splitValue}
              language={getEditorLanguage(splitLanguage)}
              id={2}
              hasCopy={false}
              onChange={setSplitValue}
              hasLoad
              hasClear
              {...splitEditorProps}
            />
          )}
        </Pane>
        <EditorPanel
          title={resultTitle}
          defaultValue={result}
          language={getEditorLanguage(resultLanguage)}
          id={3}
          editable={false}
          hasPrettier={false}
          {...resultEditorProps}
        />
      </Pane>

      {message && (
        <Alert
          paddingY={15}
          paddingX={20}
          left={250}
          right={0}
          position="absolute"
          intent="danger"
          bottom={0}
          title={message}
          backgroundColor="#FAE2E2"
        />
      )}
    </>
  );
};

export default React.memo(ConversionPanel);
