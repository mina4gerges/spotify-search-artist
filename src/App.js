import React from 'react';
import Container from '@material-ui/core/Container';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Auth from './screens/Auth/Auth';
import {AuthProvider} from './context/auth';
import Artists from './screens/Artists/Artists';
import PageNotFound from "./components/PageNotFound/PageNotFound";

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
                                <Artists/>
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
