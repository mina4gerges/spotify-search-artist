import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import useStyles from './styles';
import IconButton from "@material-ui/core/IconButton";

const adornment = (adornmentIcon, onClick) => {
    return (
        <InputAdornment position='start'>
            <IconButton type='submit' aria-label="search" onClick={onClick}>
                {adornmentIcon}
            </IconButton>
        </InputAdornment>
    )
}

/**
 * Create global input component
 * @param id
 * @param name
 * @param label
 * @param handleChange
 * @param prevValue
 * @param type
 * @param className
 * @param helperText
 * @param disabled
 * @param required
 * @param multiline
 * @param endAdornment
 * @param startAdornment
 * @param prevError
 * @returns {JSX.Element}
 * @constructor
 */
const InputComp = ({
                       id,
                       name,
                       label,
                       handleChange,
                       value: prevValue,
                       type = 'text',
                       className = '',
                       helperText = '',
                       disabled = false,
                       required = false,
                       multiline = false,
                       endAdornment = null,
                       startAdornment = null,
                       error: prevError = false,
                   }) => {

    const classes = useStyles();

    const [value, setValue] = useState('');

    const [error, setError] = useState(false);

    // Update component value with the value sent using props
    useEffect(() => {
        if (prevValue)
            setValue(prevValue);
    }, [prevValue])

    // Update component error with the error sent using props
    useEffect(() => {
        setError(prevError);
    }, [prevError])

    // Update input value to parent component after 0.5s
    // Prevent updating value on each key down
    useEffect(() => {

        // Prevent on the first load of the component to call handleChange
        if (value === prevValue)
            return

        const triggerChange = () => {
            handleChange(value);

            clearTimeout(timer);
        }

        const timer = setTimeout(triggerChange, 500);

        // Clean up
        return () => {
            clearTimeout(timer);
        }

    }, [handleChange, prevValue, value])


    const onChange = e => {

        if (error)
            setError(false);

        setValue(e.target.value);
    }

    // Triggered when user press on enter
    const handleKeyDown = e => {

        // User pressed on enter
        if (e.keyCode === 13)
            updateValue();
    }

    // Triggered when user press on the icon button
    const onIconClick = () =>
        updateValue();

    const updateValue = () => {

        if (value)
            setError(false);
        else
            setError(true);

        handleChange(value);
    }

    return (
        <TextField
            id={id}
            name={name}
            size='small'
            label={label}
            error={error}
            value={value}
            variant='outlined'
            onChange={onChange}
            multiline={multiline}
            helperText={helperText}
            onKeyDown={handleKeyDown}
            className={`${classes.margin} ${className}`}
            InputProps={{
                type,
                required,
                disabled,
                startAdornment: startAdornment ? adornment(startAdornment, onIconClick) : null,
                endAdornment: endAdornment ? adornment(endAdornment, onIconClick) : null
            }}
        />
    )
}

export default InputComp;
