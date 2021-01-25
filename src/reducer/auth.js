import {LOGIN, LOGOUT} from '../constant/actionTypes';

/**
 * Create authentication reducer
 * @param state
 * @param action
 * @returns {(*&{isLogeIn, name: string})|*}
 */
export const auth = (state, action) => {

    const {isLoggedIn, name} = action.payload;

    switch (action.type) {
        case LOGIN:
            return {...state, name, isLoggedIn};
        case LOGOUT:
            return {...state, name, isLoggedIn};
        default:
            return state;
    }
}
