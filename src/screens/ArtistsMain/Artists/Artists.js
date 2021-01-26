import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Artist from './Artist/Artist';
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
