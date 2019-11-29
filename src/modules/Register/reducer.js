import {
    REGISTER_PAGE_INIT,
    REGISTER_ERROR,
    REGISTER_REQUESTING,
    REGISTER_SUCCESS,
} from './actions';
import {
    OTP_PAGE_INIT,
    VERIFY_OTP_ERROR,
    VERIFY_OTP_REQUESTING,
    VERIFY_OTP_SUCCESS,
    REDIRECT_FOR_CONFIRM,
    CLEAR_CONFIRM_DATA,
    RESEND_OTP_ERROR,
    RESEND_OTP_REQUESTING,
    RESEND_OTP_SUCCESS,
} from './ConfirmAccount/actions';

// The initial state of the Login Reducer
export const initialState = {
    id: '',
    password: '',
    requesting: false,
    successful: false,
    messages: [],
    errors: {},
    user: {},
    otp_errors: {},
    confirm_email: '',
    resend_success: {}
  };

export default function(state = initialState,actions){
    switch(actions.type){
        case REGISTER_PAGE_INIT:
            return {...state, errors:{}};
        case REGISTER_REQUESTING:
            return {...state, requesting: true};
        case REGISTER_SUCCESS:
            return {...state, requesting: false, successful: true, errors:{}};
        case REGISTER_ERROR:
            return {...state, requesting: false, successful: false, errors:{...actions.error}};
        case OTP_PAGE_INIT:
            return {...state, otp_errors:{}, resend_success: {}};
        case VERIFY_OTP_REQUESTING:
            return {...state, resend_success:{}, requesting: true};
        case VERIFY_OTP_SUCCESS:
            return {...state, requesting: false, successful: true, otp_errors:{}};
        case VERIFY_OTP_ERROR:
            return {...state, requesting: false, successful: false, otp_errors:{...actions.error}};
        case REDIRECT_FOR_CONFIRM:
            return {...state, confirm_email: actions.email};
        case CLEAR_CONFIRM_DATA:
            return {...state, confirm_email: '', otp_errors:{}};
        case RESEND_OTP_REQUESTING:
            return {...state, requesting: true};
        case RESEND_OTP_SUCCESS:
            return {...state, requesting: false, successful: true, otp_errors:{}, resend_success:{...actions.payload.data}};
        case RESEND_OTP_ERROR:
            return {...state, requesting: false, successful: false, otp_errors:{...actions.error}};
        default:        
            return state;
    }
}