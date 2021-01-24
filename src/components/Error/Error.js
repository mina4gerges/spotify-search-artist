import React from 'react';
import {useLocation} from 'react-router-dom';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';

const Error = ({errorMsg = 'Error Occurred'}) => {

    const {state} = useLocation();

    if (state?.errorMsg)
        errorMsg = state.errorMsg;

    return (
        <CenterMiddlePage>
            {errorMsg}
        </CenterMiddlePage>
    )
}

export default Error;
