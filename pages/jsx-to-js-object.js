import React, { Fragment, PureComponent } from "react";
import ConversionPanel from "../components/ConversionPanel";
import PoweredBy from "../components/PoweredBy";
import worker from "../workers/jsx-to-js-object";

const defaultText = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" version="1.1">
   <rect width="200" height="100" stroke="black" stroke-width="6" fill="green"/>
</svg>`;

export default class extends PureComponent {
  getTransformedValue = async code => {
    const result = await worker().transform(code);
    if (result.code) {
      return result.value;
    } else {
      throw new Error(result.value);
    }
  };

  render() {
    return (
      <Fragment>
        <ConversionPanel
          leftTitle="JSX"
          rightTitle="JS Object"
          getTransformedValue={this.getTransformedValue}
          defaultText={defaultText}
          leftMode="jsx"
          rightMode="json"
          url={this.props.url}
        />
        <PoweredBy pathname={this.props.url.pathname} />
      </Fragment>
    );
  }
}
