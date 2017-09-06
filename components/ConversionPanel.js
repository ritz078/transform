import React, { PureComponent } from "react";
import cn from "classnames";
import isBrowser from "is-in-browser";
import copy from "copy-text-to-clipboard";
import { html_beautify, css_beautify, js_beautify } from "js-beautify";
import unfetch from "unfetch";

let CodeMirror;
if (isBrowser) {
  CodeMirror = require("react-codemirror2").default;

  require("codemirror-graphql/mode");
  require("codemirror/mode/javascript/javascript");
  require("codemirror/mode/xml/xml");
  require("codemirror/mode/jsx/jsx");
  require("codemirror/mode/css/css");
  require("codemirror/mode/rust/rust");
  require("codemirror/mode/sql/sql");
  require("codemirror/mode/clike/clike");
  require("codemirror/mode/go/go");
}

const prettifyMap = {
  css: css_beautify,
  json: js_beautify,
  html: html_beautify,
  typescript: js_beautify
};

const modeMapping = {
  javascript: {
    name: "javascript"
  },
  json: {
    name: "javascript",
    json: true
  },
  typescript: {
    name: "javascript",
    typescript: true
  },
  html: {
    name: "xml",
    htmlMode: true
  },
  mysql: "text/x-mysql",
  scala: "text/x-scala"
};

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
  splitMode: ?string,
  showFetchButton: boolean,
  fetchButtonText: ?string,
  getTransformedValue: Function
};

export default class ConversionPanel extends PureComponent {
  props: Props;

  static defaultProps = {
    leftMode: "javascript",
    rightMode: "javascript",
    pathname: "/",
    prettifyRightPanel: true,
    splitLeft: false,
    showFetchButton: true,
    fetchButtonText: 'Fetch JSON from URL'
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

    this.onChange(defaultText, splitValue)
  }

  fetchJSON = async () => {
    const url = window.prompt('Enter URL to fetch JSON from a remote server.')
    if (!url) return
    const res = await unfetch(url)
    const json = await res.json()
    this.onChange(JSON.stringify(json, null, 2))
  }

  onChange = async (newValue, leftSplitValue) => {
    const nValue = newValue || this.state.value;
    const splitValue =
      leftSplitValue && typeof leftSplitValue === "string"
        ? leftSplitValue
        : this.state.splitValue;

    try {
      const code = await this.props.getTransformedValue(nValue, splitValue);
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
        this.onChange()
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

    this.setResult(prettifyMap[leftMode](value, { indent_size: 2 }));
  };

  copyCode = () => {
    const { rightMode } = this.props;
    const { resultValue } = this.state;
    copy(
      rightMode !== "rust"
        ? js_beautify(resultValue, { e4x: true })
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
      splitMode,
      showFetchButton,
      fetchButtonText
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
            background-color: #0490ff;
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
            font-weight: normal;
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

          .react-codemirror2,
          .CodeMirror {
            display: flex;
            flex: 1;
            width: 100%;
            height: calc(100% - 50px);
          }

          .CodeMirror {
            height: calc(100%);
          }

          .right .CodeMirror-scroll {
            width: 100%;
          }

          .CodeMirror-scroll {
            width: 100%;
          }

          .split #code,
          .split .CodeMirror {
            height: calc(100%);
          }
          .split .react-codemirror2 {
            height: calc(50% - 52px);
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
                <h4 className="title">{leftTitle}</h4>
                {leftMode === 'json' && showFetchButton && <button className="btn" onClick={this.fetchJSON}>{fetchButtonText}</button>}
                <button className="btn" onClick={this.prettifyCode}>
                  Prettify
                </button>
              </div>
              {isBrowser && (
                <CodeMirror
                  onChange={(editor, metadata, value) => this.onChange(value)}
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
                  <h4 className="title">{splitTitle}</h4>
                </div>
                <CodeMirror
                  onChange={(editor, metadata, value) =>
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
              <h4 className="title">{rightTitle}</h4>
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
                    js_beautify(resultValue, { e4x: true })
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
        {
          infoType !== "" && (
            <div className={`footer has-${infoType}`}>
              <span className="info">{info}</span>
            </div>
          )
        }
      </div>
    );
  }
}