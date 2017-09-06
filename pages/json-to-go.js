import React, { PureComponent } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import defaultText from "../utils/dummy-json";
import json2go from "../utils/json-to-go"
import gofmt from "gofmt.js"

export default class extends PureComponent {
  getTransformedValue = code => gofmt(json2go(code).go)

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="Go Struct"
          getTransformedValue={this.getTransformedValue}
          name={"ts_interface"}
          defaultText={defaultText}
          leftMode="json"
          rightMode="go"
          url={this.props.url}
          prettifyRightPanel={false}
        />
      </Layout>
    );
  }
}