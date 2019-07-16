import React from "react";
import flatten from "lodash/flatten";
import find from "lodash/find";

export const categorizedRoutes = [
  {
    category: "JSON",
    content: [
      {
        label: "to React PropTypes",
        path: "/",
        title: "Transform | All important transforms at one place.",
        desc:
          "An online utility to convert a JSON object to prop-types, Typescript Interface, Rust serde or flow types. It also converts your CSS into JS and HTML into JSX."
      },
      {
        label: "to Flow",
        path: "/json-to-flow",
        desc: "An online REPL for converting JSON to generate Flow Types."
      },
      {
        label: "to TypeScript",
        path: "/json-to-typescript",
        desc:
          "An online REPL for converting JSON to generate TypeScript Interface."
      },
      {
        label: "to MobX-State-Tree Model",
        path: "/json-to-mobx-state-tree",
        desc: "An online REPL for converting JSON to generate Mobx State Tree."
      },
      {
        label: "to Sarcastic",
        path: "/json-to-sarcastic",
        desc: "An online REPL for converting JSON to sarcastic.",
        packageName: "transform-json-types",
        packageUrl: "https://github.com/transform-it/transform-json-types"
      },
      {
        label: "to io-ts",
        path: "/json-to-io-ts",
        desc: "An online REPL for converting JSON to io-ts.",
        packageName: "transform-json-types",
        packageUrl: "https://github.com/transform-it/transform-json-types"
      },
      {
        label: "to Rust Serde",
        path: "/json-to-rust-serde",
        desc: "An online REPL for converting JSON to Rust Serde Structs."
      },
      {
        label: "to Mongoose Schema",
        path: "/json-to-mongoose",
        desc: "An online REPL to generate Mongoose Schema from JSON.",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema"
      },
      {
        label: "to Big Query Schema",
        path: "/json-to-big-query",
        desc: "An online REPL to generate Big Query Schema from JSON.",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema"
      },
      {
        label: "to MySQL",
        path: "/json-to-mysql",
        desc:
          "An online REPL to generate MySQL table generation code from JSON.",
        packageName: "generate-schema",
        packageUrl: "https://github.com/nijikokun/generate-schema"
      },
      {
        label: "to Scala Case Class",
        path: "/json-to-scala-case-class",
        desc: "An online REPL to generate Scala Case Class from JSON."
      },
      {
        label: "to Go Struct",
        path: "/json-to-go",
        desc: "An online REPL to generate Go Struct from JSON.",
        packageName: "json-to-go",
        packageUrl: "https://github.com/mholt/json-to-go"
      },
      {
        label: "to YAML",
        path: "/json-to-yaml",
        desc: "An online REPL to convert JSON to YAML.",
        packageName: "json2yaml",
        packageUrl: "https://github.com/jeffsu/json2yaml"
      }
    ]
  },
  {
    category: "JSON Schema",
    content: [
      {
        label: "to TypeScript",
        path: "/json-schema-to-typescript",
        desc:
          "An online REPL for converting JSON Schema to TypeScript Interface.",
        packageName: "json-schema-to-typescript",
        packageUrl: "https://github.com/bcherny/json-schema-to-typescript"
      },
      {
        label: "to OpenAPI Schema",
        path: "json-schema-to-openapi-schema",
        packageName: "json-schema-to-openapi-schema",
        packageUrl: "https://github.com/wework/json-schema-to-openapi-schema"
      }
    ]
  },
  {
    category: "SVG",
    content: [
      {
        label: "to JSX",
        path: "/svg-to-jsx",
        desc:
          "An online REPL for converting SVG to JSX with proper support for SVG."
      },
      {
        label: "to React Native",
        path: "/svg-to-react-native",
        desc:
          "An online REPL for converting SVG to React Native compatible equivalent."
      }
    ]
  },
  {
    category: "HTML",
    content: [
      {
        label: "to JSX",
        path: "/html-to-jsx",
        desc:
          "An online REPL for converting HTML to JSX with proper support for SVG."
      }
    ]
  },
  {
    category: "CSS",
    content: [
      {
        label: "to JS Objects",
        path: "/css-to-js",
        desc:
          "An online REPL for converting CSS to JS object. It also gives style optimized for React Native.",
        packageName: "transform-css-to-js",
        packageUrl: "https://github.com/transform-it/transform-css-to-js"
      },
      {
        label: "to template literal",
        path: "/object-styles-to-template-literal",
        desc: "An online REPL to convert object styles to template literal.",
        packageUrl:
          "https://github.com/satya164/babel-plugin-object-styles-to-template",
        packageName: "babel-plugin-object-styles-to-template"
      }
    ]
  },
  {
    category: "JavaScript",
    content: [
      {
        label: "to JSON",
        path: "/js-object-to-json",
        desc: "An online REPL for converting JS Object to JSON."
      }
    ]
  },
  {
    category: "GraphQL",
    content: [
      {
        label: "to TypeScript",
        path: "/graphql-to-typescript",
        desc:
          "An online REPL to generate TypeScript type annotations based on a GraphQL schema and query documents."
      },
      {
        label: "to Flow",
        path: "/graphql-to-flow",
        desc:
          "An online REPL to generate Flow type annotations based on a GraphQL schema and query documents."
      },
      {
        label: "to JAVA",
        path: "/graphql-to-java"
      },
      {
        label: "to Resolvers Signature",
        path: "/graphql-to-resolvers-signature"
      },

      {
        label: "to Introspection JSON",
        path: "/graphql-to-introspection-json"
      },

      {
        label: "to Schema AST",
        path: "/graphql-to-schema-ast"
      },
      {
        label: "to Fragment Matcher",
        path: "/graphql-to-fragment-matcher"
      },
      {
        label: "to Components",
        path: "/graphql-to-components"
      },
      {
        label: "to TypeScript MongoDB",
        path: "/graphql-to-typescript-mongodb"
      }
    ]
  },
  {
    category: "Others",
    iconName: "",
    content: [
      {
        label: "Flow to Typescript",
        path: "/flow-to-typescript",
        desc: "An online REPL for converting Flow to TypeScript Interface."
      },
      {
        label: "XML to JSON",
        path: "/xml-to-json",
        desc: "An online REPL to generate basic JSON from a XML.",
        packageName: "xml-js",
        packageUrl: "https://github.com/nashwaan/xml-js"
      },

      {
        label: "YAML to JSON",
        path: "/yaml-to-json",
        desc: "An online REPL to convert YAML to JSON.",
        packageName: "yaml",
        packageUrl: "https://github.com/tj/js-yaml"
      },
      {
        label: "Markdown to HTML",
        path: "/markdown-to-html",
        desc: "An online REPL to convert Markdown to HTML.",
        packageName: "markdown",
        packageUrl: "https://github.com/evilstreak/markdown-js"
      }
    ]
  }
];

export interface Route {
  path: string;
  label: string;
  desc: string;
}

export const routes = flatten(
  categorizedRoutes.map(a =>
    // @ts-ignore
    a.content.map(x => ({
      ...x,
      category: a.category,
      searchTerm:
        a.category.toLowerCase() !== "others"
          ? `${a.category} to ${x.label}`
          : x.label
    }))
  )
);

export function activeRouteData(pathname) {
  return find(routes, o => o.path === pathname);
}
