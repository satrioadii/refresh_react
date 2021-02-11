import React, { Fragment, useState } from 'react';
import Spacer from '../../../../global/space';
import Icon from '@material-ui/core/Icon'

const TestMainLayoutProductFilter = () => {

    const [state, setState] = useState({mode: 'grid'});

    return (
        <Fragment>
            <div className='md:flex hidden' style={styles.wrapper}>
                {/* left side */}
                <div style={styles.leftside}>
                    {/* Total Items */}
                    <p className='default'>13 Items</p>
                    <Spacer r={40}/>

                    {/* Sort By */}
                    <p className='default'>Sort By</p>
                    <Spacer r={15}/>
                    <p className="default csr-pointer" style={{display: 'flex'}}>
                        <span style={{marginRight: '10px'}}>Name</span> 
                        <span style={{fontSize: '10px', verticalAlign: 'middle'}}>&#9660;</span>
                    </p>
                    
                    <Spacer r={40}/>

                    {/* Show per-Page */}
                    <p className='default'>Show</p>
                    <Spacer r={15}/>
                    <p className="default csr-pointer" style={{display: 'flex'}}>
                        <span style={{marginRight: '10px'}}>12</span> 
                        <span style={{fontSize: '10px', verticalAlign: 'middle'}}>&#9660;</span>
                    </p>
                </div>

                {/* right side */}
                <div style={styles.rightside}>
                    <Icon className={`icon icon-active csr-pointer`} style={{fontSize: '28px'}}>apps_icon</Icon>
                    <Icon className={`icon icon-muted csr-pointer`} style={{fontSize: '28px'}}>menu</Icon>
                </div>
            </div>
        </Fragment>
    );

};

const styles = {
    wrapper: {
        padding: '20px 5px 20px 20px',
        backgroundColor: '#F6F7F8',
        borderRadius: '4px'
    },
    leftside: {
        flex: 1,
        display: 'flex'
    },
    rightside: {
        display: 'flex',
        position: 'relative'
    }
}

export default TestMainLayoutProductFilter;