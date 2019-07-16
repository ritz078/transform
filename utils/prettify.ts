import prettier from "prettier/standalone";

const prettierParsers = {
  css: "postcss",
  javascript: "babel",
  jsx: "babel",
  svg: "html",
  xml: "html",
  typescript: "typescript"
};

const getPlugin = {
  babel: () => require("prettier/parser-babylon"),
  html: () => require("prettier/parser-html"),
  postcss: () => require("prettier/parser-postcss"),
  graphql: () => require("prettier/parser-graphql"),
  markdown: () => require("prettier/parser-markdown"),
  yaml: () => require("prettier/parser-yaml"),
  flow: () => require("prettier/parser-flow"),
  typescript: () => require("prettier/parser-typescript")
};

export async function prettify(language: string, value: string) {
  let result;

  if (language === "json") {
    result = JSON.stringify(JSON.parse(value), null, 2);
  } else {
    const plugin = await getPlugin[prettierParsers[language] || language]();

    result = prettier.format(value, {
      parser: prettierParsers[language] || language,
      plugins: [plugin]
    });
  }

  return result;
}
