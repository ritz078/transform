import React, { Fragment, PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import defaultText from "../utils/dummy-json";
import { json2ts } from "json-ts";
import PoweredBy from "../components/PoweredBy";

export default class Json2Ts extends PureComponent {
  getTransformedValue = code =>
    json2ts(code, {
      prefix: ""
    });

  render() {
    return (
      <Fragment>
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
        <PoweredBy pathname={this.props.url.pathname} />
      </Fragment>
    );
  }
}
