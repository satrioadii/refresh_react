import React, { Fragment } from 'react';
import GlobalRatingRender from '../../../../global/rating';
import Spacer from '../../../../global/space';
import PhotoMac from '../../../../../asset/images/content1@2x.png';

const GenerateCardProduct = (props) => {
    const {children, imgsrc, name, rating, price, realprice } = props;

    return (
        <Fragment>
            <div style={{padding: '30px 15px', margin: '15px', display: 'flex', justifyContent: 'center', textAlign: 'center', border: '3px solid #F6F7F8', borderRadius: '4px', maxWidth: '100%', flexGrow: 1}}>
                <div style={{width: '227px'}}>
                    
                    {/* Image definition */}
                    <img src={imgsrc} width='100%'/>
                    <Spacer b={48}/>
                    
                    {/* Name of product */}
                    <p className='default' style={{fontWeight: 500}}>{name}</p>
                    <Spacer b={29}/>

                    {/* Render rating */}
                    <GlobalRatingRender rate={rating}/>
                    <Spacer b={12.5}/>

                    {/* Render price */}
                    <span style={{display: 'flex', justifyContent: 'center'}}>
                        <p className='default' style={{color: '#FF4858'}}>{price}</p>
                        <Spacer r={10}/>
                        <p className='default txt-muted' style={{textDecoration: 'line-through'}}>{realprice}</p>
                    </span>
                </div>
            </div>
        </Fragment>
    )
};

const TestMainLayoutProductList = () => {
    return (
        <div className="flex flex-wrap justify-around xl:justify-start" style={{marginLeft: '-15px', marginRight: '-15px'}}>
            {
                [1,2,3,4,5].map((val, index) => {
                    return (
                        <div key={`test_product_list_${index}`}>
                            <GenerateCardProduct imgsrc={PhotoMac} name='Apple Macbook Pro' rating={4.5} price='$499' realprice='$599'/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TestMainLayoutProductList;