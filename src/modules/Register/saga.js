import { put, all, call, takeLatest } from "redux-saga/effects";
import { request } from '../../helpers/requests';
import { urls } from '../../helpers/urls';
import {
  REGISTER_REQUESTING,
  registerSuccess,
  registerError,
} from "./actions";

//Register API call
function registerCall(payload) {
  return request('post', urls.REGISTER_URL, payload);
}

// Register Worker
function* registerWorker({ payload }) {
  try {
    let response = yield call(registerCall, payload);
    yield put(registerSuccess(response));
  } catch (err) {
    yield put(registerError(err.response.data));
  }
}

// Login Watcher
export default function* registerSaga() {
  yield all([
    takeLatest(REGISTER_REQUESTING, registerWorker),
  ]);
}