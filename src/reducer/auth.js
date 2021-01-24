import {LOGIN, LOGOUT} from '../constant/actionTypes';

/**
 * Create authentication reducer
 * @param state
 * @param action
 * @returns {(*&{isLogeIn, name: string})|*}
 */
export const auth = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, name: 'Login', isLogeIn: action.payload};
        case LOGOUT:
            return {...state, name: 'Logout', isLogeIn: action.payload};
        default:
            return state;
    }
}
