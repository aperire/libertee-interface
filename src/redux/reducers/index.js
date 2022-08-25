import { combineReducers } from "redux";
import SnackbarReducer from "./SnackbarReducer";
import ThemeReducer from "./ThemeReducer";

const rootReducer = combineReducers({
  SnackbarReducer,
  ThemeReducer,
});

export default rootReducer;
