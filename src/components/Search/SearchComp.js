import React, {useCallback, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import InputComponent from '../Input/InputComp';
import {SearchArtistContext} from '../../context/searchArtist';
import {handleSubmit, setSearchValue} from '../../actions/searchArtist';

import useStyles from './styles';

/**
 * Create search component
 * @returns {JSX.Element}
 * @constructor
 */
const SearchComp = () => {

    const classes = useStyles();

    const history = useHistory();

    const {state: {id, name, type, label, value, endAdornment}, dispatch} = useContext(SearchArtistContext);

    const handleChangeCallBack = useCallback(value => {
        setSearchValue(dispatch, value);
    }, [dispatch])

    return (
        <form onSubmit={handleSubmit(dispatch, value, history)}>
            <InputComponent
                id={id}
                name={name}
                type={type}
                label={label}
                value={value}
                endAdornment={endAdornment}
                className={classes.inputWidth}
                handleChange={handleChangeCallBack}
            />
        </form>
    )
}

export default SearchComp;
