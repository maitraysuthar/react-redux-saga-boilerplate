import axios from "axios";
import { put, all, call, takeLatest } from "redux-saga/effects";
import { browserRedirect } from '../../helpers/helper';
import {
  BOOK_PAGE_INIT,
  loginSuccess,
  loginError,
} from "./actions";
const API_ROOT = process.env.REACT_APP_NODE_ENV === 'production'? process.env.REACT_APP_PROD_API_URL: process.env.REACT_APP_DEV_API_URL;

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};
//Book API call
function bookCall(payload) {
  return axios.get(`${API_ROOT}/book`, payload);
}

// Book Worker
function* bookWorker({ payload }) {
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

// Book Watcher
export default function* bookSaga() {
  yield all([
    takeLatest(BOOK_PAGE_INIT, bookWorker),
  ]);
}