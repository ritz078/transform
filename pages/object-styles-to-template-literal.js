import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import merge from "lodash/merge";
import loadWorker from "../utils/loadWorker";

import ConversionPanel from "../components/ConversionPanel";

const defaultText = `const container = css({
    flex: 1,
    padding: 10,
    backgroundColor: 'orange',
    color: colors.white,

    '&:hover': {
        backgroundColor: 'tomato',
    }
});  
`;

export default class Main extends PureComponent {
  state = {
    isImmutable: false
  };

  getTransformedValue = code => {
    this.promiseWorker = loadWorker(
      "object-styles-to-template-literal.js",
      this
    ).promiseWorker;
    return this.promiseWorker.postMessage(code);
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="Object Styles"
          rightTitle="Template Literal"
          leftMode="javascript"
          getTransformedValue={this.getTransformedValue}
          name={"template_literal"}
          defaultText={defaultText}
        />
      </Layout>
    );
  }
}
