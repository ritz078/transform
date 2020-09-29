import postcss from "postcss";
import tailwindcss from "tailwindcss";
import defaultConfig from "tailwindcss/stubs/simpleConfig.stub.js";
import autoprefixer from "autoprefixer";

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
