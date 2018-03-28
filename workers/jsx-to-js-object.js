import { jsxToJson } from "jsx-to-json";
import stringify from "stringify-object";

export function transform(code) {
  try {
    return { value: stringify(eval(jsxToJson(code))), code: 1 };
  } catch (e) {
    return { value: e.message, code: 0 };
  }
}
