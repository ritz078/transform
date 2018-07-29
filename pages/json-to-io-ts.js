import React, { PureComponent } from "react";
import ConversionPanel from "../components/ConversionPanel";
import defaultText from "../utils/dummy-json";
import transform from "transform-json-types";
import PoweredBy from "../components/PoweredBy";

export default class Json2Ts extends PureComponent {
  getTransformedValue = code => {
    const ioTsCode = transform(code, {
      lang: "io-ts"
    });

    return `import * as t from "io-ts";\n\n${ioTsCode}`;
  };

  render() {
    return (
      <>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="Sarcastic"
          getTransformedValue={this.getTransformedValue}
          name={"io-ts"}
          defaultText={defaultText}
          leftMode="json"
          rightMode="javascript"
          url={this.props.url}
        />
        <PoweredBy pathname={this.props.url.pathname} />
      </>
    );
  }
}
