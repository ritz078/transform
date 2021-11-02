import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import yaml from "yaml";
import toml from "@iarna/toml";

export default function YamlToToml() {
  const transformer = useCallback(async ({ value }) => {
    return toml.stringify(yaml.parse(value));
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="YAML"
      editorLanguage="yaml"
      resultTitle="TOML"
      resultLanguage={"toml"}
    />
  );
}
