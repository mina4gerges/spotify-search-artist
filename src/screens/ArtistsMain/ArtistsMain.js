import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Albums from '../Albums/Albums';
import Artists from './Artists/Artists';
import Error from '../../components/Error/Error';
import SearchComp from '../../components/Search/SearchComp';
import {USER_NOT_AUTHENTICATED} from "../../constant/messages";
import {SearchArtistProvider} from '../../context/searchArtist';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';

// Get error component to be displayed if user is not authenticated
const getError = history => {
    return (
        <Error errorMsg={USER_NOT_AUTHENTICATED}
               action={
                   <Typography>
                       <Link href="#" onClick={e => {
                           e.preventDefault();
                           history.push('/')
                       }}>
                           Click here to login
                       </Link>
                   </Typography>
               }
        />
    )
}

/**
 * Create artists main component that contains the router
 * @returns {JSX.Element}
 * @constructor
 */
const ArtistsMain = () => {

    const {path} = useRouteMatch();

    const history = useHistory();

    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));

    if (!isAuthenticated)
        return getError(history);

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
