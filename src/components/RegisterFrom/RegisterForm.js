import React, { useState } from 'react';
import { Form, Input, Button, Radio, Tooltip, Select } from 'antd';

import { QuestionCircleOutlined } from '@ant-design/icons';
import { InfoCircleOutlined } from '@ant-design/icons';

const RegisterForm = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    const [form] = Form.useForm();

    const { Option } = Select;

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Form
            form={form}
            layout="vertical"
        >
            <Form.Item
                name="Full Name"
                label={
                    <span>Full Name</span>
                }
                rules={[{ required: true, message: 'Please input your Full Name!', whitespace: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Stage Name"
                label={
                    <span>Stage Name</span>
                }
                rules={[{ required: true, message: 'Please input your Stage Name!', whitespace: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
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
            <Form.Item>
                <Button type="primary">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;