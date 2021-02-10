import React from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Form, Input} from "antd";

import './InputText.scss';
const InputText = ({children, name, mode, className, ...props }) =>{
    const classNames = classnames(
        'input',
        {
            [`input--${mode}`]:Boolean(mode),
        },
        className
    );

    return(
        <Form.Item
            className={classNames}
            name={name}
            label={<span>{name}</span>}
            rules={[{ required: true, message: `Please input your ${name}!`, whitespace: true }]}
        >
            <Input />
        </Form.Item>
    )

};
InputText.deafultProps = {
    mode:'primary',
    name:'Full Name',
    className: '',
};
InputText.propTypes = {
    counter: PropTypes.number,
    mode: PropTypes.oneOf(['primary','success','danger', 'text']),
    name: PropTypes.oneOf(['Full Name', 'Stage Name']),
    className: PropTypes.string,
};
export default InputText;