import {CHANGE_SEARCH_VALUE, SUBMIT_SEARCH, SET_SEARCH_ITEM, SET_SEARCH_RESULT} from '../constant/actionTypes';

export const handleChange = (dispatch, value) => {
    dispatch({
        type: CHANGE_SEARCH_VALUE,
        payload: {value}
    });
}

export const handleSubmit = (dispatch, value, source, history, path) => async e => {
    e.preventDefault();

    dispatch({type: SUBMIT_SEARCH});

    if (value)
        // standAlone when search component is alone without any other component
        if (source === 'standAlone')
            history.push(`${path}/${value}`);
}

export const setSearchItem = (dispatch, value) => {
    dispatch({type: SET_SEARCH_ITEM, payload: {value}});
}

export const setSearchResults = (dispatch, value) => {
    dispatch({
        type: SET_SEARCH_RESULT,
        payload: {searchResult: value}
    });
}
