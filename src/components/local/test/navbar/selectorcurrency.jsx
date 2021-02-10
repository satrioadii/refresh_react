import React, { Fragment, useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import Currency from '../../../../resources/currency';

const SelectorCurrency = () => {

    /**
     * Get latest config of selected currency
     */
    
    const localCurrency = localStorage.getItem('currency');

    const [state, setState] = useState({
        isOpen: false,
        selectedComponent: undefined,
        localString: localCurrency ? localCurrency : Currency.list[0].value
    });

    const handleClick = (e) => {
        setState({
            ...state, 
            isOpen: !state.isOpen,
            selectedComponent: e.currentTarget
        });
    };

    const handleClose = (e, type) => {

        /**
         * Check action based on type,
         * if close-only => not update the currency data
         */
        
        if (type === 'close-only') {
            setState({...state, isOpen: false});
            return;
        };

        setState({
            ...state, 
            isOpen: false,
            localString: e.target.dataset.value
        });
        
        /**
         * Save selected currency
         */

        localStorage.setItem('currency', e.target.dataset.value);
    };

    return (
        <Fragment>
            <p className="default csr-pointer" onClick={handleClick}>
                <span style={{marginRight: '10px'}}>{state.localString}</span> 
                <span style={{fontSize: '10px', verticalAlign: 'middle'}}>&#9660;</span>
            </p>
            <Menu
                id="simple-menu"
                anchorEl={state.selectedComponent}
                keepMounted
                open={state.isOpen}
                onClose={(e) => handleClose(e, 'close-only')}
            >
                {
                    /**
                     * Render the Currency list
                     */

                    Currency.list.map((lang, index) => 
                        <MenuItem key={`${lang.value}_index`} data-value={lang.value} onClick={(e) => handleClose(e, 'update')}>{lang.label}</MenuItem>
                    )
                }
            </Menu>
        </Fragment>
    );
};

export default SelectorCurrency;