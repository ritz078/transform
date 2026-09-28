import {
  Button,
  FilePicker,
  Heading,
  HTMLInputEvent,
  IconButton,
  Pane,
  Popover,
  TextInput,
  toaster,
  Tooltip
} from "evergreen-ui";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { lazy, Suspense } from "react";
import copy from "clipboard-copy";
import { useDropzone } from "react-dropzone";

export interface EditorPanelProps {
  editable?: boolean;
  language?: string;
  defaultValue: string;
  title: React.ReactNode;
  hasCopy?: boolean;
  hasPrettier?: boolean;
  id: string | number;
  onChange?: (value: string) => void;
  hasLoad?: boolean;
  hasClear?: boolean;
  settingElement?: (args: { toggle: () => void; open: boolean }) => JSX.Element;
  alertMessage?: React.ReactNode;
  topNotifications?: (args: {
    toggleSettings: () => void;
    isSettingsOpen: boolean;
  }) => React.ReactNode;
  previewElement?: (value: string) => React.ReactNode;
  acceptFiles?: string | string[];
  packageDetails?: {
    name: string;
    url: string;
  };
}

const Monaco = lazy(() => import("./Monaco"));

export default function EditorPanel({
  editable = true,
  title,
  settingElement,
  hasLoad,
  acceptFiles,
  hasClear,
  hasCopy = true,
  topNotifications,
  language,
  defaultValue,
  onChange,
  id,
  packageDetails: _packageDetails
}: EditorPanelProps) {
  const [showSettingsDialogue, setSettingsDialog] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [fetchingUrl, setFetchingUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const options = {
    fontSize: 12.5,
    readOnly: !editable,
    codeLens: false,
    fontFamily: "JetBrains Mono, Menlo, Consolas, monospace",
    lineHeight: 24,
    padding: { top: 6, bottom: 6 },
    scrollBeyondLastLine: false,
    minimap: {
      enabled: false
    },
    quickSuggestions: false,
    lineNumbers: "on",
    renderValidationDecorations: "off"
  };

  const _toggleSettingsDialog = useCallback(
    () => setSettingsDialog(!showSettingsDialogue),
    [showSettingsDialogue]
  );

  const getSettings = useCallback(
    () => (
      <>
        <Button
          marginRight={10}
          iconBefore="cog"
          onClick={_toggleSettingsDialog}
          height={28}
        >
          Settings
        </Button>

        {settingElement?.({
          toggle: _toggleSettingsDialog,
          open: showSettingsDialogue
        })}
      </>
    ),
    [showSettingsDialogue]
  );

  const onFilePicked = useCallback((files, close = () => {}) => {
    if (!(files && files.length)) return;
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file, "utf-8");
    reader.onload = () => {
      setValue(reader.result as string);
      onChange?.(reader.result as string);
      close();
    };
  }, []);

  const { getRootProps } = useDropzone({
    onDrop: files => onFilePicked(files),
    disabled: !editable,
    accept: acceptFiles,
    onDropRejected: () =>
      toaster.danger("This file type is not supported.", {
        id
      })
  });

  const copyValue = useCallback(() => {
    copy(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toaster.success("Copied to clipboard.", {
      id
    });
  }, [value]);

  const downloadValue = useCallback(() => {
    const file = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `transform-output.${
      language === "typescript"
        ? "ts"
        : language === "javascript"
        ? "jsx"
        : language || "txt"
    }`;
    link.click();
    URL.revokeObjectURL(url);
  }, [value, language]);

  const fetchFile = useCallback(
    close => {
      (async () => {
        if (!fetchingUrl) return;
        const res = await fetch(fetchingUrl);
        const value = await res.text();
        setValue(value);
        setFetchingUrl("");
        close();
        onChange?.(value);
      })();
    },
    [fetchingUrl, onChange]
  );

  // whenever defaultValue changes, change the value of the editor.
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Pane
      className={`editor-panel ${editable ? "input-panel" : "output-panel"}`}
      display="flex"
      flex={1}
      flexDirection="column"
      overflow="hidden"
    >
      <Pane
        className="editor-header"
        display="flex"
        height={40}
        paddingX={10}
        alignItems={"center"}
        borderBottom
        zIndex={2}
        backgroundColor="#FFFFFF"
        flexShrink={0}
      >
        <Pane flex={1} className="editor-heading">
          <span className="editor-heading-label">
            {editable ? "Input" : "Output"}
          </span>
          <span className="editor-heading-slash">/</span>
          <Heading size={500} marginTop={0}>
            {title}
          </Heading>
        </Pane>

        {settingElement && getSettings()}

        {hasLoad && (
          <Popover
            content={({ close }) => (
              <Pane
                paddingY={20}
                paddingX={20}
                display="flex"
                flex={1}
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                backgroundColor="#FFFFFF"
              >
                <FilePicker
                  width={"100%"}
                  name="filepicker"
                  onChange={files => onFilePicked(files, close)}
                  accept={acceptFiles}
                />

                <Heading paddingY={10} size={200}>
                  OR
                </Heading>

                <Pane display="flex" flexDirection="row">
                  <TextInput
                    borderBottomRightRadius={0}
                    borderTopRightRadius={0}
                    placeholder="Enter URL"
                    onChange={(e: HTMLInputEvent) =>
                      setFetchingUrl(e.target.value)
                    }
                  />
                  <Button
                    borderLeftWidth={0}
                    borderBottomLeftRadius={0}
                    borderTopLeftRadius={0}
                    onClick={() => fetchFile(close)}
                  >
                    Fetch URL
                  </Button>
                </Pane>
              </Pane>
            )}
            shouldCloseOnExternalClick
          >
            <Tooltip content="Load File">
              <IconButton height={28} marginRight={10} icon="upload" />
            </Tooltip>
          </Popover>
        )}

        {hasClear && (
          <Tooltip content="Clear">
            <IconButton
              height={28}
              icon="trash"
              intent="danger"
              marginRight={10}
              onClick={() => {
                setValue("");
                onChange?.("");
              }}
            />
          </Tooltip>
        )}

        {!editable && (
          <Tooltip content="Download output">
            <IconButton
              className="editor-download-button"
              height={28}
              icon="download"
              onClick={downloadValue}
            />
          </Tooltip>
        )}

        {hasCopy && (
          <Button
            className="editor-copy-button"
            appearance="primary"
            marginRight={10}
            iconBefore={copied ? "tick" : "duplicate"}
            onClick={copyValue}
            height={28}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        )}
      </Pane>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "hidden"
        }}
        {...getRootProps()}
      >
        {topNotifications &&
          topNotifications({
            isSettingsOpen: showSettingsDialogue,
            toggleSettings: _toggleSettingsDialog
          })}

        <Suspense fallback={<div role="status">Loading editor…</div>}>
          <Monaco
            language={language}
            value={value}
            options={options}
            onChange={value => {
              setValue(value);
              onChange?.(value);
            }}
          />
        </Suspense>
      </div>
      <div className="editor-footer">
        <span>
          {editable
            ? `Source • ${new Blob([value]).size} B`
            : `Target • ${language || "text"}`}
          {!editable && _packageDetails && (
            <>
              {" "}
              ·{" "}
              <a
                href={_packageDetails.url}
                target="_blank"
                rel="noreferrer"
                title={`Powered by ${_packageDetails.name}`}
              >
                {_packageDetails.name}
              </a>
            </>
          )}
        </span>
        <span>
          {editable
            ? value
              ? "Ready to transform"
              : "Empty input"
            : "Generated output"}
        </span>
      </div>
    </Pane>
  );
}
