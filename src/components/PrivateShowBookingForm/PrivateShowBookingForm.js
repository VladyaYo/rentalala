import React from "react";
import { Form, Input, Button, Radio } from 'antd';

import './PrivateShowBookingForm.scss'
const PrivateShowBookingForm = () => {
        const [form] = Form.useForm();

    return (
        <div className="privateShowBookingForm">
            <Form
                form={form}
                layout="vertical"


            >
                <Form.Item label="Pick a time" name="requiredMark">
                    <Radio.Group className="timePiker" label="">
                        <Radio.Button value="07:00">07:00</Radio.Button>
                        <Radio.Button disabled value="08:00">08:00</Radio.Button>
                        <Radio.Button value="09:00">09:00</Radio.Button>
                        <Radio.Button value="10:00">10:00</Radio.Button>
                        <Radio.Button value="11:00">11:00</Radio.Button>
                        <Radio.Button disabled value="12:00">12:00</Radio.Button>
                        <Radio.Button value="13:00">13:00</Radio.Button>
                        <Radio.Button value="14:00">14:00</Radio.Button>
                        <Radio.Button value="15:00">15:00</Radio.Button>
                        <Radio.Button value="16:00">16:00</Radio.Button>
                        <Radio.Button value="17:00">17:00</Radio.Button>
                        <Radio.Button disabled value="18:00">18:00</Radio.Button>
                        <Radio.Button value="19:00">19:00</Radio.Button>
                        <Radio.Button value="20:00">20:00</Radio.Button>
                        <Radio.Button value="21:00">21:00</Radio.Button><Radio.Button value="22:00">22:00</Radio.Button>
                        <Radio.Button value="23:00">23:00</Radio.Button>
                        <Radio.Button value="24:00">24:00</Radio.Button>
                    </Radio.Group>

                </Form.Item>
                <h4 className="timeFrom">From <span>14:00</span> to <span>14:45</span></h4>
                <Radio.Group >
                    
                </Radio.Group>
            </Form>
        </div>
    );
};

export default PrivateShowBookingForm;