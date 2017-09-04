import React, { PureComponent } from "react";
import jsonToProptypes from "babel-plugin-json-to-proptypes";
import immutablePropsPlugin from "../utils/babel-plugin-js-to-immutable-prop-types";
import Layout from "../components/Layout";
import { transform } from "babel-standalone";
import defaultText from "../utils/dummy-json";
import merge from "lodash/merge"

import ConversionPanel from "../components/ConversionPanel";

export default class Main extends PureComponent {
  state = {
    isImmutable: false
  };

  getTransformedValue = newValue => {
    let x = JSON.parse(newValue)
    if (typeof x !== "object" || Array.isArray(x)) {
      x = merge({}, ...x)
    }
    x = "const propTypes = " + JSON.stringify(x);
    const plugin = this.state.isImmutable ? immutablePropsPlugin : jsonToProptypes;
    const { code } = transform(x, {
      plugins: [plugin]
    });


    return `import PropTypes from "prop-types";
    
    ${code}`;
  };

  async componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful");
        })
        .catch(err => {
          console.warn("service worker registration failed");
        });
    }
  }

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
