import React, { Fragment, useState } from 'react';
import GlobalSnackbar from '../../../../global/snackbar';
import Spacer from '../../../../global/space';

const TestMainLayoutDetailMore = () => {

    const [state, setState] = useState({
        isOpen: false
    });
    
    const handleClick = () => {
        setState({...state, isOpen: true});
    };

    const handleClose = () => {
        setState({...state, isOpen: false});
    }
    
    return (
        <Fragment>
            <div className='csr-pointer' style={styles.wrapper} onClick={() => handleClick()}>
                <p className="default txts-detail-header" style={{fontWeight: 400}}>MORE</p>
            </div>
            <GlobalSnackbar isOpen={state.isOpen} handleClose={handleClose}>Done :)</GlobalSnackbar>
        </Fragment>
    );
};

const styles = {
    wrapper: {
        borderRadius: '4px',
        backgroundColor: '#F6F7F8',
        padding: '20px',
        textAlign: 'center'
    },
};

export default TestMainLayoutDetailMore;