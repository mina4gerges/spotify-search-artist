import {CHANGE_SEARCH_VALUE, SUBMIT_SEARCH} from '../constant/actionTypes';

export const handleChange = dispatch => e => {
    dispatch({
        type: CHANGE_SEARCH_VALUE,
        payload: {value: e.target.value, error: false}
    });
}

export const handleSubmit = (dispatch, value, history, path) => e => {
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

        history.push(`${path}/${value}`);
    }

}
