import React from "react";
import { editor, languages } from "monaco-editor";
import { Pane } from "evergreen-ui";
import { lightEditor } from "@utils/theme";

languages.typescript.typescriptDefaults.setDiagnosticsOptions({
  noSemanticValidation: true,
  noSyntaxValidation: true
});

languages.css.cssDefaults.setDiagnosticsOptions({
  lint: {
    unknownAtRules: "ignore"
  } as any
});

// @ts-ignore
self.MonacoEnvironment = {
  getWorkerUrl: function(_moduleId, label) {
    if (label === "json") {
      return `/static/monaco/json.worker.js`;
    }
    if (label === "css") {
      return `/static/monaco/css.worker.js`;
    }
    if (label === "html") {
      return `/static/monaco/html.worker.js`;
    }
    if (label === "typescript" || label === "javascript") {
      return `/static/monaco/typescript.worker.js`;
    }
    return `/static/monaco/editor.worker.js`;
  }
};

function noop() {}

export function processSize(size) {
  return !/^\d+$/.test(size) ? size : `${size}px`;
}

interface MonacoProps {
  theme?: string;
  language?: string;
  value?: string;
  width?: number | string;
  height?: number | string;
  options?: editor.IEditorOptions;
  defaultValue?: string;
  editorDidMount?: (editor: editor.IStandaloneCodeEditor) => void;
  onChange: (value: string, event: editor.IModelContentChangedEvent) => void;
}

export class MonacoEditor extends React.PureComponent<MonacoProps> {
  private editor: editor.IStandaloneCodeEditor;
  private containerElement: React.RefObject<HTMLDivElement> = React.createRef();
  private __prevent_trigger_change_event: boolean;

  static defaultProps = {
    width: "100%",
    height: "100%",
    value: null,
    language: "javascript",
    options: {},
    editorDidMount: noop,
    theme: "light"
  };

  public reLayout = () => {
    this.editor && this.editor.layout();
  };

  componentDidMount() {
    this.initMonaco();

    window.addEventListener("resize", this.reLayout);
  }

  componentDidUpdate(prevProps: MonacoProps) {
    const { value, language, theme, width, height, options } = this.props;

    if (value !== prevProps.value) {
      this.__prevent_trigger_change_event = true;
      this.editor.setValue(typeof value === "string" ? value : "");
      this.__prevent_trigger_change_event = false;
    }

    if (prevProps.language !== language) {
      editor.setModelLanguage(this.editor.getModel(), language);
    }
    if (prevProps.theme !== theme) {
      editor.setTheme(theme);
    }
    if (
      this.editor &&
      (width !== prevProps.width || height !== prevProps.height)
    ) {
      this.reLayout();
    }
    if (prevProps.options !== options) {
      this.editor.updateOptions(options);
    }
  }

  componentWillUnmount() {
    this.destroyMonaco();

    window.removeEventListener("resize", this.reLayout);
  }

  destroyMonaco() {
    if (this.editor) {
      this.editor.dispose();
    }
  }

  initMonaco() {
    const { value, language, theme, options } = this.props;

    if (this.containerElement.current) {
      this.editor = editor.create(this.containerElement.current, {
        value,
        language,
        ...options
      });

      editor.defineTheme("light", lightEditor);

      if (theme) {
        editor.setTheme(theme);
      }
      // After initializing monaco editor
      this.editorDidMount(this.editor);
    }
  }

  editorDidMount(editor) {
    this.props.editorDidMount(editor);
    editor.onDidChangeModelContent(event => {
      const value = editor.getValue();

      // Only invoking when user input changed
      if (!this.__prevent_trigger_change_event) {
        this.props.onChange(value, event);
      }
    });
  }

  render() {
    const { width, height } = this.props;
    const fixedWidth = processSize(width);
    const fixedHeight = processSize(height);
    const style = {
      width: fixedWidth,
      height: fixedHeight
    };

    return (
      <Pane display={"flex"} flex={1} backgroundColor={"#fafafa"}>
        <div
          ref={this.containerElement}
          style={style}
          className="react-monaco-editor-container"
        />
      </Pane>
    );
  }
}

export default React.memo(
  ({
    innerRef,
    ...props
  }: MonacoProps & { innerRef?: React.RefObject<MonacoEditor> }) => (
    <MonacoEditor {...props} ref={innerRef} />
  )
);
