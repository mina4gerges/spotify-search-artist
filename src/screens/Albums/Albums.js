import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Album from './Album/Album';
import {getArtistAlbums} from '../../api';
import Loading from '../../components/Loading/Loading';
import GridListComp from '../../components/GridList/GridListComp';
import {ALBUMS_NOT_FOUND, LOADING_ALBUMS} from '../../constant/messages';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';

import useStyles from './styles';

/**
 * Create albums component
 * @returns {JSX.Element}
 * @constructor
 */
const Albums = () => {

    const classes = useStyles();

    const history = useHistory();

    const {artistId} = useParams();

    const [albums, setAlbums] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    // Get artist albums
    useEffect(() => {

        const token = JSON.parse(localStorage.getItem('token'));

        getArtistAlbums(token?.access_token, artistId)
            .then(result => {

                setAlbums(result.data.items);

                setIsLoading(false);

            })
            .catch(e => {
                setIsLoading(false);

                // If error from Spotify
                if (e?.response?.data?.error) {
                    localStorage.clear();
                    history.push('/error', {
                        action: {type: 'login'}, errorDescription: e.response.data.error.message,
                    });
                } else {
                    console.error(e.message);
                    history.push('/error', {action: {type: 'login'}});
                }
            })

    }, [artistId, history])


    if (isLoading)
        return (
            <CenterMiddlePage>
                <Loading loadingMessage={LOADING_ALBUMS}/>
            </CenterMiddlePage>
        )

    // Artist name
    const name = JSON.parse(localStorage.getItem('artist'))?.name ?? '';

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
                <GridListComp
                    data={albums}
                    RenderItemComp={Album}
                    errorMsg={ALBUMS_NOT_FOUND}
                />
            </div>
        </div>
    )
}

export default Albums;
