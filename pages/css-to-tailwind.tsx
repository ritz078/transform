import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import { editor } from "monaco-editor";
import * as React from "react";
import { useState, useCallback, useMemo } from "react";
import request from "@utils/request";
import cssToTailwind from "css-to-tailwind/browser";
import { useSettings } from "@hooks/useSettings";
import {
  Dialog,
  Pane,
  Tablist,
  Tab,
  Alert,
  Button,
  toaster
} from "evergreen-ui";
import tailwindResolve from "tailwindcss/resolveConfig";
import dynamic from "next/dynamic";

const Monaco = dynamic(() => import("../components/Monaco"), {
  ssr: false
});

const options: editor.IEditorOptions = {
  fontSize: 14,
  readOnly: false,
  codeLens: false,
  fontFamily: "Menlo, Consolas, monospace, sans-serif",
  minimap: {
    enabled: false
  },
  quickSuggestions: false,
  lineNumbers: "on"
};

const defaultTailwindConfig = `// tailwind.config.js
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}`;

const defaultPostCssInput =
  "@tailwind base;\n@tailwind components;\n@tailwind utilities;";

function resolveTailwindConfig(configAsString) {
  return tailwindResolve(
    eval(`const module = {}; ${configAsString}; module.exports;`)
  );
}

const tabs = [
  { label: "TailwindCSS Config", language: "javascript" },
  { label: "PostCSS Input", language: "css" }
];

function CssToTailwindSettings({
  open,
  toggle,
  postCssInput,
  setPostCssInput,
  tailwindConfig,
  setTailwindConfig,
  setResolvedTailwindConfig
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tailwindConfigValue, setTailwindConfigValue] = useState(
    tailwindConfig
  );
  const [postCssInputValue, setPostCssInputValue] = useState(postCssInput);
  return (
    <Dialog
      title="CSS to TailwindCSS Settings"
      isShown={open}
      onCloseComplete={toggle}
      onConfirm={close => {
        try {
          const resolvedTailwindConfig = resolveTailwindConfig(
            tailwindConfigValue
          );
          setResolvedTailwindConfig(resolvedTailwindConfig);
        } catch (e) {
          toaster.danger(
            "Something went wrong trying to resolve TailwindCSS config",
            {
              description: e.message
            }
          );
          close();
          return;
        }
        setTailwindConfig(tailwindConfigValue);
        setPostCssInput(postCssInputValue);
        close();
      }}
      onCancel={close => {
        close();
      }}
    >
      <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
        {tabs.map(({ label }, index) => (
          <Tab
            key={label}
            id={label}
            onSelect={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
          >
            {label}
          </Tab>
        ))}
      </Tablist>
      <Pane padding={16} flex="1">
        <Pane height={300}>
          <Monaco
            language={tabs[selectedIndex].language}
            value={
              selectedIndex === 0 ? tailwindConfigValue : postCssInputValue
            }
            onChange={
              selectedIndex === 0
                ? setTailwindConfigValue
                : setPostCssInputValue
            }
            options={options}
            height="300"
          />
        </Pane>
      </Pane>
    </Dialog>
  );
}

function formatOutput(results) {
  const content = results
    .map(result => {
      const { selector, tailwind, missing } = result;

      let output = `/* ℹ️ ${selector} */`;

      if (tailwind.length) {
        output += `\n/* ✨ "${tailwind}" */`;

        const { default: def, ...missingVariants } = missing;

        if (def && def.length) {
          output += `\n/* ⚠️ Some rules could not have been tranformed. Use @apply to extend base classes: */
${selector} {
  @apply ${tailwind};
  ${def.map(([prop, value]) => `${prop}: ${value};`).join("\n  ")}
}`;
        }

        Object.entries(missingVariants).forEach(([variant, values]) => {
          output += `\n/* ⚠️ The following rules are not supported with the "${variant}" variant:\n  ${values
            .map(([prop, value]) => `${prop}: ${value};`)
            .join("\n  ")} */`;
        });
      } else {
        output += `\n/* ❌ Could not match any TailwindCSS classes. */`;
      }

      return output;
    })
    .join("\n\n");

  const success = results.filter(result => result.tailwind.length);

  return `/* ${success.length}/${results.length} rules are converted successfully. */\n\n${content}`;
}

export default function({ defaultTailwindCss }) {
  const [tailwindConfig, setTailwindConfig] = useState(defaultTailwindConfig);
  const [postCssInput, setPostCssInput] = useState(defaultPostCssInput);
  const [resolvedTailwindConfig, setResolvedTailwindConfig] = useState({});

  const isDefaultConfig =
    tailwindConfig === defaultTailwindConfig &&
    postCssInput === defaultPostCssInput;

  const tailwindCompiler = useMemo(async () => {
    if (isDefaultConfig) {
      return defaultTailwindCss;
    }

    try {
      const result = await request("/api/build-tailwind-css", {
        tailwindConfig: resolvedTailwindConfig,
        postCssInput
      });
      toaster.success("Custom TailwindCSS config is successfully applied");
      return result;
    } catch (e) {
      toaster.danger(
        "Something went wrong trying to build TailwindCSS with custom config",
        {
          description: "Now default config is used instead"
        }
      );
      return defaultTailwindCss;
    }
  }, [tailwindConfig, postCssInput]);

  const transformer = useCallback<Transformer>(async ({ value }) => {
    const tailwindCss = await tailwindCompiler;
    const results = await cssToTailwind(value, tailwindCss);

    return formatOutput(results);
  }, []);

  const resetSettings = useCallback(() => {
    setTailwindConfig(defaultTailwindConfig);
    setPostCssInput(defaultPostCssInput);
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="CSS"
      editorLanguage="css"
      editorDefaultValue="css3"
      resultTitle="TailwindCSS"
      resultLanguage={"css"}
      editorProps={{
        settingElement: ({ open, toggle }) => {
          return (
            <CssToTailwindSettings
              open={open}
              toggle={toggle}
              postCssInput={postCssInput}
              setPostCssInput={setPostCssInput}
              tailwindConfig={tailwindConfig}
              setTailwindConfig={setTailwindConfig}
              setResolvedTailwindConfig={setResolvedTailwindConfig}
            />
          );
        },
        topNotifications: () => {
          return !isDefaultConfig ? (
            <Alert
              intent="warning"
              backgroundColor="#FEF8E7"
              title={
                <>
                  Custom config is applied to TailwindCSS{" "}
                  <Button
                    appearance="minimal"
                    intent="warning"
                    onClick={resetSettings}
                  >
                    Reset
                  </Button>
                </>
              }
            />
          ) : null;
        }
      }}
    />
  );
}

export async function getStaticProps() {
  return {
    props: {
      defaultTailwindCss: await request(
        `${process.env.BASE_URL}/api/build-tailwind-css`,
        {
          tailwindConfig: resolveTailwindConfig(defaultTailwindConfig),
          postCssInput: defaultPostCssInput
        }
      )
    }
  };
}
