import React, {useContext} from 'react';
import {AuthContext} from '../../context/auth';
import {login, logout} from '../../actions/auth';
import ButtonComp from '../../components/Button/ButtonComp';

import useStyles from './styles';

/**
 * Create Login component
 * @returns {JSX.Element}
 * @constructor
 */
const Login = () => {
    const classes = useStyles();

    const {state: {name, endIcon, isLogeIn}, dispatch} = useContext(AuthContext);

    return <ButtonComp name={name}
                       endIcon={endIcon}
                       className={classes.button}
                       onClick={isLogeIn ? logout(dispatch) : login(dispatch)}/>

}

export default Login
