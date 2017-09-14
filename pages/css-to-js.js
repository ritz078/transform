import React, { PureComponent } from "react";
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import loadWorker from "../utils/loadWorker";

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

export default class extends PureComponent {
  state = {
    isRn: false
  };

  getTransformedValue = code => {
    this.promiseWorker = loadWorker("css-to-js.js", this).promiseWorker;
    return this.promiseWorker.postMessage({ code, isRn: this.state.isRn });
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="CSS"
          rightTitle="JavaScript"
          leftMode="css"
          rightMode="javascript"
          getTransformedValue={this.getTransformedValue}
          name={"css_to_js"}
          defaultText={defaultText}
          onCheckboxChange={(checked, cb) =>
            this.setState({ isRn: checked }, cb)}
          checkboxText="React Native"
          extensions={null}
        />
      </Layout>
    );
  }
}
