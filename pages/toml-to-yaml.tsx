import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import yaml from "yaml";
import toml from "@iarna/toml";

export default function TomlToYaml() {
  const transformer = useCallback(
    ({ value }) => Promise.resolve(yaml.stringify(toml.parse(value))),
    []
  );

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="TOML"
      editorLanguage="toml"
      resultTitle="YAML"
      resultLanguage={"yaml"}
    />
  );
}
