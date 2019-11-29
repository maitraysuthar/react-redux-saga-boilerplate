import { put, all, call, takeLatest } from "redux-saga/effects";
import { request } from '../../helpers/requests';
import { urls } from '../../helpers/urls';
import {
  REGISTER_REQUESTING,
  registerSuccess,
  registerError,
} from "./actions";
import { redirectForConfirm } from './ConfirmAccount/actions';
import { browserRedirect } from '../../helpers/helpers';
import otpSaga from './ConfirmAccount/saga';

//Register API call
function registerCall(payload) {
  return request('post', urls.REGISTER_URL, payload);
}

// Register Worker
function* registerWorker({ payload }) {
  try {
    let response = yield call(registerCall, payload);
    yield put(registerSuccess());
    yield put(redirectForConfirm(response.data.data.email));
    yield call(browserRedirect, '/confirm-account');
  } catch (err) {
    yield put(registerError(err.response.data));
  }
}

// Register Watcher
export default function* registerSaga() {
  yield all([
    takeLatest(REGISTER_REQUESTING, registerWorker),
    otpSaga()
  ]);
}