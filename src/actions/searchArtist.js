import {CHANGE_SEARCH_VALUE, SET_SEARCH_ITEM, SUBMIT_SEARCH} from '../constant/actionTypes';

export const handleChange = dispatch => e => {
    dispatch({
        type: CHANGE_SEARCH_VALUE,
        payload: {value: e.target.value, error: false}
    });
}

export const handleSubmit = (dispatch, value, source, history, path) => e => {
    e.preventDefault();

    if (!value)
        dispatch({
            type: SUBMIT_SEARCH,
            payload: {error: true}
        });
    else {
        dispatch({
            type: SUBMIT_SEARCH,
            payload: {error: false}
        });

        // standAlone when search component is alone without any other component
        if (source === 'standAlone')
            history.push(`${path}/${value}`);
    }
}

export const setSearchItem = (dispatch, value) => {
    dispatch({type: SET_SEARCH_ITEM, payload: {value: JSON.parse(value)}});
}
