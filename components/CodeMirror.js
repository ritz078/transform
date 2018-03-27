import React, { PureComponent } from "react";
import { Controlled } from "react-codemirror2";

require("codemirror-graphql/mode");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/xml/xml");
require("codemirror/mode/jsx/jsx");
require("codemirror/mode/css/css");
require("codemirror/mode/rust/rust");
require("codemirror/mode/sql/sql");
require("codemirror/mode/clike/clike");
require("codemirror/mode/go/go");

function noop() {}

export default class extends PureComponent {
  static defaultProps = {
    onChange: noop,
    onBeforeChange: noop
  };

  render() {
    const { value, options, onChange, onBeforeChange } = this.props;
    return (
      <Controlled
        value={value}
        options={options}
        onChange={onChange}
        onBeforeChange={onBeforeChange}
      />
    );
  }
}
