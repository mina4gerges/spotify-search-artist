import {CHANGE_SEARCH_VALUE, SET_SEARCH_ITEM, SET_SEARCH_RESULT, SUBMIT_SEARCH} from '../constant/actionTypes';

const searchArtist = (state, action) => {

    switch (action.type) {

        case CHANGE_SEARCH_VALUE:
            return {...state, value: action.payload.value, isSearchingOnChange: !!action.payload.value};

        case SET_SEARCH_RESULT:
            return {
                ...state,
                isSearching: false,
                isSearchingOnChange: false,
                searchResult: action.payload.searchResult,
            };

        case SUBMIT_SEARCH:
            const isValueEmpty = !state.value;

            // On submit, if value is not empty,
            // clear old searchResult and wait for new results (isSearching true)
            return {...state, searchResult: isValueEmpty ? state.searchResult : [], isSearching: !isValueEmpty};

        case SET_SEARCH_ITEM:
            return {...state, value: action.payload.value};

        default:
            return state;
    }
}

export default searchArtist;
