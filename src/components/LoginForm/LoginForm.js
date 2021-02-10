import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Form } from 'antd';

import './LoginForm.scss'

import InputEmail from "../inputs/InputEmail/InputEmail";
import InputPhone from "../inputs/InputPhone/InputPhone";
import FormButton from "../FormButton/FormButton";
import Heading2 from "../typography/Heading2/Heading2";
import InputPassLogin from "../inputs/InputPassLogin/InputPassLogin";

const LoginForm = ({ className, mode }) => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    const [form] = Form.useForm();


    const classNames = classnames(
        'form',
        {
            [`form--${mode}`]:Boolean(mode),
        },
        className
    );
    return (
        <Form
            className={classNames}
            form={form}
            layout="vertical"
        >
            <Heading2 align="center">Log In</Heading2>
            <InputEmail mode="email"/>
            <InputPassLogin mode="password"/>
            <FormButton mode="submit" >Log In</FormButton>

        </Form>
    );
};
LoginForm.deafultProps = {
    mode:'login',
    className: '',
};
LoginForm.propTypes = {
    mode: PropTypes.oneOf(['login','registration']),
    className: PropTypes.string,
};
export default LoginForm;