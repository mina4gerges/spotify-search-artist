import React from 'react';
import {useHistory} from 'react-router-dom';
import {numberWithCommas} from '../../../../global/functions';
import CardComponent from '../../../../components/Card/CardComp';
import RatingComponent from '../../../../components/Rating/RatingComp';

import icon from '../../../../assets/images/spotify-320.png';

// TODO: fix on submit persists search value pn refresh

/**
 * Create artist component
 * @param title
 * @param description
 * @param img
 * @param rating
 * @returns {JSX.Element}
 * @constructor
 */
const Artist = ({id, name: title, followers, images: img, popularity: rating}) => {

    const history = useHistory();

    const onCardClick = history => artistId => () =>
        history.push(`/artists/${artistId}/albums`);

    const getDescription = followers =>
        `${numberWithCommas(followers)} followers`;

    const getExtraContent = rating =>
        <RatingComponent rating={rating}/>;

    return (
        <CardComponent
            id={id}
            title={title}
            imgTitle={title}
            onCardClick={onCardClick(history)}
            extraContent={getExtraContent(rating)}
            img={img.length !== 0 ? img[0]?.url : icon}
            description={getDescription(followers?.total ?? 0)}
        />
    )
}

export default Artist;
