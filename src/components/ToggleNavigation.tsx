import React from "react";
import Toggle from "./Toggle";
import useNagivationMode from "../hooks/useNavigationMode";
import { observer } from "mobx-react-lite";

const ToggleNavigationMode = observer(({ name }) => {
  const { navigationMode, updateNavigationMode } = useNagivationMode();

  return (
    <Toggle
      name={name}
      title={navigationMode}
      buttonTitle="Toggle Navigation Mode"
      onToggle={updateNavigationMode}
    />
  );
});

export default ToggleNavigationMode;
