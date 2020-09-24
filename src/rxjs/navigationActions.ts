import { dispatch } from "../libraries/rxjs-gudog";

export const TOGGLE_NAVIGATION_MODE = "TOGGLE_NAVIGATION_MODE";

export const toggleNavigation = () => {
  dispatch(TOGGLE_NAVIGATION_MODE);
};
