import React from "react";
import Container from '@material-ui/core/Container';
import Login from "./screens/Login/Login";
import {AuthProvider} from "./context/auth";
import CenterMiddlePage from "./hoc/CenterMiddlePage/CenterMiddlePage";

const App = () => {
    return (
        <AuthProvider>
            <Container fixed>
                <div className='main-app-container'>
                    <CenterMiddlePage>
                        <Login/>
                    </CenterMiddlePage>
                </div>
            </Container>
        </AuthProvider>
    );
}

export default App;
