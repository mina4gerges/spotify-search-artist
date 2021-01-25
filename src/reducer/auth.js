import {LOGIN, LOGOUT} from '../constant/actionTypes';

/**
 * Create authentication reducer
 * @param state
 * @param action
 * @returns {(*&{isLoading, name, label})|*}
 */
export const auth = (state, action) => {

    const {label, name, isLoading} = action.payload;

    switch (action.type) {
        case LOGIN:
        case LOGOUT:
            return {...state, label, name, isLoading};
        default:
            return state;
    }
}
