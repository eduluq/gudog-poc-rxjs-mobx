import { observe } from "../libraries/rxjs-gudog";
import { STARTUP, STARTUP_COMPLETED, startupCompleted } from "./startupActions";

const onStartup = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate async
  startupCompleted(); // dispatching action from subscriber
};

const onStartupCompleted = (store) => {
  store.completeStartup();
};

export default () => {
  observe(STARTUP, onStartup);
  observe(STARTUP_COMPLETED, onStartupCompleted);
};
