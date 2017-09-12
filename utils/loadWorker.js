export default function (fileName) {
  const PromiseWorker = require('promise-worker')
  const MyWorker = require(`worker-loader?inline!../workers/${fileName}`)
  const worker = new MyWorker()
  const promiseWorker = new PromiseWorker(worker)

  return { worker, promiseWorker }
}