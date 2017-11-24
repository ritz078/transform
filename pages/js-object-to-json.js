import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import stringify from "stringify-object";
import ConversionPanel from "../components/ConversionPanel";
import text from "../utils/dummy-object-json";

const defaultText = stringify(eval(`(${text})`));

export default class extends PureComponent {
  getTransformedValue = newValue => {
    return JSON.stringify(eval("(" + newValue + ")"), null, 2);
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JS Object"
          rightTitle="JSON"
          url={this.props.url}
          leftMode="json"
          rightMode="json"
          getTransformedValue={this.getTransformedValue}
          name={"js_to_json"}
          defaultText={defaultText}
          extensions={null}
        />
      </Layout>
    );
  }
}
