import React from "react";
import Toggle from "./Toggle";
import useTheme from "../hooks/useTheme";
import { observer } from "mobx-react-lite";

const ToggleTheme = observer(({ name }) => {
  const { theme, updateTheme } = useTheme();

  return (
    <Toggle
      name={name}
      title={theme}
      buttonTitle="Toggle Theme"
      onToggle={updateTheme}
    />
  );
});

export default ToggleTheme;
