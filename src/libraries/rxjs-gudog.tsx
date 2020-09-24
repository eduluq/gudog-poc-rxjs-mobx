import { filter } from "rxjs/operators";

let actionsStream;
let store;

const ofType = (actionType) => filter((action) => action.type === actionType);

function configure(options) {
  if (options.store) {
    store = options.store;
  } else {
    throw new Error("Store is needed as part of options object.");
  }

  if (options.stream) {
    actionsStream = options.stream;
  } else {
    throw new Error("Stream is needed as part of options object.");
  }

  if (options.stream && options.observables) {
    options.observables.forEach((observable) => observable(actionsStream));
  }

  // Log every action
  options.stream.subscribe({
    next: (action) => console.log("ACTION LOG - ", action)
  });
}

function dispatch(actionType, payload = {}) {
  if (!actionsStream) throw new Error("Not stream provided in configuration.");

  actionsStream.next({ type: actionType, payload });
}

function observe(actionType, cb) {
  if (!actionsStream) throw new Error("Not stream provided in configuration.");

  actionsStream.pipe(ofType(actionType)).subscribe({
    next: (action) => cb(store, action)
  });
}

export { configure, dispatch, observe };
