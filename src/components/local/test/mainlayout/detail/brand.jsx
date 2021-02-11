import React, { Fragment, useState } from 'react';
import Brand from '../../../../../resources/brand';
import Spacer from '../../../../global/space';

const TestMainLayoutDetailBrand = () => {
    
    const localSelect = localStorage.getItem('brand'); 

    const [state, setState] = useState({
        selected: localSelect ? localSelect : Brand.list[0].value
    });

    const handleClick = (val) => {
        setState({...state, selected: val});
        localStorage.setItem('brand', val);
    };
    
    return (
        <Fragment>
            <div style={styles.wrapper}>
                <p className="default txts-detail-header">BRAND</p>
                <Spacer b={18}/>
                {
                    /**
                     * Render brand
                     */

                    Brand.list.map((item, index) => {
                        return (
                            <Fragment key={`brand_${item.value}_${index}`}>
                                <div style={{paddingTop: '12px', paddingBottom: '12px'}}>
                                    <div className={`csr-pointer default txt-semibold`} style={{display: 'flex'}} onClick={() => handleClick(item.value)}>
                                        <p className={`default ${item.value === state.selected ? 'txt-active' : ''}`} style={{flex: 1}}>
                                            {item.label}
                                        </p>
                                        <p className={`default ${item.value === state.selected ? 'txt-active' : ''}`} style={item.value === state.selected ? undefined : styles.muted}>
                                            {item.total}
                                        </p>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    })
                }
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

export default TestMainLayoutDetailBrand;