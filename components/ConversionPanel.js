import React, { PureComponent } from "react";
import cn from "classnames";
import Router from "next/router";
import isBrowser from "is-in-browser";
import copy from "copy-text-to-clipboard";

const theme = "tomorrow";

let brace;
let AceEditor;
if (isBrowser) {
  brace = require("brace").default;
  AceEditor = require("react-ace").default;

  require("brace/mode/javascript");
  require(`brace/theme/${theme}`);
  require("brace/mode/json");
  require("brace/mode/typescript");
  require("brace/mode/css");
  require("brace/mode/html");
  require("brace/mode/rust");
  require("brace/mode/mysql");
  require("brace/mode/scala");
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
  splitValue: ?string
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
    const code = this.props.url.query.code || this.props.defaultText;
    const splitValue = this.props.url.query.splitValue || this.props.splitValue;
    this.setState({
      value: code,
      splitValue,
      resultValue: this.props.getTransformedValue(code, splitValue)
    });
  }

  onChange = (newValue: string, leftSplitValue: string) => {
    try {
      const code = this.props.getTransformedValue(
        newValue || this.state.value,
        leftSplitValue || this.state.splitValue
      );

      this.setState({
        resultValue: code,
        info: "",
        infoType: ""
      });

      this.setCodeInUrl(newValue, leftSplitValue);
    } catch (e) {
      this.setState({
        info: e.message,
        infoType: "error"
      });
    }

    this.setState({
      value: newValue || this.state.value,
      splitValue: leftSplitValue || this.state.splitValue
    });
  };

  setCodeInUrl = (code, leftSplitValue) => {
    Router.replace({
      pathname: this.props.url.pathname,
      query: {
        code,
        splitValue: leftSplitValue
      }
    });
  };

  toggleCheckbox = (e: MouseEvent) => {
    const checked = e.currentTarget.checked;
    if (this.props.onCheckboxChange) {
      this.props.onCheckboxChange(checked, () => {
        this.setState({
          resultValue: this.props.getTransformedValue(this.state.value)
        });
      });
    }
  };

  setResult = (result: string) => {
    this.setState(
      {
        value: result
      },
      () => {
        this.setCodeInUrl(result);
      }
    );
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
      splitTitle
    } = this.props;
    const { infoType, resultValue, value, info, splitValue } = this.state;

    const leftClass = cn("section left", {
      split: splitLeft
    });

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
            height: calc(100vh - 100px);
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

          #code {
            display: flex;
            flex: 1;
            width: 100% !important;
            height: 100% !important;
          }

          .split #code {
            height: 50% !important;
          }

          .right #code {
            background-color: #fafafa;
          }

          .right .ace_content,
          .right,
          .right .ace-tomorrow {
            background-color: #fafafa;
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
            <div className="header">
              <div className="title">{leftTitle}</div>
              <button className="btn" onClick={this.prettifyCode}>
                Prettify
              </button>
            </div>
            {isBrowser && (
              <AceEditor
                mode={leftMode}
                theme={theme}
                onChange={this.onChange}
                name="code"
                value={value}
                editorProps={{ $blockScrolling: true }}
                highlightActiveLine={false}
                scrollMargin={[20]}
                focus
                fontSize={14}
                wrapEnabled
              />
            )}
            {splitLeft &&
            isBrowser && (
              <div style={{ display: "contents" }}>
                <div className="header">
                  <div className="title">{splitTitle}</div>
                  <button className="btn" onClick={this.prettifyCode}>
                    Prettify
                  </button>
                </div>
                <AceEditor
                  mode={leftMode}
                  theme={theme}
                  onChange={x => this.onChange(null, x)}
                  name="code"
                  value={splitValue}
                  editorProps={{ $blockScrolling: true }}
                  highlightActiveLine={false}
                  scrollMargin={[20]}
                  focus
                  fontSize={14}
                  wrapEnabled
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
              <AceEditor
                mode={rightMode === "jsx" ? "javascript" : rightMode}
                theme={theme}
                name="code"
                readOnly
                value={
                  prettifyRightPanel ? (
                    window.js_beautify(resultValue, { e4x: true })
                  ) : (
                    resultValue
                  )
                }
                editorProps={{ $blockScrolling: true }}
                scrollMargin={[20]}
                fontSize={14}
                showGutter={false}
                highlightActiveLine={false}
                wrapEnabled
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
