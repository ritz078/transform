import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import json from "../utils/dummy-json-schema";
import loadWorker from "../utils/loadWorker";

export default class Json2Ts extends PureComponent {
  state = {
    snakeCase: false
  };

  getTransformedValue = code => {
    this.promiseWorker = loadWorker(
      "json-schema-to-rust-serde.js",
      this
    ).promiseWorker;
    return this.promiseWorker.postMessage({
      code,
      rustCase: this.state.snakeCase ? "snakeCase" : "camelCase"
    });
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JSON Schema"
          rightTitle="Rust Serde"
          getTransformedValue={this.getTransformedValue}
          defaultText={json}
          leftMode="javascript"
          rightMode="rust"
          url={this.props.url}
          prettifyRightPanel={false}
          checkboxText="Snake Case"
          initialCheckboxValue={this.state.snakeCase}
          onCheckboxChange={(checked: boolean, cb: Function) =>
            this.setState({ snakeCase: checked }, cb)
          }
        />
      </Layout>
    );
  }
}
