import { Subject } from "rxjs";
import { RootStoreModel, RootStore } from "./root-store";
import * as gudogRXJS from "../libraries/rxjs-gudog";
import startupObservables from "../rxjs/startupObservables";
import navigationObservables from "../rxjs/navigationObservables";

export async function setupRootStore() {
  let rootStore: RootStore = RootStoreModel.create({
    startupCompleted: false,
    navigationMode: "owner",
    theme: "light",
  });

  const actionsStream = new Subject();

  gudogRXJS.configure({
    store: rootStore,
    stream: actionsStream,
    observables: [startupObservables, navigationObservables],
  });

  return rootStore;
}
