import React, { PureComponent } from "react";
import transform from "transform-graphql-type-annotations";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import { dummySchema, dummyQuery } from "../utils/graphql-schema";

export default class Json2Ts extends PureComponent {
  getTransformedValue = (newValue, splitValue) => {
    return transform(newValue, splitValue, "typescript");
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="Schema"
          rightTitle="TypeScript Definition"
          getTransformedValue={this.getTransformedValue}
          name={"graphql_to_typescript"}
          defaultText={dummySchema}
          leftMode="typescript"
          rightMode="typescript"
          url={this.props.url}
          prettifyRightPanel={false}
          splitLeft={true}
          splitMode={"graphql"}
          splitTitle={"Query"}
          splitValue={dummyQuery}
        />
      </Layout>
    );
  }
}
