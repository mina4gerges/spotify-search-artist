import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Auth from './screens/Auth/Auth';
import {AuthProvider} from './context/auth';
import Error from './components/Error/Error';
import ArtistsMain from './screens/ArtistsMain/ArtistsMain';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AuthenticatedComp from './hoc/AuthenticatedComp/AuthenticatedComp';

/**
 * Main App
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    return (
        <AuthProvider>
            <div id='main-project-container'>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact>
                            <Auth/>
                        </Route>
                        <Route path='/artists'>
                            <ArtistsMain/>
                        </Route>
                        <Route path='/error'>
                            <Error/>
                        </Route>
                        <Route path="*">
                            <AuthenticatedComp>
                                <PageNotFound/>
                            </AuthenticatedComp>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

export default App;
