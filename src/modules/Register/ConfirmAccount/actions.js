export const VERIFY_OTP_REQUESTING = 'VERIFY_OTP_REQUESTING';
export const VERIFY_OTP_SUCCESS = 'VERIFY_OTP_SUCCESS';
export const VERIFY_OTP_ERROR = 'VERIFY_OTP_ERROR';
export const OTP_PAGE_INIT = 'OTP_PAGE_INIT';
export const REDIRECT_FOR_CONFIRM = 'REDIRECT_FOR_CONFIRM';
export const CLEAR_CONFIRM_DATA = 'CLEAR_CONFIRM_DATA';
export const RESEND_OTP_REQUESTING = 'RESEND_OTP_REQUESTING';
export const RESEND_OTP_SUCCESS = 'RESEND_OTP_SUCCESS';
export const RESEND_OTP_ERROR = 'RESEND_OTP_ERROR';


export function otpPageInit() {
    return {
        type: OTP_PAGE_INIT,
    };
}

export function verifyOTPRequest(payload) {
    return {
        type: VERIFY_OTP_REQUESTING,
        payload
    };
}

export function verifyOTPError(error) {
    return {
        type: VERIFY_OTP_ERROR,
        error,
    };
}

export function verifyOTPSuccess() {
    return {
        type: VERIFY_OTP_SUCCESS,
    };
}

export function redirectForConfirm(email) {
    return {
        type: REDIRECT_FOR_CONFIRM,
        email
    };
}

export function clearConfirmData() {
    return {
        type: CLEAR_CONFIRM_DATA,
    };
}

export function resendOTPRequest(email) {
    return {
        type: RESEND_OTP_REQUESTING,
        email
    };
}

export function resendOTPError(error) {
    return {
        type: RESEND_OTP_ERROR,
        error,
    };
}

export function resendOTPSuccess(payload) {
    return {
        type: RESEND_OTP_SUCCESS,
        payload
    };
}