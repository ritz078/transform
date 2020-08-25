import postcssJs from "postcss-js";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const _self: any = self;

_self.onmessage = async ({
  data: {
    payload: { tailwindConfig, input },
    id
  }
}) => {
  try {
    const { css: tailwindCss } = await postcss([
      tailwindcss,
      autoprefixer
    ]).process(input, { from: "tailwind.css" });

    _self.postMessage({
      id,
      payload: tailwindCss
    });
  } catch (e) {
    _self.postMessage({
      id,
      err: e.message
    });
  }
};
