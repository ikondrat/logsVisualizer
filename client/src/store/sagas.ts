import { all, call } from "redux-saga/effects";
import { sagaLogs } from "./logs";

export function* rootSaga() {
  yield all([sagaLogs].map(saga => call(saga)));
}
