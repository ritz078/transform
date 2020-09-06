import { NextApiRequest, NextApiResponse } from "next";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import defaultConfig from "tailwindcss/stubs/simpleConfig.stub.js";
import autoprefixer from "autoprefixer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { tailwindConfig, postCssInput } = JSON.parse(req.body);
    const { css: tailwindCss } = await postcss([
      tailwindConfig ? tailwindcss(tailwindConfig) : tailwindcss(defaultConfig),
      autoprefixer
    ]).process(postCssInput, { from: "tailwind.css" });

    res.status(200).send(tailwindCss);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
