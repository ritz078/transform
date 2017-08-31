import React, { PureComponent } from "react";
import cn from "classnames";
import Router from "next/router";
import isBrowser from "is-in-browser";
import copy from "copy-text-to-clipboard";

const theme = "tomorrow";

let CodeMirror;
if (isBrowser) {
  CodeMirror = require("react-codemirror2").default;

  require("codemirror-graphql/mode");
  require("codemirror/mode/javascript/javascript");
  require("codemirror/mode/xml/xml");
  require("codemirror/mode/jsx/jsx")
  require("codemirror/mode/css/css")
  require("codemirror/mode/rust/rust")
  require("codemirror/mode/sql/sql")
  require("codemirror/mode/clike/clike")
}

// const prettierParsers = {
//   css: 'postcss',
//   json: 'json',
//   javascript: 'babylon',
//   typescript: 'babylon'
// }

const prettifyMap = {
  css: "css_beautify",
  json: "js_beautify",
  html: "html_beautify",
  typescript: "js_beautify"
};

const modeMapping = {
  javascript: {
    name: 'javascript'
  },
  json: {
    name: 'javascript',
    json: true
  },
  typescript: {
    name: 'javascript',
    typescript: true
  },
  html: {
    name: 'xml',
    htmlMode: true
  },
  mysql: 'text/x-mysql',
  scala: 'text/x-scala'
}

type Props = {
  leftMode: ?string,
  rightMode: ?string,
  resultValue: string,
  onCheckboxChange: Function,
  checkboxText: ?string,
  pathname: string,
  initialCheckboxValue: ?boolean,
  leftTitle: string,
  rightTitle: string,
  prettifyRightPanel: ?boolean,
  splitLeft: ?boolean,
  splitTitle: ?string,
  splitValue: ?string,
  splitMode: ?string
};

export default class ConversionPanel extends PureComponent {
  props: Props;

  static defaultProps = {
    leftMode: "javascript",
    rightMode: "javascript",
    pathname: "/",
    prettifyRightPanel: true,
    splitLeft: false
  };

  state = {
    resultValue: "",
    value: "",
    splitValue: "",
    info: "",
    infoType: ""
  };

  componentDidMount() {
    const { defaultText, splitValue } = this.props;

    const code = defaultText;
    const sValue = splitValue;
    this.setState({
      value: code,
      splitValue: sValue,
      resultValue: this.props.getTransformedValue(code, sValue)
    });
  }

  onChange = (newValue, leftSplitValue) => {
    const nValue = newValue || this.state.value;
    const splitValue =
      leftSplitValue && typeof leftSplitValue === "string"
        ? leftSplitValue
        : this.state.splitValue;

    try {
      const code = this.props.getTransformedValue(nValue, splitValue);

      this.setState({
        resultValue: code,
        info: "",
        infoType: ""
      });
    } catch (e) {
      this.setState({
        info: e.message,
        infoType: "error"
      });
    }

    this.setState({
      value: nValue,
      splitValue: splitValue
    });
  };

  toggleCheckbox = e => {
    const checked = e.currentTarget.checked;
    if (this.props.onCheckboxChange) {
      this.props.onCheckboxChange(checked, () => {
        this.setState({
          resultValue: this.props.getTransformedValue(this.state.value)
        });
      });
    }
  };

  setResult = result => {
    this.setState({
      value: result
    });
  };

  prettifyCode = () => {
    const { leftMode } = this.props;
    const { value } = this.state;

    this.setResult(window[prettifyMap[leftMode]](value, { indent_size: 2 }));
  };

  copyCode = () => {
    const { rightMode } = this.props;
    const { resultValue } = this.state;
    copy(
      rightMode !== "rust"
        ? window.js_beautify(resultValue, { e4x: true })
        : resultValue
    );
    this.setState({
      info: "Code copied to clipboard.",
      infoType: "success"
    });
  };

  render() {
    const {
      leftMode,
      rightMode,
      onCheckboxChange,
      checkboxText,
      initialCheckboxValue,
      leftTitle,
      rightTitle,
      prettifyRightPanel,
      splitLeft,
      splitTitle,
      splitMode
    } = this.props;
    const { infoType, resultValue, value, info, splitValue } = this.state;

    const leftClass = cn("section left", {
      split: splitLeft
    });

    const codeMirrorOptions = {
      lineNumbers: true,
      theme: "chrome-devtools",
      lineWrapping: true,
      scrollbarStyle: null
    };

    return (
      <div className="wrapper">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.6.14/beautify.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.6.14/beautify-html.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.6.14/beautify-css.js" />

        <style jsx>{`
          .wrapper {
            display: flex;
            flex: 1;
            height: 100vh;
            flex-direction: column;
          }

          .footer {
            height: 50px;
            width: 100%;
            font-family: "Lato";
            background-color: white;
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
            z-index: 99;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
          }

          .has-error {
            background-color: #e74c3c;
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
          }

          .has-success {
            background-color: #27ae60;
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
          }

          .content-wrapper {
            flex: 1;
            display: flex;
            flex-direction: row;
          }

          .section {
            flex: 1;
            position: relative;
            height: calc(100vh - 50px);
          }

          .right {
            border-left: 1px solid #eee;
          }

          .info {
            color: white;
            font: 14px/normal "Monaco", "Menlo", "Ubuntu Mono", "Consolas",
              "source-code-pro", monospace;
          }

          .btn {
            background-color: #2196f3;
            font-size: 14px;
            padding: 7px 14px;
            z-index: 9;
            border: 0;
            border-radius: 2px;
            cursor: pointer;
            outline: none;
            color: #fff;
            line-height: 16px;
            height: 32px;
          }

          .btn:hover {
            background-color: #2380ca;
          }

          .header {
            height: 50px;
            background-color: white;
            border-bottom: 1px solid #eee;
            border-top: 1px solid #eee;
            display: flex;
            align-items: center;
            padding: 0 10px;
            position: relative;
            justify-content: space-between;
            font-family: "Lato";
          }

          .title {
            padding-left: 4px;
            color: #666;
          }
        `}</style>

        <style global jsx>{`
          * {
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }

          body {
            overflow: hidden;
          }

          .react-codemirror2, .CodeMirror {
            display: flex;
            flex: 1;
            width: 100% !important;
            height: calc(100%) !important;
          }

          .right .CodeMirror-scroll {
            width: 100%;
          }

          .CodeMirror-scroll {
            width: 100%;
          }

          .split #code,
          .split .CodeMirror {
            height: calc(100%) !important;
          }
          .split .react-codemirror2 {
            height: calc(50% - 52px) !important;
          }

          .right .CodeMirror {
            background-color: #fafafa;
            padding-left: 20px;
          }

          .right .ace_scroller {
            padding: 0 20px;
          }

          .right {
            box-sizing: border-box;
            padding-bottom: 10px;
          }

          label {
            font-family: "Lato";
            padding: 0 12px;
            cursor: pointer;
          }

          label input {
            margin-right: 4px;
            font-size: 16px;
          }
        `}</style>

        <div className="content-wrapper">
          <div className={leftClass}>
            <div style={{ display: "contents" }}>
              <div className="header">
                <div className="title">{leftTitle}</div>
                <button className="btn" onClick={this.prettifyCode}>
                  Prettify
                </button>
              </div>
              {isBrowser && (
                <CodeMirror
                  onValueChange={(editor, metadata, value) =>
                    this.onChange(value)}
                  value={value}
                  options={{
                    mode: modeMapping[leftMode] || leftMode,
                    ...codeMirrorOptions
                  }}
                />
              )}
            </div>
            {splitLeft &&
            isBrowser && (
              <div style={{ display: "contents" }}>
                <div className="header">
                  <div className="title">{splitTitle}</div>
                </div>
                <CodeMirror
                  onValueChange={(editor, metadata, value) =>
                    this.onChange(this.state.value, value)}
                  value={splitValue}
                  options={{
                    mode: modeMapping[splitMode] || splitMode,
                    ...codeMirrorOptions
                  }}
                />
              </div>
            )}
          </div>
          <div className="section right">
            <div className="header">
              <div className="title">{rightTitle}</div>
              {onCheckboxChange && (
                <label htmlFor="#text">
                  <input
                    type="checkbox"
                    id="#text"
                    defaultChecked={initialCheckboxValue}
                    onChange={this.toggleCheckbox}
                  />{" "}
                  {checkboxText}
                </label>
              )}
              <button className="btn" onClick={this.copyCode}>
                Copy
              </button>
            </div>
            {isBrowser && (
              <CodeMirror
                  value={
                    prettifyRightPanel ? (
                    window.js_beautify(resultValue, { e4x: true })
                  ) : (
                    resultValue
                  )
                  }
                  options={{
                    readOnly: true,
                    mode: modeMapping[rightMode] || rightMode,
                    ...codeMirrorOptions,
                    lineNumbers: false
                  }}
                />
            )}
          </div>
        </div>
        <div className={`footer${infoType ? " has-" + infoType : ""}`}>
          <span className="info">{info}</span>
        </div>
      </div>
    );
  }
}
