import React from 'react';
import Icon from '@material-ui/core/Icon';
import Star from '@material-ui/icons/Star';
import StarOutline from '@material-ui/icons/StarOutline';

import useStyles from './styles';

/**
 * Default Values
 * @type {number}
 */
const maxRating = 100;
const starsNumber = 5;
const defaultRatingValue = 5;

/**
 * Function to get rating stars
 * @param rating
 * @param classNames
 * @returns {[]}
 */
const getStarsDisplay = (rating, classNames) => {

    // Rating by Spotify is over 100
    // Max stars is 5
    // We need to get the rating over 5
    const rated = Math.round((rating * starsNumber) / maxRating);

    let stars = [];

    for (let i = rated; i > 0; i--) {
        stars.push(<Star key={`star-rated-${i}`} className={classNames.rated}/>)
    }

    for (let i = stars.length; i < defaultRatingValue; i++) {
        stars.push(<StarOutline key={`star-not-rated-${i}`} className={classNames.notRated}/>)
    }

    return stars;
}

/**
 * Create component to get rating
 * @param rating
 * @returns {JSX.Element}
 * @constructor
 */
const RatingComp = ({rating = maxRating}) => {

    const classNames = useStyles();

    return (
        <Icon>
            {getStarsDisplay(rating, classNames)}
        </Icon>
    )
}

export default RatingComp;
