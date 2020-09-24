import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const RootStoreModel = types
  .model("RootStore")
  .props({
    startupCompleted: types.boolean,
    navigationMode: types.enumeration(["owner", "sitter"]),
    theme: types.enumeration(["light", "dark"])
  })
  .actions((self) => ({
    toggleNavigationMode() {
      self.navigationMode =
        self.navigationMode === "owner" ? "sitter" : "owner";
    },
    setTheme(newTheme) {
      self.theme = newTheme;
    },
    completeStartup() {
      self.startupCompleted = true;
    }
  }));

export type RootStore = Instance<typeof RootStoreModel>;

export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>;
