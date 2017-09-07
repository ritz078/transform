import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import { compile } from "json-schema-to-typescript";

const json = `{
  title: 'Example Schema',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    },
    height: {
      type: 'number'
    },
    favoriteFoods: {
      type: 'array'
    },
    likesDogs: {
      type: 'boolean'
    }
  },
  required: ['firstName', 'lastName']
}`;

export default class Json2Ts extends PureComponent {
  getTransformedValue = code => compile(eval("(" + code + ")"));

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JSON Schema"
          rightTitle="TypeScript Interface"
          getTransformedValue={this.getTransformedValue}
          name={"ts_interface"}
          defaultText={json}
          leftMode="javascript"
          rightMode="typescript"
          url={this.props.url}
          prettifyRightPanel={false}
        />
      </Layout>
    );
  }
}
