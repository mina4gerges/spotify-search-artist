import React from 'react';
import Container from '@material-ui/core/Container';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Auth from './screens/Auth/Auth';
import {AuthProvider} from './context/auth';
import ArtistsMain from './screens/ArtistsMain/ArtistsMain';
import PageNotFound from './components/PageNotFound/PageNotFound';

/**
 * Main App
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    return (
        <AuthProvider>
            <Container fixed>
                <div className='main-app-container'>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/' exact>
                                <Auth/>
                            </Route>
                            <Route path='/artists'>
                                <ArtistsMain/>
                            </Route>
                            <Route path="*">
                                <PageNotFound/>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </Container>
        </AuthProvider>
    );
}

export default App;
