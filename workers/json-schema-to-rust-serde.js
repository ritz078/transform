import registerPromiseWorker from "promise-worker/register";
import transform from "transform-json-types";
import jsf from "json-schema-faker";

jsf.option({
  alwaysFakeOptionals: true
});

registerPromiseWorker(
  code =>
    new Promise(resolve => {
      jsf.resolve(JSON.parse(code)).then(_json => {
        resolve(
          transform(_json, {
            lang: "rust-serde"
          })
        );
      });
    })
);
