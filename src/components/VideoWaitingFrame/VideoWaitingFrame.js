import React  from 'react';
import { DownOutlined } from '@ant-design/icons';

import { Card, Menu, Dropdown } from 'antd';
import examplePhoto from '../../Images/exemple_ph.jpg'

import './style.css'

const VideoWaitingFrame = () => {
    const cameraMenu = (
        <Menu>
            <Menu.Item key="0">
                <a href="#">HD - camera (built-in)</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="#">FullHD - camera (Sony-SH-3400)</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">Hide video</Menu.Item>
        </Menu>
    );

    return (
            <div className="inputVideoBlock">
                <h5>Video</h5>
                <div className="line">
                    <h3>Camera</h3>
                    <Dropdown overlay={cameraMenu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            HD - camera (built-in) <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
                <div className="video">
                    <img className="videoFrame" src={examplePhoto} alt=""/>
                </div>
                <div className="background">
                    <h3>Choose background</h3>
                    <div className="bgChoice">
                        <div className="item"><img src={examplePhoto} alt=""/></div>
                        <div className="item"><img src={examplePhoto} alt=""/></div>
                        <div className="item"><img src={examplePhoto} alt=""/></div>
                        <div className="item"><img src={examplePhoto} alt=""/></div>
                        <div className="item"><img src={examplePhoto} alt=""/></div>
                        <div className="item"><img src={examplePhoto} alt=""/></div>
                    </div>
                </div>
            </div>
    );
};
export default VideoWaitingFrame;