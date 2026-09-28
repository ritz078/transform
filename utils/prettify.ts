import prettier from "prettier/standalone";
import { prettierParsers, supportedLanguages } from "@utils/prettier";

import babylon from "prettier/parser-babylon";
import html from "prettier/parser-html";
import postcss from "prettier/parser-postcss";
import graphql from "prettier/parser-graphql";
import markdown from "prettier/parser-markdown";
import yaml from "prettier/parser-yaml";
import typescript from "prettier/parser-typescript";

const plugins = [babylon, html, postcss, graphql, markdown, yaml, typescript];

export async function prettify(language: string, value: string) {
  let result;

  if (!supportedLanguages.includes(language)) return value;

  if (language === "json") {
    result = JSON.stringify(JSON.parse(value), null, 2);
  } else {
    result = prettier.format(value, {
      parser: prettierParsers[language] || language,
      plugins,
      semi: false
    });
  }

  return result;
}
