import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import PoweredBy from "../components/PoweredBy";
import yaml from "yaml";

const defaultText = `---
  foo: "bar"
  baz: 
    - "qux"
    - "quxx"
  corge: null
  grault: 1
  garply: true
  waldo: "false"
  fred: "undefined"
  emptyarr: []
  emptyobj: {}
`;

export default class extends PureComponent {
  getTransformedValue = code => JSON.stringify(yaml.eval(code));

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="YAML"
          rightTitle="JSON"
          getTransformedValue={this.getTransformedValue}
          defaultText={defaultText}
          leftMode="yaml"
          rightMode="json"
          url={this.props.url}
        />
        <PoweredBy pathname={this.props.url.pathname} />
      </Layout>
    );
  }
}
