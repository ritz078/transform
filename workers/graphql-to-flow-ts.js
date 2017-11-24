import transform from "transform-graphql-type-annotations";
import registerPromiseWorker from "promise-worker/register";

registerPromiseWorker(
  message =>
    new Promise(resolve => {
      const { query, schema, convertTo } = message;
      resolve(transform(schema, query, convertTo));
    })
);
