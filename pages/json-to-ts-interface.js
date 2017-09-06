import React, { PureComponent } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import defaultText from "../utils/dummy-json";
import transform from "transform-json-types";

export default class Json2Ts extends PureComponent {
  getTransformedValue = code =>
    transform(code, {
      lang: "typescript"
    });

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
          prettifyRightPanel={false}
        />
      </Layout>
    );
  }
}
