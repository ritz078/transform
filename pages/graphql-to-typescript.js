import React, { PureComponent } from "react";
import { parse, buildClientSchema } from "graphql"
import CodeGenerator from "apollo-codegen/lib/utilities/CodeGenerator";
import { generateSource } from "apollo-codegen/lib/typescript/codeGeneration"
import { compileToIR } from "apollo-codegen/lib/compilation"
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import schema from "../utils/graphql-schema";

const query = `query HeroName {
  hero {
    name
  }
}`

function setup(schema) {
  const context = {
    schema: schema,
    operations: {},
    fragments: {},
    typesUsed: {}
  }

  const generator = new CodeGenerator(context);

  const compileFromSource = (source) => {
    const document = parse(source);
    const context = compileToIR(schema, document, {
      mergeInFieldsFromFragmentSpreads: true,
      addTypename: true
    });
    generator.context = context;
    return context;
  };

  const addFragment = (fragment) => {
    generator.context.fragments[fragment.fragmentName] = fragment;
  };

  return { generator, compileFromSource, addFragment };
}

export default class Json2Ts extends PureComponent {
  getTransformedValue = (newValue, splitValue) => {
    if (!splitValue || !newValue) { return }
    const schemaData = JSON.parse(newValue)

    if (!schemaData.data && !schemaData.__schema) {
      throw new Error('GraphQL schema file should contain a valid GraphQL introspection query result');
    }

    const schema = buildClientSchema(schemaData.data ? schemaData.data : schemaData)

    const { compileFromSource } = setup(schema)
    const context = compileFromSource(splitValue)
    return generateSource(context)
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
          prettifyRightPanel={false}
          splitLeft={true}
          splitTitle={'Query'}
          splitValue={query}
        />
      </Layout>
    );
  }
}
