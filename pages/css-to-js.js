import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import cssToJS from "transform-css-to-js";

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

  getTransformedValue = newValue => {
    return cssToJS(newValue, this.state.isRn);
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
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
