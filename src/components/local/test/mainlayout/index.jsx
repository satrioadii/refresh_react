import React, { Fragment } from 'react';
import GlobalContainer from '../../../global/container';
import Spacer from '../../../global/space';
import TestMainLayoutDetailAccesories from './detail/accesories';
import TestMainLayoutProductHeader from './product/header';

const TestMainLayout = () => {
    return (
        <Fragment>
            <GlobalContainer>
                <div style={styles.wrapper}>
                    <div style={styles.listdetail}>
                        <TestMainLayoutDetailAccesories />
                    </div>
                    <Spacer r={30}/>
                    <div style={styles.listproduct}>
                        <TestMainLayoutProductHeader />
                    </div>
                </div>
            </GlobalContainer>
        </Fragment>
    )
}

const styles = {
    wrapper: {
        display: 'flex'
    },
    listdetail: {
        width: '270px'
    },
    listproduct: {
        flex: 1
    }
};

export default TestMainLayout;