import React, { PureComponent } from "react";
import propsPlugin from "../utils/babel-plugin-js-to-prop-types";
import immutablePropsPlugin from "../utils/babel-plugin-js-to-immutable-prop-types";
import Layout from "../components/Layout";
import { transform } from "babel-standalone";
import defaultText from "../utils/dummy-json";

import ConversionPanel from "../components/ConversionPanel";

export default class Main extends PureComponent {
  state = {
    isImmutable: false
  };

  getTransformedValue = newValue => {
    newValue = "const propTypes = " + newValue;
    const plugin = this.state.isImmutable ? immutablePropsPlugin : propsPlugin;
    const { code } = transform(newValue, {
      presets: ["es2015"],
      plugins: [plugin]
    });
    return code;
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="PropTypes"
          url={this.props.url}
          leftMode="json"
          getTransformedValue={this.getTransformedValue}
          name={"prop_types"}
          defaultText={defaultText}
          onCheckboxChange={(checked, cb) => 
            this.setState({ isImmutable: checked }, cb)}
          checkboxText="Immutable Proptypes"
        />
      </Layout>
    );
  }
}
