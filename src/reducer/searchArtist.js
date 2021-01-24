import {CHANGE_SEARCH_VALUE, SUBMIT_SEARCH} from '../constant/actionTypes';

const searchArtist = (state, action) => {

    const {error} = action.payload;

    switch (action.type) {
        case CHANGE_SEARCH_VALUE:
            const {value} = action.payload;
            return {...state, value, error};
        case SUBMIT_SEARCH:
            return {...state, error};
        default:
            return state;
    }
}

export default searchArtist;
