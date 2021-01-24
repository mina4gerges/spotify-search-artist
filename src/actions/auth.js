import {LOGIN, LOGOUT} from '../constant/actionTypes';

/**
 * Create login action
 * @param dispatch
 * @param history
 * @returns {function(): void}
 */
export const login = (dispatch, history) => () => {
    dispatch({type: LOGIN, payload: true});

    history.push('/artists/search');
}

/**
 * Create logout action
 * @param dispatch
 * @param history
 * @returns {function(): void}
 */
export const logout = (dispatch, history) => () => {
    dispatch({type: LOGOUT, payload: false});

    history.push('/');
}
