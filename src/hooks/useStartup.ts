import { useCallback } from "react";
import { useStores } from "../models/root-store-context";
import { startup } from "../rxjs/startupActions";

function useStartup() {
  const rootStore = useStores();

  const startupCompleted = rootStore.startupCompleted;

  const onStartup = useCallback(() => {
    startup();
  }, []);

  return { startupCompleted, onStartup };
}

export default useStartup;
