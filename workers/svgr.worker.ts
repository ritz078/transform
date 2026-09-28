import convertModule from "@svgr/core/lib/convert";
import jsxModule from "@svgr/plugin-jsx";

const convert =
  typeof convertModule === "function" ? convertModule : convertModule.default;
const jsx = typeof jsxModule === "function" ? jsxModule : jsxModule.default;

const _self: any = self;

_self.onmessage = async ({ data: { payload, id } }) => {
  const { value, native } = payload;

  try {
    const result = await convert(value, {
      plugins: [jsx],
      svgo: false,
      native
    });

    _self.postMessage({
      payload: result,
      id
    });
  } catch (e) {
    _self.postMessage({
      id,
      err: e.message
    });
  }
};
