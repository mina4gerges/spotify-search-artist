import React, {useContext} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {numberWithCommas} from '../../../../global/functions';
import {ARTIST_NOT_FOUND} from '../../../../constant/messages';
import CardComponent from '../../../../components/Card/CardComp';
import {SearchArtistContext} from '../../../../context/searchArtist';
import RatingComponent from '../../../../components/Rating/RatingComp';

/**
 * Get more content to be displayed
 * @param rating
 * @returns {JSX.Element}
 */
const getExtraContent = rating => <RatingComponent rating={rating}/>;

/**
 * Get description
 * @param followers
 * @returns {string}
 */
const getDescription = followers => `${numberWithCommas(followers)} followers`;

/**
 * Handle on card click
 * @param history
 * @param url
 * @param artists
 * @returns {function(*=): function(): void}
 */
const onCardClick = (history, url, artists) => artistId => () => {

    const artist = artists.find(val => val.id === artistId);

    if (artist)
        history.push(`/artists/${artist.name}/albums`, {artistId});
    else
        history.push('/error', {errorMsg: ARTIST_NOT_FOUND});
}

/**
 * Create artist component
 * @param title
 * @param description
 * @param img
 * @param rating
 * @returns {JSX.Element}
 * @constructor
 */
const Artist = ({id, name: title, followers, img, rating}) => {

    const history = useHistory();

    const {url} = useRouteMatch();

    const {state: {searchResult: artists}} = useContext(SearchArtistContext);

    return (
        <CardComponent
            id={id}
            img={img}
            title={title}
            imgTitle={title}
            extraContent={getExtraContent(rating)}
            description={getDescription(followers)}
            onCardClick={onCardClick(history, url, artists)}
        />
    )
}

export default Artist;
