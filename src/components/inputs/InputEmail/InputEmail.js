import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./style.css";
import { Form, Input } from "antd";

const InputEmail = ({ children, name, mode, className, ...props }) => {
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
      name="email"
      label={<span> E-mail </span>}
      rules={[
        {
          type: "email",
          message: "The input is not valid E-mail!"
        },
        {
          required: true,
          message: "Please input your E-mail!"
        }
      ]}
    >
      <Input />
    </Form.Item>
  );
};
export default InputEmail;
