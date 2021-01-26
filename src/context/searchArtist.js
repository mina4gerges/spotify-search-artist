import React, {createContext, useReducer} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import searchArtist from '../reducer/searchArtist';

/**
 * Create initial state
 * @type {{endAdornment: JSX.Element, name: string, id: string, label: string, type: string, value: string}}
 */
const initialState = {
    value: '',
    type: 'search',
    searchResult: [],
    isSearching: false,
    id: 'artist-search',
    name: 'artistSearch',
    isSearchingOnChange: false,
    endAdornment: <SearchIcon/>,
    label: 'Search for an artist...',
}

/**
 * Create search artist context
 * @type {React.Context<{}>}
 */
export const SearchArtistContext = createContext(initialState);

/**
 * Create search artist provider
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const SearchArtistProvider = ({children}) => {

    const [state, dispatch] = useReducer(searchArtist, initialState, undefined);

    return (
        <SearchArtistContext.Provider value={{state, dispatch}}>
            {children}
        </SearchArtistContext.Provider>
    )
}
