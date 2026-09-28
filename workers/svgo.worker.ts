import SVGO from "svgo";
import { svgoPlugins } from "./svgoPlugins";

const _self: any = self;

interface Data {
  payload: Payload;
  id: string;
}

interface Payload {
  value: string;
  settings: any;
}

_self.onmessage = ({ data: { id, payload } }: { data: Data }) => {
  delete payload.settings.optimizeSvg;

  const plugins = Object.keys(payload.settings)
    .filter(key => payload.settings[key])
    .map(key => ({ [key]: svgoPlugins[key] }));

  try {
    const svgo = new SVGO({
      full: true,
      // @ts-ignore
      plugins
    });

    svgo.optimize(payload.value).then(result => {
      _self.postMessage({
        id,
        payload: result.data
      });
    });
  } catch (e) {
    if (import.meta.env.DEV) {
      console.error(e);
    }
    _self.postMessage({
      id,
      err: e.message
    });
  }
};
