import { put, all, call, takeLatest } from "redux-saga/effects";
import { browserRedirect } from '../../helpers/helpers';
import {
  BOOK_PAGE_INIT,
  bookError,
  bookSuccess
} from "./actions";
import { request } from '../../helpers/requests';
import { urls } from '../../helpers/urls';

//Book API call
function bookCall() {
  return request('get', urls.BOOK);
}

// Book Worker
function* bookWorker() {
  try {
    let response = yield call(bookCall);
    response = response.data;
    yield put(bookSuccess(response));
  } catch (err) {
    yield put(bookError(err.response.data));
  }
}

// Book Watcher
export default function* bookSaga() {
  yield all([
    takeLatest(BOOK_PAGE_INIT, bookWorker),
  ]);
}