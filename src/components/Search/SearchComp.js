import React, {useContext} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import InputComponent from '../Input/InputComp';
import {SearchArtistContext} from '../../context/searchArtist';
import {handleChange, handleSubmit} from '../../actions/searchArtist';

import useStyles from './styles';

/**
 * Create search component
 * @returns {JSX.Element}
 * @constructor
 */
const SearchComponent = ({source = 'standAlone'}) => {

    const classes = useStyles();

    const history = useHistory();
    const {path} = useRouteMatch();

    const {state: {id, name, type, label, value, error, endAdornment}, dispatch} = useContext(SearchArtistContext);

    return (
        <form onSubmit={handleSubmit(dispatch, value, source, history, path)}>
            <InputComponent
                id={id}
                name={name}
                type={type}
                label={label}
                value={value}
                error={error}
                endAdornment={endAdornment}
                className={classes.inputWidth}
                handleChange={handleChange(dispatch)}
            />
        </form>
    )
}

export default SearchComponent;
