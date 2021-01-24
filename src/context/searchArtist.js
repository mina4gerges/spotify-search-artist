import React, {createContext, useReducer} from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import searchArtist from '../reducer/searchArtist';
import icon from '../assets/images/spotify-144.png';

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
    searchResult: [
        {id: 1, name: 'mina gerges', rating: 5, img: icon, followers: 1000},
        {id: 2, name: 'toto', rating: 3, img: icon, followers: 200},
        {id: 3, name: 'mahabe', rating: 5, img: icon, followers: 10},
        {id: 4, name: 'abdala', rating: 3, img: icon, followers: 123123123},
        {id: 5, name: 'amine', rating: 2, img: icon, followers: 12},
        {id: 6, name: 'big', rating: 1, img: icon, followers: 54},
    ],
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
