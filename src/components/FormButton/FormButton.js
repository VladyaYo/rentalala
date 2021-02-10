import React, { useState } from "react";
// import PropTypes from "prop-types";
import classnames from "classnames";
import { Form, Button } from "antd";

import "./FormButton.scss";
const FormButton = ({ children, mode, className, ...props }) => {
  const classNames = classnames(
    "button",
    {
        [`button--${mode}`]:Boolean(mode),
    },
    className
  );

  return (
      <Form.Item
          className={classNames}
      >
          <Button type="primary" htmlType="submit">
              {children}
          </Button>
      </Form.Item>
  );
};
export default FormButton;
