import React from 'react';
import Link from '@material-ui/core/Link';
import {useHistory} from 'react-router-dom';
import Error from '../../components/Error/Error';
import {isAuthenticated} from '../../global/functions';
import {GO_TO_LOGIN, USER_NOT_AUTHENTICATED} from '../../constant/messages';

import useStyles from './styles';

/**
 * Create a hoc to check if the component is authenticated
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const AuthenticatedComp = ({children}) => {

    const history = useHistory();

    const classes = useStyles();

    if (!isAuthenticated())
        return <Error
            errorMsg={USER_NOT_AUTHENTICATED}
            action={
                <Link href="#" onClick={e => {
                    e.preventDefault();
                    history.push('/');
                }}>
                    {GO_TO_LOGIN}
                </Link>
            }/>

    return (
        <div className={classes.authenticatedMain}>
            {children}
        </div>
    )
}

export default AuthenticatedComp;
