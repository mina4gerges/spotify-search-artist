import React, {useContext, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import {useParams} from 'react-router-dom';
import Artist from './Artist/Artist';
import Error from '../../../components/Error/Error';
import Loading from '../../../components/Loading/Loading';
import {setSearchItem} from '../../../actions/searchArtist';
import SearchComp from '../../../components/Search/SearchComp';
import {SearchArtistContext} from '../../../context/searchArtist';
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

    // const [filteredArtists, setFilteredArtists] = useState([]);

    const {searchValue: searchValueParams} = useParams();

    const {state: {searchResult: artists, isSearching}, dispatch} = useContext(SearchArtistContext);

    // This useEffect is used if user refresh the page,
    // get the new search value from URL
    useEffect(() => {

        setSearchItem(dispatch, searchValueParams);

    }, [dispatch, searchValueParams])

    console.log("artists", artists)

    if (isSearching)
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
            <div className={classes.artistsSearchBody}>
                {
                    artists.length === 0
                        ? <Error errorMsg={ARTIST_NOT_FOUND}/>
                        : <Grid container spacing={1}>
                            {artists.map(artist => {
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
