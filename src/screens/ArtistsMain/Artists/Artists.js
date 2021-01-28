import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import Artist from './Artist/Artist';
import {getSearchArtist} from '../../../api';
import Loading from '../../../components/Loading/Loading';
import {setSearchValue} from '../../../actions/searchArtist';
import SearchComp from '../../../components/Search/SearchComp';
import {SearchArtistContext} from '../../../context/searchArtist';
import GridListComp from '../../../components/GridList/GridListComp';
import CenterMiddlePage from '../../../hoc/CenterMiddlePage/CenterMiddlePage';
import {ARTIST_NOT_FOUND, SEARCHING_ARTISTS} from '../../../constant/messages';

import useStyles from './styles';

/**
 * Create artists component
 * @returns {JSX.Element}
 * @constructor
 */
const Artists = () => {

    const classes = useStyles();

    const history = useHistory();

    const {search} = useLocation();

    const [artists, setArtists] = useState([]);

    const [isFirstLoading, setIsFirstLoading] = useState(true);

    const [isLoadingOnSearch, setIsLoadingOnSearch] = useState(false);

    const {state: {value}, dispatch} = useContext(SearchArtistContext);

    // Set searchInput value from search value (URL)
    useEffect(() => {

        setSearchValue(dispatch, search.replace('?q=', ''));

    }, [dispatch, search])


    // Fetching artists:
    useEffect(() => {

        // Stop searching for artists if no value in the search bar
        if (!value)
            return

        if (!isFirstLoading)
            setIsLoadingOnSearch(true);

        const token = JSON.parse(localStorage.getItem('token'));

        getSearchArtist(token?.access_token, value)
            .then(result => {

                setArtists(result?.data?.artists?.items ?? []);

                setIsFirstLoading(false);
                setIsLoadingOnSearch(false);

            })
            .catch(e => {

                setArtists([]);

                setIsFirstLoading(false);
                setIsLoadingOnSearch(false);

                // If error from Spotify
                if (e?.response?.data?.error) {
                    const {status, message} = e.response.data.error;

                    // status === 401
                    // Unauthorized. Expired or invalid session
                    if (status === 401)
                        localStorage.clear();

                    history.push('/error', {action: {type: 'login'}, errorDescription: message});

                } else {
                    history.push('/error', {action: {type: 'login'}, errorDescription: e.message});
                }
            })

    }, [dispatch, history, isFirstLoading, value])

    if (isFirstLoading)
        return (
            <CenterMiddlePage>
                <Loading loadingMessage={SEARCHING_ARTISTS}/>
            </CenterMiddlePage>
        )

    return (
        <div className={classes.artistsMain}>

            <div className={classes.artistsSearch}>
                <SearchComp/>
            </div>

            {
                isLoadingOnSearch &&
                <Loading type='linear'/>
            }

            <div className={classes.artistsSearchBody}>
                <GridListComp
                    data={artists}
                    RenderItemComp={Artist}
                    errorMsg={ARTIST_NOT_FOUND}
                />
            </div>
        </div>
    )
}

export default Artists;
