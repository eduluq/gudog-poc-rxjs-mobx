import { dispatch } from "../libraries/rxjs-gudog";

export const SET_THEME = "SET_THEME";

export const setTheme = (newTheme) => {
  dispatch(SET_THEME, newTheme);
};
