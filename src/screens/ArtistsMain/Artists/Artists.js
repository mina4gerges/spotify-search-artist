import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Artist from './Artist/Artist';
import {getSearchArtist} from '../../../api';
import Loading from '../../../components/Loading/Loading';
import {setSearchItem} from '../../../actions/searchArtist';
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

    const {searchValue: searchValueParams} = useParams();

    const [artists, setArtists] = useState([]);

    const [isFirstLoading, setIsFirstLoading] = useState(true);

    const [isLoadingOnSearch, setIsLoadingOnSearch] = useState(false);

    const history = useHistory();

    const {state: {value}, dispatch} = useContext(SearchArtistContext);

    // This useEffect is used if user refresh the page,
    // get the new search value from URL
    useEffect(() => {

        setSearchItem(dispatch, searchValueParams);

    }, [dispatch, searchValueParams])

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
                    if (status === 401) {
                        localStorage.clear();
                        history.push('/error', {action: {type: 'login'}, errorDescription: message});
                    } else
                        history.push('/error', {action: {type: 'login'}, errorDescription: message});

                } else {
                    console.error(e.message);
                    history.push('/error', {action: {type: 'login'}});
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
                <SearchComp source='artists'/>
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
