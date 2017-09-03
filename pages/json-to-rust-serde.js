import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import defaultText from "../utils/dummy-json";
import transform from "transform-json-types"
export default class Json2Ts extends PureComponent {
  getTransformedValue = code => transform(code, {
    lang: 'rust-serde'
  })

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="Rust Serde"
          getTransformedValue={this.getTransformedValue}
          name={"ts_interface"}
          defaultText={defaultText}
          leftMode="json"
          rightMode="rust"
          url={this.props.url}
          prettifyRightPanel={false}
        />
      </Layout>
    );
  }
}
