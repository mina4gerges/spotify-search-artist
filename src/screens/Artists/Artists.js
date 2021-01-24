import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Artist from './Artist/Artist';
import SearchComp from '../../components/Search/SearchComp';
import {SearchArtistProvider} from '../../context/searchArtist';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

/**
 * Create artists components that contains artists router
 * @returns {JSX.Element}
 * @constructor
 */
const Artists = () => {

    const {path} = useRouteMatch();

    return (
        <SearchArtistProvider>
            <Switch>
                <Route path={path} exact>
                    <div>
                        hello from artists
                    </div>
                </Route>
                <Route path={`${path}/search`} exact>
                    <SearchComp/>
                </Route>
                <Route path={`${path}/search/:artist`} exact>
                    <Artist/>
                </Route>
                <Route path="*">
                    <PageNotFound/>
                </Route>
            </Switch>
        </SearchArtistProvider>
    )
}

export default Artists;
