import { put, all, call, takeLatest } from "redux-saga/effects";
import {
  BOOK_PAGE_INIT,
  BOOK_DETAIL_INIT,
  BOOK_DELETE_INIT,
  bookError,
  bookSuccess,
  bookDetailError,
  bookDetailSuccess,
  bookDeleteError,
  bookDeleteSuccess,
  bookPageInit
} from "./actions";
import { request } from '../../helpers/requests';
import { urls } from '../../helpers/urls';
import manageBookSaga from './ManageBook/saga';

//Book API calls
function bookCall() {
  return request('get', urls.BOOK);
}

function bookDetailCall(id) {
  return request('get', urls.BOOK+'/'+id);
}

function bookDeleteCall(id) {
  return request('delete', urls.BOOK+'/'+id);
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

function* bookDeleteWorker(payload) {
  try {
    let response = yield call(bookDeleteCall, payload.id);
    response = response.data;
    yield put(bookDeleteSuccess(response));
    yield put(bookPageInit());
  } catch (err) {
    yield put(bookDeleteError(err.response.data));
  }
}

// Book Watcher
export default function* bookSaga() {
  yield all([
    takeLatest(BOOK_PAGE_INIT, bookWorker),
    takeLatest(BOOK_DETAIL_INIT, bookDetailWorker),
    takeLatest(BOOK_DELETE_INIT, bookDeleteWorker),
    manageBookSaga()
  ]);
}