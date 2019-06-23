import { transform } from "babel-standalone";
import jsonToProptypes from "babel-plugin-json-to-proptypes";
import { merge } from "lodash";
import { prettify } from "@utils/prettify";

const _self: any = self;

_self.onmessage = ({ data: { id, payload } }) => {
  let code = JSON.parse(payload);

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
};
