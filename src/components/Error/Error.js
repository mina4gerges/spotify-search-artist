import React from 'react';
import CenterMiddlePage from '../../hoc/CenterMiddlePage/CenterMiddlePage';
import {useLocation} from "react-router-dom";

const Error = () => {

    const {state} = useLocation();

    return (
        <CenterMiddlePage>
            {state?.errorMsg ?? 'Error Occurred'}
        </CenterMiddlePage>
    )
}

export default Error;
