import { NextApiRequest, NextApiResponse } from "next";
import toOpenApi from "@openapi-contrib/json-schema-to-openapi-schema";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const jsonSchema = req.body;

    const openApiSchema = await toOpenApi(jsonSchema, {
      cloneSchema: true
    });

    res.status(200).send(JSON.stringify(openApiSchema, null, 2));
  } catch (e) {
    res.status(500).send(e.message);
  }
};
