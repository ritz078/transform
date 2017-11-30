import { transform } from "babel-standalone";
import convert from "babel-plugin-object-styles-to-template";
import immutablePropsPlugin from "../utils/babel-plugin-js-to-immutable-prop-types";
import registerPromiseWorker from "promise-worker/register";

registerPromiseWorker(
  code =>
    new Promise(resolve => {
      const newCode = transform(code, {
        plugins: [convert]
      }).code;

      resolve(`${newCode}`);
    })
);
