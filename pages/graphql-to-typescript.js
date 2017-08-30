import React, { PureComponent } from "react";
import { schemaToInterfaces } from "@gql2ts/from-schema";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import schema from "../utils/graphql-schema";

export default class Json2Ts extends PureComponent {
  state = {
    legacyTS: false
  };

  getTransformedValue = newValue => {
    console.log(newValue);
    return schemaToInterfaces(JSON.parse(newValue), {
      legacy: this.state.legacyTS
    });
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="GraphQL Schema"
          rightTitle="TypeScript Definition"
          getTransformedValue={this.getTransformedValue}
          name={"graphql_to_typescript"}
          defaultText={schema}
          leftMode="typescript"
          rightMode="typescript"
          url={this.props.url}
          onCheckboxChange={(checked, cb) =>
            this.setState({ legacyTS: checked }, cb)}
          checkboxText="Support TypeScript 1.x"
          prettifyRightPanel={false}
        />
      </Layout>
    );
  }
}
