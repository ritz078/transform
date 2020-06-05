import { editor } from "monaco-editor";
import {
  Button,
  FilePicker,
  Heading,
  HTMLInputEvent,
  Icon,
  IconButton,
  Pane,
  Popover,
  Spinner,
  TextInput,
  toaster,
  Tooltip
} from "evergreen-ui";
import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import copy from "clipboard-copy";
import { getWorker, Wrapper } from "@utils/workerWrapper";
import Npm from "@assets/svgs/Npm";
import { supportedLanguages } from "@utils/prettier";
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

let prettierWorker: Wrapper;
if (IN_BROWSER) {
  const PrettierWorker = require("@workers/prettier.worker");
  prettierWorker = getWorker(PrettierWorker);
}

const Monaco = dynamic(() => import("../components/Monaco"), {
  ssr: false,
  loading: () => (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={400}
      flex={1}
    >
      <Spinner />
    </Pane>
  )
});

export default function({
  editable = true,
  title,
  settingElement,
  hasLoad,
  acceptFiles,
  hasClear,
  previewElement,
  hasCopy = true,
  hasPrettier = true,
  topNotifications,
  language,
  defaultValue,
  onChange,
  id,
  packageDetails
}: EditorPanelProps) {
  const [showSettingsDialogue, setSettingsDialog] = useState(false);
  const [showPreview, setPreviewVisibility] = useState(true);
  const [value, setValue] = useState(defaultValue);
  const editorRef = useRef(null);
  const [fetchingUrl, setFetchingUrl] = useState("");

  const options: editor.IEditorOptions = {
    fontSize: 14,
    readOnly: !editable,
    codeLens: false,
    fontFamily: "Menlo, Consolas, monospace, sans-serif",
    minimap: {
      enabled: false
    },
    quickSuggestions: false,
    lineNumbers: "on"
  };

  const _toggleSettingsDialog = useCallback(
    () => setSettingsDialog(!showSettingsDialogue),
    [showSettingsDialogue]
  );

  useEffect(() => {
    // @ts-ignore
    window.__webpack_public_path__ = "/_next/static/";
  }, []);

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

        {settingElement({
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
      onChange(reader.result as string);
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
    toaster.success("Copied to clipboard.", {
      id
    });
  }, [value]);

  const prettify = useCallback(() => {
    prettierWorker
      .send({
        language,
        value
      })
      .then(setValue);
  }, [language, value]);

  useEffect(() => {
    editorRef.current && editorRef.current.reLayout();
  }, [showPreview]);

  const fetchFile = useCallback(
    close => {
      (async () => {
        if (!fetchingUrl) return;
        const res = await fetch(fetchingUrl);
        const value = await res.text();
        setValue(value);
        setFetchingUrl("");
        close();
        onChange(value);
      })();
    },
    [fetchingUrl, onChange]
  );

  // whenever defaultValue changes, change the value of the editor.
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Pane display="flex" flex={1} flexDirection="column" overflow="hidden">
      <Pane
        display="flex"
        height={40}
        paddingX={10}
        alignItems={"center"}
        borderBottom
        zIndex={2}
        flexShrink={0}
      >
        <Pane flex={1}>
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
              onClick={() => setValue("")}
            />
          </Tooltip>
        )}

        {previewElement && (
          <Tooltip content="Preview">
            <IconButton
              height={28}
              icon={"eye-open"}
              marginRight={10}
              isActive={showPreview}
              onClick={() => setPreviewVisibility(!showPreview)}
            />
          </Tooltip>
        )}

        {packageDetails && (
          <a
            href={packageDetails.url}
            style={{
              display: "inline-flex"
            }}
            target="_blank"
          >
            <Tooltip content={packageDetails.name}>
              <Npm />
            </Tooltip>
          </a>
        )}

        {hasCopy && (
          <Button
            appearance="primary"
            marginRight={10}
            iconBefore="duplicate"
            onClick={copyValue}
            height={28}
          >
            Copy
          </Button>
        )}

        {hasPrettier && supportedLanguages.includes(language) && (
          <Button appearance="primary" onClick={prettify} height={28}>
            Prettify
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

        <Monaco
          language={language}
          value={value}
          options={options}
          onChange={value => {
            setValue(value);
            onChange(value);
          }}
          innerRef={editorRef}
        />
      </div>

      {IN_BROWSER && showPreview && previewElement && (
        <Pane display="flex" flex={1} flexDirection="column" overflow="hidden">
          <Pane
            height={50}
            backgroundColor="#fff"
            zIndex={2}
            borderTop
            position={"relative"}
            alignItems={"center"}
            display="flex"
            paddingX={20}
          >
            <Heading size={500} flex={1}>
              Preview
            </Heading>
            <Icon
              size={20}
              cursor="pointer"
              icon="cross"
              onClick={() => setPreviewVisibility(false)}
            />
          </Pane>
          <Pane
            height={"40vh"}
            display="flex"
            width={"100%"}
            borderTop
            backgroundColor="#fff"
            zIndex={2}
            overflow="hidden"
          >
            {previewElement(value)}
          </Pane>
        </Pane>
      )}
    </Pane>
  );
}
