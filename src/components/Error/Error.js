import React from 'react';
import {useLocation} from 'react-router-dom';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';

const Error = ({errorMsg = 'Error Occurred', action}) => {

    const {state} = useLocation();

    if (state?.errorMsg)
        errorMsg = state.errorMsg;

    return (
        <CenterMiddlePage>
            {errorMsg}
            {
                action &&
                action
            }
        </CenterMiddlePage>
    )
}

export default Error;
