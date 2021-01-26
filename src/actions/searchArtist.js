import {getSearchArtist} from '../api';
import {CHANGE_SEARCH_VALUE, SET_SEARCH_ITEM, SET_SEARCH_RESULT, SUBMIT_SEARCH} from '../constant/actionTypes';

export const handleChange = (dispatch, value) => {
    dispatch({
        type: CHANGE_SEARCH_VALUE,
        payload: {value}
    });
}

export const handleSubmit = (dispatch, value, source, history, path) => async e => {
    e.preventDefault();

    dispatch({type: SUBMIT_SEARCH});

    // Only search for artist if value (search input is filled)
    if (value) {
        const token = JSON.parse(localStorage.getItem('token'));

        getSearchArtist(token?.access_token, value)
            .then(result => {

                dispatch({
                    type: SET_SEARCH_RESULT,
                    payload: {searchResult: result?.data?.artists?.items ?? []}
                });

            })
            .catch(e => {

                // If error from Spotify
                if (e?.response?.data?.error) {
                    localStorage.clear();
                    history.push('/error', {errorDescription: e.response.data.error.message, displayActionLink: true});
                } else {
                    console.error(e.message);
                    history.push('/error', {displayActionLink: true});
                }
            })

        // standAlone when search component is alone without any other component
        if (source === 'standAlone')
            history.push(`${path}/${value}`);
    }

}

export const setSearchItem = (dispatch, value) => {
    dispatch({type: SET_SEARCH_ITEM, payload: {value}});
}
