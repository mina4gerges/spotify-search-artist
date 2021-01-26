import {LOGIN, LOGOUT} from '../constant/actionTypes';

/**
 * Create authentication reducer
 * @param state
 * @param action
 * @returns {(*&{isLoading, name, label})|*}
 */
export const auth = (state, action) => {

    const {isLoading} = action.payload;

    switch (action.type) {
        case LOGIN:
            return {...state, label: 'Login', name: 'login', isLoading};
        case LOGOUT:
            return {...state, label: 'Logout', name: 'logout', isLoading};
        default:
            return state;
    }
}
