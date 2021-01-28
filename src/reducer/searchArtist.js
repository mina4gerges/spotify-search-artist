import {SET_SEARCH_VALUE} from '../constant/actionTypes';

const searchArtist = (state, action) => {

    switch (action.type) {

        case SET_SEARCH_VALUE:
            return {...state, value: action.payload.value};

        default:
            return state;
    }
}

export default searchArtist;
