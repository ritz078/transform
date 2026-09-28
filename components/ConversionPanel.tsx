import { Pane, Alert, Spinner } from "evergreen-ui";
import EditorPanel, { EditorPanelProps } from "@components/EditorPanel";
import * as React from "react";
import { useEffect, useState } from "react";
import { Language, useData } from "@hooks/useData";
import { useRouterState } from "@tanstack/react-router";
import { activeRouteData } from "@utils/routes";
import PrettierWorker from "@workers/prettier.worker.ts?worker";
import { getWorker } from "@utils/workerWrapper";

let prettierWorker;

function getEditorLanguage(lang?: Language) {
  const mapping = {
    flow: "typescript"
  };

  return lang ? mapping[lang] || lang : lang;
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

  const pathname = useRouterState({ select: state => state.location.pathname });
  const route = activeRouteData(pathname);

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

        let prettyResult = await prettierWorker.send({
          value: result,
          language: resultLanguage
        });

        // Fix for #319
        if (prettyResult.startsWith(";<")) {
          prettyResult = prettyResult.slice(1);
        }
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
      <div className="flex h-full min-h-0 min-w-0 flex-1 overflow-hidden max-[800px]:flex-col">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden border-r border-slate-200 max-[800px]:border-r-0 max-[800px]:border-b">
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
            <div className="flex min-h-0 flex-1 border-t border-slate-200">
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
            </div>
          )}
        </div>
        <div className="relative flex min-h-0 min-w-0 flex-1">
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
        </div>
      </div>

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
