import React, { PureComponent } from "react";
import { Controlled } from "react-codemirror2";
import greenlet from "greenlet";
import cn from "classnames";

require("codemirror-graphql/mode");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/xml/xml");
require("codemirror/mode/jsx/jsx");
require("codemirror/mode/css/css");
require("codemirror/mode/rust/rust");
require("codemirror/mode/sql/sql");
require("codemirror/mode/clike/clike");
require("codemirror/mode/go/go");
require("codemirror/mode/yaml/yaml");

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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.autoPrettify(nextProps);
    }
  }

  render() {
    const {
      options,
      onChange,
      onBeforeChange,
      mode,
      allowPrettify
    } = this.props;
    const { value } = this.state;

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
        {allowPrettify &&
          prettierParsers[mode] && (
            <button
              onClick={() => this.prettifyCode(this.props)}
              className={buttonClass}
            >
              Prettify
            </button>
          )}
        <Controlled
          value={value}
          options={options}
          onChange={onChange}
          onBeforeChange={onBeforeChange}
        />
      </React.Fragment>
    );
  }
}
