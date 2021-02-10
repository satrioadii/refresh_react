import React from 'react';

const Spacer = ({t = 0, r = 0, b = 0, l = 0, xstyle = undefined}) => {
    return (
        <div style={{
            margin: `${t}px ${r}px ${b}px ${l}px`, ...xstyle
        }}/>
    );
};

export default Spacer;