import {CHANGE_SEARCH_VALUE, SUBMIT_SEARCH, SET_SEARCH_ITEM, SET_SEARCH_RESULT} from '../constant/actionTypes';

const searchArtist = (state, action) => {

    switch (action.type) {

        case CHANGE_SEARCH_VALUE:
            return {...state, value: action.payload.value, fetchNewValues: !!action.payload.value};

        case SET_SEARCH_RESULT:
            return {...state, searchResult: action.payload.searchResult, fetchNewValues: false};

        case SET_SEARCH_ITEM:
            return {...state, value: action.payload.value, fetchNewValues: !!action.payload.value};

        case SUBMIT_SEARCH:
            return {...state, fetchNewValues: !!state.value};

        default:
            return state;
    }
}

export default searchArtist;
