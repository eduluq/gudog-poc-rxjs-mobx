import { useCallback } from "react";
import { useStores } from "../models/root-store-context";
import { toggleNavigation } from "../rxjs/navigationActions";

function useNavigationMode() {
  const rootStore = useStores();
  const navigationMode = rootStore.navigationMode;

  // Dispatches TOGGLE_NAVIGATION ACTION
  const updateNavigationMode = useCallback(() => {
    toggleNavigation();
  }, []);

  return { navigationMode, updateNavigationMode };
}

export default useNavigationMode;
