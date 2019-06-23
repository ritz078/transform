import { BuiltInParserName } from "prettier";
import { prettify } from "@utils/prettify";

interface Data {
  data: {
    payload: {
      value: string;
      language: BuiltInParserName;
    };
    id: string | number;
  };
}

const _self = self as any;

_self.onmessage = ({
  data: {
    payload: { value, language },
    id
  }
}: Data) => {
  _self.postMessage({
    id,
    payload: prettify(language, value)
  });
};
