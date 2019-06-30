import SVGO, { PluginConfig } from "svgo";
import { Settings } from "../pages/svg-to-jsx";

const _self: any = self;

interface Data {
  payload: Payload;
  id: string;
}

interface Payload {
  value: string;
  settings: Settings;
}

_self.onmessage = ({ data: { id, payload } }: { data: Data }) => {
  delete payload.settings.optimizeSvg;

  const svgo = new SVGO({
    full: true,
    plugins: Object.keys(payload.settings).map(_s => ({
      [_s]: payload.settings[_s]
    })) as PluginConfig[]
  });

  svgo.optimize(payload.value).then(result => {
    _self.postMessage({
      id,
      payload: result.data
    });
  });
};
