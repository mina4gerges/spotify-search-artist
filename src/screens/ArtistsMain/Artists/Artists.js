import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Artist from './Artist/Artist';
import {SearchArtistContext} from '../../../context/searchArtist';

import useStyles from './styles';

/**
 * Create artists component
 * @returns {JSX.Element}
 * @constructor
 */
const Artists = () => {

    const {state: {searchResult: artists}} = useContext(SearchArtistContext);

    const classes = useStyles()

    return (
        <div className={classes.mainArtists}>
            <Grid container spacing={2}>
                {artists.map(artist => {
                    return (
                        <Grid key={artist.id} xs={12} sm={6} md={4} lg={3} item>
                            <Artist {...artist}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Artists;
