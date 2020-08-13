import ConversionPanel, { Transformer } from "@components/ConversionPanel";
import * as React from "react";
import { useCallback } from "react";
import cssToTailwind from "css-to-tailwind";

export default function() {
  const transformer = useCallback<Transformer>(async ({ value }) => {
    const results = await cssToTailwind(value);
    const output = results
      .map(result => {
        const { selector, tailwind, missing } = result;

        let output = `/* ℹ️ ${selector} */`;

        if (tailwind.length) {
          output += `\n/* ✨ "${tailwind}" */`;

          if (missing.length) {
            output += `\n/* ⚠️ Some rules could not have been tranformed. Use @apply to extend base classes: */
  ${selector} {
    @apply ${tailwind};
    ${missing.map(([prop, value]) => `${prop}: ${value};`).join("\n  ")}
  }`;
          }
        } else {
          output += `\n/* ❌ Could not match any Tailwind classes. */`;
        }

        return output;
      })
      .join("\n\n");

    const successfulCount = results.filter(result => result.tailwind.length)
      .length;

    return `/* ${successfulCount}/${results.length} rules are converted successfully. */\n\n${output}`;
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="CSS"
      editorLanguage="css"
      editorDefaultValue="css2"
      resultTitle="TailwindCSS"
      resultLanguage={"css"}
    />
  );
}
