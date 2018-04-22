import React, { PureComponent, Fragment } from "react";
import { bigquery } from "generate-schema";
import stringify from "stringify-object";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import PoweredBy from "../components/PoweredBy";
import defaultText from "../utils/dummy-object-json";

export default class Json2Ts extends PureComponent {
  getTransformedValue = newValue => {
    const value = JSON.parse(newValue);
    return stringify(bigquery(value));
  };

  render() {
    return (
      <Fragment>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="Big Query Schema"
          getTransformedValue={this.getTransformedValue}
          name={"big-query"}
          defaultText={defaultText}
          leftMode="json"
          rightMode="javascript"
          url={this.props.url}
        />
        <PoweredBy pathname={this.props.url.pathname} />
      </Fragment>
    );
  }
}
