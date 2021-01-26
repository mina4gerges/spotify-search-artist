import {CHANGE_SEARCH_VALUE, SET_SEARCH_ITEM, SET_SEARCH_RESULT, SUBMIT_SEARCH} from '../constant/actionTypes';

const searchArtist = (state, action) => {

    switch (action.type) {

        case CHANGE_SEARCH_VALUE:
            return {...state, value: action.payload.value, error: false};

        case SET_SEARCH_RESULT:
            return {...state, searchResult: action.payload.searchResult, isSearching: false};

        case SUBMIT_SEARCH:
            // On submit clear old searchResult and wait for new results (isSearching true)
            return {...state, error: !state.value, searchResult: [], isSearching: true};

        case SET_SEARCH_ITEM:
            return {...state, value: action.payload.value};

        default:
            return state;
    }
}

export default searchArtist;
