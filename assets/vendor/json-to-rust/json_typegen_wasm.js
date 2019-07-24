import * as wasm from "./json_typegen_wasm_bg.wasm";

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder("utf-8");

let cachegetUint8Memory = null;
function getUint8Memory() {
  if (
    cachegetUint8Memory === null ||
    cachegetUint8Memory.buffer !== wasm.memory.buffer
  ) {
    cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
  }
  return cachegetUint8Memory;
}

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === "function") {
  passStringToWasm = function(arg) {
    let size = arg.length;
    let ptr = wasm.__wbindgen_malloc(size);
    let offset = 0;
    {
      const mem = getUint8Memory();
      for (; offset < arg.length; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7f) break;
        mem[ptr + offset] = code;
      }
    }

    if (offset !== arg.length) {
      arg = arg.slice(offset);
      ptr = wasm.__wbindgen_realloc(
        ptr,
        size,
        (size = offset + arg.length * 3)
      );
      const view = getUint8Memory().subarray(ptr + offset, ptr + size);
      const ret = cachedTextEncoder.encodeInto(arg, view);

      offset += ret.written;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
  };
} else {
  passStringToWasm = function(arg) {
    let size = arg.length;
    let ptr = wasm.__wbindgen_malloc(size);
    let offset = 0;
    {
      const mem = getUint8Memory();
      for (; offset < arg.length; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7f) break;
        mem[ptr + offset] = code;
      }
    }

    if (offset !== arg.length) {
      const buf = cachedTextEncoder.encode(arg.slice(offset));
      ptr = wasm.__wbindgen_realloc(ptr, size, (size = offset + buf.length));
      getUint8Memory().set(buf, ptr + offset);
      offset += buf.length;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
  };
}

let cachegetInt32Memory = null;
function getInt32Memory() {
  if (
    cachegetInt32Memory === null ||
    cachegetInt32Memory.buffer !== wasm.memory.buffer
  ) {
    cachegetInt32Memory = new Int32Array(wasm.memory.buffer);
  }
  return cachegetInt32Memory;
}

let cachedTextDecoder = new TextDecoder("utf-8");

function getStringFromWasm(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}
/**
 * @param {string} name
 * @param {string} input
 * @param {string} options
 * @returns {string}
 */
export function run(name, input, options) {
  const retptr = 8;
  const ret = wasm.run(
    retptr,
    passStringToWasm(name),
    WASM_VECTOR_LEN,
    passStringToWasm(input),
    WASM_VECTOR_LEN,
    passStringToWasm(options),
    WASM_VECTOR_LEN
  );
  const memi32 = getInt32Memory();
  const v0 = getStringFromWasm(
    memi32[retptr / 4 + 0],
    memi32[retptr / 4 + 1]
  ).slice();
  wasm.__wbindgen_free(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 1);
  return v0;
}
