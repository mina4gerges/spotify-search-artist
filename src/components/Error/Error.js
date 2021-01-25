import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {ERROR_OCCURRED, GO_TO_LOGIN} from '../../constant/messages';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';

/**
 * Create component to display error messages
 * @param errorMsg
 * @param errorDescription
 * @param action
 * @returns {JSX.Element}
 * @constructor
 */
const Error = ({errorMsg = ERROR_OCCURRED, errorDescription = '', action}) => {

    const history = useHistory();

    const {state} = useLocation();

    if (state?.errorMsg)
        errorMsg = state.errorMsg;

    if (state?.errorDescription)
        errorDescription = state.errorDescription;

    if (state?.displayActionLink)
        action = (
            <Link
                href='#'
                onClick={e => {
                    e.preventDefault();
                    history.push('/')
                }}
            >
                {GO_TO_LOGIN}
            </Link>
        )

    return (
        <CenterMiddlePage>
            {
                errorMsg &&
                <Typography gutterBottom variant="h6" component="h2">
                    {errorMsg}
                </Typography>
            }

            {
                errorDescription &&
                <Typography variant="body2" color="textSecondary" component="p">
                    {errorDescription}
                </Typography>
            }

            {
                action &&
                <Typography variant="body1" component="p">
                    {action}
                </Typography>
            }
        </CenterMiddlePage>
    )
}

export default Error;
