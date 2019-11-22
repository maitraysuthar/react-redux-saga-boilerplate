export const REGISTER_REQUESTING = 'REGISTER_REQUESTING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_PAGE_INIT = 'REGISTER_PAGE_INIT';

export function registerPageInit() {
    return {
        type: REGISTER_PAGE_INIT,
    };
}

export function registerRequest(payload) {
    return {
        type: REGISTER_REQUESTING,
        payload
    };
}

export function registerError(error) {
    return {
        type: REGISTER_ERROR,
        error,
    };
}

export function registerSuccess() {
    return {
        type: REGISTER_SUCCESS,
    };
}