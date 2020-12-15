import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

import './style.css';

const AboutTopProfile = ({ ...props }) =>{

    return(
        <section className='about'  {...props}>
            <div className="container" >
                <div className="smallContainer">
                    <div className="line">
                        <div className="btnCategory"><span>Category</span></div>
                        <div className="btnCategory"><span>Category</span></div>
                        <div className="btnCategory"><span>Category</span></div>
                        <div className="btnCategory"><span>Category</span></div>
                        <div className="btnCategory"><span>Category</span></div>
                    </div>
                    <div className="text">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Morbi enim nunc faucibus a pellentesque sit. Est sit amet facilisis magna etiam tempor orci eu lobortis. </p>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default AboutTopProfile;