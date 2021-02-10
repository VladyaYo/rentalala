import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./InputPassLogin.scss";
import {Form, Input} from "antd";

const InputPassLogin = ({ children, name, mode, className, ...props }) => {
    const classNames = classnames(
        "input",
        {
            [`input--${mode}`]: Boolean(mode)
        },
        className
    );

    return (
            <Form.Item
                className={classNames}
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
    );
};
export default InputPassLogin;
