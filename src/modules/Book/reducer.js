import {
    BOOK_PAGE_INIT,
    BOOK_ERROR,
    BOOK_SUCCESS,
    BOOK_DETAIL_INIT,
    BOOK_DETAIL_ERROR,
    BOOK_DETAIL_SUCCESS,
    BOOK_DETAIL_CLOSE
} from './actions';

// The initial state of the Login Reducer
export const initialState = {
    successful: false,
    messages: [],
    errors: [],
    books: [],
    selectedBook: {},
    selectedBookError: {}
  };

export default function(state = initialState,actions){
    switch(actions.type){
        case BOOK_PAGE_INIT:
            return {...state, errors:[], books: []};
        case BOOK_SUCCESS:
            return {...state, successful: true, books:[...actions.payload]};
        case BOOK_ERROR:
            return {...state, successful: false, errors:[...actions.error]};
        case BOOK_DETAIL_INIT:
            return {...state, selectedBookError:{}, selectedBook: {}};
        case BOOK_DETAIL_SUCCESS:
            return {...state, selectedBook: {...actions.payload}};
        case BOOK_DETAIL_ERROR:
            return {...state, selectedBookError:{...actions.error}};
        case BOOK_DETAIL_CLOSE:
            return {...state, selectedBookError:{}, selectedBook: {}};
        default:        
            return state;
    }
}