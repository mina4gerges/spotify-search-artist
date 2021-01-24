import React from 'react';
import {useLocation} from 'react-router-dom';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';

const Error = () => {

    const {state} = useLocation();

    return (
        <CenterMiddlePage>
            {state?.errorMsg ?? 'Error Occurred'}
        </CenterMiddlePage>
    )
}

export default Error;
