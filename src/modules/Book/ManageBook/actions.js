export const BOOK_ADD_REQUESTING = 'BOOK_ADD_REQUESTING';
export const BOOK_ADD_SUCCESS = 'BOOK_ADD_SUCCESS';
export const BOOK_ADD_ERROR = 'BOOK_ADD_ERROR';
export const BOOK_ADD_PAGE_INIT = 'BOOK_ADD_PAGE_INIT';
export const BOOK_UPDATE_REQUESTING = 'BOOK_UPDATE_REQUESTING';
export const BOOK_UPDATE_SUCCESS = 'BOOK_UPDATE_SUCCESS';
export const BOOK_UPDATE_ERROR = 'BOOK_UPDATE_ERROR';
export const BOOK_UPDATE_PAGE_INIT = 'BOOK_UPDATE_PAGE_INIT';

export function bookAddPageInit() {
    return {
        type: BOOK_ADD_PAGE_INIT,
    };
}

export function bookAddRequest(payload) {
    return {
        type: BOOK_ADD_REQUESTING,
        payload
    };
}

export function bookAddError(error) {
    return {
        type: BOOK_ADD_ERROR,
        error,
    };
}

export function bookAddSuccess() {
    return {
        type: BOOK_ADD_SUCCESS,
    };
}

export function bookUpdatePageInit(id) {
    return {
        type: BOOK_UPDATE_PAGE_INIT,
        id
    };
}

export function bookUpdateRequest(payload,id) {
    return {
        type: BOOK_UPDATE_REQUESTING,
        payload,
        id
    };
}

export function bookUpdateError(error) {
    return {
        type: BOOK_UPDATE_ERROR,
        error,
    };
}

export function bookUpdateSuccess() {
    return {
        type: BOOK_UPDATE_SUCCESS,
    };
}