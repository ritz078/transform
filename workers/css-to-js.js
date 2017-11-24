import registerPromiseWorker from "promise-worker/register";
import cssToJS from "transform-css-to-js";

registerPromiseWorker(
  message =>
    new Promise(resolve => {
      const { isRn, code } = message;
      resolve(`const styles = ${cssToJS(code, isRn)}`);
    })
);
