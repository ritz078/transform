import { transform } from "@babel/standalone";
import jsonToProptypes from "babel-plugin-json-to-proptypes";
import { merge } from "lodash";
import { prettify } from "@utils/prettify";
import { BabelTransforms } from "@constants/babelTransforms";
import { plugin as babelRnSvg, template } from "@utils/svg-to-react-native";
import babelSyntaxJsx from "@babel/plugin-syntax-jsx";

const _self: any = self;

interface Data {
  id: string;
  payload: {
    value: string;
    type: BabelTransforms;
  };
}

function handleJsonToProptypes(value, id) {
  let code = JSON.parse(value);

  if (typeof code !== "object" || Array.isArray(code)) {
    code = merge({}, ...code);
  }

  const result = transform(`const propTypes = ${JSON.stringify(code)}`, {
    plugins: [jsonToProptypes]
  }).code;

  _self.postMessage({
    id,
    payload: prettify("javascript", result)
  });
}

function handleSvgToReactNative(value, id) {
  debugger;
  const result = transform(value, {
    plugins: [babelSyntaxJsx, babelRnSvg]
  }).code;

  _self.postMessage({
    id,
    payload: template(result)
  });
}

_self.onmessage = ({ data: { id, payload } }: { data: Data }) => {
  const { value, type } = payload;

  if (type === BabelTransforms.JSON_TO_PROPTYPES) {
    handleJsonToProptypes(value, id);
  } else if (type === BabelTransforms.SVG_TO_REACT_NATIVE_SVG) {
    handleSvgToReactNative(value, id);
  }
};
