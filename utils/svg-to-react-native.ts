import { findIndex, isArray, isEmpty } from "lodash";
import isCapitalized from "is-capitalized";

const supportedElements = [
  "Svg",
  "Rect",
  "Circle",
  "Ellipse",
  "Line",
  "Polygon",
  "Polyline",
  "Path",
  "Text",
  "TSpan",
  "TextPath",
  "G",
  "Use",
  "Symbol",
  "Defs",
  "Image",
  "ClipPath",
  "LinearGradient",
  "RadialGradient",
  "Mask",
  "Pattern",
  "Stop"
];

let importMapping = [];

function smartArrayPush(value) {
  let property = importMapping;
  if (!property || (!isEmpty(property) && !isArray(property))) {
    importMapping = [value];
  } else if (importMapping.indexOf(value) === -1) {
    importMapping.push(value);
  }
}

export function plugin({ types: t }) {
  return {
    visitor: {
      JSXIdentifier(path) {
        if (
          t.isJSXOpeningElement(path.parent) &&
          (path.node.name === "script" || path.node.name === "div")
        ) {
          path.parentPath.parentPath.remove();
          return;
        }

        if (
          (t.isJSXOpeningElement(path.parent) ||
            t.isJSXClosingElement(path.parent)) &&
          !isCapitalized(path.node.name)
        ) {
          const index = findIndex(
            supportedElements,
            o => o.toLowerCase() === path.node.name.toLowerCase()
          );

          if (supportedElements[index] !== "Svg") {
            smartArrayPush(supportedElements[index]);
          }

          path.replaceWith(t.JSXIdentifier(supportedElements[index]));
        }
      }
    }
  };
}

export function template(code) {
  return `
  import React from "react";
import Svg, {${importMapping.join(", ")}} from 'react-native-svg'

export default function () {
  return ${code}
}
`;
}
