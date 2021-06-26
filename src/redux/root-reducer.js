import { combineReducers } from "redux";
import toogleReducer from "./toggle/toggle-reducer";

const rootReducer = combineReducers({
  toggle: toogleReducer,
});

export default rootReducer;
