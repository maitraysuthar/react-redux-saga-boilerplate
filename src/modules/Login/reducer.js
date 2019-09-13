import {
    LOGIN_ERROR,
    LOGIN_REQUESTING,
    LOGIN_SUCCESS,
} from './actions';

// The initial state of the App
export const initialState = {
    id: '',
    password: '',
    requesting: false,
    successful: false,
    messages: [],
    errors: {},
  };

export default function(state = {},actions){
    switch(actions.type){
        case LOGIN_REQUESTING:
            return {...state, requesting: true};
        case LOGIN_SUCCESS:
            return {...state, successful: true, user:{...actions.payload}};
        case LOGIN_ERROR:
            return {...state, successful: false, errors:{...actions.payload}};
        default:        
            return state;
    }
}