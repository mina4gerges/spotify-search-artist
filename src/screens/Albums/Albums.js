import React, {useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Album from './Album/Album';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Error from '../../components/Error/Error';
import Typography from '@material-ui/core/Typography';
import {SearchArtistContext} from '../../context/searchArtist';
import {ALBUMS_NOT_FOUND, ARTIST_NOT_FOUND, GO_BACK} from '../../constant/messages';

import useStyles from './styles';

// Create action to go back
const artistNotFoundAction = history => {
    return (
        <Link
            href='#'
            onClick={e => {
                e.preventDefault();
                history.goBack()
            }
            }
        >
            {GO_BACK}
        </Link>
    )
}

/**
 * Create albums component
 * @returns {JSX.Element}
 * @constructor
 */
const Albums = () => {

    const classes = useStyles();

    const {artistId} = useParams();

    const history = useHistory();

    const {state: {searchResult: artists}} = useContext(SearchArtistContext);

    // "+" is added to artistId because it is a string, we have to convert it to int
    const artistFound = artists.find(val => val.id === +artistId);

    // If artist not found, display error
    if (!artistFound)
        return <Error errorMsg={ARTIST_NOT_FOUND} action={artistNotFoundAction(history)}/>

    const {name, albums = []} = artistFound;

    return (
        <div className={classes.albumsMain}>
            <div className={classes.albumsHeader}>
                <Typography variant="h5" className={classes.artistName}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Albums
                </Typography>
            </div>
            <div className={classes.albumsBody}>
                {
                    albums.length === 0
                        ? <Error errorMsg={ALBUMS_NOT_FOUND}/>
                        : <Grid container spacing={2}>
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
                }

            </div>
        </div>
    )
}

export default Albums;
