import React, {useContext, useEffect} from 'react';
import {Route, Switch, useHistory, useLocation, useRouteMatch} from 'react-router-dom';
import Albums from '../Albums/Albums';
import Artists from './Artists/Artists';
import {AuthContext} from '../../context/auth';
import {authenticate} from '../../actions/auth';
import SearchComp from '../../components/Search/SearchComp';
import {SearchArtistProvider} from '../../context/searchArtist';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';

/**
 * Create artists main component that contains the router
 * @returns {JSX.Element}
 * @constructor
 */
const ArtistsMain = () => {

    const {path} = useRouteMatch();

    const history = useHistory();

    // search, is a params to get the code and value after authentication with spotify.
    // After authentication, we will redirected to this page
    const {search} = useLocation();

    const {dispatch} = useContext(AuthContext);

    useEffect(() => {

        if (search)
            authenticate(dispatch, history, search);

    }, [dispatch, history, search])

    return (
        <SearchArtistProvider>
            <Switch>
                <Route path={`${path}`} exact>
                    <CenterMiddlePage>
                        <SearchComp/>
                    </CenterMiddlePage>
                </Route>
                <Route path={`${path}/:searchValue`} exact>
                    <Artists/>
                </Route>
                <Route path={`${path}/:artistName/:artistId/albums`} exact>
                    <Albums/>
                </Route>
                <Route path="*">
                    <PageNotFound/>
                </Route>
            </Switch>
        </SearchArtistProvider>
    )
}

export default ArtistsMain;
