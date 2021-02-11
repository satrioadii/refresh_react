import React, { Fragment, useState } from 'react';
import Spacer from '../../../../global/space';
import InputRange from 'react-input-range';

const TestMainLayoutDetailPrices = () => {
    
    const localSelect = localStorage.getItem('prices'); 

    const [state, setState] = useState({
        value: localSelect ? JSON.parse(localSelect) : {min: 0, max: 30}
    });

    const handleChange = (range) => {
        setState({...state, value: range})
        localStorage.setItem('prices', JSON.stringify(range));
    }
    
    return (
        <Fragment>
            <div style={styles.wrapper}>
                <p className="default txts-detail-header">PRICES</p>
                <Spacer b={25}/>

                <div className='flex justify-between'>
                    <p className='default'>Ranger:</p>
                    <p>${state.value.min} - ${state.value.max}</p>
                </div>

                <Spacer b={30}/>

                {/* Slider */}
                <div className='slider'>
                    <InputRange
                    minValue={0}
                    maxValue={30}
                    step={1}
                    onChange={handleChange}
                    value={state.value}
                    />
                </div>
                
            </div>
        </Fragment>
    );
};

const styles = {
    wrapper: {
        borderRadius: '4px',
        backgroundColor: '#F6F7F8',
        padding: '20px'
    },
    muted: {
        opacity: 0.35
    }
};

export default TestMainLayoutDetailPrices;