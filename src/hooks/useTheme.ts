import { useCallback } from "react";
import { useStores } from "../models/root-store-context";
import { setTheme } from "../rxjs/themeActions";

function useTheme() {
  const rootStore = useStores();

  const theme = rootStore.theme;

  // Dispatches TOGGLE_THEME ACTION
  const updateTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }, [theme]);

  return { theme, updateTheme };
}

export default useTheme;
