import {
  Button,
  FilePicker,
  Heading,
  HTMLInputEvent,
  Pane,
  Popover,
  TextInput,
  toaster
} from "evergreen-ui";
import React, { useCallback, useEffect, useState } from "react";
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
const toolbarIconClass =
  "inline-flex size-7 shrink-0 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700";

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
        <button
          type="button"
          className="inline-flex h-7 items-center gap-1 rounded-md px-2 font-mono text-[11px] text-slate-500 hover:bg-slate-100 hover:text-slate-700"
          onClick={_toggleSettingsDialog}
        >
          <span
            className="material-symbols-outlined text-sm"
            aria-hidden="true"
          >
            tune
          </span>
          Settings
        </button>

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
    <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-white">
      <div className="z-10 flex h-10 shrink-0 items-center border-b border-slate-200 bg-[#fafbfc] px-3">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            {editable ? "Input" : "Output"}
          </span>
          <span className="font-mono text-xs text-slate-300">/</span>
          <span
            className={`truncate font-mono text-[11px] font-medium ${
              editable ? "text-slate-600" : "text-[#635bff]"
            }`}
          >
            {title}
          </span>
        </div>

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
            <button
              type="button"
              className={toolbarIconClass}
              title="Load file or URL"
              aria-label="Load file or URL"
            >
              <span
                className="material-symbols-outlined text-sm"
                aria-hidden="true"
              >
                upload
              </span>
            </button>
          </Popover>
        )}

        {hasClear && (
          <button
            type="button"
            className={toolbarIconClass}
            title="Clear input"
            aria-label="Clear input"
            onClick={() => {
              setValue("");
              onChange?.("");
            }}
          >
            <span
              className="material-symbols-outlined text-sm"
              aria-hidden="true"
            >
              delete
            </span>
          </button>
        )}

        {!editable && (
          <button
            type="button"
            className={toolbarIconClass}
            title="Download output"
            aria-label="Download output"
            onClick={downloadValue}
          >
            <span
              className="material-symbols-outlined text-sm"
              aria-hidden="true"
            >
              download
            </span>
          </button>
        )}

        {hasCopy && (
          <button
            type="button"
            className="inline-flex h-6 items-center gap-1.5 rounded-full bg-slate-900 px-2.5 font-mono text-[11px] font-medium text-white hover:bg-slate-800"
            onClick={copyValue}
          >
            <span
              className="material-symbols-outlined text-[13px]"
              aria-hidden="true"
            >
              {copied ? "check" : "content_copy"}
            </span>
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>

      <div
        className="flex min-h-0 flex-1 flex-col overflow-hidden"
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
      <div className="flex h-8 shrink-0 items-center justify-between border-t border-slate-200 bg-[#fafbfc] px-3 font-mono text-[10px] text-slate-500">
        <span>
          {editable
            ? `Source • ${new Blob([value]).size} B`
            : `Target • ${language || "text"}`}
          {!editable && _packageDetails && (
            <>
              {" "}
              ·{" "}
              <a
                className="text-[#635bff] no-underline hover:underline"
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
        <span className={editable ? "text-emerald-500" : "text-slate-400"}>
          {editable
            ? value
              ? "Ready to transform"
              : "Empty input"
            : "Generated output"}
        </span>
      </div>
    </div>
  );
}
