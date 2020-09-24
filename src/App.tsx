import React, { useState, useEffect } from "react";
import Root from "./Root";
import { RootStore, RootStoreProvider, setupRootStore } from "./models";

import "./styles.css";

export default function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      setupRootStore().then(setRootStore);
    })();
  }, []);

  if (!rootStore) return null;

  return (
    <RootStoreProvider value={rootStore}>
      <Root />
    </RootStoreProvider>
  );
}
