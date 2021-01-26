import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../../context/auth';
import {login} from '../../actions/auth';
import Loading from '../../components/Loading/Loading';
import {REDIRECT_MESSAGE} from '../../constant/messages';
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

    const {state: {label, name, endIcon, isLoading}, dispatch} = useContext(AuthContext);

    return (
        <CenterMiddlePage>
            {
                isLoading
                    ? <Loading loadingMessage={REDIRECT_MESSAGE}/>
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
