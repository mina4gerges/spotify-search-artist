import React, {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import {SearchArtistContext} from '../../context/searchArtist';

/**
 * Create albums component
 * @returns {JSX.Element}
 * @constructor
 */
const Albums = () => {

    const {state: {artistId}} = useLocation();

    const {state: {searchResult: artists}} = useContext(SearchArtistContext);

    const artist = artists.find(val => val.id === artistId);

    return (
        <div>
            hello from albums. Artist name - {artist.name}
        </div>
    )
}

export default Albums;
