import {LOGIN, LOGOUT} from '../constant/actionTypes';

/**
 * Create login action
 * @param dispatch
 * @param history
 * @returns {function(): void}
 */
export const login = (dispatch, history) => () => {
    dispatch({type: LOGIN, payload: {isLoggedIn: true, name: 'Login'}});

    localStorage.setItem('isAuthenticated', JSON.stringify(true));

    history.push('/artists');
}

/**
 * Create logout action
 * @param dispatch
 * @param history
 * @returns {function(): void}
 */
export const logout = (dispatch, history) => () => {
    dispatch({type: LOGOUT, payload: {isLoggedIn: false, name: 'Logout'}});

    localStorage.clear();

    history.push('/');
}
