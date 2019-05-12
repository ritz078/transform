import React, { PureComponent } from "react";
import cn from "classnames";
import isBrowser from "is-in-browser";
import copy from "copy-text-to-clipboard";
import unfetch from "unfetch";
import { List } from "react-content-loader";
import dynamic from "next/dynamic";

type Props = {
  leftMode: ?string,
  rightMode: ?string,
  resultValue: string,
  onCheckboxChange?: Function,
  checkboxText?: string,
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

function Stubs({ numberOfStubs = 3 }) {
  return (
    <div style={{ padding: 30 }}>
      {[...new Array(numberOfStubs)].map((x, i) => (
        <List key={i} />
      ))}
    </div>
  );
}

const Monaco = dynamic(import("./Monaco"), {
  ssr: false,
  loading: () => <Stubs />
});

export default class ConversionPanel extends PureComponent {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      resultValue: "",
      value: props.defaultText,
      splitValue: "",
      info: "",
      infoType: ""
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
  }

  clearText = () => {
    this.setState({
      value: "",
      resultValue: ""
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
    const { leftMode } = this.props;

    const nValue = newValue || this.state.value;
    const splitValue =
      leftSplitValue && typeof leftSplitValue === "string"
        ? leftSplitValue
        : this.state.splitValue;

    try {
      // Convert JS to JSON
      const json =
        leftMode === "json"
          ? JSON.stringify(eval("(" + nValue + ")", null, 2))
          : nValue;
      let code = IN_BROWSER
        ? await this.props.getTransformedValue(json, splitValue)
        : "";
      code = code.prettyCode || code;

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
        this.onChange();
      });
    }
  };

  copyCode = () => {
    const { resultValue } = this.state;
    copy(resultValue);

    this.setState({
      info: "Code copied to clipboard.",
      infoType: "success"
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
      extensions,
      prettifyRightPanel
    } = this.props;
    const { infoType, resultValue, value, info, splitValue } = this.state;

    const leftClass = cn("section left", {
      split: splitLeft
    });

    // hide success footer banner after 2 seconds. Let other types be visible until fixed.
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
            position: absolute;
            bottom: 0;
            right: 0;
          }

          #text {
            color: #fff;
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
            border-left: 1px solid #808080;
          }

          .info {
            color: white;
            font: 14px / normal "Monaco", "Menlo", "Ubuntu Mono", "Consolas",
              "source-code-pro", monospace;
          }

          .header {
            height: 50px;
            background-color: #424242;
            display: flex;
            align-items: center;
            padding: 0 10px;
            position: relative;
            justify-content: space-between;
            font-family: "Lato";
          }

          .title {
            padding-left: 4px;
            color: #fff;
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

          .btn {
            background-color: #2196f3;
            font-size: 13px;
            padding: 5px 14px;
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
        `}</style>

        <div className="content-wrapper">
          <div className={leftClass}>
            <div className="panel">
              <div className="header">
                <h4 className="title">{leftTitle}</h4>

                {leftMode === "json" && showFetchButton && (
                  <button className="btn" onClick={this.fetchJSON}>
                    {fetchButtonText}
                  </button>
                )}

                <div />
              </div>

              <div className="clear" onClick={this.clearText}>
                <ClearIcon />
              </div>

              <Monaco
                value={value}
                onChange={this.onChange}
                mode={leftMode}
                autoPrettify={false}
              />

              {extensions && extensions.length > 0 && (
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
            {splitLeft && isBrowser && (
              <div className="panel">
                <div className="header">
                  <h4 className="title">{splitTitle}</h4>
                </div>
                <Monaco
                  onChange={value => this.onChange(this.state.value, value)}
                  value={splitValue}
                  mode={splitMode}
                />
              </div>
            )}
          </div>
          <div className="section right">
            <div className="panel">
              <div className="header">
                <h4 className="title">{rightTitle}</h4>
                {onCheckboxChange && (
                  <label style={{ color: "#fff" }} htmlFor="#text">
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
              <Monaco
                value={resultValue}
                mode={rightMode}
                autoPrettify={prettifyRightPanel}
                allowPrettify={false}
              />
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
