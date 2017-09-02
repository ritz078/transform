import React, { PureComponent } from "react";
import dynamic from "next/dynamic";
import { Json2dts, toValidJSON } from "../utils/json-to-ts-flow";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import defaultText from "../utils/dummy-json";
import merge from "lodash/merge"

export default class Json2Ts extends PureComponent {
  getTransformedValue = newValue => {
    const converter = new Json2dts();
    let text2Obj = JSON.parse(toValidJSON(newValue));
    if (typeof text2Obj !== "object" || Array.isArray(text2Obj)) {
      text2Obj = merge({}, ...text2Obj)
    }
    converter.parse(text2Obj, "RootJson");
    return converter.getCode();
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="TypeScript Interface"
          getTransformedValue={this.getTransformedValue}
          name={"ts_interface"}
          defaultText={defaultText}
          leftMode="json"
          rightMode="typescript"
          url={this.props.url}
        />
      </Layout>
    );
  }
}
