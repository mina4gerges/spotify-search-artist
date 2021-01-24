import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Albums from '../Albums/Albums';
import Artists from './Artists/Artists';
import SearchComp from '../../components/Search/SearchComp';
import {SearchArtistProvider} from '../../context/searchArtist';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

/**
 * Create artists main component that contains the router
 * @returns {JSX.Element}
 * @constructor
 */
const ArtistsMain = () => {

    const {path} = useRouteMatch();

    return (
        <SearchArtistProvider>
            <Switch>
                <Route path={`${path}`} exact>
                    <SearchComp/>
                </Route>
                <Route path={`${path}/:searchValue`} exact>
                    <Artists/>
                </Route>
                <Route path={`${path}/:artistName/albums`} exact>
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
