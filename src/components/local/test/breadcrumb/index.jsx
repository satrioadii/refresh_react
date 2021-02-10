import React, { Fragment, useState } from 'react';
import GlobalContainer from '../../../global/container';
import GlobalSnackbar from '../../../global/snackbar';

const TestBreadCrumb = () => {
    
    const [state, setState] = useState({
        path: ['home', 'accessories', 'Air Port & Wireless'],
        isOpen: false
    });

    const deviderGenerator = () => {
        return (
            <span style={styles.devider}>/</span>
        )
    };

    const handleClick = () => {
        setState({...state, isOpen: true});
    };

    const handleClose = () => {
        setState({...state, isOpen: false});
    };

    return (
        <Fragment>
            <div style={styles.wrapper}>
                <GlobalContainer>
                    <div style={styles.deepWrapper}>
                        {
                            /**
                             * Render navigation path of breadcrumbs
                             */

                            state.path.map((path, index) => {
                                
                                let devider = '';
                                
                                if (index < state.path.length) {
                                    devider = deviderGenerator();
                                };

                                return (
                                    <Fragment>
                                        {index > 0 ? devider : ''}
                                        <p 
                                            className={`default txt-camel ${index < state.path.length-1 ? 'csr-pointer txt-active' : null}`} 
                                            style={{fontWeight: 500}}
                                            onClick={index < state.path.length-1 ? handleClick : undefined}>
                                            {path}
                                        </p>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </GlobalContainer>
            </div>

            <GlobalSnackbar isOpen={state.isOpen} handleClose={handleClose}>Under Development :)</GlobalSnackbar>
        </Fragment>
    );
};

const styles = {
    wrapper: {
        background: '#F6F7F8',
        textAlign: 'center',
    },
    deepWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingTop: '17px',
        paddingBottom: '17px'
    },
    devider: {
        marginRight: '10px',
        marginLeft: '10px',
        color: '#C1C8CE',
        fontWeight: 500
    }
};

export default TestBreadCrumb;