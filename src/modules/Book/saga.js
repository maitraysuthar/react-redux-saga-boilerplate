import { put, all, call, takeLatest } from "redux-saga/effects";
import { browserRedirect } from '../../helpers/helpers';
import {
  BOOK_PAGE_INIT,
  BOOK_DETAIL_INIT,
  bookError,
  bookSuccess,
  bookDetailError,
  bookDetailSuccess
} from "./actions";
import { request } from '../../helpers/requests';
import { urls } from '../../helpers/urls';

//Book API calls
function bookCall() {
  return request('get', urls.BOOK);
}

function bookDetailCall(id) {
  return request('get', urls.BOOK+'/'+id);
}

// Book Workers
function* bookWorker() {
  try {
    let response = yield call(bookCall);
    response = response.data.data;
    yield put(bookSuccess(response));
  } catch (err) {
    yield put(bookError(err.response.data.data));
  }
}

function* bookDetailWorker(payload) {
  try {
    let response = yield call(bookDetailCall, payload.id);
    response = response.data.data;
    yield put(bookDetailSuccess(response));
  } catch (err) {
    yield put(bookDetailError(err.response.data.data));
  }
}

// Book Watcher
export default function* bookSaga() {
  yield all([
    takeLatest(BOOK_PAGE_INIT, bookWorker),
    takeLatest(BOOK_DETAIL_INIT, bookDetailWorker)
  ]);
}