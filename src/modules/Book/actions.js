export const BOOK_PAGE_INIT = 'BOOK_PAGE_INIT';
export const BOOK_ERROR = 'BOOK_ERROR';
export const BOOK_SUCCESS = 'BOOK_SUCCESS';

export function bookPageInit() {
    return {
        type: BOOK_PAGE_INIT,
    };
}

export function bookError(error) {
    return {
        type: BOOK_ERROR,
        error,
    };
}

export function bookSuccess(payload) {
    return {
        type: BOOK_SUCCESS,
        payload
    };
}