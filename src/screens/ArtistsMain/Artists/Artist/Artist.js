import React from 'react';
import {numberWithCommas} from '../../../../global/functions';
import CardComponent from '../../../../components/Card/CardComp';
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
 * Create artist component
 * @param title
 * @param description
 * @param img
 * @param rating
 * @returns {JSX.Element}
 * @constructor
 */
const Artist = ({name: title, followers, img, rating}) => {

    return (
        <CardComponent
            img={img}
            title={title}
            imgTitle={title}
            description={getDescription(followers)}
            extraContent={getExtraContent(rating)}
        />
    )
}

export default Artist;
