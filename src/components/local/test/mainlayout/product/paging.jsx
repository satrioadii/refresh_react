import React, { Fragment, useState } from 'react';

const TestMainLayoutProductPaging = () => {

    const savedState = localStorage.getItem('page');
    const [state, setState] = useState({page: savedState ? savedState : 1});

    const changePage = (val) => {
        setState({...state, page: val});
        localStorage.setItem('page', val);
    };

    return (
        <Fragment>
            <div style={styles.wrapper}>
                {
                    /**
                     * Render pagination
                     */

                    [1, 2, 3, 4, 5].map((val, index) => {

                        let defaultClass = 'txts-paging';

                        if (val === state.page) {
                            defaultClass = 'txts-paging-active';
                        };

                        return (
                            <div key={`maintenance_page_${index}`} className='inline-block csr-pointer' onClick={() => changePage(val)}>
                                <p className={`default ${defaultClass}`} style={{padding: '17px 23px'}}>{val}</p>
                            </div>
                        )
                    })
                }
                
            </div>
        </Fragment>
    );
};

const styles = {
    wrapper: {
        backgroundColor: '#FAFAFB',
        borderRadius: '4px',
        textAlign: 'center'
    }
};

export default TestMainLayoutProductPaging;