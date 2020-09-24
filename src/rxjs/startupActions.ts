import { dispatch } from "../libraries/rxjs-gudog";

export const STARTUP = "STARTUP";
export const STARTUP_COMPLETED = "STARTUP_COMPLETED";

export const startup = () => {
  dispatch(STARTUP);
};

export const startupCompleted = () => {
  dispatch(STARTUP_COMPLETED);
};
