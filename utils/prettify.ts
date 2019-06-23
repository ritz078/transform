import prettier from "prettier/standalone";

const plugins = [
  require("prettier/parser-babylon"),
  require("prettier/parser-html")
];

const prettierParsers = {
  css: "postcss",
  javascript: "babel",
  jsx: "babel",
  graphql: "graphql",
  json: "json",
  typescript: "typescript",
  flow: "flow"
};

export function prettify(language: string, value: string) {
  let result;

  if (language === "json") {
    result = JSON.stringify(JSON.parse(value), null, 2);
  } else {
    result = prettier.format(value, {
      parser: prettierParsers[language],
      plugins
    });
  }

  return result;
}
