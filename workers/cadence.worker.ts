import { newEasiGen } from "@lemonneko/easi-gen";

let generator: ReturnType<typeof newEasiGen>;

self.onmessage = async ({ data: { id, payload } }) => {
  try {
    generator = generator || newEasiGen();
    const convert = await generator;
    self.postMessage({
      id,
      payload: convert(payload.value, !payload.generateContractCode)
    });
  } catch (error) {
    self.postMessage({ id, err: error.message });
  }
};
