import React, { Fragment, PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import { dummySchema, dummyQuery } from "../utils/graphql-schema";
import loadWorker from "../utils/loadWorker";

export default class Json2Ts extends PureComponent {
  getTransformedValue = (newValue, splitValue) => {
    this.promiseWorker = loadWorker(
      "graphql-to-flow-ts.js",
      this
    ).promiseWorker;
    return this.promiseWorker.postMessage({
      schema: newValue,
      query: splitValue,
      convertTo: "typescript"
    });
  };

  render() {
    return (
      <Fragment>
        <ConversionPanel
          leftTitle="Schema"
          rightTitle="TypeScript Definition"
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
