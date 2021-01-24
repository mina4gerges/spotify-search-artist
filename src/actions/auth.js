import {LOGIN, LOGOUT} from '../constant/actionTypes';

/**
 * Create login action
 * @param dispatch
 * @returns {function(): void}
 */
export const login = dispatch => () => {
    dispatch({type: LOGIN, payload: true});
}

/**
 * Create logout action
 * @param dispatch
 * @returns {function(): void}
 */
export const logout = dispatch => () => {
    dispatch({type: LOGOUT, payload: false});
}
