import React from 'react';
import {useLocation} from "react-router-dom";
import CenterMiddlePage from "../../hoc/CenterMiddlePage/CenterMiddlePage";

const PageNotFound = () => {

    const {pathname} = useLocation();

    return (
        <CenterMiddlePage>
            Page not found {pathname}
        </CenterMiddlePage>
    )

}

export default PageNotFound;
