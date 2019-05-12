import React, { PureComponent } from "react";
import greenlet from "greenlet";
import cn from "classnames";
import Monaco from "react-monaco-editor";
import { ThemeContext } from "../components/Layout";

function noop() {}

const prettierParsers = {
  css: "postcss",
  javascript: "babylon",
  jsx: "babylon",
  graphql: "graphql",
  json: "json",
  typescript: "typescript",
  flow: "flow"
};

function prettify(code, mode = "json", parsers) {
  let prettier;

  try {
    importScripts("https://bundle.run/prettier@1.6.1");
    prettier = self.prettier;
  } catch (e) {
    throw new Error("prettier not available");
  }
  return prettier
    ? prettier.format(code, {
        parser: parsers[mode],
        printWidth: 70,
        semi: false
      })
    : code;
}

const options = {
  selectOnLineNumbers: true,
  codeLens: false,
  fontFamily: "Menlo",
  highlightActiveIndentGuide: false,
  fontSize: 15,
  lineNumbers: "off",
  quickSuggestions: false,
  renderControlCharacters: false,
  suggestOnTriggerCharacters: false,
  minimap: {
    enabled: false
  }
};

const worker = greenlet(prettify);

export default class extends PureComponent {
  static defaultProps = {
    onChange: noop,
    onBeforeChange: noop,
    autoPrettify: true,
    allowPrettify: true
  };

  state = {
    value: "",
    isPrettierAvailable: true
  };

  prettifyCode = async (props = this.props) => {
    try {
      const prettified = props.value
        ? await worker(props.value, props.mode, prettierParsers)
        : props.value;

      this.setState({
        value: prettified
      });
    } catch (e) {
      this.setState({
        value: props.value,
        isPrettierAvailable: false
      });
    }
  };

  autoPrettify = props => {
    if (!props.autoPrettify) {
      this.setState({
        value: props.value
      });
      return;
    }
    this.prettifyCode(props);
  };

  componentDidMount() {
    this.autoPrettify(this.props);
    window.__webpack_public_path__ = "/static/";
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.autoPrettify(nextProps);
    }
  }

  static contextType = ThemeContext;

  render() {
    const { onChange, mode, allowPrettify } = this.props;
    const { value } = this.state;

    const theme = !!this.context ? "vs-dark" : "vs-light";

    const buttonClass = cn("btn top-right", {
      disabled: !this.state.isPrettierAvailable
    });

    return (
      <React.Fragment>
        <style>{`
          .top-right {
            position: absolute;
            right: 10px;
            top: 9px;
          }
        `}</style>
        {allowPrettify && prettierParsers[mode] && (
          <button
            onClick={() => this.prettifyCode(this.props)}
            className={buttonClass}
          >
            Prettify
          </button>
        )}

        <Monaco
          value={value}
          options={options}
          onChange={onChange}
          language={mode}
          theme={theme}
        />
      </React.Fragment>
    );
  }
}
