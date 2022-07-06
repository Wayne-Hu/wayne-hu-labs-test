import { convertToString } from "./../../utils/numberConvertor";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { isNumberObject } from "util/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { value } = req.query;
  if (!value || Array.isArray(value) || !Number.isInteger(parseInt(value))) {
    res.status(400).send("Value must be a positive integer");
    return;
  }

  const words = convertToString(parseInt(value));
  res.status(200).send(words);
}
