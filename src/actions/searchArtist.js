import {SET_SEARCH_VALUE} from '../constant/actionTypes';

export const handleSubmit = (dispatch, value, history) => e => {
    e.preventDefault();

    if (value)
        history.push({
            pathname: '/artists/search',
            search: `?q=${value}`
        })
}

export const setSearchValue = (dispatch, value, history) => {

    if (history)
        history.push({
            pathname: '/artists/search',
            search: `?q=${value}`
        })

    dispatch({type: SET_SEARCH_VALUE, payload: {value}});
}

