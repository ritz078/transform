import React, { Fragment, PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import defaultText from "../utils/dummy-json";
import json2go from "../utils/json-to-go";
import gofmt from "gofmt.js";
import PoweredBy from "../components/PoweredBy";

export default class extends PureComponent {
  getTransformedValue = code => gofmt(json2go(code).go);

  render() {
    return (
      <Fragment>
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
        <PoweredBy pathname={this.props.url.pathname} />
      </Fragment>
    );
  }
}
