import { transform } from "babel-standalone";
import convert from "babel-plugin-object-styles-to-template";
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
