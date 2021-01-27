import {CHANGE_SEARCH_VALUE, SET_SEARCH_ITEM} from '../constant/actionTypes';

const searchArtist = (state, action) => {

    switch (action.type) {

        case CHANGE_SEARCH_VALUE:
            return {...state, value: action.payload.value};

        case SET_SEARCH_ITEM:
            return {...state, value: action.payload.value};

        default:
            return state;
    }
}

export default searchArtist;
