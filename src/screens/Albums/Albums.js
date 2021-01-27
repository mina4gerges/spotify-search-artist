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

    const [artistName, setArtistName] = useState('');

    const [isFirstLoading, setIsFirstLoading] = useState(true);

    // Get artist albums
    useEffect(() => {

        const token = JSON.parse(localStorage.getItem('token'));

        if (artistId)
            getArtistAlbums(token?.access_token, artistId)
                .then(result => {

                    const albums = result.data.items;

                    // Get the first artist (artists[0]),
                    // because we may have different artist for one album
                    if (albums.length > 0)
                        setArtistName(albums[0]?.artists[0]?.name);

                    setAlbums(albums);
                    setIsFirstLoading(false);

                })
                .catch(e => {

                    setArtistName('');
                    setAlbums([]);
                    setIsFirstLoading(false);

                    // If error from Spotify
                    if (e?.response?.data?.error) {

                        const {status, message} = e.response.data.error;

                        // status === 401
                        // Unauthorized. Expired or invalid session
                        // Else code error may be invalid id, do not push to error page
                        if (status === 401) {
                            localStorage.clear();
                            history.push('/error', {action: {type: 'login'}, errorDescription: message});
                        }

                    } else {
                        console.error(e.message);
                        history.push('/error', {action: {type: 'login'}});
                    }
                })

    }, [artistId, history])


    if (isFirstLoading)
        return (
            <CenterMiddlePage>
                <Loading loadingMessage={LOADING_ALBUMS}/>
            </CenterMiddlePage>
        )

    return (
        <div className={classes.albumsMain}>
            <div className={classes.albumsHeader}>
                <Typography variant="h5" className={classes.artistName}>
                    {artistName}
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
