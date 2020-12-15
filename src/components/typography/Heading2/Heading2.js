import React from 'react';

import './style.css';

const H2 = ({children, ...props }) =>{

    return(
        <h2 {...props}>
            {children}
        </h2>
    )
};

export default H2;