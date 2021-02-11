import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import GlobalContainer from '../../../global/container';

import logosvg from "../../../../asset/images/logo.svg"
import Spacer from '../../../global/space';
import MenuNavigation from '../../../../resources/menunavigation';

const TestHeader = () => {

    const dispatch = useDispatch();

    const localSelected = localStorage.getItem('navigation');

    const [state, setState] = useState({
        selected: localSelected ? localSelected : MenuNavigation.list[0].value
    });

    const handleClick = (list) => {
        setState({...state, selected: list.value});
        localStorage.setItem('navigation', list.value);
        dispatch({
            type: 'CHANGE_SUBMENU',
            value: list.label
        });
    };

    return (
        <Fragment>
            <GlobalContainer>
                <div className='flex justify-center'>
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
                                <span key={`menunavigation_${index}`} style={state.selected === list.value ? styles.active : undefined}>
                                    <p className="default" style={{paddingRight: '24px', paddingLeft: '24px', paddingTop: '16px'}} >
                                        <span className='csr-pointer' onClick={() => handleClick(list)} style={{fontWeight: 500}}>{list.label}</span>
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
        display: 'flex',
        justtifyContent: 'center'
    },
    active: {
        color: '#33A0FF'
    }
}

export default TestHeader;