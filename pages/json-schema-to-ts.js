import React, { PureComponent, Fragment } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import { compile } from "json-schema-to-typescript";
import json from "../utils/dummy-json-schema";
import PoweredBy from "../components/PoweredBy";

export default class Json2Ts extends PureComponent {
  getTransformedValue = code => compile(eval("(" + code + ")"));

  render() {
    return (
      <Fragment>
        <ConversionPanel
          leftTitle="JSON Schema"
          rightTitle="TypeScript Interface"
          getTransformedValue={this.getTransformedValue}
          name={"ts_interface"}
          defaultText={json}
          leftMode="json"
          rightMode="typescript"
          url={this.props.url}
          prettifyRightPanel={false}
        />
        <PoweredBy pathname={this.props.url.pathname} />
      </Fragment>
    );
  }
}
