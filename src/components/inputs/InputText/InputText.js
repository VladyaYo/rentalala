import React, { useState } from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';
import {Form, Input} from "antd";

const InputName = ({children, mode, className, ...props }) =>{
    const classNames = classnames(
        'input',
        {
            [`input--${mode}`]:Boolean(mode),
        },
        className
    );

    const mode =

    return(
        <Form.Item
            name="Full Name"
            label={
                <span>Full Name</span>
            }
            rules={[{ required: true, message: 'Please input your Full Name!', whitespace: true }]}
        >
            <Input />
        </Form.Item>
    )

};
InputName.deafultProps = {
    mode:'primary',
    className: '',
};
InputName.propTypes = {
    counter: PropTypes.number,
    mode: PropTypes.oneOf(['primary','success','danger']),
    className: PropTypes.string,
};
export default InputName;