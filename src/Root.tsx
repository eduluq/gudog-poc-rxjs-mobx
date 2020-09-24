import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import useStartup from "./hooks/useStartup";
import ToggleNavigationMode from "./components/ToggleNavigation";
import ToggleTheme from "./components/ToggleTheme";

export default observer(function Root() {
  const { startupCompleted, onStartup } = useStartup();

  useEffect(() => {
    onStartup();
  }, [onStartup]);

  return (
    <div className="App">
      <h1>Gudog RxJS PoC</h1>
      {!startupCompleted ? (
        <p>Waiting for startup to complete...</p>
      ) : (
        <div>
          <div id="example-1">
            <ToggleNavigationMode name="toggle-navigation-mode-1" />
            <ToggleNavigationMode name="toggle-navigation-mode-2" />
          </div>

          <div id="example-2">
            <ToggleTheme name="toggle-theme" />
          </div>

          <div id="example-3">
            <h2>Trigger async logic</h2>
            <button onClick={onStartup}>Dispatch startup flow</button>
          </div>
        </div>
      )}
    </div>
  );
});
