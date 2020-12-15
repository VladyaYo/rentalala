import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Form } from 'antd';

import './style.css'


const ClientProfile = ({ className, mode }) => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };


    const classNames = classnames(
        'artists',
        {
            [`form--${mode}`]:Boolean(mode),
        },
        className
    );
    return (
      <>
          <h2>heading</h2>
      </>
    );
};
export default ClientProfile;