import prettier from "prettier/standalone";
const plugins = [
  require("prettier/parser-babylon"),
  require("prettier/parser-html")
];

import { BuiltInParserName } from "prettier";

interface Data {
  data: {
    value: string;
    language: BuiltInParserName;
  };
}

const _self = self as any;

const prettierParsers = {
  css: "postcss",
  javascript: "babel",
  jsx: "babel",
  graphql: "graphql",
  json: "json",
  typescript: "typescript",
  flow: "flow"
};

_self.onmessage = ({ data: { value, language } }: Data) => {
  let result;

  if (language === "json") {
    result = JSON.stringify(JSON.parse(value), null, 2);
  } else {
    result = prettier.format(value, {
      parser: prettierParsers[language],
      plugins
    });
  }

  _self.postMessage({
    data: result
  });
};
