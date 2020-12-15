import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Form } from 'antd';

import './style.css'

import InputText from "../inputs/InputText/InputText";
import InputEmail from "../inputs/InputEmail/InputEmail";
import InputPhone from "../inputs/InputPhone/InputPhone";
import InputPassword from "../inputs/InputPassword/InputPassword";
import FormButton from "../Button/FormButton";
import Heading2 from "../typography/Heading2/Heading2";

const RegisterClientForm = ({ className, mode }) => {
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
            <Heading2 align="center">Register as Client</Heading2>
            <InputText name="Full Name" mode="text"/>
            <InputEmail mode="email"/>
            <InputPhone mode="phone"/>
            <InputPassword mode="password" confirm={true} />
            <FormButton mode="submit" >Complete all info now</FormButton>
            <FormButton mode="submit" >Complete all info later</FormButton>
        </Form>
    );
};
RegisterClientForm.deafultProps = {
    mode:'registration',
    className: '',
};
RegisterClientForm.propTypes = {
    mode: PropTypes.oneOf(['login','registration']),
    className: PropTypes.string,
};
export default RegisterClientForm;