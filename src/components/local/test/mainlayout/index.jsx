import React, { Fragment } from 'react';
import GlobalContainer from '../../../global/container';
import Spacer from '../../../global/space';
import TestMainLayoutDetailAccesories from './detail/accesories';
import TestMainLayoutDetailBrand from './detail/brand';
import TestMainLayoutDetailColor from './detail/color';
import TestMainLayoutDetailMore from './detail/more';
import TestMainLayoutDetailPrices from './detail/prices';
import TestMainLayoutProductFilter from './product/filter';
import TestMainLayoutProductHeader from './product/header';
import TestMainLayoutProductList from './product/list';
import TestMainLayoutProductPaging from './product/paging';

const TestMainLayout = () => {
    return (
        <Fragment>
            <GlobalContainer>
                <div style={styles.wrapper}>
                    <div className='lg:block hidden' style={styles.listdetail}>
                        <TestMainLayoutDetailAccesories />
                        <Spacer b={30}/>

                        <TestMainLayoutDetailPrices />
                        <Spacer b={30}/>

                        <TestMainLayoutDetailColor />
                        <Spacer b={30}/>

                        <TestMainLayoutDetailBrand />
                        <Spacer b={30} />

                        <TestMainLayoutDetailMore />
                    </div>
                    <div className='md:block hidden'><Spacer r={30}/></div>
                    <div style={styles.listproduct}>
                        <TestMainLayoutProductHeader />
                        <Spacer b={26}/>

                        <TestMainLayoutProductFilter />
                        <Spacer b={11}/>

                        <TestMainLayoutProductList />
                        <Spacer b={40}/>

                        <TestMainLayoutProductPaging />

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