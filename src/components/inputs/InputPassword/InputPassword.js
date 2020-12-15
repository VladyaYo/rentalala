import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./style.css";
import {Form, Input, Select} from "antd";

const InputPassword = ({ children, confirm, name, mode, className, ...props }) => {
  const classNames = classnames(
    "input",
    {
      [`input--${mode}`]: Boolean(mode)
    },
    className
  );

  return (
      <React.Fragment>
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
              hasFeedback
          >
              <Input.Password />
          </Form.Item>
          <Form.Item
              className={classNames}
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                  {
                      required: true,
                      message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                      validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                          }
                          return Promise.reject('The two passwords that you entered do not match!');
                      },
                  }),
              ]}
          >
              <Input.Password />
          </Form.Item>
      </React.Fragment>
  );
};
export default InputPassword;
