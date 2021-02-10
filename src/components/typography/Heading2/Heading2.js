import React from 'react';
import classnames from 'classnames';

import './Heading2.scss';

const Heading2 = ({children, className, align, ...props }) =>{

    const classNames = classnames(
        'h2',
        {
            [`h2__align--${align}`]:Boolean(align),
        },
        className
    );
    return(
        <h2 className={classNames} {...props}>
            {children}
        </h2>
    )
};

export default Heading2;