import React, { PureComponent } from "react";
import { xml2json } from "xml-js";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import PoweredBy from "../components/PoweredBy";

const text = `<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>
`;

export default class extends PureComponent {
  state = {
    isCompactMode: true
  };

  getTransformedValue = newValue => {
    return JSON.stringify(
      JSON.parse(
        xml2json(newValue, {
          compact: this.state.isCompactMode
        })
      )
    );
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="XML"
          rightTitle="JSON"
          getTransformedValue={this.getTransformedValue}
          name={"big-query"}
          defaultText={text}
          leftMode="html"
          rightMode="json"
          url={this.props.url}
          onCheckboxChange={(checked, cb) =>
            this.setState({ isCompactMode: checked }, cb)
          }
          checkboxText="Compact Mode"
          initialCheckboxValue={this.state.isCompactMode}
          extensions={null}
        />
        <PoweredBy pathname={this.props.url.pathname} />
      </Layout>
    );
  }
}
