import { CardActions } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import Accesories from '../../../../../resources/accesories';
import Spacer from '../../../../global/space';

const TestMainLayoutDetailAccesories = () => {
    
    const dispatch = useDispatch();

    const localSelect = localStorage.getItem('accesories'); 

    const [state, setState] = useState({
        selected: localSelect ? localSelect : Accesories.list[0].value
    });

    const handleClick = (item) => {
        setState({...state, selected: item.value});
        localStorage.setItem('accesories', item.value);

        dispatch({
            type: 'CHANGE_SUBSUBMENU',
            value: item.label
        })
    };
    
    return (
        <Fragment>
            <div style={styles.wrapper}>
                <p className="default txts-detail-header">ACCESORIES</p>
                <Spacer b={18}/>
                {
                    /**
                     * Render accesories
                     */

                    Accesories.list.map((item, index) => {
                        return (
                            <Fragment key={`accesories_${item.value}_${index}`}>
                                <div style={{paddingTop: '12px', paddingBottom: '12px'}}>
                                    <div className={`csr-pointer default txt-semibold`} style={{display: 'flex'}} onClick={() => handleClick(item)}>
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

export default TestMainLayoutDetailAccesories;