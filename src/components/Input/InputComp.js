import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import useStyles from './styles';

/**
 * Create global input component
 * @param id
 * @param name
 * @param value
 * @param label
 * @param handleChange
 * @param type
 * @param className
 * @param helperText
 * @param error
 * @param disabled
 * @param required
 * @param multiline
 * @param endAdornment
 * @param startAdornment
 * @returns {JSX.Element}
 * @constructor
 */
const InputComponent = ({
                            id,
                            name,
                            value,
                            label,
                            handleChange,
                            type = 'text',
                            className = '',
                            helperText = '',
                            error = false,
                            disabled = false,
                            required = false,
                            multiline = false,
                            endAdornment = null,
                            startAdornment = null,
                        }) => {

    const classes = useStyles();

    return (
        <TextField
            id={id}
            name={name}
            size='small'
            label={label}
            error={error}
            value={value}
            variant='outlined'
            multiline={multiline}
            onChange={handleChange}
            helperText={helperText}
            className={`${classes.margin} ${className}`}
            InputProps={{
                type,
                required,
                disabled,
                startAdornment:
                    startAdornment
                        ? <InputAdornment position='start'>{startAdornment}</InputAdornment>
                        : null,
                endAdornment:
                    endAdornment
                        ? <InputAdornment position='end'>{endAdornment}</InputAdornment>
                        : null
            }}
        />
    )
}

export default InputComponent;
