import React from 'react';

function reducer(state = {
    submenu: localStorage.getItem('navigation') || '',
    subsubmenu: localStorage.getItem('accesories') || ''
}, action) {
    switch (action.type) {
        case 'CHANGE_SUBMENU':
            return {
                ...state,
                submenu: action.value
            };
        case 'CHANGE_SUBSUBMENU':
            return {
                ...state,
                subsubmenu: action.value
            }
        default:
            return state;
    };
};

export default reducer;