import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Modal, Button } from "antd";

import RegisterForm from "../RegisterFrom/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import RegisterClientForm from "../RegisterClientForm/RegisterClientForm";

import "./style.css";

const Popup = ({ children, className, type, ...props }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showForm = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const classNames = classnames(
    "Popup",
    {
      [`popup--${type}`]: Boolean(type)
    },
    className
  );

  return (
    <>
      {(type === "registerForm" && (
        <>
          <Button type="text" onClick={showForm}>
            Open Register Artist Form
          </Button>
          <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            className={classNames}
            footer={null}
            {...props}
          >
            <RegisterForm mode="registration" />
          </Modal>
        </>
      )) ||
        (type === "loginForm" && (
          <>
            <Button type="text" onClick={showForm}>
              Open Register Form
            </Button>
            <Modal
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              className={classNames}
              footer={null}
              {...props}
            >
              <RegisterClientForm mode="registration" />
            </Modal>
          </>
        )) ||
        (type === "registerClientForm" && (
          <>
            <Button type="text" onClick={showForm}>
              Open Login Form
            </Button>
            <Modal
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              className={classNames}
              footer={null}
              {...props}
            >
              <LoginForm mode="login" />
            </Modal>
          </>
        ))}
    </>
  );
};
Popup.propTypes = {
  className: PropTypes.string
};

export default Popup;
