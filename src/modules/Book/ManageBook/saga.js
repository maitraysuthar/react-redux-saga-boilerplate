import { put, all, call, takeLatest } from "redux-saga/effects";
import { request } from '../../../helpers/requests';
import { browserRedirect } from '../../../helpers/helpers';
import { urls } from '../../../helpers/urls';
import {
    BOOK_ADD_REQUESTING,
    bookAddSuccess,
    bookAddError,
    BOOK_UPDATE_REQUESTING,
    bookUpdateSuccess,
    bookUpdateError,
} from "./actions";

//bookAdd API call
function bookAddCall(payload) {
  return request('post', urls.BOOK, payload);
}

//bookUpdate API call
function bookUpdateCall(payload,id) {
  return request('put', urls.BOOK+"/"+id, payload);
}

// bookAdd Worker
function* bookAddWorker({ payload }) {
  try {
    yield call(bookAddCall, payload);
    yield put(bookAddSuccess());
    yield call(browserRedirect, '/book');
  } catch (err) {
    yield put(bookAddError(err.response.data));
  }
}

//bookUpdate Worker
function* bookUpdateWorker({payload, id}) {
  try {
    yield call(bookUpdateCall, payload, id);
    yield put(bookUpdateSuccess());
    yield call(browserRedirect, '/book');
  } catch (err) {
    yield put(bookUpdateError(err.response.data));
  }
}

// bookAdd Watcher
export default function* bookAddSaga() {
  yield all([
    takeLatest(BOOK_ADD_REQUESTING, bookAddWorker),
    takeLatest(BOOK_UPDATE_REQUESTING, bookUpdateWorker)
  ]);
}