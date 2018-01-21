import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import defaultText from "../utils/dummy-json";
import PoweredBy from "../components/PoweredBy";

export default class Json2Ts extends PureComponent {
  getTransformedValue = code => window.json2ts(code, { flow: true });

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="Flow Types"
          getTransformedValue={this.getTransformedValue}
          name={"ts_interface"}
          defaultText={defaultText}
          leftMode="json"
          rightMode="flow"
          url={this.props.url}
          prettifyRightPanel={false}
        />
        <PoweredBy pathname={this.props.url.pathname} />
      </Layout>
    );
  }
}
