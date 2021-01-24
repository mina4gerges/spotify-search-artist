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
        {
            id: 1, name: 'mina gerges', rating: 5, img: icon, followers: 1000, albums: [
                {
                    id: 1,
                    name: 'hello worlds 1',
                    releaseDate: '2010-10-05 20:00',
                    img: icon,
                    tracks: 12,
                    previewUrl: 'http://www.google.com'
                },
                {
                    id: 2,
                    name: 'hello worlds 2',
                    releaseDate: '2017-12-06 13:00',
                    img: icon,
                    tracks: 36,
                    previewUrl: 'http://www.google.com'
                },
                {
                    id: 3,
                    name: 'hello worlds 3',
                    releaseDate: '2006-03-23 01:00',
                    img: icon,
                    tracks: 1,
                    previewUrl: 'http://www.google.com'
                },
                {
                    id: 4,
                    name: 'hello worlds 4',
                    releaseDate: '1997-05-19 12:00',
                    img: icon,
                    tracks: 5,
                    previewUrl: 'http://www.google.com'
                },
            ]
        },
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
