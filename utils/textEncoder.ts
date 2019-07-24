export function polyfill() {
  if (window.TextEncoder) {
    return Promise.resolve();
  } else {
    return import("text-encoding-utf-8").then(encoding => {
      window.TextEncoder = encoding.TextEncoder;
      window.TextDecoder = encoding.TextDecoder;
    });
  }
}
