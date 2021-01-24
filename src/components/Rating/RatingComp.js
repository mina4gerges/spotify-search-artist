import React from 'react';
import Icon from '@material-ui/core/Icon';
import Star from '@material-ui/icons/Star';
import StarOutline from '@material-ui/icons/StarOutline';

import useStyles from './styles';

/**
 * Default rating value
 * @type {number}
 */
const defaultRatingValue = 5;

/**
 * Function to get rating stars
 * @param rating
 * @param classNames
 * @returns {[]}
 */
const getStarsDisplay = (rating, classNames) => {

    let stars = [];

    for (let i = rating; i > 0; i--) {
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
const RatingComponent = ({rating = defaultRatingValue}) => {

    const classNames = useStyles();

    return (
        <Icon>
            {getStarsDisplay(rating, classNames)}
        </Icon>
    )
}

export default RatingComponent;
