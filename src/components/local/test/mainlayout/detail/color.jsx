import React, { Fragment, useState } from 'react';
import Color from '../../../../../resources/color';
import Spacer from '../../../../global/space';

const TestMainLayoutDetailColor = () => {
    
    const localSelect = localStorage.getItem('color'); 

    const [state, setState] = useState({
        value: localSelect ? localSelect : Color.list[0].value
    });

    const handleChange = (color) => {
        setState({...state, value: color});
        localStorage.setItem('color', color);
    }
    
    return (
        <Fragment>
            <div style={styles.wrapper}>
                <p className="default txts-detail-header">COLOR</p>
                <Spacer b={25}/>

                <div className='flex flex-wrap justify-between items-center'>
                    {
                        /**
                         * Render colors
                         */

                        Color.list.map((item, index) => {

                            /**
                             * Condition if the value of color is match 
                             */

                            if (item.value === state.value) {
                                return (
                                    <div className='flex justify-center items-center csr-pointer' style={{width: '22px', height: '22px', borderRadius: '12px', backgroundColor: '#FFFFFF', border: `2px solid ${item.value}`}} >
                                        <div style={{width: '16px', height: '16px', borderRadius: '8px', backgroundColor: item.value}}>
                                        

                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <div className='csr-pointer' style={{width: '16px', height: '16px', borderRadius: '8px', backgroundColor: item.value, opacity: 1}} onClick={() => handleChange(item.value)}>

                                </div>
                            )
                        })
                    }
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

export default TestMainLayoutDetailColor;