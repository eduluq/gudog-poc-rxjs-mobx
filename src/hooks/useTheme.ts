import { useCallback } from "react";
import { useStores } from "../models/root-store-context";

function useTheme() {
  const store = useStores();

  const theme = store.theme;

  const updateTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    store.setTheme(newTheme);
  }, [theme]);

  return { theme, updateTheme };
}

export default useTheme;
