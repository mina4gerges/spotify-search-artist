import React from 'react';
import {LOADING} from '../../constant/messages';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';

const Loading = ({loadingMessage = LOADING, type = 'circular'}) => {

    const classes = useStyles();

    if (type === 'linear')
        return (
            <div className={classes.linearProgress}>
                <LinearProgress/>
            </div>
        )

    return (
        <>
            <CircularProgress disableShrink/>
            <Typography>
                {loadingMessage}
            </Typography>
        </>
    )
}

export default Loading
