import React, { PureComponent } from "react";
import { Json2dts, toValidJSON } from "../utils/json-to-scala-case-class";
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
          rightTitle="Scala Case Class"
          getTransformedValue={this.getTransformedValue}
          name={"scala_case_class"}
          defaultText={defaultText}
          leftMode="json"
          rightMode="scala"
          url={this.props.url}
        />
      </Layout>
    );
  }
}
