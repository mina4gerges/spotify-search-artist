import React from 'react';
import {useParams} from 'react-router-dom';

const Artists = () => {

    const {artists} = useParams();

    return (
        <div>
            hello from artists - {artists}
        </div>
    )
}

export default Artists;
