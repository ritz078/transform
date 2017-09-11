try {
  importScripts('https://bundle.run/prettier@1.6.1')
} catch (e) {
  self.postMessage({ available: false })
}

const prettierParsers = {
  css: "postcss",
  javascript: "babylon",
  jsx: "babylon",
  graphql: "graphql",
  json: "json",
  typescript: "typescript",
  flow: "flow"
};

if (self.prettier) {
  postMessage({ available: true })
}

onmessage = function ({ data }) {
  const {code, mode, section } = data

  const prettyCode = self.prettier &&
  prettierParsers[mode] &&
  code ? (
    self.prettier.format(code, {
      parser: prettierParsers[mode],
      printWidth: 70
    })
  ) : (
    code
  )

  postMessage({ available: !!self.prettier, prettyCode, section })
}