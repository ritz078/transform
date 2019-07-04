import { Module } from "webpack";

const resolves = {};
const rejects = {};
let globalMsgId = 0;

// Activate calculation in the worker, returning a promise
function sendMsg(payload, worker: Worker) {
  const msgId = globalMsgId++;
  const msg = {
    id: msgId,
    payload
  };
  return new Promise(function(resolve, reject) {
    // save callbacks for later
    resolves[msgId] = resolve;
    rejects[msgId] = reject;
    worker.postMessage(msg);

    // TODO: CHECK FOR MEMORY LEAK
  });
}
// Handle incoming calculation result
function handleMsg(msg) {
  const { id, err, payload } = msg.data;
  if (payload) {
    const resolve = resolves[id];
    if (resolve) {
      resolve(payload);
    }
  } else {
    // error condition
    const reject = rejects[id];
    if (reject) {
      if (err) {
        reject(new Error(err));
      } else {
        reject("Got nothing");
      }
    }
  }

  // purge used callbacks
  delete resolves[id];
  delete rejects[id];
}

export class Wrapper {
  worker: Worker;

  constructor(worker: Worker) {
    this.worker = worker;
    this.worker.onmessage = handleMsg;
  }

  send(str): Promise<any> {
    return sendMsg(str, this.worker);
  }
}

export function getWorker(Worker) {
  return new Wrapper(new Worker());
}
