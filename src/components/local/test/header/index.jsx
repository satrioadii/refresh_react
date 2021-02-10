import React, { Fragment, useState } from 'react';
import GlobalContainer from '../../../global/container';

import logosvg from "../../../../asset/images/logo.svg"
import Spacer from '../../../global/space';
import MenuNavigation from '../../../../resources/menunavigation';

const TestHeader = () => {

    const localSelected = localStorage.getItem('navigation');

    const [state, setState] = useState({
        selected: localSelected ? localSelected : MenuNavigation.list[0].value
    });

    const handleClick = (val) => {
        setState({...state, selected: val});
        localStorage.setItem('navigation', val);
    };

    return (
        <Fragment>
            <GlobalContainer>
                <div style={styles.wrapper}>
                    <img src={logosvg}/>
                </div>
                <Spacer b={34}/>

                <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    {
                        /**
                         * Render Navigation Menu
                         */

                        MenuNavigation.list.map((list, index) => {
                            return (
                                <span style={state.selected === list.value ? styles.active : undefined}>
                                    <p className="default" style={{paddingRight: '24px', paddingLeft: '24px', paddingTop: '16px'}} >
                                        <span className='csr-pointer' onClick={() => handleClick(list.value)} style={{fontWeight: 500}}>{list.label}</span>
                                    </p>
                                </span>
                            )
                        })
                    }
                </div>
            </GlobalContainer>
        </Fragment>
    );
};

const styles = {
    wrapper: {
        textAlign: 'center'
    },
    active: {
        color: '#33A0FF'
    }
}

export default TestHeader;