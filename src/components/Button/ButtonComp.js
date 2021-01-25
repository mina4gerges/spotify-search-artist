import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = ({
                             name,
                             label,
                             onClick,
                             className,
                             endIcon = null,
                             startIcon = null,
                             disabled = false,
                             color = 'default',
                             variant = 'contained',
                         }) => {
    return (
        <Button
            name={name}
            color={color}
            onClick={onClick}
            endIcon={endIcon}
            variant={variant}
            disabled={disabled}
            startIcon={startIcon}
            className={className}>
            {label}
        </Button>
    )
}

export default ButtonComponent
