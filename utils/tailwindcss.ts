import postcss from "postcss7";
import tailwindcss from "tailwindcss1";
import defaultConfig from "tailwindcss1/stubs/simpleConfig.stub.js";
import autoprefixer from "autoprefixer9";

export default async function buildTailwindCss(
  tailwindConfig: any,
  postCssInput: string
): Promise<string> {
  const { css } = await postcss([
    tailwindConfig ? tailwindcss(tailwindConfig) : tailwindcss(defaultConfig),
    autoprefixer
  ]).process(postCssInput, { from: "tailwind.css" });

  return css;
}
