import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./style.css";
import {Form, Input, Select} from "antd";

const InputPhone = ({ children, name, mode, className, ...props }) => {
  const classNames = classnames(
    "input",
    {
      [`input--${mode}`]: Boolean(mode)
    },
    className
  );

    const { Option } = Select;

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 80 }}>
                <Option value="1">+1</Option>
                <Option value="3 80">+3 80</Option>
            </Select>
        </Form.Item>
    );

  return (
      <Form.Item
          className={classNames}
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
  );
};
export default InputPhone;
