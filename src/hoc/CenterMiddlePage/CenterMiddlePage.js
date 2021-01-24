import React from 'react';

import useStyles from './styles';

/**
 * Center element to the middle of the page
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */

const CenterMiddlePage = ({children}) => {

    const classes = useStyles();

    return (
        <div className={classes.centerMiddlePage}>
            {children}
        </div>
    )
}

export default CenterMiddlePage;
