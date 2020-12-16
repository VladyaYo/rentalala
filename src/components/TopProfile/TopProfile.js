import React from 'react';
// import PropTypes from 'prop-types';
import { Rate, Upload, message, Button } from 'antd';

import { UploadOutlined } from '@ant-design/icons';



import './style.css';
import Heading2 from "../typography/Heading2/Heading2";

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const TopProfile = () => (
    <section className="topProfile">
        <div className="container">
            <div className="side user">
                <div className="photo">
                    <img src="" alt=""/>
                </div>
                <div className="user">
                    <div className="text">
                        <Heading2>Name Surname</Heading2>
                        <div className="line">
                            <Rate className="rate" allowHalf disabled defaultValue={4.5} />
                            <p className="rate">(4.5/5)</p>
                        </div>
                        <p><span>Types: </span>type 1, type 2</p>
                        <p><span>Country: </span>USA, New York, GMT -5</p>
                        <p><span>Local time: </span>4 am</p>
                        <br/>
                        <p><span>Average income: </span>$ 8 000 / month</p>
                    </div>
                </div>
            </div>
            <div className="side">
                <div className="line">
                    <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Upload image</Button>
                    </Upload>
                    <div className="calendar">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 0V1.25H0.25V28.75H27.75V1.25H22.75V0H20.25V1.25H7.75V0H5.25ZM2.75 3.75H5.25V5H7.75V3.75H20.25V5H22.75V3.75H25.25V6.25H2.75V3.75ZM2.75 8.75H25.25V26.25H2.75V8.75ZM10.25 11.25V13.75H12.75V11.25H10.25ZM15.25 11.25V13.75H17.75V11.25H15.25ZM20.25 11.25V13.75H22.75V11.25H20.25ZM5.25 16.25V18.75H7.75V16.25H5.25ZM10.25 16.25V18.75H12.75V16.25H10.25ZM15.25 16.25V18.75H17.75V16.25H15.25ZM20.25 16.25V18.75H22.75V16.25H20.25ZM5.25 21.25V23.75H7.75V21.25H5.25ZM10.25 21.25V23.75H12.75V21.25H10.25ZM15.25 21.25V23.75H17.75V21.25H15.25Z" fill="#AAAAAA"/>
                        </svg>
                    </div>
                </div>
                <div className="stats">
                    <div className="line">
                        <div className="item">
                            <h3>200k</h3>
                            <p>Subscribers</p>
                        </div>
                        <div className="item">
                            <h3>120</h3>
                            <p>Total events</p>
                        </div>
                    </div>
                </div>
                    <Button type="primary">My subscribers</Button>
                    <Button type="primary">My events</Button>
            </div>
        </div>
    </section>
);


export default TopProfile;