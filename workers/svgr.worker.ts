import convert from "@svgr/core/lib/convert";

const _self: any = self;

_self.onmessage = async ({ data: { payload, id } }) => {
  const { value, native } = payload;

  try {
    const result = await convert(value, {
      plugins: [require("@svgr/plugin-jsx").default],
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
      error: e.message
    });
  }
};
