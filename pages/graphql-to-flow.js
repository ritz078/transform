import React, { PureComponent } from "react";
import { generateSource } from "apollo-codegen/lib/flow/codeGeneration";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import { dummySchema, dummyQuery, transform } from "../utils/graphql-schema";

export default class Json2Ts extends PureComponent {
  getTransformedValue = (newValue, splitValue) => {
    return transform(newValue, splitValue, generateSource);
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="Schema"
          rightTitle="Flow"
          getTransformedValue={this.getTransformedValue}
          name={"graphql_to_typescript"}
          defaultText={dummySchema}
          leftMode="typescript"
          rightMode="typescript"
          url={this.props.url}
          prettifyRightPanel={false}
          splitLeft={true}
          splitTitle={"Query"}
          splitValue={dummyQuery}
        />
      </Layout>
    );
  }
}
