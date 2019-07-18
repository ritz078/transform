import { transform } from "@babel/standalone";
import jsonToProptypes from "babel-plugin-json-to-proptypes";
import jsonToMobxTree from "@assets/vendor/babel-plugin-js-to-mobx-state-tree";
import { merge } from "lodash";
import { prettify } from "@utils/prettify";
import { BabelTransforms } from "@constants/babelTransforms";
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

async function handleJsonToProptypes(value, id) {
  let code = JSON.parse(value);

  if (typeof code !== "object" || Array.isArray(code)) {
    code = merge({}, ...code);
  }

  const result = transform(`const propTypes = ${JSON.stringify(code)}`, {
    plugins: [jsonToProptypes]
  }).code;

  const prettyCode = await prettify("javascript", result);

  _self.postMessage({
    id,
    payload: prettyCode
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

function jsonToMobx(value, id) {
  _self.postMessage({
    id,
    payload: transform(`const myModel = ${value}`, {
      plugins: [jsonToMobxTree]
    }).code
  });
}

_self.onmessage = ({ data: { id, payload } }: { data: Data }) => {
  const { value, type, settings } = payload;

  try {
    if (type === BabelTransforms.JSON_TO_PROPTYPES) {
      handleJsonToProptypes(value, id);
    } else if (type === BabelTransforms.OBJECT_STYLES_TO_TEMPLATE) {
      objectStylesToTemplate(value, id, settings);
    } else if (type === BabelTransforms.FLOW_TO_TYPESCRIPT) {
      flowToTS(value, id);
    } else if (type === BabelTransforms.JSON_TO_MOBX_TREE) {
      jsonToMobx(value, id);
    }
  } catch (e) {
    if (IS_DEV) {
      console.error(e);
    }
    _self.postMessage({
      id,
      err: e.message
    });
  }
};
