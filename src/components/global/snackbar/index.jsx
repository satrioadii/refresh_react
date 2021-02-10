import React, { Fragment } from 'react';
import Icon from '@material-ui/core/Icon';
import { IconButton, Snackbar } from '@material-ui/core';

const GlobalSnackbar = ({children, isOpen, handleClose}) => {
    return (
        <Fragment>
            
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={isOpen}
                autoHideDuration={6000}
                onClose={handleClose}
                message={children}
                action={
                <Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <Icon>close</Icon>
                    </IconButton>
                </Fragment>
                }
            />
        </Fragment>
    );
};

export default GlobalSnackbar;

