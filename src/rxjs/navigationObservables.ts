import { observe } from "../libraries/rxjs-gudog";
import { TOGGLE_NAVIGATION_MODE } from "./navigationActions";

const toggleNavigationMode = (store) => {
  store.toggleNavigationMode();
};

const performNavigationRedirect = () => {
  console.log(
    "(Simulating Sagas) Action catched by navigationRedirect observable"
  );
};

export default () => {
  observe(TOGGLE_NAVIGATION_MODE, toggleNavigationMode);
  observe(TOGGLE_NAVIGATION_MODE, performNavigationRedirect);
};
