declare module "@workers/prettier.worker" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}

declare module "@workers/svgo.worker" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}

declare module "@workers/babel.worker" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}

declare const IN_BROWSER: boolean;
