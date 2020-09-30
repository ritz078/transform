import { NextApiRequest, NextApiResponse } from "next";
import tailwindCss from "@utils/tailwindcss";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { tailwindConfig, postCssInput } = JSON.parse(req.body);
    const css = await tailwindCss(tailwindConfig, postCssInput);
    res.status(200).send(css);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
