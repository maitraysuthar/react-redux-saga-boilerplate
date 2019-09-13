import axios from "axios";
import { put, all, call, takeLatest } from "redux-saga/effects";
import { browserRedirect } from '../../helpers/helper';
import {
  LOGIN_REQUESTING,
  loginSuccess,
  loginError,
} from "./actions";
const API_ROOT = process.env.REACT_APP_NODE_ENV === 'production'? process.env.REACT_APP_PROD_API_URL: process.env.REACT_APP_DEV_API_URL;

//Login API call
function loginCall(payload) {
  return axios.post(`${API_ROOT}/auth/login`, payload);
}

// LOGIN Worker
function* loginWorker({ payload }) {
  try {
    let response = yield call(loginCall, payload);
    localStorage.removeItem('user');
    localStorage.setItem('token', 'Bearer '.concat(response.token));
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: response.data._id,
        name: response.data.name,
      }),
    );
    yield put(loginSuccess());
    yield call(browserRedirect, '/home');
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