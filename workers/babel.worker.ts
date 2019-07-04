import { transform } from "@babel/standalone";
import jsonToProptypes from "babel-plugin-json-to-proptypes";
import { merge } from "lodash";
import { prettify } from "@utils/prettify";
import { BabelTransforms } from "@constants/babelTransforms";
import { plugin as babelRnSvg, template } from "@utils/svg-to-react-native";
import babelSyntaxJsx from "@babel/plugin-syntax-jsx";
import objStylesToTemplate from "babel-plugin-object-styles-to-template";
import babelFlowToTs from "babel-plugin-flow-to-typescript";

const _self: any = self;

interface Data {
  id: string;
  payload: {
    value: string;
    type: BabelTransforms;
    settings?: any;
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
  const result = transform(value, {
    plugins: [babelSyntaxJsx, babelRnSvg]
  }).code;

  _self.postMessage({
    id,
    payload: template(result)
  });
}

function objectStylesToTemplate(value, id, settings) {
  _self.postMessage({
    id,
    payload: transform(value, {
      plugins: [[objStylesToTemplate, settings]]
    }).code
  });
}

function flowToTS(value, id) {
  _self.postMessage({
    id,
    payload: transform(value, {
      plugins: [babelFlowToTs]
    }).code
  });
}

_self.onmessage = ({ data: { id, payload } }: { data: Data }) => {
  const { value, type, settings } = payload;

  try {
    if (type === BabelTransforms.JSON_TO_PROPTYPES) {
      handleJsonToProptypes(value, id);
    } else if (type === BabelTransforms.SVG_TO_REACT_NATIVE_SVG) {
      handleSvgToReactNative(value, id);
    } else if (type === BabelTransforms.OBJECT_STYLES_TO_TEMPLATE) {
      objectStylesToTemplate(value, id, settings);
    } else if (type === BabelTransforms.FLOW_TO_TYPESCRIPT) {
      flowToTS(value, id);
    }
  } catch (e) {
    _self.postMessage({
      id,
      err: e.message
    });
  }
};
