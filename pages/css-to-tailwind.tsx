import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import { editor } from "monaco-editor";
import * as React from "react";
import { useState, useCallback, useMemo } from "react";
import request from "@utils/request";
import cssToTailwind from "css-to-tailwind/browser";
import { useSettings } from "@hooks/useSettings";
import { Dialog, Pane, Spinner } from "evergreen-ui";
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
        output += `\n/* ❌ Could not match any Tailwind classes. */`;
      }

      return output;
    })
    .join("\n\n");

  const success = results.filter(result => result.tailwind.length);

  return `/* ${success.length}/${results.length} rules are converted successfully. */\n\n${content}`;
}

export default function() {
  const [tailwindConfig] = useState(null);
  const [postCssInput, setPostCssInput] = useState(
    "@tailwind base;\n@tailwind components;\n@tailwind utilities;"
  );

  const tailwindCompiler = useMemo(
    () => request("/api/build-tailwind-css", { tailwindConfig, postCssInput }),
    [tailwindConfig, postCssInput]
  );

  const transformer = useCallback<Transformer>(async ({ value }) => {
    const tailwindCss = await tailwindCompiler;
    const results = await cssToTailwind(value, tailwindCss);

    return formatOutput(results);
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
            <Dialog
              title="CSS to Tailwind Settings"
              isShown={open}
              onCloseComplete={toggle}
              onConfirm={close => {
                // props.submitForm();
                close();
              }}
              onCancel={close => {
                // props.submitForm();
                close();
              }}
            >
              <Pane height={300}>
                <Monaco
                  language="css"
                  value={postCssInput}
                  options={options}
                  height="300"
                  onChange={setPostCssInput}
                />
              </Pane>
            </Dialog>
          );
        }
      }}
    />
  );
}
