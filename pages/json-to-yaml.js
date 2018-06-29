import React, { Fragment, PureComponent } from "react";
import ConversionPanel from "../components/ConversionPanel";
import PoweredBy from "../components/PoweredBy";
import { stringify } from "json2yaml";

const defaultText = `{
  "foo": "bar",
  "baz": [
    "qux",
    "quxx"
  ],
  "corge": null,
  "grault": 1,
  "garply": true,
  "waldo": "false",
  "fred": "undefined",
  "emptyarr": []
}`;

export default class extends PureComponent {
  getTransformedValue = code => stringify(JSON.parse(code));

  render() {
    return (
      <Fragment>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="YAML"
          getTransformedValue={this.getTransformedValue}
          defaultText={defaultText}
          leftMode="json"
          rightMode="yaml"
          url={this.props.url}
          prettifyRightPanel={false}
        />
        <PoweredBy pathname={this.props.url.pathname} />
      </Fragment>
    );
  }
}
