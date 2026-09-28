import assert from "node:assert/strict";
import test from "node:test";
import { readBody } from "../server/converters/http.ts";

function streamedRequest(stream: ReadableStream<Uint8Array>, headers = {}) {
  return new Request("http://localhost/api/test", {
    method: "POST",
    headers,
    body: stream,
    duplex: "half"
  } as RequestInit);
}

test("oversized streams are cancelled as soon as the limit is crossed", async () => {
  let pulls = 0;
  let cancelled = false;
  const stream = new ReadableStream<Uint8Array>(
    {
      pull(controller) {
        pulls++;
        controller.enqueue(new Uint8Array(512 * 1024));
      },
      cancel() {
        cancelled = true;
      }
    },
    { highWaterMark: 0 }
  );
  await assert.rejects(readBody(streamedRequest(stream)), {
    message: "Body exceeded 1mb limit",
    status: 413
  });
  assert.equal(pulls, 3);
  assert.equal(cancelled, true);
  assert.equal(stream.locked, false);
});

test("oversized content-length cancels the body before reading", async () => {
  let pulls = 0;
  let cancelled = false;
  const stream = new ReadableStream<Uint8Array>(
    {
      pull() {
        pulls++;
      },
      cancel() {
        cancelled = true;
      }
    },
    { highWaterMark: 0 }
  );
  await assert.rejects(
    readBody(
      streamedRequest(stream, {
        "content-length": String(1024 * 1024 + 1)
      })
    ),
    { status: 413 }
  );
  assert.equal(pulls, 0);
  assert.equal(cancelled, true);
});

test("UTF-8 characters split across stream chunks decode intact", async () => {
  const bytes = new TextEncoder().encode("a😀b");
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(bytes.slice(0, 3));
      controller.enqueue(bytes.slice(3));
      controller.close();
    }
  });
  assert.equal(await readBody(streamedRequest(stream)), "a😀b");
});
