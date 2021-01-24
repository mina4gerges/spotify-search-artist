import React, {useContext} from 'react';
import {useLocation} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Album from './Album/Album';
import {SearchArtistContext} from '../../context/searchArtist';

import useStyles from './styles';

/**
 * Create albums component
 * @returns {JSX.Element}
 * @constructor
 */
const Albums = () => {

    const classes = useStyles();

    const {state: {artistId}} = useLocation();

    const {state: {searchResult: artists}} = useContext(SearchArtistContext);

    const {name, albums} = artists.find(val => val.id === artistId);

    return (
        <>
            <div className={classes.albumsHeader}>
                <Typography variant="h5" className={classes.artistName}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Albums
                </Typography>
            </div>

            <div>
                <Grid container spacing={2}>
                    {
                        albums.map(album => {
                            return (
                                <Grid key={`album-id-${album.id}`} xs={12} sm={6} md={4} lg={3} item>
                                    <Album artistName={name} {...album}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </>
    )
}

export default Albums;
