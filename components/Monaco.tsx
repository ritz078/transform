import React from "react";
import { editor } from "monaco-editor";

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

class MonacoEditor extends React.PureComponent<MonacoProps> {
  private editor: editor.IStandaloneCodeEditor;
  private containerElement: React.RefObject<HTMLDivElement> = React.createRef();
  private __prevent_trigger_change_event: boolean;

  static defaultProps = {
    width: "100%",
    height: "100%",
    value: null,
    defaultValue: "",
    language: "javascript",
    options: {},
    editorDidMount: noop
  };

  componentDidMount() {
    this.initMonaco();
  }

  componentDidUpdate(prevProps: MonacoProps) {
    const { value, language, theme, width, height, options } = this.props;

    if (value !== prevProps.value) {
      this.__prevent_trigger_change_event = true;
      this.editor.setValue(value);
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
      this.editor.layout();
    }
    if (prevProps.options !== options) {
      this.editor.updateOptions(options);
    }
  }

  componentWillUnmount() {
    this.destroyMonaco();
  }

  destroyMonaco() {
    if (this.editor) {
      this.editor.dispose();
    }
  }

  initMonaco() {
    const { value, defaultValue, language, theme, options } = this.props;

    const _value = value !== null ? value : defaultValue;
    if (this.containerElement.current) {
      this.editor = editor.create(this.containerElement.current, {
        value: _value,
        language,
        ...options
      });
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
      <div
        ref={this.containerElement}
        style={style}
        className="react-monaco-editor-container"
      />
    );
  }
}

export default MonacoEditor;
