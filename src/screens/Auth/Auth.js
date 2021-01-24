import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../../context/auth';
import {login} from '../../actions/auth';
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

    const {state: {name, endIcon}, dispatch} = useContext(AuthContext);

    return (
        <CenterMiddlePage>
            <ButtonComp name={name}
                        endIcon={endIcon}
                        className={classes.button}
                        onClick={login(dispatch, history)}
            />
        </CenterMiddlePage>
    )
}

export default Auth
