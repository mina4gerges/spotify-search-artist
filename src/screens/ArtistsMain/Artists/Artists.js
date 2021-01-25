import React, {useContext, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {useParams} from 'react-router-dom';
import Artist from './Artist/Artist';
import Error from '../../../components/Error/Error';
import {setSearchItem} from '../../../actions/searchArtist';
import {ARTIST_NOT_FOUND} from '../../../constant/messages';
import SearchComp from '../../../components/Search/SearchComp';
import {SearchArtistContext} from '../../../context/searchArtist';

import useStyles from './styles';

// Filter artists based on search value
const getFilteredArtists = (artists, value) => {
    return artists.filter(val => val?.name?.trim()?.toLowerCase().includes(value?.trim()?.toLowerCase()));
}

/**
 * Create artists component
 * @returns {JSX.Element}
 * @constructor
 */
const Artists = () => {

    const classes = useStyles();

    const [filteredArtists, setFilteredArtists] = useState([]);

    const {searchValue: searchValueParams} = useParams();

    const {state: {value, searchResult: artists}, dispatch} = useContext(SearchArtistContext);

    // This useEffect is used if user refresh the page,
    // get the new search value from URL
    useEffect(() => {

        setSearchItem(dispatch, searchValueParams);

    }, [dispatch, searchValueParams])

    // Get filtered artists
    useEffect(() => {
        setFilteredArtists(getFilteredArtists(artists, value))
    }, [artists, value])

    return (
        <div className={classes.artistsMain}>
            <div className={classes.artistsSearch}>
                <SearchComp source='artists'/>
            </div>
            <div className={classes.artistsSearchBody}>
                {
                    filteredArtists.length === 0
                        ? <Error errorMsg={ARTIST_NOT_FOUND}/>
                        : <Grid container spacing={1}>
                            {filteredArtists.map(artist => {
                                return (
                                    <Grid key={`artist-id-${artist.id}`} xs={12} sm={6} md={4} lg={3} item>
                                        <Artist {...artist}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                }
            </div>
        </div>
    )
}

export default Artists;
