import React, {useContext, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {AuthContext} from '../../context/auth';
import {authenticate, login} from '../../actions/auth';
import ButtonComp from '../../components/Button/ButtonComp';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';

import useStyles from './styles';

/**
 * Create Auth component
 * @returns {JSX.Element}
 * @constructor
 */
const Auth = () => {

    const classes = useStyles();

    const history = useHistory();

    const {search} = useLocation();

    const {state: {name, endIcon}, dispatch} = useContext(AuthContext);

    useEffect(() => {
        authenticate(dispatch, history, search);
    }, [dispatch, history, search])

    return (
        <CenterMiddlePage>
            <ButtonComp
                name={name}
                endIcon={endIcon}
                className={classes.button}
                onClick={login(dispatch, history)}
            />
        </CenterMiddlePage>
    )
}

export default Auth
