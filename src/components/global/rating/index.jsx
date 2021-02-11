import { Icon } from '@material-ui/core';
import React from 'react';

const GlobalRatingRender = (props) => {
    
    const {rate} = props;

    const floorValue = Math.floor(rate);

    const arrayOfStars = [];

    for (let i = 1; i <= 5; i++) {
        
        /**
         * 3 condition exist. Respectively:
         *  - to print full yellow star
         *  - to print half yellow star
         *  - to print muted star
         */


        if (i <= floorValue) {
            arrayOfStars.push(
                <Icon key={`ratingrender_${i}`} style={{color: '#FFC600', fontSize: '12px', padding: '0px 2px'}}>star</Icon>
            );
        } else if (i - floorValue < 1 && i - floorValue >= 0) {
            arrayOfStars.push(
                <Icon key={`ratingrender_${i}`} style={{color: '#FFC600', fontSize: '12px', padding: '0px 2px'}}>star_half</Icon>
            );
        } else {
            arrayOfStars.push(
                <Icon key={`ratingrender_${i}`} style={{color: '#C1C8CE', fontSize: '12px', padding: '0px 2px'}}>star</Icon>
            );
        };
    };

    return arrayOfStars;
}

export default GlobalRatingRender;
