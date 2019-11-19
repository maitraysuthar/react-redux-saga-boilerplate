import {
    BOOK_ADD_PAGE_INIT,
    BOOK_ADD_ERROR,
    BOOK_ADD_REQUESTING,
    BOOK_ADD_SUCCESS,
    BOOK_UPDATE_ERROR,
    BOOK_UPDATE_REQUESTING,
    BOOK_UPDATE_SUCCESS,
} from './actions';

// The initial state of the Login Reducer
export const initialState = {
    requesting: false,
    successful: false,
    messages: [],
    errors: {},
    addedBook: {},
    updatedBook: {}
  };

export default function(state = initialState,actions){
    switch(actions.type){
        case BOOK_ADD_PAGE_INIT:
            return {...state, errors:{}};
        case BOOK_ADD_REQUESTING:
            return {...state, requesting: true, errors:{}};
        case BOOK_ADD_SUCCESS:
            return {...state, successful: true, errors:{}, addedBook:{...actions.payload}};
        case BOOK_ADD_ERROR:
            return {...state, successful: false, errors:{...actions.error}};
        case BOOK_UPDATE_REQUESTING:
            return {...state, requesting: true, errors:{}};
        case BOOK_UPDATE_SUCCESS:
            return {...state, successful: true, errors:{}, updatedBook:{...actions.payload}};
        case BOOK_UPDATE_ERROR:
            return {...state, successful: false, errors:{...actions.error}};
        default:        
            return state;
    }
}