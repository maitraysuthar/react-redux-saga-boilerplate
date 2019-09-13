import { all } from "redux-saga/effects";
import loginSaga from "../Login/saga";
import registerSaga from "../Register/saga";

export function* mainSaga() {
  yield all([
    loginSaga(),
    //registerSaga()
  ]);
}