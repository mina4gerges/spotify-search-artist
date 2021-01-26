import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = ({loadingMessage}) => {

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
