import React from 'react';
import {useParams} from 'react-router-dom';

const Artist = () => {

    const {artist} = useParams();

    return (
        <div>
            hello from artist - {artist}
        </div>
    )
}

export default Artist;
