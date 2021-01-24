import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import SearchComp from '../../components/Search/SearchComp';
import RatingComp from '../../components/Rating/RatingComp';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

const Artists = () => {

    const {path} = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={path} exact>
                    <div>
                        hello from artists
                    </div>
                </Route>
                <Route path={`${path}/rating`} exact>
                    <RatingComp/>
                </Route>
                <Route path={`${path}/search`} exact>
                    <SearchComp/>
                </Route>
                <Route path="*">
                    <PageNotFound/>
                </Route>
            </Switch>
        </div>
    )
}

export default Artists;
