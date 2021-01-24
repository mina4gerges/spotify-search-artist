import React, {createContext, useReducer} from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import searchArtist from '../reducer/searchArtist';

/**
 * Create initial state
 * @type {{endAdornment: JSX.Element, name: string, id: string, label: string, type: string, error: boolean, value: string}}
 */
const initialState = {
    value: '',
    error: false,
    type: 'search',
    id: 'artist-search',
    name: 'artistSearch',
    label: 'Search for an artist...',
    endAdornment: (
        <IconButton type="submit" aria-label="search">
            <SearchIcon/>
        </IconButton>
    ),
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
