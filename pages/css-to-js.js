import React, { PureComponent } from "react";
import plugin from "../utils/css-to-js";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import transform from "css-to-react-native";
import kebabCase from "lodash/kebabCase";

const defaultText = `.main-wrapper {
  flex-direction: row;
  display: flex;
  flex: 1;
}

#content {
  flex: 1;
}

ul {
  padding: 20px 0;
  flex: 1;
}

li {
  font-family:'Lato';
  color: whitesmoke;
  line-height: 44px;
}
`;

export default class Css2Js extends PureComponent {
  state = {
    isRn: false
  };

  getRnCode = (newValue: string) => {
    const styles = {};
    const code = eval("(" + plugin(newValue).split("=")[1] + ")");
    Object.keys(code).forEach(key => {
      styles[key] = {};
      const arr = [];
      Object.keys(code[key]).forEach(key2 => {
        arr.push([kebabCase(key2), code[key][key2]]);
      });
      styles[key] = transform(arr);
    });
    return styles;
  };

  getTransformedValue = (newValue: string) => {
    return this.state.isRn
      ? `const styles = StyleSheet.create(${JSON.stringify(
          this.getRnCode(newValue)
        )})`
      : plugin(newValue);
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          url={this.props.url}
          leftTitle="CSS"
          rightTitle="JavaScript"
          leftMode="css"
          getTransformedValue={this.getTransformedValue}
          name={"css_to_js"}
          defaultText={defaultText}
          onCheckboxChange={(checked, cb) =>
            this.setState({ isRn: checked }, cb)}
          checkboxText="React Native"
        />
      </Layout>
    );
  }
}
