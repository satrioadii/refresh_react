import React, { useState } from 'react';
import Spacer from '../../../../global/space';
import HeaderImage from '../../../../../asset/images/header_1@2x.png';
import HeaderImageSm from '../../../../../asset/images/iphone_se.png';
import GlobalSnackbar from '../../../../global/snackbar';

const TestMainLayoutProductHeader = () => {

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
        <div style={styles.wrapper}>
            <div style={styles.leftcontent}>
                <div className='md:hidden block'>
                    <img src={HeaderImageSm} style={{width: '100%', height: '100%'}}/>
                </div>
                <h1 className='default txts-header-product txt-light'>iPhone SE</h1>
                <Spacer b={21}/>
                <p className='default txts-subheader-product txt-light md:block hidden' style={styles.subheader}>Performance and design. Taken right to the edge.</p>
                <p className='default txts-subheader-product txt-light md:hidden block' >Performance and design. Taken right to the edge.</p>
                <Spacer b={20}/>
                <span className="txt-light csr-pointer" style={styles.ctabutton} onClick={() => handleClick()}>SHOP NOW</span>
                <Spacer b={28}/>
            </div>
            <div className='md:block hidden' style={styles.rightcontent}>
                <img src={HeaderImage} style={{width: '100%', height: '100%'}}/>
            </div>

            <GlobalSnackbar isOpen={state.isOpen} handleClose={handleClose}>Get the promo!</GlobalSnackbar>
        </div>
    );
};

const styles = {
    wrapper: {
        display: 'flex',
        borderRadius: '4px',
        background: `transparent linear-gradient(111deg, #FF4895 0%, #FFC080 100%) 0% 0% no-repeat padding-box`,
        paddingRight: '55px',
        paddingLeft: '55px'
    },
    leftcontent: {
        paddingTop: '57px',
        flex: 1
    },
    rightcontent: {
        flex: 1
    },
    subheader: {
        maxWidth: '283px'
    },
    ctabutton: {
        fontWeight: 400,
        textTransform: 'capitalize',
        paddingBototm: '5px',
        borderBottom: '3px solid #FFFFFF',
        letterSpacing: '0px',
        lineHeight: '22px'
    }
};

export default TestMainLayoutProductHeader;