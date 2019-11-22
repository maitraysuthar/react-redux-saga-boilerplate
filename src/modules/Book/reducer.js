import {
    BOOK_PAGE_INIT,
    BOOK_ERROR,
    BOOK_SUCCESS,
    BOOK_DETAIL_INIT,
    BOOK_DETAIL_ERROR,
    BOOK_DETAIL_SUCCESS,
    BOOK_DETAIL_CLOSE,
    BOOK_DELETE_ERROR,
    BOOK_DELETE_SUCCESS,
    RELEASE_STATE_DATA
} from './actions';
import { combineReducers } from "redux";
import  manageBookReducer  from './ManageBook/reducer';

// The initial state of the Login Reducer
export const initialState = {
    successful: false,
    messages: [],
    errors: [],
    books: [],
    selectedBook: {},
    selectedBookError: {},
    deleteBook: {}
  };

const bookReducers = function(state = initialState,actions){
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
        case BOOK_DELETE_SUCCESS:
            return {...state, deleteBook: {...actions.payload}};
        case BOOK_DELETE_ERROR:
            return {...state, selectedBookError:{...actions.error}};
        case RELEASE_STATE_DATA:
            return {...state, errors:[], books: [], selectedBook: {},selectedBookError: {},deleteBook: {}}
        default:        
            return state;
    }
}

export default combineReducers({
    list_book : bookReducers,
    manage_book: manageBookReducer
});