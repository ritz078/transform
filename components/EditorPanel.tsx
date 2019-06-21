import React from "react";
import dynamic from "next/dynamic";
import { editor } from "monaco-editor";
import { Button, Pane, Spinner, toaster, Dialog, Heading } from "evergreen-ui";
import copy from "clipboard-copy";

let prettierWorker: Worker;
if (typeof window !== "undefined") {
  const PrettierWorker = require("@workers/prettier.worker");
  prettierWorker = new PrettierWorker();
}

const Monaco = dynamic(() => import("../components/Monaco"), {
  ssr: false,
  loading: () => (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={400}
    >
      <Spinner />
    </Pane>
  )
});

interface EditorPanelProps {
  editable?: boolean;
  language?: string;
  defaultValue: string;
  title: string;
  hasCopy?: boolean;
  hasPrettier?: boolean;
  id: string | number;
  onChange: (value: string, props: EditorPanelProps) => void;
}

interface EditorPanelState {
  value: string;
  showSettingsDialogue: boolean;
}

export default class extends React.PureComponent<
  EditorPanelProps,
  EditorPanelState
> {
  static defaultProps: Partial<EditorPanelProps> = {
    language: "javascript",
    editable: true,
    hasCopy: true,
    hasPrettier: true
  };

  state = {
    value: this.props.defaultValue,
    showSettingsDialogue: false
  };

  editorDidMount = editor => {
    console.log("editorDidMount", editor);
    editor.focus();
  };

  onChange = value => {
    this.setState({
      value
    });
  };

  componentDidMount() {
    // @ts-ignore
    window.__webpack_public_path__ = "/static/";

    prettierWorker.onmessage = ({ data }) => {
      return this.setState({
        value: data.data
      });
    };
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
        <Button
          marginRight={10}
          iconBefore="cog"
          onClick={this.toggleSettingsDialog}
        >
          Settings
        </Button>

        <Dialog
          isShown={this.state.showSettingsDialogue}
          onCloseComplete={this.toggleSettingsDialog}
        >
          Hello
        </Dialog>
      </>
    );
  };

  prettify = () => {
    prettierWorker.postMessage({
      parser: this.props.language,
      value: this.state.value
    });
  };

  render() {
    const {
      defaultValue,
      editable,
      language,
      title,
      hasCopy,
      hasPrettier
    } = this.props;

    const options: editor.IEditorOptions = {
      fontSize: 14,
      readOnly: !editable,
      codeLens: false,
      fontFamily: "Menlo",
      minimap: {
        enabled: false
      }
    };

    return (
      <div>
        <style>{`* {margin:0;padding:0}`}</style>
        <Pane
          display="flex"
          height={55}
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

          {this.getSettingElements()}

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
              Run Prettier
            </Button>
          )}
        </Pane>
        <Pane paddingTop={20}>
          <Monaco
            height="100vh"
            language={language}
            theme="vs-light"
            value={this.state.value}
            defaultValue={defaultValue}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        </Pane>
      </div>
    );
  }
}
