import { put, all, call, takeLatest } from "redux-saga/effects";
import { request } from '../../../helpers/requests';
import { urls } from '../../../helpers/urls';
import {
    VERIFY_OTP_REQUESTING,
    verifyOTPSuccess,
    verifyOTPError,
    RESEND_OTP_REQUESTING,
    resendOTPSuccess,
    resendOTPError
} from "./actions";
import { browserRedirect } from '../../../helpers/helpers';

//Verify OTP API call
function verifyOTPCall(payload) {
  return request('post', urls.VERIFY_CONFIRM_OTP, payload);
}

//Resend OTP API call
function resendOTPCall(payload) {
  return request('post', urls.RESEND_CONFIRM_OTP, payload);
}

// Verify OTP Worker
function* verifyOTPWorker({ payload }) {
  try {
    let response = yield call(verifyOTPCall, payload);
    yield put(verifyOTPSuccess(response));
    yield call(browserRedirect, '/login');
  } catch (err) {
    yield put(verifyOTPError(err.response.data));
  }
}

// Resend OTP Worker
function* resendOTPWorker(email) {
  try {
    let response = yield call(resendOTPCall, email);
    yield put(resendOTPSuccess(response));
  } catch (err) {
    yield put(resendOTPError(err.response.data));
  }
}

// Verify OTP Watcher
export default function* verifyOTPSaga() {
  yield all([
    takeLatest(VERIFY_OTP_REQUESTING, verifyOTPWorker),
    takeLatest(RESEND_OTP_REQUESTING, resendOTPWorker)
  ]);
}