import { put, all, call, takeLatest } from "redux-saga/effects";
import { request } from '../../helpers/requests';
import { browserRedirect } from '../../helpers/helpers';
import { urls } from '../../helpers/urls';
import {
  LOGIN_REQUESTING,
  loginSuccess,
  loginError,
} from "./actions";

//Login API call
function loginCall(payload) {
  return request('post', urls.LOGIN_URL, payload);
}

// LOGIN Worker
function* loginWorker({ payload }) {
  try {
    let response = yield call(loginCall, payload);
    response = response.data;
    localStorage.removeItem('user');
    localStorage.setItem('token', response.data.token);
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: response.data._id,
        firstName: response.data.firstName,
        lastName: response.data.lastName
      }),
    );
    yield put(loginSuccess());
    yield call(browserRedirect, '/');
  } catch (err) {
    yield put(loginError(err.response.data));
  }
}

// Login Watcher
export default function* loginSaga() {
  yield all([
    takeLatest(LOGIN_REQUESTING, loginWorker),
  ]);
}