import { Pane, Alert, Spinner } from "evergreen-ui";
import EditorPanel, { EditorPanelProps } from "@components/EditorPanel";
import * as React from "react";
import { useEffect, useState } from "react";
import { Language, useData } from "@hooks/useData";
import { useRouter } from "next/router";
import { activeRouteData } from "@utils/routes";
import PrettierWorker from "@workers/prettier.worker";
import { getWorker } from "@utils/workerWrapper";

let prettierWorker;

function getEditorLanguage(lang: Language) {
  const mapping = {
    flow: "typescript"
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
  editorDefaultValue?: string;
  resultTitle: React.ReactNode;
  resultLanguage: Language;
  splitEditorProps?: Partial<EditorPanelProps>;
  splitEditorDefaultValue?: string;
  editorProps?: Partial<EditorPanelProps>;
  resultEditorProps?: Partial<EditorPanelProps>;
  transformer: Transformer;
  defaultSplitValue?: string;
  editorSettingsElement?: EditorPanelProps["settingElement"];
  resultSettingsElement?: EditorPanelProps["settingElement"];
  settings?: any;
}

const ConversionPanel: React.FunctionComponent<ConversionPanelProps> = function({
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
  settings,
  editorDefaultValue,
  splitEditorDefaultValue,
  resultSettingsElement
}) {
  const [value, setValue] = useData(editorDefaultValue || editorLanguage);
  const [splitValue, setSplitValue] = useData(
    splitEditorDefaultValue || splitLanguage
  );
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [showUpdateSpinner, toggleUpdateSpinner] = useState(false);

  const router = useRouter();
  const route = activeRouteData(router.pathname);

  let packageDetails;

  if (route) {
    const { packageUrl, packageName } = route;

    packageDetails =
      packageName && packageUrl
        ? {
            name: packageName,
            url: packageUrl
          }
        : undefined;
  }

  useEffect(() => {
    async function transform() {
      try {
        toggleUpdateSpinner(true);
        prettierWorker = prettierWorker || getWorker(PrettierWorker);

        const result = await transformer({
          value,
          splitEditorValue: splitTitle ? splitValue : undefined
        });

        const prettyResult = await prettierWorker.send({
          value: result,
          language: resultLanguage
        });
        setResult(prettyResult);
        setMessage("");
      } catch (e) {
        console.error(e);
        setMessage(e.message);
      }
      toggleUpdateSpinner(false);
    }

    transform();
  }, [splitValue, value, splitTitle, settings]);

  return (
    <>
      <Pane
        display="flex"
        flexDirection="row"
        overflow="hidden"
        flex={1}
        height={"calc(100vh - 40px)"}
      >
        <Pane
          display="flex"
          flex={1}
          borderRight
          flexDirection="column"
          overflow="hidden"
        >
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
            <Pane display="flex" flex={1} borderTop>
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
            </Pane>
          )}
        </Pane>
        <Pane display="flex" flex={1} position="relative">
          {showUpdateSpinner && (
            <Pane
              display="inline-flex"
              position="absolute"
              backgroundColor="#fff"
              zIndex={9}
              borderRadius={"50%"}
              paddingX={8}
              paddingY={8}
              elevation={1}
              top={50}
              right={30}
            >
              <Spinner
                css={{
                  "& circle": {
                    stroke: "#0e7ccf"
                  }
                }}
                size={32}
              />
            </Pane>
          )}
          <EditorPanel
            title={resultTitle}
            defaultValue={result}
            language={getEditorLanguage(resultLanguage)}
            id={3}
            editable={false}
            hasPrettier={false}
            settingElement={resultSettingsElement}
            packageDetails={packageDetails}
            {...resultEditorProps}
          />
        </Pane>
      </Pane>

      {message && (
        <Alert
          paddingY={15}
          paddingX={20}
          left={240}
          right={0}
          position="absolute"
          intent="danger"
          bottom={0}
          title={message}
          backgroundColor="#FAE2E2"
          zIndex={3}
        />
      )}
    </>
  );
};

export default React.memo(ConversionPanel);
