import React, { PureComponent } from "react";
import cn from "classnames";
import isBrowser from "is-in-browser";
import copy from "copy-text-to-clipboard";
import unfetch from "unfetch";
import loadWorker from "../utils/loadWorker";

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

const prettierParsers = {
  css: "postcss",
  javascript: "babylon",
  jsx: "babylon",
  graphql: "graphql",
  json: "json",
  typescript: "typescript",
  flow: "flow"
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
  flow: {
    name: "javascript",
    typescript: true
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
  getTransformedValue: Function,
  extensions: ?(string[])
};

function UploadIcon() {
  return (
    <svg
      fill="#ffffff"
      height={24}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        svg {
          vertical-align: sub;
        }
      `}</style>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
      <path
        fill="#555"
        d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"
      />
    </svg>
  );
}

export default class ConversionPanel extends PureComponent {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      resultValue: "",
      value: props.defaultText,
      splitValue: "",
      info: "",
      infoType: "",
      isPrettierAvailable: true
    };
  }

  static defaultProps = {
    leftMode: "javascript",
    rightMode: "javascript",
    pathname: "/",
    prettifyRightPanel: true,
    splitLeft: false,
    showFetchButton: true,
    fetchButtonText: "Fetch JSON from URL",
    extensions: [".json"]
  };

  componentDidMount() {
    const { defaultText, splitValue } = this.props;

    this.onChange(defaultText, splitValue);

    const { worker, promiseWorker } = loadWorker("prettier.js");
    this.worker = worker;
    this.promiseWorker = promiseWorker;

    this.worker.onmessage = this.setPrettierAvailability;
  }

  setPrettierAvailability = ({ data }) => {
    if (!data.available || this.state.isPrettierAvailable === data.available) {
      return;
    }
    this.setState({
      isPrettierAvailable: data.available
    });
  };

  passCodeToWorker = (code, mode, section) => {
    this.promiseWorker.postMessage({ code, mode, section }).then(response => {
      const { available, prettyCode, section } = response;
      this.setState({
        isPrettierAvailable: available,
        [section]: prettyCode
      });
    });
  };

  clearText = () => {
    this.setState({
      value: ""
    });
  };

  fetchJSON = async () => {
    const url = window.prompt("Enter URL to fetch JSON from a remote server.");
    if (!url) return;
    try {
      const res = await unfetch(url);
      const json = await res.json();
      this.onChange(JSON.stringify(json, null, 2));
    } catch (e) {
      this.setState({
        info: e.message,
        infoType: "error"
      });
    }
  };

  onChange = async (newValue, leftSplitValue) => {
    const { prettifyRightPanel, rightMode } = this.props;

    const nValue = newValue || this.state.value;
    const splitValue =
      leftSplitValue && typeof leftSplitValue === "string"
        ? leftSplitValue
        : this.state.splitValue;

    try {
      let code = await this.props.getTransformedValue(nValue, splitValue);
      code = code.prettyCode || code;
      if (prettifyRightPanel) {
        this.passCodeToWorker(code, rightMode, "resultValue");
      } else {
        this.setState({
          resultValue: code
        });
      }
      this.setState({
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
        this.onChange();
      });
    }
  };

  prettifyCode = () => {
    if (!this.state.isPrettierAvailable) return;
    const { leftMode } = this.props;
    const { value } = this.state;

    this.passCodeToWorker(value, leftMode, "value");
  };

  prettifySplitCode = () => {
    if (!this.state.isPrettierAvailable) return;
    const { splitMode } = this.props;
    const { splitValue } = this.state;

    this.passCodeToWorker(splitValue, splitMode, "splitValue");
  };

  copyCode = () => {
    const { resultValue } = this.state;

    copy(resultValue);

    this.setState({
      info: "Code copied to clipboard.",
      infoType: "success"
    });
  };

  getPrettifyClass = () => {
    return cn("btn", {
      disabled: !this.state.isPrettierAvailable
    });
  };

  loadFile = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, "utf-8");
    reader.onload = () => {
      this.onChange(reader.result);
    };
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
      splitLeft,
      splitTitle,
      splitMode,
      showFetchButton,
      fetchButtonText,
      extensions
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

    // hide success footer bannner after 2 seconds. Let other types be visible until fixed.
    clearTimeout(this.footerTimeout);
    if (infoType === "success") {
      this.footerTimeout = setTimeout(
        () =>
          this.setState({
            info: "",
            infoType: ""
          }),
        2000
      );
    }

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
            overflow: hidden;
            width: calc(100vw - 250px);
          }

          .section {
            flex: 1;
            position: relative;
            display: flex;
            flex-direction: column;
            overflow: hidden;
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
            line-height: 20px;
          }

          .btn.disabled {
            background-color: #e0e0e0;
            pointer-events: none;
            color: #7b7b7b;
            cursor: not-allowed;
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

          .panel {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          #upload {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
          }

          .upload-wrapper {
            position: absolute;
            bottom: 30px;
            right: 20px;
            align-items: center;
            border-radius: 50%;
            height: 50px;
            width: 50px;
            padding: 0;
            display: flex;
            margin: 0px;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
            background-color: #5a5a5a;
            border: 1px solid rgba(0, 0, 0, 0.04);
            padding-left: 12px;
            box-sizing: border-box;
            transition: all 0.2s;
          }

          .clear {
            position: absolute;
            top: 60px;
            right: 20px;
            align-items: center;
            border-radius: 50%;
            height: 48px;
            width: 48px;
            padding: 0;
            display: flex;
            margin: 0px;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.04);
            padding-left: 12px;
            box-sizing: border-box;
            transition: all 0.2s;
            z-index: 999;
            cursor: pointer;
          }

          .clear:hover {
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
          }

          .upload-wrapper:hover {
            background-color: #444;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
          }

          #upload svg {
            vertical-align: sub;
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

          .react-codemirror2 {
            overflow: scroll;
          }

          .react-codemirror2,
          .CodeMirror {
            display: flex;
            flex: 1;
            width: 100%;
            height: 100%;
          }

          .CodeMirror {
            min-height: 500px;
          }

          .CodeMirror-scroll {
            width: 100%;
            min-height: 500px;
          }

          .split #code,
          .split .CodeMirror {
          }
          .right .react-codemirror2 {
            background-color: #fafafa;
          }

          .right .CodeMirror {
            padding-left: 20px;
            background-color: #fafafa;
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
            <div className="panel">
              <div className="header">
                <h4 className="title">{leftTitle}</h4>

                {leftMode === "json" &&
                  showFetchButton && (
                    <button className="btn" onClick={this.fetchJSON}>
                      {fetchButtonText}
                    </button>
                  )}

                {prettierParsers[leftMode] && (
                  <button
                    className={this.getPrettifyClass()}
                    onClick={this.prettifyCode}
                  >
                    Prettify
                  </button>
                )}
              </div>

              <div className="clear" onClick={this.clearText}>
                {" "}
                <ClearIcon />
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

              {extensions &&
                extensions.length > 0 && (
                  <label htmlFor="upload" className="btn upload-wrapper">
                    <input
                      id="upload"
                      accept={extensions.join(",")}
                      onChange={this.loadFile}
                      type="file"
                    />
                    <UploadIcon />
                  </label>
                )}
            </div>
            {splitLeft &&
              isBrowser && (
                <div className="panel">
                  <div className="header">
                    <h4 className="title">{splitTitle}</h4>
                    {prettierParsers[splitMode] && (
                      <button
                        className={this.getPrettifyClass()}
                        onClick={this.prettifySplitCode}
                      >
                        Prettify
                      </button>
                    )}
                  </div>
                  <CodeMirror
                    onChange={(editor, metadata, value) =>
                      this.onChange(this.state.value, value)
                    }
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
            <div className="panel">
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
                  value={resultValue}
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
        </div>
        {infoType !== "" && (
          <div className={`footer has-${infoType}`}>
            <span className="info">{info}</span>
          </div>
        )}
      </div>
    );
  }
}
