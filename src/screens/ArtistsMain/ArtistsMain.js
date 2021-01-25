import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Albums from '../Albums/Albums';
import Artists from './Artists/Artists';
import Error from '../../components/Error/Error';
import {isAuthenticated} from '../../global/functions';
import SearchComp from '../../components/Search/SearchComp';
import {SearchArtistProvider} from '../../context/searchArtist';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';
import {GO_TO_LOGIN, USER_NOT_AUTHENTICATED} from '../../constant/messages';

/**
 * Create artists main component that contains the router
 * @returns {JSX.Element}
 * @constructor
 */
const ArtistsMain = () => {

    const {path} = useRouteMatch();

    const history = useHistory();

    if (!isAuthenticated())
        return <Error
            errorMsg={USER_NOT_AUTHENTICATED}
            action={
                <Link href="#" onClick={e => {
                    e.preventDefault();
                    history.push('/');
                }}>
                    {GO_TO_LOGIN}
                </Link>
            }/>

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
