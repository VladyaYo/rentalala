import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import RegisterForm from "../RegisterFrom/RegisterForm";
import LoginForm from "../LoginForm/LoginForm";
import RegisterClientForm from "../RegisterClientForm/RegisterClientForm";

import "./style.css";


const Popup = ({ children, className, type, ...props }) => {

    const classNames = classnames(
        "Popup",
        {
            [`popup--${type}`]:Boolean(type),
        },
        className
    );

    return (
        <div className={classNames} {...props}>
            { type === 'registerForm' &&  <RegisterForm mode="registration" /> || type === "loginForm" && <LoginForm mode="login" /> || type === 'registerClientForm' &&  <RegisterClientForm mode="registration" />}

        </div>
    );
};
Popup.propTypes = {
    className: PropTypes.string,
};

export default Popup;