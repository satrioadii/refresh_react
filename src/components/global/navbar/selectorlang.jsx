import React, { Fragment, useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import Language from '../../../resources/lang/index';

const SelectorLang = () => {

    /**
     * Get latest config of selected language
     */
    
    const localLanguage = localStorage.getItem('lang');

    const [state, setState] = useState({
        isOpen: false,
        selectedComponent: undefined,
        localLang: localLanguage ? localLanguage : Language.list[0].value
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
         * if close-only => not update the lang data
         */
        
        if (type === 'close-only') {
            setState({...state, isOpen: false});
            return;
        };

        setState({
            ...state, 
            isOpen: false,
            localLang: e.target.dataset.value
        });
        
        /**
         * Save selected language
         */

        localStorage.setItem('lang', e.target.dataset.value);
    };

    return (
        <Fragment>
            <p className="default csr-pointer" onClick={handleClick}>
                <span style={{marginRight: '10px'}}>{state.localLang}</span> 
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
                     * Render the language list
                     */

                    Language.list.map((lang, index) => 
                        <MenuItem key={`${lang.value}_index`} data-value={lang.value} onClick={(e) => handleClose(e, 'update')}>{lang.label}</MenuItem>
                    )
                }
            </Menu>
        </Fragment>
    );
};

export default SelectorLang;