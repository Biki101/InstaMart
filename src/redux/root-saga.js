import { all, call } from "redux-saga/effects";
import { toggleSaga } from "./toggle/toggle-saga";

export default function* rootSaga() {
  yield all([call(toggleSaga)]);
}
