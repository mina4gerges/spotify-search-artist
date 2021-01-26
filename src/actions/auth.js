import {getToken} from '../api';
import {isAuthenticated} from '../global/functions';
import {LOGIN, LOGOUT} from '../constant/actionTypes';
import {AUTHENTICATION_FAILED} from '../constant/messages';
import {FULL_AUTHENTICATION_URL} from '../constant/spotify';

/**
 * Create login action
 * @param dispatch
 * @param history
 * @returns {function(): void}
 */
export const login = (dispatch, history) => () => {

    let isLoading;

    // First time login, open Spotify authentication page
    if (!isAuthenticated()) {
        isLoading = true;
        window.open(FULL_AUTHENTICATION_URL, '_self');
    }
    // If authenticated before, go to main artists page
    else {
        isLoading = false;
        history.push('/artists');
    }

    dispatch({
        type: LOGIN,
        payload: {isLoading}
    });
}

/**
 * Create logout action
 * @param dispatch
 * @param history
 * @returns {function(): void}
 */
export const logout = (dispatch, history) => () => {
    dispatch({type: LOGOUT, payload: {isLoading: false}});

    localStorage.clear();

    history.push('/');
}

export const authenticate = (dispatch, history, search) => {

    const [code, value] = search.split('=');

    if (code === '?error')
        history.push('/error', {errorMsg: AUTHENTICATION_FAILED, errorDescription: value, displayActionLink: true});

    else if (code === '?code') {

        const oldToken = localStorage.getItem('token');

        // Get new token
        if (!oldToken) {

            getToken(value).then(result => {

                localStorage.setItem('token', JSON.stringify(result.data));

            }).catch(e => {
                let errorDescription = null;

                if (e?.response?.data?.error)
                    errorDescription = e.response.data.error;

                history.push('/error', {errorDescription, displayActionLink: true});
            })
        }
    }
}
