export const prettierParsers = {
  css: "postcss",
  javascript: "babel",
  jsx: "babel",
  svg: "html",
  xml: "html",
  typescript: "typescript"
};

export const supportedLanguages = [
  "json",
  "babylon",
  "html",
  "postcss",
  "graphql",
  "markdown",
  "yaml",
  "typescript",
  "flow",
  ...Object.keys(prettierParsers)
];
