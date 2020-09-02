import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import * as React from "react";
import { useState, useCallback, useMemo } from "react";
import request from "@utils/request";
import cssToTailwind from "css-to-tailwind/browser";
import { useSettings } from "@hooks/useSettings";

function formatOutput(results) {
  const content = results
    .map(result => {
      const { selector, tailwind, missing } = result;

      let output = `/* ℹ️ ${selector} */`;

      if (tailwind.length) {
        output += `\n/* ✨ "${tailwind}" */`;

        if (missing.default && missing.default.length) {
          output += `\n/* ⚠️ Some rules could not have been tranformed. Use @apply to extend base classes: */
${selector} {
  @apply ${tailwind};
  ${missing.default.map(([prop, value]) => `${prop}: ${value};`).join("\n  ")}
}`;
        }
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
  const [input] = useState(
    "@tailwind base; @tailwind components; @tailwind utilities;"
  );
  const tailwindCompiler = useMemo(
    () => request("/api/build-tailwind-css", { tailwindConfig, input }),
    [tailwindConfig, input]
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
    />
  );
}
