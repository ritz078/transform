import { Pane } from "evergreen-ui";
import EditorPanel, { EditorPanelProps } from "@components/EditorPanel";
import * as React from "react";
import { useEffect, useState } from "react";

export type Transformer = (args: {
  value: string;
  splitEditorValue?: string;
}) => Promise<string>;

interface ConversionPanelProps {
  splitTitle?: string;
  splitLanguage?: string;
  editorTitle: string;
  editorLanguage: string;
  resultTitle: string;
  resultLanguage: string;
  splitEditorProps?: Partial<EditorPanelProps>;
  editorProps?: Partial<EditorPanelProps>;
  resultEditorProps?: Partial<EditorPanelProps>;
  transformer: Transformer;
  defaultEditorValue: string;
  defaultSplitValue?: string;
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
  defaultEditorValue,
  defaultSplitValue
}) {
  const [value, setValue] = useState(defaultEditorValue);
  const [splitValue, setSplitValue] = useState(defaultSplitValue);
  const [result, setResult] = useState("");

  useEffect(() => {
    async function transform() {
      const result = await transformer({
        value,
        splitEditorValue: splitTitle ? splitValue : undefined
      });

      setResult(result);
    }

    transform();
  }, [splitValue, value, splitTitle]);

  return (
    <Pane
      display="flex"
      flexDirection="row"
      height={"100vh"}
      overflow="hidden"
      flex={1}
    >
      <Pane display="flex" flex={1} borderRight flexDirection="column">
        <EditorPanel
          language={editorLanguage}
          onChange={setValue}
          hasLoad
          defaultValue={value}
          id={1}
          title={editorTitle}
          hasSettings
          hasClear
          {...editorProps}
        />

        {splitTitle && (
          <EditorPanel
            title={splitTitle}
            defaultValue={splitValue}
            language={splitLanguage}
            id={2}
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
        language={resultLanguage}
        id={3}
        editable={false}
        hasPrettier={false}
        {...resultEditorProps}
      />
    </Pane>
  );
};

export default ConversionPanel;
