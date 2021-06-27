import { NextApiRequest, NextApiResponse } from "next";
import html2pug from "html2pug";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { value, settings } = req.body;

    const result = html2pug(value, settings);
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
