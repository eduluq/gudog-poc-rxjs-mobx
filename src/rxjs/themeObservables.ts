import { observe } from "../libraries/rxjs-gudog";
import { SET_THEME } from "./themeActions";

const setTheme = (store, action) => {
  const { payload: newTheme } = action;
  store.setTheme(newTheme);
};

export default () => {
  observe(SET_THEME, setTheme);
};
