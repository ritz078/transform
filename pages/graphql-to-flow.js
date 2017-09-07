import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import { dummySchema, dummyQuery } from "../utils/graphql-schema";
import transform from "transform-graphql-type-annotations";

export default class Json2Ts extends PureComponent {
  getTransformedValue = (newValue, splitValue) => {
    return transform(newValue, splitValue);
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
          leftMode="json"
          rightMode="flow"
          url={this.props.url}
          splitLeft={true}
          splitMode={"graphql"}
          splitTitle={"Query"}
          splitValue={dummyQuery}
          prettifyRightPanel={false}
        />
      </Layout>
    );
  }
}
