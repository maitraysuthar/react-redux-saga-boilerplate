import {
    REGISTER_PAGE_INIT,
    REGISTER_ERROR,
    REGISTER_REQUESTING,
    REGISTER_SUCCESS,
} from './actions';

// The initial state of the Login Reducer
export const initialState = {
    id: '',
    password: '',
    requesting: false,
    successful: false,
    messages: [],
    errors: {},
    user: {}
  };

export default function(state = initialState,actions){
    switch(actions.type){
        case REGISTER_PAGE_INIT:
        return {...state, errors:{}};
        case REGISTER_REQUESTING:
            return {...state, requesting: true};
        case REGISTER_SUCCESS:
            return {...state, successful: true, errors:{}, user:{email:actions.payload.email, message:"Registration success! Please verify your account."}};
        case REGISTER_ERROR:
            return {...state, successful: false, errors:{...actions.error}};
        default:        
            return state;
    }
}