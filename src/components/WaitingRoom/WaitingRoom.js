import React  from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Card, Button } from 'antd';

import './WaitingRoom.scss'

import Heading2 from "../typography/Heading2/Heading2";
import VideoWaitingFrame from "../VideoWaitingFrame/VideoWaitingFrame";
import SpeakersCheck from "../SpeakersCheck/SpeakersCheck";
import MicrophoneCheck from "../MicrophoneCheck/MicrophoneCheck";

const WaitingRoom = () => {
    return (
        <section className="waitingRoom">
            <Heading2 className="heading">Waiting room</Heading2>
            <Card
                className="mainCard"
            >
                <VideoWaitingFrame/>
                <MicrophoneCheck/>
                <SpeakersCheck/>
                <Button className="btnStart" type="primary" block>
                    Start event
                </Button>
            </Card>
        </section>
    );
};
export default WaitingRoom;