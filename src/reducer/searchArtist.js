import {CHANGE_SEARCH_VALUE, SET_SEARCH_ITEM, SUBMIT_SEARCH} from '../constant/actionTypes';

const searchArtist = (state, action) => {

    const {error, value} = action.payload;

    switch (action.type) {
        case CHANGE_SEARCH_VALUE:
            return {...state, value, error};
        case SUBMIT_SEARCH:
            return {...state, error};
        case SET_SEARCH_ITEM:
            return {...state, value};
        default:
            return state;
    }
}

export default searchArtist;
