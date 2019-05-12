import React, { PureComponent, Fragment } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import { dummySchema, dummyQuery } from "../utils/graphql-schema";
import loadWorker from "../utils/loadWorker";

export default class extends PureComponent {
  getTransformedValue = (newValue, splitValue) => {
    this.promiseWorker = loadWorker(
      "graphql-to-flow-ts.js",
      this
    ).promiseWorker;
    return this.promiseWorker.postMessage({
      schema: newValue,
      query: splitValue,
      convertTo: "flow"
    });
  };

  render() {
    return (
      <Fragment>
        <ConversionPanel
          leftTitle="Schema"
          rightTitle="Flow"
          getTransformedValue={this.getTransformedValue}
          name={"graphql_to_typescript"}
          defaultText={dummySchema}
          leftMode="json"
          rightMode="typescript"
          url={this.props.url}
          splitLeft={true}
          splitMode={"graphql"}
          splitTitle={"Query"}
          splitValue={dummyQuery}
          prettifyRightPanel={false}
          extensions={null}
        />
      </Fragment>
    );
  }
}
