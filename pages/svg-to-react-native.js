import React, { PureComponent } from "react";
import convertSvgString from "transform-svg-to-native";
import ConversionPanel from "../components/ConversionPanel";
import isSvg from "is-svg";

const defaultText = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" version="1.1">
   <rect width="200" height="100" stroke="black" stroke-width="6" fill="green"/>
</svg>`;

export default class Svg2ReactNative extends PureComponent {
  getTransformedValue = async (newValue: string) => {
    if (!isSvg(newValue)) {
      throw new Error("Please provide a valid SVG markup.");
    }

    return new Promise(resolve =>
      convertSvgString(newValue, code => resolve(code))
    );
  };

  render() {
    return (
      <ConversionPanel
        url={this.props.url}
        leftTitle="SVG"
        rightTitle="JSX"
        leftMode="html"
        rightMode="jsx"
        getTransformedValue={this.getTransformedValue}
        name={"svg_to_react_native"}
        defaultText={defaultText}
        extensions={[".svg", ".html"]}
      />
    );
  }
}
