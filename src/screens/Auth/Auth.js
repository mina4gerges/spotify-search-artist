import React, {useContext, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {AuthContext} from '../../context/auth';
import {REDIRECT_MESSAGE} from '../../constant/messages';
import {authenticate, login} from '../../actions/auth';
import ButtonComp from '../../components/Button/ButtonComp';
import CircularProgress from '@material-ui/core/CircularProgress';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';

import useStyles from './styles';
import Typography from "@material-ui/core/Typography";

/**
 * Create Auth component
 * @returns {JSX.Element}
 * @constructor
 */
const Auth = () => {

    const classes = useStyles();

    const history = useHistory();

    // search, is a params to get the code and value after authentication with spotify.
    // After authentication, we will redirected to this page with this param (search)
    const {search} = useLocation();

    const {state: {label, name, endIcon, isLoading}, dispatch} = useContext(AuthContext);

    useEffect(() => {

        if (search)
            authenticate(dispatch, history, search);

    }, [dispatch, history, search])

    return (
        <CenterMiddlePage>
            {
                isLoading
                    ? <>
                        <CircularProgress disableShrink/>
                        <Typography>
                            {REDIRECT_MESSAGE}
                        </Typography>
                    </>
                    : <ButtonComp
                        name={name}
                        endIcon={endIcon}
                        className={classes.button}
                        onClick={login(dispatch, history)}
                        label={isLoading ? {REDIRECT_MESSAGE} : label}
                    />
            }
        </CenterMiddlePage>
    )
}

export default Auth
