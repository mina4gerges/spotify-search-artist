import {isAuthenticated} from '../global/functions';
import {LOGIN, LOGOUT} from '../constant/actionTypes';
import {FULL_AUTHENTICATION_URL} from '../constant/spotify';

/**
 * Create login action
 * @param dispatch
 * @param history
 * @returns {function(): void}
 */
export const login = (dispatch, history) => () => {

    // First time login, open Spotify authentication page
    if (!isAuthenticated())
        window.open(FULL_AUTHENTICATION_URL, '_self');

    // If authenticated before, go to main artists page
    else {
        dispatch({
            type: LOGIN,
            payload: {isLoggedIn: true, name: 'Login', token: JSON.parse(localStorage.getItem('token'))}
        });

        history.push('/artists');
    }
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

export const authenticate = (dispatch, history, search) => {

    const [code, value] = search.split('=');

    if (code === '?error')
        history.push('/error', {errorMsg: 'Authentication failed', errorDescription: value, displayActionLink: true});

    else if (code === '?code') {
        dispatch({type: LOGIN, payload: {isLoggedIn: true, name: 'Login', token: value}});

        localStorage.setItem('token', JSON.stringify(value));

        history.push('/artists');
    }
}
