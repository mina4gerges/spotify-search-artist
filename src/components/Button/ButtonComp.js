import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = ({
                             name,
                             onClick,
                             className,
                             endIcon = null,
                             startIcon = null,
                             disabled = false,
                             color = 'default',
                             variant = 'contained',
                         }) => {
    return (
        <Button color={color}
                onClick={onClick}
                endIcon={endIcon}
                variant={variant}
                disabled={disabled}
                startIcon={startIcon}
                className={className}>
            {name}
        </Button>
    )
}

export default ButtonComponent
