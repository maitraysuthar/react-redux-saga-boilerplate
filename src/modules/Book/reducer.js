import {
    BOOK_PAGE_INIT,
    BOOK_ERROR,
    BOOK_SUCCESS,
} from './actions';

// The initial state of the Login Reducer
export const initialState = {
    successful: false,
    messages: [],
    errors: {},
    books: {}
  };

export default function(state = initialState,actions){
    switch(actions.type){
        case BOOK_PAGE_INIT:
            return {...state, errors:{}, books: {}};
        case BOOK_SUCCESS:
            return {...state, successful: true, books:{...actions.payload}};
        case BOOK_ERROR:
            return {...state, successful: false, errors:{...actions.error}};
        default:        
            return state;
    }
}