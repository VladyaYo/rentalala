import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./style.css";
import { Form, Input } from "antd";

const Button = ({ children, name, mode, className, ...props }) => {
  const classNames = classnames(
    "input",
    {
      [`input--${mode}`]: Boolean(mode)
    },
    className
  );

  return (
      <Form.Item >
          <Button type="primary" htmlType="submit">
              {children}
          </Button>
      </Form.Item>
  );
};
export default Button;
