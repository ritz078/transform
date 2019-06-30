import React from "react";
import dynamic from "next/dynamic";
import { editor } from "monaco-editor";
import {
  Button,
  Pane,
  Spinner,
  toaster,
  Dialog,
  Heading,
  Popover,
  FilePicker,
  TextInput,
  HTMLInputEvent,
  IconButton,
  Tooltip
} from "evergreen-ui";
import copy from "clipboard-copy";
import { ThemeContext } from "@utils/theme";
import { getWorker, Wrapper } from "@utils/workerWrapper";

let prettierWorker: Wrapper;
if (typeof window !== "undefined") {
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

export interface EditorPanelProps {
  editable?: boolean;
  language?: string;
  defaultValue: string;
  title: string;
  hasCopy?: boolean;
  hasPrettier?: boolean;
  id: string | number;
  onChange: (value: string) => void;
  hasLoad?: boolean;
  hasClear?: boolean;
  settingElement?: (args: { toggle: () => void; open: boolean }) => JSX.Element;
}

interface EditorPanelState {
  value: string;
  showSettingsDialogue: boolean;
  fetchingUrl: string;
  defaultValue: string;
}

export default class extends React.PureComponent<
  EditorPanelProps,
  EditorPanelState
> {
  static contextType = ThemeContext;

  static defaultProps: Partial<EditorPanelProps> = {
    language: "javascript",
    editable: true,
    hasCopy: true,
    hasPrettier: true
  };

  state = {
    value: this.props.defaultValue,
    showSettingsDialogue: false,
    fetchingUrl: "",
    defaultValue: this.props.defaultValue
  };

  editorDidMount = editor => {
    editor.focus();
  };

  onChange = value => {
    this.setState(
      {
        value
      },
      () => this.props.onChange(value)
    );
  };

  componentDidMount() {
    // @ts-ignore
    window.__webpack_public_path__ = "/static/";
  }

  private copy = () => {
    copy(this.state.value);
    toaster.success("Copied to clipboard.", {
      id: this.props.id
    });
  };

  private toggleSettingsDialog = () =>
    this.setState({
      showSettingsDialogue: !this.state.showSettingsDialogue
    });

  private getSettingElements = () => {
    return (
      <>
        <Tooltip content="Settings">
          <IconButton
            marginRight={10}
            icon="cog"
            onClick={this.toggleSettingsDialog}
          />
        </Tooltip>

        {this.props.settingElement({
          toggle: this.toggleSettingsDialog,
          open: this.state.showSettingsDialogue
        })}
      </>
    );
  };

  prettify = () => {
    prettierWorker
      .send({
        language: this.props.language,
        value: this.state.value
      })
      .then(value => this.setState({ value }));
  };

  private fetchFile = async close => {
    const url = this.state.fetchingUrl;
    if (!url) return;
    const res = await fetch(url);
    const value = await res.text();
    this.setState(
      {
        value,
        fetchingUrl: ""
      },
      () => {
        close();
        this.props.onChange(value);
      }
    );
  };

  static getDerivedStateFromProps(
    props: EditorPanelProps,
    prevState: EditorPanelState
  ) {
    if (props.defaultValue !== prevState.defaultValue) {
      return {
        defaultValue: props.defaultValue,
        value: props.defaultValue
      };
    }
    return null;
  }

  private onFilePicked = (files, close) => {
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file, "utf-8");
    reader.onload = () => {
      this.onChange(reader.result);
      close();
    };
  };

  render() {
    const {
      editable,
      language,
      title,
      hasCopy,
      hasPrettier,
      hasLoad,
      hasClear,
      settingElement
    } = this.props;

    const options: editor.IEditorOptions = {
      fontSize: 14,
      readOnly: !editable,
      codeLens: false,
      fontFamily: "Menlo",
      minimap: {
        enabled: false
      },
      lineNumbers: "off"
    };

    return (
      <Pane display="flex" flex={1} flexDirection="column" overflow="hidden">
        <style>{`* {margin:0;padding:0;} body, html: {overflow: hidden}`}</style>
        <Pane
          display="flex"
          height={50}
          paddingLeft={20}
          paddingRight={20}
          alignItems={"center"}
          elevation={1}
        >
          <Pane flex={1}>
            <Heading size={500} marginTop={0}>
              {title}
            </Heading>
          </Pane>

          {settingElement && this.getSettingElements()}

          {hasLoad && (
            <Popover
              content={({ close }) => (
                <Pane
                  paddingY={20}
                  paddingX={20}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <FilePicker
                    width={"100%"}
                    name="filepicker"
                    onChange={files => this.onFilePicked(files, close)}
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
                        this.setState({
                          fetchingUrl: e.target.value
                        })
                      }
                    />
                    <Button
                      borderLeftWidth={0}
                      borderBottomLeftRadius={0}
                      borderTopLeftRadius={0}
                      onClick={() => this.fetchFile(close)}
                    >
                      Fetch URL
                    </Button>
                  </Pane>
                </Pane>
              )}
              shouldCloseOnExternalClick
            >
              <Tooltip content="Load File">
                <IconButton marginRight={10} icon="upload" />
              </Tooltip>
            </Popover>
          )}

          {hasClear && (
            <Tooltip content="Clear">
              <IconButton
                icon="trash"
                intent="danger"
                marginRight={10}
                onClick={() =>
                  this.setState({
                    value: ""
                  })
                }
              />
            </Tooltip>
          )}

          {hasCopy && (
            <Button
              appearance="primary"
              marginRight={10}
              iconBefore="duplicate"
              onClick={this.copy}
            >
              Copy
            </Button>
          )}

          {hasPrettier && (
            <Button appearance="primary" onClick={this.prettify}>
              Prettify
            </Button>
          )}
        </Pane>
        <Monaco
          language={language}
          theme={this.context.theme}
          value={this.state.value}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </Pane>
    );
  }
}
